export type ContactPayload = {
  name: string;
  email: string;
  type: string;
  message: string;
};

export type ContactResult = { ok: true } | { ok: false; message: string };

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  // Frontend-only mock boundary. Replace this function with an HTTP request later.
  await new Promise((resolve) => window.setTimeout(resolve, 650));
  if (payload.email.trim().toLowerCase() === "error@example.com") {
    return { ok: false, message: "Demo error: the mock submission was rejected." };
  }
  return { ok: true };
}
