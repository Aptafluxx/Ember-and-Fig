"use client";

import { FormEvent, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export function ReservationForm() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success-panel">
        <div className="success-icon">
          <Check size={25} />
        </div>
        <p className="eyebrow">Request received</p>
        <h2>Your table is on our radar.</h2>
        <p>
          We&apos;ll confirm your reservation shortly. For parties of 8 or more,
          please call us directly.
        </p>
        <button className="button button-dark" onClick={() => setSent(false)}>
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form className="reservation-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">Table for tonight?</span>
        <h2>
          Tell us when
          <br />
          <em>you&apos;re coming.</em>
        </h2>
      </div>

      <div className="field-grid">
        <label className="field">
          <span>Date</span>
          <input
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </label>
        <label className="field">
          <span>Time</span>
          <span className="select-wrap">
            <select required defaultValue="">
              <option value="" disabled>
                Select time
              </option>
              <option>5:30 PM</option>
              <option>6:00 PM</option>
              <option>6:30 PM</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
              <option>8:30 PM</option>
              <option>9:00 PM</option>
            </select>
            <ChevronDown size={17} />
          </span>
        </label>
        <label className="field">
          <span>Party size</span>
          <span className="select-wrap">
            <select required defaultValue="">
              <option value="" disabled>
                Guests
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n}>
                  {n} {n === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
            <ChevronDown size={17} />
          </span>
        </label>
        <label className="field">
          <span>Name</span>
          <input type="text" placeholder="Your name" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" placeholder="you@email.com" required />
        </label>
        <label className="field">
          <span>Phone</span>
          <input type="tel" placeholder="+1 (555) 000-0000" required />
        </label>
      </div>

      <label className="field field-full">
        <span>Anything we should know?</span>
        <textarea
          placeholder="Birthday, dietary notes, seating preference..."
          rows={3}
        />
      </label>

      <button className="button button-accent" type="submit">
        Request reservation <span>↗</span>
      </button>
      <p className="form-note">
        Reservations are held for 15 minutes. For groups of 8+, please contact
        us directly.
      </p>
    </form>
  );
}
