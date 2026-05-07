export interface Email {
  id: string;
  from: string;
  subject: string;
  received_at: string;
  body: string;
}

export const EMAILS: Email[] = [
  {
    "id": "1",
    "from": "anna.mueller@beispielfirma.de",
    "subject": "Frage zu eurem Enterprise-Tarif",
    "received_at": "2026-05-07T07:14:00Z",
    "body": "Hallo,\n\nwir evaluieren gerade Tools für unser 40-köpfiges Team und euer Produkt steht in der engeren Auswahl. Auf eurer Website finde ich keine konkreten Preise für den Enterprise-Tarif. Könnt ihr mir einen Richtwert nennen oder einen Termin für ein kurzes Gespräch vorschlagen?\n\nViele Grüße\nAnna Müller\nHead of Operations, Beispielfirma GmbH"
  },
  {
    "id": "2",
    "from": "security-alert@paypa1-secure.com",
    "subject": "URGENT: Your account has been limited",
    "received_at": "2026-05-07T03:42:00Z",
    "body": "Dear Customer,\n\nWe detected unusual activity on your account. To prevent permanent suspension, please verify your identity within 24 hours by clicking the link below:\n\nhttp://paypa1-verify.tk/login\n\nFailure to act will result in account closure and loss of funds.\n\nPayPaI Security Team"
  },
  {
    "id": "3",
    "from": "newsletter@techweekly.de",
    "subject": "TechWeekly #143 – KI-Coding-Tools im Vergleich",
    "received_at": "2026-05-07T06:00:00Z",
    "body": "Hallo,\n\nin der Ausgabe diese Woche:\n\n- Cursor vs. Claude Code: Welches Tool für welchen Workflow?\n- Llama 4: Erste Eindrücke aus der Praxis\n- Job-Markt-Update: KI-Engineers in Deutschland\n\nViel Spaß beim Lesen!\nDein TechWeekly-Team\n\nAbmelden: https://techweekly.de/unsubscribe"
  },
  {
    "id": "4",
    "from": "buchhaltung@hetzner.com",
    "subject": "Ihre Rechnung R-2026-04-8821",
    "received_at": "2026-05-06T22:01:00Z",
    "body": "Sehr geehrter Kunde,\n\nanbei finden Sie Ihre monatliche Rechnung über 247,38 EUR für den Abrechnungszeitraum April 2026. Der Betrag wird am 11.05.2026 per SEPA-Lastschrift eingezogen.\n\nDie Rechnung können Sie auch in Ihrer Konsole unter 'Rechnungen' herunterladen.\n\nMit freundlichen Grüßen\nHetzner Online GmbH"
  },
  {
    "id": "5",
    "from": "lukas@example-team.de",
    "subject": "Kurze Frage zum Deployment heute Nachmittag",
    "received_at": "2026-05-07T07:33:00Z",
    "body": "Moin,\n\nich wollte heute Nachmittag das neue RAG-Modul deployen. Bist du um 14:00 kurz erreichbar, falls beim Rollout etwas hängt? Sollte unkritisch sein, aber ich hätte gern jemanden in der Nähe.\n\nDanke und Grüße\nLukas"
  },
  {
    "id": "6",
    "from": "k.fischer@gmx.de",
    "subject": "Seit 3 Tagen keine Antwort – das ist eine Frechheit!",
    "received_at": "2026-05-07T06:47:00Z",
    "body": "Sehr geehrte Damen und Herren,\n\nich habe am 04.05. eine Anfrage zu einem Defekt an meinem System gestellt und bis heute keine Reaktion bekommen. Mein Geschäftsbetrieb steht praktisch still.\n\nIch erwarte bis heute Abend eine Lösung, sonst werde ich sowohl meinen Anwalt einschalten als auch eine entsprechende Bewertung online hinterlassen.\n\nKlaus Fischer\nFischer Logistik e.K."
  },
  {
    "id": "7",
    "from": "j.smith@growthhackers-pro.io",
    "subject": "Quick question",
    "received_at": "2026-05-07T05:12:00Z",
    "body": "Hi,\n\nNoticed your company has been growing nicely. We help B2B SaaS companies like yours scale outbound by 3-5x in 90 days using AI-driven prospecting.\n\nWorth a 15-min chat next week? I have slots Tuesday and Thursday.\n\nBest,\nJason Smith\nGrowthHackers Pro"
  },
  {
    "id": "8",
    "from": "no-reply@calendar.google.com",
    "subject": "Eingeladen: Kickoff Q2 Projekt @ Mi., 13. Mai 2026 14:00 – 15:00",
    "received_at": "2026-05-06T16:20:00Z",
    "body": "Du wurdest zu folgendem Termin eingeladen:\n\nKickoff Q2 Projekt\nMittwoch, 13. Mai 2026\n14:00 – 15:00 (Europe/Berlin)\nGoogle Meet: meet.google.com/abc-defg-hij\n\nOrganisator: sabrina@example-client.de\n\nAntworten: Ja / Vielleicht / Nein"
  },
  {
    "id": "9",
    "from": "m.weber@privatperson.de",
    "subject": "Auskunftsersuchen nach Art. 15 DSGVO",
    "received_at": "2026-05-05T14:55:00Z",
    "body": "Sehr geehrte Damen und Herren,\n\nhiermit mache ich von meinem Auskunftsrecht nach Art. 15 DSGVO Gebrauch und bitte um eine vollständige Auskunft über alle bei Ihnen zu meiner Person gespeicherten Daten sowie deren Herkunft, Empfänger und Speicherdauer.\n\nDie Auskunft bitte ich mir innerhalb der gesetzlichen Frist von einem Monat zukommen zu lassen.\n\nMit freundlichen Grüßen\nMartin Weber\nMusterstraße 12, 24340 Eckernförde"
  },
  {
    "id": "10",
    "from": "kanzlei@steuerbuero-nord.de",
    "subject": "Erinnerung: USt-Voranmeldung März fällig am 10.05.",
    "received_at": "2026-05-04T11:05:00Z",
    "body": "Sehr geehrte/r Mandant/in,\n\nzur Erinnerung: Die Umsatzsteuer-Voranmeldung für März 2026 ist am 10.05.2026 fällig. Bitte stellen Sie uns die nötigen Unterlagen bis spätestens 08.05. zur Verfügung, damit wir die Anmeldung fristgerecht einreichen können.\n\nBei Rückfragen stehe ich Ihnen zur Verfügung.\n\nBeste Grüße\nDr. Petra Schneider\nSteuerbüro Nord"
  }
];
