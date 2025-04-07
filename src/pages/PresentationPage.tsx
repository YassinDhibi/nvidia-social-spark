
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react';
import { presentationData, presentationDataFr } from '@/data/presentationData';
import { useLanguage } from '@/hooks/useLanguage';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function PresentationPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [presentation, setPresentationData] = useState<any>(null);
  
  useEffect(() => {
    if (!eventId) {
      navigate('/');
      return;
    }
    
    const data = language === 'en' ? presentationData : presentationDataFr;
    
    if (!data[eventId]) {
      navigate('/');
      return;
    }
    
    setPresentationData(data[eventId]);
    
    // Scroll to top when navigation occurs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [eventId, navigate, language]);
  
  if (!presentation) return null;
  
  const timelineEvents = Object.keys(language === 'en' ? presentationData : presentationDataFr);
  const currentIndex = timelineEvents.indexOf(eventId as string);
  const nextEventId = currentIndex < timelineEvents.length - 1 ? timelineEvents[currentIndex + 1] : null;
  const prevEventId = currentIndex > 0 ? timelineEvents[currentIndex - 1] : null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="container my-8 px-4 max-w-7xl mx-auto">
          <Link to="/#timeline" className="flex items-center text-nvidia-green hover:underline mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            {language === 'en' ? 'Back to Timeline' : 'Retour à la chronologie'}
          </Link>
          
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{presentation.title}</h1>
            <p className="text-lg text-muted-foreground">{presentation.year}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-xl font-medium mb-4">{language === 'en' ? 'Overview' : 'Aperçu'}</h2>
                <div className="mb-6">
                  {presentation.content}
                </div>
                
                <h3 className="text-lg font-medium mb-3">{language === 'en' ? 'Key Points:' : 'Points Clés:'}</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {presentation.keyPoints.map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-medium mt-8 mb-3">{language === 'en' ? 'Detailed Analysis:' : 'Analyse Détaillée:'}</h3>
                <div className="text-base text-gray-700 dark:text-gray-300">
                  <p className="mb-4">{presentation.fullBio}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                <h3 className="text-lg font-medium mb-3">{language === 'en' ? 'Presented by:' : 'Présenté par:'}</h3>
                <div className="flex items-center gap-3">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img 
                      src={presentation.presenter.image} 
                      alt={presentation.presenter.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-lg">{presentation.presenter.name}</p>
                    <p className="text-sm text-muted-foreground">{presentation.presenter.role}</p>
                    <p className="text-sm mt-1">{presentation.presenter.bio}</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border bg-card">
                <img 
                  src={presentation.image} 
                  alt={presentation.title}
                  className="w-full h-56 object-cover"
                />
              </div>
              
              {presentation.additionalImages && presentation.additionalImages.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">{language === 'en' ? 'Additional Resources:' : 'Ressources Supplémentaires:'}</h3>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {presentation.additionalImages.map((image: string, index: number) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="rounded-lg overflow-hidden border">
                              <img 
                                src={image} 
                                alt={`${presentation.title} - image ${index + 1}`}
                                className="w-full h-52 object-cover"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-4">
                      <CarouselPrevious className="static translate-y-0 transform-none" />
                      <CarouselNext className="static translate-y-0 transform-none" />
                    </div>
                  </Carousel>
                </div>
              )}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-xl font-medium mb-4">{language === 'en' ? 'Video Presentation' : 'Présentation Vidéo'}</h2>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full"
                src={presentation.videoUrl} 
                title={`${presentation.title} presentation`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
          
          <div className="flex justify-between">
            {prevEventId ? (
              <Button 
                variant="outline" 
                onClick={() => navigate(`/presentation/${prevEventId}`)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                {language === 'en' ? 'Previous' : 'Précédent'}
              </Button>
            ) : <div></div>}
            
            {nextEventId ? (
              <Button 
                onClick={() => navigate(`/presentation/${nextEventId}`)}
                className="flex items-center gap-2"
              >
                {language === 'en' ? 'Next' : 'Suivant'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : <div></div>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
