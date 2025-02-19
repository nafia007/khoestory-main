
import { Leaf } from "lucide-react";

const herbs = [
  {
    name: "African Sage",
    scientificName: "Salvia africana-caerulea",
    uses: "Traditional ceremonial and cleansing rituals, respiratory health",
    image: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfHaHynUYGc7b1fVyE6LouKYrXQTO3td9M8xDP"
  },
  {
    name: "Aloe",
    scientificName: "Aloe ferox",
    uses: "Skin healing, digestive health, immune system support",
    image: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwf4XYd9ahmWfyOlsATBp3Q7nV6KDNaz8v9tqhU"
  },
  {
    name: "Buchu/Boegoe",
    scientificName: "Agathosma betulina",
    uses: "Urinary health, anti-inflammatory, traditional medicine",
    image: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfoqgNng7dy8fZhLI7rMm1Sg6snGQAjuFlDNK2"
  },
  {
    name: "Cancerbush",
    scientificName: "Sutherlandia frutescens",
    uses: "Immune support, stress relief, traditional medicine",
    image: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfT1W6QRrsMRNW4F2wYjxBTpcyPALUQgk8oJ6u"
  },
  {
    name: "Matunga/flaming lips",
    scientificName: "Leonotis leonurus",
    uses: "Cough, cold, fever, headaches",
    image: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfKfQQn6RR1dtuQDSgUfXIlsarAe6LcK8i0FxH"
  }
];

const HerbsSection = () => {
  return (
    <section id="herbs" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-sage/10 text-sage text-sm">
            Sacred Plants
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-6">
            Traditional Healing Herbs
          </h2>
          <p className="text-earth/80 leading-relaxed">
            Discover the sacred healing plants used in KhoiSan traditional medicine, passed down through generations of wisdom keepers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {herbs.map((herb, index) => (
            <div
              key={herb.name}
              className="group relative overflow-hidden rounded-2xl bg-stone/20 hover:bg-stone/30 transition-colors p-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                <img
                  src={herb.image}
                  alt={herb.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-earth mb-2 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-sage" />
                {herb.name}
              </h3>
              <p className="text-sm text-earth/60 italic mb-3">
                {herb.scientificName}
              </p>
              <p className="text-earth/70">
                {herb.uses}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HerbsSection;
