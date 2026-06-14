export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  honeypot?: string;
};

export type ContactValidationResult =
  | { ok: true; data: Required<Omit<ContactPayload, "honeypot">> }
  | { ok: false; message: string };

const MAX_LENGTH = {
  name: 100,
  email: 254,
  company: 200,
  message: 2000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function toTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(payload: unknown): ContactValidationResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, message: "リクエスト形式が不正です。" };
  }

  const record = payload as Record<string, unknown>;
  const name = toTrimmedString(record.name);
  const email = toTrimmedString(record.email);
  const company = toTrimmedString(record.company);
  const message = toTrimmedString(record.message);
  const honeypot = toTrimmedString(record.honeypot);

  if (honeypot) {
    return { ok: false, message: "無効な送信です。" };
  }

  if (!name || !email || !message) {
    return { ok: false, message: "必須項目を入力してください。" };
  }

  if (!emailPattern.test(email)) {
    return { ok: false, message: "メールアドレスの形式が正しくありません。" };
  }

  if (name.length > MAX_LENGTH.name) {
    return { ok: false, message: "お名前は100文字以内で入力してください。" };
  }

  if (email.length > MAX_LENGTH.email) {
    return { ok: false, message: "メールアドレスが長すぎます。" };
  }

  if (company.length > MAX_LENGTH.company) {
    return { ok: false, message: "会社名・屋号は200文字以内で入力してください。" };
  }

  if (message.length > MAX_LENGTH.message) {
    return { ok: false, message: "お問い合わせ内容は2000文字以内で入力してください。" };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      message,
    },
  };
}
