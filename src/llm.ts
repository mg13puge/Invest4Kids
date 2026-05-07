import type { Email } from "./emails";

export interface ClassifiedEmail {
  id: string;
  category: string;
  priority: number;
  summary: string;
  action: "antworten" | "archivieren" | "delegieren" | "ignorieren";
  justification: string;
  from: string;
  subject: string;
  received_at: string;
  body: string;
}

export async function classifyEmails(emails: Email[]): Promise<ClassifiedEmail[]> {
  console.log("🔑 API KEY LOADED:", process.env.OPENROUTER_API_KEY ? "YES" : "NO");

  const systemPrompt = `Du bist ein E-Mail-Klassifizierer...`;

  const payload = {
    model: "qwen2.5-7b-instruct",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: JSON.stringify({ emails }) }
    ]
  };

  console.log("📤 SENDING PAYLOAD:", JSON.stringify(payload, null, 2));

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "Email Triage App"
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log("📥 RAW RESPONSE:", JSON.stringify(data, null, 2));

  // Fehler 1: OpenRouter-Fehler
  if (data.error) {
    throw new Error("OpenRouter error: " + JSON.stringify(data.error));
  }

  // Fehler 2: Keine choices
  if (!data.choices || !data.choices[0]) {
    throw new Error("LLM returned no choices: " + JSON.stringify(data));
  }

  const content = data.choices[0].message?.content;

  // Fehler 3: Kein Content
  if (!content) {
    throw new Error("LLM returned no message content: " + JSON.stringify(data));
  }

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (err) {
    throw new Error("Failed to parse JSON from LLM: " + content);
  }

  if (!parsed.results || !Array.isArray(parsed.results)) {
    throw new Error("LLM returned invalid structure: " + JSON.stringify(parsed));
  }

  const byId = new Map(emails.map(e => [e.id, e]));

  return parsed.results.map((r: any) => ({
    ...byId.get(r.id)!,
    category: r.category,
    priority: Number(r.priority),
    summary: r.summary,
    action: r.action,
    justification: r.justification
  }));
}
