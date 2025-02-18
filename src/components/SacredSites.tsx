
import { Mountain, MapPin } from "lucide-react";

const sites = [
  {
    title: "Table Mountain",
    description: "A sacred place of healing and connection with ancestors",
    image: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwf4Hary6mWfyOlsATBp3Q7nV6KDNaz8v9tqhUi",
  },
  {
    title: "Newlands Forest",
    description: "Ancient ceremonial grounds for spiritual practices",
    image: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfodAhUQ7dy8fZhLI7rMm1Sg6snGQAjuFlDNK2",
  },
  {
    title: "Peer's Cave",
    description: "Where land meets ocean in perfect harmony",
    image: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfX7RRCy2gvmYC4w9rqzQf5iTFetZ8NEuJHWpM",
  },
];

const SacredSites = () => {
  return (
    <section id="sacred-sites" className="py-24 bg-stone">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-earth/10 text-earth text-sm">
            Sacred Spaces
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-6">
            Sacred Sites &amp; Journeys
          </h2>
          <p className="text-earth/80 leading-relaxed">
            Discover the ancient power places where our ancestors connected with the natural world and spiritual realm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sites.map((site, index) => (
            <div
              key={site.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={site.image}
                  alt={site.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-earth mb-2 flex items-center gap-2">
                  <Mountain className="h-5 w-5" />
                  {site.title}
                </h3>
                <p className="text-earth/70 mb-4">
                  {site.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SacredSites;
