// frontend/src/types.ts
export interface ClassifiedEmail {
  id: string;
  from: string;
  subject: string;
  received_at: string;
  body: string;
  category: string;
  priority: number;
  summary: string;
  action: "antworten" | "archivieren" | "delegieren" | "ignorieren";
  justification: string;
}
