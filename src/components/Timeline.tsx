
import { Facebook, Instagram, Youtube, Twitter, Linkedin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const timelineEvents = [
  {
    id: "2006",
    year: "2006",
    title: "Facebook Marketing Beginnings",
    description: "Early adoption of Facebook for tech community engagement, focusing on dedicated pages for NVIDIA enthusiasts.",
    icon: <Facebook className="h-5 w-5 text-white" />,
    videoUrl: "https://www.youtube.com/embed/UkC_iT-RRKc", // Facebook Marketing Strategy
    products: [
      {
        name: "GeForce 8800 GTX",
        description: "First unified shader architecture GPU, revolutionary for its time",
        image: "https://images.unsplash.com/photo-1578598336768-5e91b6712225?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    id: "2010",
    year: "2010",
    title: "YouTube Strategy Launch",
    description: "Creation of NVIDIA's YouTube channel with product demonstrations, tutorials, and technology deep-dives.",
    icon: <Youtube className="h-5 w-5 text-white" />,
    videoUrl: "https://www.youtube.com/embed/lFUXwoWZ8jM", // YouTube Marketing Strategy
    products: [
      {
        name: "Tesla C2050",
        description: "NVIDIA's professional computing GPU for data centers",
        image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=400&h=300&fit=crop"
      },
      {
        name: "GeForce GTX 480",
        description: "First Fermi architecture GPU for consumer market",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    id: "2014",
    year: "2014",
    title: "Twitter Engagement Growth",
    description: "Development of real-time customer support and announcement strategy through Twitter, building community interactions.",
    icon: <Twitter className="h-5 w-5 text-white" />,
    videoUrl: "https://www.youtube.com/embed/gxuJnRWz7dQ", // Twitter for Business
    products: [
      {
        name: "GeForce GTX TITAN",
        description: "The most powerful single GPU of its time",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop"
      },
      {
        name: "SHIELD Tablet",
        description: "Android gaming tablet with NVIDIA Tegra K1",
        image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    id: "2016",
    year: "2016",
    title: "Instagram Visual Storytelling",
    description: "Launch of Instagram account focusing on visual content showcasing products, technologies and behind-the-scenes.",
    icon: <Instagram className="h-5 w-5 text-white" />,
    videoUrl: "https://www.youtube.com/embed/bhHrXcG8-Xo", // Instagram Marketing
    products: [
      {
        name: "GeForce GTX 1080",
        description: "First Pascal architecture GPU with revolutionary performance",
        image: "https://images.unsplash.com/photo-1600348712270-5af9e3590f66?w=400&h=300&fit=crop"
      },
      {
        name: "NVIDIA DGX-1",
        description: "First AI supercomputer in a box",
        image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    id: "2019",
    year: "2019",
    title: "LinkedIn B2B Strategy",
    description: "Professional platform engagement to position NVIDIA as an AI leader among business and enterprise audiences.",
    icon: <Linkedin className="h-5 w-5 text-white" />,
    videoUrl: "https://www.youtube.com/embed/k7MtMbIIFg4", // LinkedIn Business Strategy
    products: [
      {
        name: "NVIDIA RTX 2080 Ti",
        description: "First consumer GPU with real-time ray tracing",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop"
      },
      {
        name: "NVIDIA Jetson Nano",
        description: "Small, powerful computer for AI development",
        image: "https://images.unsplash.com/photo-1597423244036-ef5210d8d8b0?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    id: "2023",
    year: "2023",
    title: "Multi-Platform AI Integration",
    description: "Cross-platform strategy unifying NVIDIA's AI messaging across all social channels to dominate industry conversation.",
    icon: <TrendingUp className="h-5 w-5 text-white" />,
    videoUrl: "https://www.youtube.com/embed/3hk37hj5tjs", // Multi-Platform Social Media Strategy
    products: [
      {
        name: "NVIDIA H100 Tensor Core GPU",
        description: "Built for AI infrastructure, powers large language models",
        image: "https://images.unsplash.com/photo-1686157484082-4cbf22a46657?w=400&h=300&fit=crop"
      },
      {
        name: "GeForce RTX 4090",
        description: "Flagship Ada Lovelace architecture GPU",
        image: "https://images.unsplash.com/photo-1659535858221-3119cd2628fb?w=400&h=300&fit=crop"
      },
      {
        name: "NVIDIA Omniverse",
        description: "Platform for 3D design collaboration and simulation",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop"
      }
    ]
  },
];

export default function Timeline() {
  const navigate = useNavigate();
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const handleEventClick = (eventId: string) => {
    navigate(`/presentation/${eventId}`);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  // Use intersection observer to add animation when timeline items come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-item-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      if (timelineItems) {
        timelineItems.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);
  
  return (
    <section id="timeline" className="section-padding bg-white py-16" ref={timelineRef}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">NVIDIA's Social Media Platform Evolution</h2>
          <p className="text-lg text-muted-foreground">
            From early Facebook adoption to integrated multi-platform dominance, see how NVIDIA leveraged each social media channel to transform their market presence.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-nvidia-green via-nvidia-green to-nvidia-dark"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-16 opacity-0 transform translate-y-4 transition-all duration-700 timeline-item pl-16">
              <div className="absolute left-0 mt-3 timeline-dot">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nvidia-green shadow-lg border-4 border-white">
                  {event.icon}
                </div>
              </div>
              <Card 
                className="overflow-hidden transition-all hover:shadow-lg cursor-pointer border border-gray-200"
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
              
              {/* Video section */}
              <div className="mt-4 mb-8">
                <h4 className="font-medium text-lg mb-2">Related Strategy Video:</h4>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    className="w-full h-full"
                    src={event.videoUrl}
                    title={`${event.title} Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* NVIDIA Products Section */}
              <Collapsible className="mb-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="flex w-full justify-between items-center">
                    <span className="font-medium text-lg">NVIDIA Products from {event.year}</span>
                    <ChevronDown className="h-5 w-5 transition-transform duration-200 ui-open:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.products.map((product, idx) => (
                      <Card key={idx} className="overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h5 className="font-bold text-nvidia-dark">{product.name}</h5>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .timeline-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .timeline-item-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
