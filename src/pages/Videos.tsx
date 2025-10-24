import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";


const sampleVideos = [
  {
    id: 'v1',
    title: 'Présentation SATEQ',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'v2',
    title: 'Nos bureaux',
    youtubeId: '9bZkp7q19f0'
  },
  {
    id: 'v3',
    title: 'Notre équipe',
    youtubeId: '3JZ_D3ELwOQ'
  }
];

export default function Videos() {
  const [active, setActive] = useState<null | typeof sampleVideos[0]>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-normal mb-6">Vidéos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleVideos.map(video => (
            <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setActive(video)} className="w-full text-left">
                <div className="relative bg-muted/10 h-64 flex items-center justify-center">
                
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={`${video.title} - aperçu`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-normal text-gray-800">{video.title}</h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />


      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-full max-w-4xl mx-4 bg-transparent">
            <button onClick={() => setActive(null)} className="absolute -top-8 right-0 p-2 rounded-full bg-white shadow-md">
              <X className="w-5 h-5 text-gray-800" />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
