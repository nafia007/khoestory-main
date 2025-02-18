import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface Film {
  title: string;
  description: string;
  trailerUrl: string;
}

const films: Film[] = [
  {
    title: "A KHOE-STORY 1: RECLAIMING THE MOTHER TONGUE",
    description: `This documentary explores the history of Khoekhoegowab, the collective term used for South Africa's indigenous languages, which are currently on the brink of extinction. The Khoe and San people are regarded as the most ancient human communities on earth and there language is one of the oldest on the planet. The film focuses on the impact of colonialism and Apartheid, as well as the subsequent institutionalisation of English and Afrikaans in South Africa, and the quest to eradicate the Khoe-San mother tongue.`,
    trailerUrl: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfjBtqoPeVdqRAzu8LY9rPBNZ0iJF1cW7M4amQ"
  },
  {
    title: "A KHOE STORY 2: RETURNING THE REMAINS",
    description: `The second installment of the trilogy explores the clandestine genocide of South Africa's indigenous people. Director Weaam Williams embarks on a personal journey that is one of initial optimism and awe of indigenous communities, leading her to the facts that reveal the genocide that was perpetrated on them.`,
    trailerUrl: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwf8ORUWxZ26VCoMtwjDPl1x3OmUIF5AYgJHu0S"
  },
  {
    title: "A KHOE-SAN STORY 3: STORIES FROM THE CAVES",
    description: `This film reviews the rich ritual and cultural customs of the Khoe and San people. It looks at rituals that are still being observed today, as well as ancient spiritual beliefs. Exploring rock art and sacred sites as doorways to age-old spiritual practices, nature consciousness is highlighted as the centre point of indigenous ideology and values.`,
    trailerUrl: "https://1k002xq9d0.ufs.sh/f/1NTnhDMDLmwfVgFoVpu3Iarm8iph7NW0O2CATu6zBM1FlLXQ"
  }
];

const DocumentarySeries = () => {
  return (
    <div className="min-h-screen bg-earth/5 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center mb-12">
          <a href="/" className="inline-flex items-center text-earth hover:text-earth/80 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Home
          </a>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-12 text-center">Documentary Series</h1>
        
        <div className="space-y-16">
          {films.map((film, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <video
                  className="w-full h-full object-cover"
                  src={film.trailerUrl}
                  controls
                  poster="/placeholder.svg"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-serif font-bold text-earth mb-4">{film.title}</h2>
                <p className="text-earth/80 mb-6 leading-relaxed">{film.description}</p>
                <button
                  onClick={() => window.location.href = 'https://holocenefilmscontact.uwu.ai/'}
                  className="px-6 py-2 bg-earth text-white rounded-full hover:bg-earth/90 transition-colors"
                >
                  Contact for Full Film
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentarySeries;