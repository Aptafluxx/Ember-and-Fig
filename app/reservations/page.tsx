import { ReservationForm } from "../../components/ReservationForm";

export const metadata = {
  title: "Reservations",
  description: "Reserve a table at Ember & Fig.",
};

export default function ReservationsPage() {
  return (
    <div className="inner-page reservation-page">
      <section className="reservation-intro">
        <div>
          <span className="eyebrow">03 / Reservations</span>
          <h1>
            Your seat
            <br />
            <em>at the table.</em>
          </h1>
        </div>
        <p>
          We&apos;re a small room with a big appetite. Book ahead and we&apos;ll
          have a good spot waiting for you.
        </p>
      </section>
      <ReservationForm />
      <div className="reservation-notes">
        <div>
          <span>01</span>
          <h3>Walk-ins</h3>
          <p>
            A few tables are always held for walk-ins. Come early and ask at the
            bar.
          </p>
        </div>
        <div>
          <span>02</span>
          <h3>Large groups</h3>
          <p>
            For 8 guests or more, call us at +1 (212) 555-0142 so we can arrange
            the room.
          </p>
        </div>
        <div>
          <span>03</span>
          <h3>Dietary needs</h3>
          <p>
            Tell us in your reservation notes. We&apos;ll do our best to make it
            work.
          </p>
        </div>
      </div>
    </div>
  );
}
