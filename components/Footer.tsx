import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Come hungry.</p>
          <h2>
            Fire makes
            <br />
            <em>the difference.</em>
          </h2>
        </div>
        <div className="footer-cta">
          <p>
            42 Mercer Street
            <br />
            Downtown, New York
          </p>
          <Link className="text-link" href="/reservations">
            Reserve your table <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ember & Fig</span>
        <div className="footer-links">
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={17} />
          </a>
        </div>
        <span>Fire · Field · Season</span>
      </div>
    </footer>
  );
}
