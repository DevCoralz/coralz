"use client";

import { FormEvent, useState } from "react";
import { submitContact } from "@/lib/api/contact";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }
    setState("loading");
    setErrorMessage("");
    const form = new FormData(event.currentTarget);
    const result = await submitContact({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      type: String(form.get("type") ?? "project"),
      message: String(form.get("message") ?? "")
    });
    if (result.ok) {
      setState("success");
      event.currentTarget.reset();
    } else {
      setErrorMessage(result.message);
      setState("error");
    }
  }

  if (state === "success") return (
    <div className="form-state form-state--success" role="status">
      <span className="state-icon" aria-hidden="true">✓</span>
      <p className="eyebrow">Received</p>
      <h3>Message staged successfully.</h3>
      <p>This frontend demo does not send data yet. The submission boundary is ready for a future API.</p>
      <button className="button button--secondary" type="button" onClick={() => setState("idle")}>Send another</button>
    </div>
  );

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label>
        <label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
      </div>
      <label>Inquiry type<select name="type" defaultValue="project"><option value="project">Project inquiry</option><option value="service">Service inquiry</option><option value="business">Business inquiry</option><option value="product">Product inquiry</option></select></label>
      <label>Message<textarea required name="message" rows={7} placeholder="Tell me what you’re building, what is stuck, or what you want to explore." /></label>
      {state === "error" && (
        <div className="form-error" role="alert">
          <strong>Could not stage the message.</strong><span>{errorMessage}</span>
          <button type="button" onClick={() => setState("idle")}>Try again</button>
        </div>
      )}
      <button className="button button--primary" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Preparing…" : "Send inquiry"}
      </button>
      <p className="form-hint">Frontend demo: enter <code>error@example.com</code> to verify the error state.</p>
    </form>
  );
}
