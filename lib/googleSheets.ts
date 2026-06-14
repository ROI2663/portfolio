import { google } from "googleapis";

type ContactRow = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

function normalizePrivateKey(rawKey: string): string {
  return rawKey.replace(/\\n/g, "\n").trim();
}

function getGoogleAuth() {
  const clientEmail = requiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = normalizePrivateKey(requiredEnv("GOOGLE_PRIVATE_KEY"));

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  });
}

function formatJstDate(date: Date): string {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export async function appendContactRow(row: ContactRow): Promise<void> {
  const spreadsheetId = requiredEnv("GOOGLE_SHEET_ID");
  const auth = getGoogleAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [formatJstDate(new Date()), row.name, row.email, row.company || "", row.message],
      ],
    },
  });
}
