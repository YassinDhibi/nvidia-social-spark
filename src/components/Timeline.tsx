
import { Facebook, Instagram, Youtube, Twitter, Linkedin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const timelineEvents = [
  {
    id: "2006",
    year: "2006",
    title: "Facebook Marketing Beginnings",
    description: "Early adoption of Facebook for tech community engagement, focusing on dedicated pages for NVIDIA enthusiasts.",
    icon: <Facebook className="h-5 w-5 text-white" />,
  },
  {
    id: "2010",
    year: "2010",
    title: "YouTube Strategy Launch",
    description: "Creation of NVIDIA's YouTube channel with product demonstrations, tutorials, and technology deep-dives.",
    icon: <Youtube className="h-5 w-5 text-white" />,
  },
  {
    id: "2014",
    year: "2014",
    title: "Twitter Engagement Growth",
    description: "Development of real-time customer support and announcement strategy through Twitter, building community interactions.",
    icon: <Twitter className="h-5 w-5 text-white" />,
  },
  {
    id: "2016",
    year: "2016",
    title: "Instagram Visual Storytelling",
    description: "Launch of Instagram account focusing on visual content showcasing products, technologies and behind-the-scenes.",
    icon: <Instagram className="h-5 w-5 text-white" />,
  },
  {
    id: "2019",
    year: "2019",
    title: "LinkedIn B2B Strategy",
    description: "Professional platform engagement to position NVIDIA as an AI leader among business and enterprise audiences.",
    icon: <Linkedin className="h-5 w-5 text-white" />,
  },
  {
    id: "2023",
    year: "2023",
    title: "Multi-Platform AI Integration",
    description: "Cross-platform strategy unifying NVIDIA's AI messaging across all social channels to dominate industry conversation.",
    icon: <TrendingUp className="h-5 w-5 text-white" />,
  },
];

export default function Timeline() {
  const navigate = useNavigate();
  
  const handleEventClick = (eventId: string) => {
    navigate(`/presentation/${eventId}`);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };
  
  return (
    <section id="timeline" className="section-padding bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">NVIDIA's Social Media Platform Evolution</h2>
          <p className="text-lg text-muted-foreground">
            From early Facebook adoption to integrated multi-platform dominance, see how NVIDIA leveraged each social media channel to transform their market presence.
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
