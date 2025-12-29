"use client";

const plans = [
  {
    name: "Free",
    price: "$0",
    subtitle: "Forever",
    features: [
      "Ad-supported streaming",
      "Shuffle play",
      "Basic audio quality",
      "Limited skips",
    ],
  },
  {
    name: "Premium",
    price: "$9.99/mo",
    subtitle: "Most Popular",
    recommended: true,
    features: [
      "Ad-free music",
      "High-quality audio",
      "Unlimited skips",
      "Offline downloads",
      "Create & share playlists",
    ],
  },
  {
    name: "Family",
    price: "$14.99/mo",
    subtitle: "Up to 6 accounts",
    features: [
      "6 Premium accounts",
      "Family Mix playlists",
      "Parental controls",
      "Offline listening",
      "Ad-free experience",
    ],
  },
];

const HomePricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your Listening Plan
        </h2>
        <p className="text-gray-400 mb-14">
          Upgrade your music experience. Cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl transition transform hover:-translate-y-2 border ${
                plan.recommended
                  ? "bg-green-500 text-black shadow-2xl border-green-400 scale-105"
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              {plan.recommended && (
                <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold rounded-full bg-black text-green-400">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm opacity-80 mb-4">{plan.subtitle}</p>

              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>

              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition ${
                  plan.recommended
                    ? "bg-black text-green-400 hover:bg-gray-900"
                    : "bg-green-500 text-black hover:bg-green-400"
                }`}
              >
                {plan.price === "$0" ? "Start Free" : "Go Premium"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePricing;