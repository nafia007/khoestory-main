import { ChevronLeft } from "lucide-react";


const About = () => {
  return (
    <div className="min-h-screen bg-earth/5 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center mb-12">
          <a href="/" className="inline-flex items-center text-earth hover:text-earth/80 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Home
          </a>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-12 text-center">About</h1>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-[3/4] relative overflow-hidden">
            <img
              src="https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfexB5eRKLpmhPADcJQkOHZyUGESta1d028boW"
              alt="Nafia Kocks"
              className="w-full h-full object-cover object-center bg-gray-100 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-serif font-bold text-earth mb-6">Nigel Kocks</h2>
            <div className="space-y-4 text-earth/80 leading-relaxed">
              <p>
                Nigel Kocks is a respected Traditional Practitioner based in Cape Town, South Africa, 
                with over 25 years of experience in traditional healing practices. Drawing from rich 
                Nama Griqua and San (Bushman) cultural heritage, Nigel specializes in the traditional 
                art of herbal medicine, with particular expertise in the unique flora of the Cape 
                Floristic Region's fynbos vegetation.
              </p>
              <p>
                As a knowledgeable herbalist, Nigel brings together ancestral wisdom and deep 
                understanding of the medicinal properties found in the Western Cape's indigenous plants. 
                Their practice is formally recognized by the South African Traditional Doctors Union, 
                reflecting their commitment to maintaining professional standards in traditional healing.
              </p>
              <p>
                Nigel's connection to the land through fynbos harvesting continues an important cultural 
                legacy, preserving and sharing the traditional healing knowledge passed down through 
                generations of indigenous peoples of the region. Their work represents a living bridge 
                between ancient healing traditions and contemporary practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;