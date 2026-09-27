import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image">
          <Image
            src="/images/hero.avif"
            alt="Moody restaurant table with seasonal dishes"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 56vw"
          />
          <div className="image-wash" />
        </div>
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>01 — 05</span>
            <span>Live fire / Seasonal kitchen</span>
          </div>
          <h1>
            Food with
            <br />
            <em>a little</em>
            <br />
            smoke.
          </h1>
          <p className="hero-intro">
            A neighborhood restaurant where fire, field and sea meet on the
            plate.
          </p>
          <Link href="/reservations" className="button button-accent">
            Reserve a table <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="hero-bottom">
          <span>42 Mercer St. · New York</span>
          <span className="scroll-hint">
            <ArrowDown size={16} /> Scroll to explore
          </span>
        </div>
      </section>

      <section className="statement section">
        <div className="section-index">/ 01</div>
        <div className="statement-main">
          <p className="eyebrow">The kitchen</p>
          <h2>
            Good ingredients.
            <br />
            <em>Hot coals.</em>
          </h2>
          <p className="large-copy">
            We cook simply, but never simply-minded. The menu follows the
            seasons, our local farmers and whatever the fire wants to do that
            evening.
          </p>
          <Link href="/menu" className="text-link">
            See tonight&apos;s menu <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="statement-aside">
          <span className="vertical-label">EST. 2018 · NYC</span>
          <div className="mini-rule" />
          <p>
            Our food is made for sharing, lingering, and ordering one more
            thing.
          </p>
        </div>
      </section>

      <section className="feature">
        <div className="feature-photo">
          <Image
            src="/images/vegetables.avif"
            alt="Fresh seasonal vegetables"
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </div>
        <div className="feature-copy">
          <span className="feature-number">02</span>
          <p className="eyebrow">From the fire</p>
          <h2>
            Vegetables
            <br />
            <em>aren&apos;t a side.</em>
          </h2>
          <p>
            Whole roasted squash, charred brassicas, smoky aubergine — produce
            gets the same attention as every cut of meat.
          </p>
          <Link href="/menu#vegetables" className="text-link">
            Explore the menu <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="menu-preview section">
        <Reveal className="menu-preview-heading">
          <div>
            <span className="eyebrow">03 / Tonight</span>
            <h2>
              A few things
              <br />
              <em>we&apos;re serving.</em>
            </h2>
          </div>
          <Link href="/menu" className="button button-outline">
            Full menu <ArrowUpRight size={16} />
          </Link>
        </Reveal>
        <div className="dish-list">
          {[
            [
              "Coal-roasted carrots",
              "Whipped labneh · pistachio · mint",
              "$16",
            ],
            [
              "Half chicken al carbón",
              "Green olive jus · preserved lemon",
              "$31",
            ],
            [
              "Black garlic bucatini",
              "Mushroom ragu · pecorino · chili",
              "$24",
            ],
            ["Olive oil cake", "Citrus curd · sea salt · cream", "$13"],
          ].map(([name, desc, price], i) => (
            <Reveal key={name} className="dish-row">
              <span className="dish-num">0{i + 1}</span>
              <div>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
              <strong>{price}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="reservation-band">
        <div>
          <p className="eyebrow">04 / Your table</p>
          <h2>
            Come for dinner.
            <br />
            <em>Stay for another drink.</em>
          </h2>
        </div>
        <Link href="/reservations" className="circle-link">
          Book
          <br />
          now <ArrowUpRight size={19} />
        </Link>
      </section>
    </>
  );
}
