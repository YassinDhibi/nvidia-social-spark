
import { Check, TrendingUp, Award, Landmark, Globe, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const timelineEvents = [
  {
    id: "2006",
    year: "2006",
    title: "Social Media Beginnings",
    description: "NVIDIA launches first social media accounts, focusing on tech enthusiasts and gamers.",
    icon: <Globe className="h-5 w-5 text-white" />,
  },
  {
    id: "2012",
    year: "2012",
    title: "GeForce Community Growth",
    description: "Building dedicated gaming communities around GeForce products leads to explosive growth.",
    icon: <TrendingUp className="h-5 w-5 text-white" />,
  },
  {
    id: "2016",
    year: "2016",
    title: "AI & Deep Learning Focus",
    description: "Pivoting content strategy to highlight AI innovations and research partnerships.",
    icon: <Zap className="h-5 w-5 text-white" />,
  },
  {
    id: "2018",
    year: "2018",
    title: "RTX Launch Campaign",
    description: "Revolutionary cross-platform social campaign for RTX technology reaches millions.",
    icon: <Award className="h-5 w-5 text-white" />,
  },
  {
    id: "2021",
    year: "2021",
    title: "Crypto & Gaming Boom",
    description: "Capitalizing on cryptocurrency and pandemic gaming surge through strategic content.",
    icon: <TrendingUp className="h-5 w-5 text-white" />,
  },
  {
    id: "2023",
    year: "2023",
    title: "AI Revolution Leadership",
    description: "Dominating AI conversation across platforms positions NVIDIA as industry leader.",
    icon: <Landmark className="h-5 w-5 text-white" />,
  },
];

export default function Timeline() {
  const navigate = useNavigate();
  
  const handleEventClick = (eventId: string) => {
    navigate(`/presentation/${eventId}`);
  };
  
  return (
    <section id="timeline" className="section-padding bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">NVIDIA's Social Media Evolution</h2>
          <p className="text-lg text-muted-foreground">
            From gaming-focused beginnings to AI dominance, see how NVIDIA transformed its social presence over time.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl mt-16">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-nvidia-green">
                  {event.icon}
                </div>
              </div>
              <Card 
                className="ml-4 overflow-hidden transition-all hover:shadow-lg cursor-pointer"
                onClick={() => handleEventClick(event.id)}
              >
                <CardHeader className="bg-nvidia-dark text-white pb-2">
                  <CardTitle className="flex items-center">
                    <span className="mr-2 bg-nvidia-green text-white px-2 py-1 rounded text-sm">
                      {event.year}
                    </span>
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
