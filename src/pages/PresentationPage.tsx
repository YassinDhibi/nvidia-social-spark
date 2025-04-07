
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react';
import { presentationData } from '@/data/presentationData';

export default function PresentationPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [presentation, setPresentationData] = useState<any>(null);
  
  useEffect(() => {
    if (!eventId || !presentationData[eventId]) {
      navigate('/');
      return;
    }
    
    setPresentationData(presentationData[eventId]);
  }, [eventId, navigate]);
  
  if (!presentation) return null;
  
  const timelineEvents = Object.keys(presentationData);
  const currentIndex = timelineEvents.indexOf(eventId as string);
  const nextEventId = currentIndex < timelineEvents.length - 1 ? timelineEvents[currentIndex + 1] : null;
  const prevEventId = currentIndex > 0 ? timelineEvents[currentIndex - 1] : null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="container my-8 px-4 max-w-6xl mx-auto">
          <Link to="/#timeline" className="flex items-center text-nvidia-green hover:underline mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Timeline
          </Link>
          
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">{presentation.title}</h1>
            <p className="text-lg text-muted-foreground">{presentation.year}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-xl font-medium mb-4">Overview</h2>
                <div className="mb-6">
                  {presentation.content}
                </div>
                
                <h3 className="text-lg font-medium mb-3">Key Points:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {presentation.keyPoints.map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Presented by:</h3>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img 
                      src={presentation.presenter.image} 
                      alt={presentation.presenter.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{presentation.presenter.name}</p>
                    <p className="text-sm text-muted-foreground">{presentation.presenter.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border bg-card">
                <img 
                  src={presentation.image} 
                  alt={presentation.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-xl font-medium mb-4">Video Presentation</h2>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
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
                Previous
              </Button>
            ) : <div></div>}
            
            {nextEventId ? (
              <Button 
                onClick={() => navigate(`/presentation/${nextEventId}`)}
                className="flex items-center gap-2"
              >
                Next
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
