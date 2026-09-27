import Image from "next/image";
import { ArrowUpRight, Clock3, MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact & Visit",
  description:
    "Find Ember & Fig, opening hours, contact details and directions.",
};

export default function ContactPage() {
  return (
    <div className="inner-page contact-page">
      <section className="contact-hero">
        <span className="eyebrow">04 / Find us</span>
        <h1>
          Meet us
          <br />
          <em>downtown.</em>
        </h1>
        <p>
          Come hungry. Leave a little smoky. We&apos;re tucked into Mercer
          Street, five minutes from the park.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-image">
          <Image
            src="/images/interior.avif"
            alt="Warm interior of Ember & Fig"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="contact-details">
          <div className="detail">
            <MapPin size={19} />
            <div>
              <span className="detail-label">Address</span>
              <p>
                42 Mercer Street
                <br />
                New York, NY 10013
              </p>
              <a
                href="https://maps.google.com/?q=42+Mercer+Street+New+York"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Get directions <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="detail">
            <Clock3 size={19} />
            <div>
              <span className="detail-label">Hours</span>
              <p>
                Tuesday — Thursday
                <br />
                5:30 PM — 10:00 PM
              </p>
              <p>
                Friday — Saturday
                <br />
                5:30 PM — 11:00 PM
              </p>
              <p>
                Sunday — Monday
                <br />
                Closed
              </p>
            </div>
          </div>
          <div className="detail">
            <Phone size={19} />
            <div>
              <span className="detail-label">Phone</span>
              <p>
                <a href="tel:+12125550142">+1 (212) 555-0142</a>
              </p>
            </div>
          </div>
          <div className="detail">
            <Mail size={19} />
            <div>
              <span className="detail-label">Email</span>
              <p>
                <a href="mailto:hello@emberandfig.com">hello@emberandfig.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-heading">
          <span className="eyebrow">On the map</span>
          <h2>
            42 Mercer.
            <br />
            <em>See you there.</em>
          </h2>
        </div>
        <div className="map-frame">
          <iframe
            title="Map showing Ember & Fig at 42 Mercer Street, New York"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0100%2C40.7200%2C-73.9950%2C40.7300&layer=mapnik&marker=40.7240%2C-74.0040"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
