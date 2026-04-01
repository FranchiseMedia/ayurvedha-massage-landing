import React from "react";

const benefits = [
  {
    title: "Rejuvenates the Mind and Body",
    desc: "Improves circulation and balances energy. Ayurvedic massage promotes relaxation, reduces stress, and enhances overall vitality through natural herbal oils.",
  },
  {
    title: "Supports Skin Health",
    desc: "Nourishes the skin deeply with oils, enhancing glow and hydration. Helps reduce dryness and promotes a youthful appearance.",
  },
  {
    title: "Balances Doshas and Hormones",
    desc: "Helps restore natural balance in the body, improving digestion, sleep, and overall well-being through personalized treatments.",
  },
  {
    title: "Relieves Muscular Tension and Pain",
    desc: "Deep tissue techniques reduce stiffness, ease joint pain, and improve flexibility for better mobility and comfort.",
  },
  {
    title: "Detoxifies and Cleanses",
    desc: "Stimulates lymphatic drainage, removes toxins, and purifies the body while improving internal organ function.",
  },
  {
    title: "Promotes Sound Sleep",
    desc: "Calms the nervous system and reduces anxiety, helping you achieve deeper, more restful sleep naturally.",
  },
  {
    title: "Enhances Circulation and Vitality",
    desc: "Boosts blood flow, delivering oxygen and nutrients efficiently to tissues, improving energy levels.",
  },
  {
    title: "Supports Overall Health",
    desc: "Strengthens immunity, improves metabolism, and promotes holistic wellness for long-term health benefits.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="services"  className="bg-[#f4f4f4] py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div  className="mb-10">
          <h2 className="text-[#5E8846] text-2xl font-semibold mb-2">
            Benefits of Ayurvedic Massage
          </h2>
          <p className="text-gray-700 text-sm max-w-2xl">
            Experience the Timeless Healing: Discover the Profound Benefits of Ayurvedic Massage
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#5E8846] text-white p-5 rounded-md shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-sm mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-100 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;