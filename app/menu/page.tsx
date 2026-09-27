import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    id: "appetizers",
    number: "01",
    title: "Small plates",
    note: "To start · To share",
    items: [
      ["Sourdough & ember butter", "Cultured butter · smoked sea salt", "$8"],
      ["Coal-roasted carrots", "Whipped labneh · pistachio · mint", "$16"],
      ["Yellowfin crudo", "Green strawberry · coriander · chile oil", "$19"],
      ["Crispy potatoes", "Tarragon aioli · aged parmesan", "$12"],
    ],
  },
  {
    id: "mains",
    number: "02",
    title: "From the fire",
    note: "The center of the table",
    items: [
      ["Black garlic bucatini", "Mushroom ragu · pecorino · chili", "$24"],
      ["Half chicken al carbón", "Green olive jus · preserved lemon", "$31"],
      ["Ember-grilled market fish", "Fennel · tomato · saffron broth", "$38"],
      ["Dry-aged striploin", "Charred onion · bone marrow jus · fries", "$49"],
    ],
  },
  {
    id: "vegetables",
    number: "03",
    title: "Garden",
    note: "Plant-forward · Always seasonal",
    items: [
      ["Burnt aubergine", "Tahini · pomegranate · herbs", "$18"],
      ["Charred brassicas", "Anchovy crumb · lemon · chili", "$17"],
      ["Roasted squash", "Brown butter · sage · hazelnut", "$19"],
    ],
  },
  {
    id: "desserts",
    number: "04",
    title: "Sweet things",
    note: "Save room",
    items: [
      ["Olive oil cake", "Citrus curd · sea salt · cream", "$13"],
      ["Dark chocolate pot", "Espresso · cacao nib · olive oil", "$14"],
      ["Basque cheesecake", "Fig compote · thyme sugar", "$14"],
    ],
  },
  {
    id: "drinks",
    number: "05",
    title: "At the bar",
    note: "Cocktails · Wine · Zero-proof",
    items: [
      ["Ember Negroni", "Mezcal · bitter orange · vermouth", "$16"],
      ["Fig & Tonic", "Fig leaf · quinine · lime · soda", "$12"],
      ["House red", "Ask what we&apos;re pouring tonight", "$14"],
      ["Sparkling water", "Still or sparkling", "$5"],
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="inner-page menu-page">
      <section className="page-hero">
        <span className="eyebrow">02 / The menu</span>
        <h1>
          Built around
          <br />
          <em>the fire.</em>
        </h1>
        <p>
          Our menu changes with the market. What you see here is a taste of the
          way we cook, not a promise to keep you from surprises.
        </p>
      </section>

      <div className="menu-nav">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.number} {s.title}
          </a>
        ))}
      </div>

      <div className="menu-sections">
        {sections.map((section, index) => (
          <section
            id={section.id}
            className={`menu-section ${index % 2 ? "offset" : ""}`}
            key={section.id}
          >
            <div className="menu-section-title">
              <span>{section.number}</span>
              <h2>{section.title}</h2>
              <p>{section.note}</p>
            </div>
            <div className="menu-items">
              {section.items.map(([name, desc, price]) => (
                <article className="menu-item" key={name}>
                  <div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                  <strong>{price}</strong>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="menu-footer">
        <p>
          Vegetarian and gluten-aware options are available. Please tell your
          server about allergies.
        </p>
        <Link href="/reservations" className="button button-accent">
          Book a table <ArrowUpRight size={16} />
        </Link>
      </section>
    </div>
  );
}
