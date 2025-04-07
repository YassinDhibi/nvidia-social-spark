
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, ChevronRight, ImageIcon, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: "video1",
    title: "NVIDIA GTC Keynote",
    description: "Jensen Huang presents the latest NVIDIA innovations during GTC.",
    embedUrl: "https://www.youtube.com/embed/pyOJ5nSjAJM"
  },
  {
    id: "video2",
    title: "How NVIDIA AI is Changing Industries",
    description: "A look at how NVIDIA's AI solutions are transforming businesses around the world.",
    embedUrl: "https://www.youtube.com/embed/pegFll_G0KM"
  },
  {
    id: "video3",
    title: "NVIDIA Social Media Strategy",
    description: "Deep dive into NVIDIA's successful social media approach.",
    embedUrl: "https://www.youtube.com/embed/zHiR9L_mGok"
  }
];

const images = [
  {
    id: "img1",
    title: "NVIDIA Headquarters",
    description: "The iconic NVIDIA campus in Santa Clara, California.",
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "img2",
    title: "AI Technology Visualization",
    description: "Visualization of NVIDIA's advanced AI technologies.",
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "img3",
    title: "RTX Graphics Card",
    description: "The latest RTX graphics card showcasing NVIDIA's hardware innovation.",
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "img4",
    title: "NVIDIA Developer Conference",
    description: "Developers at an NVIDIA conference exploring the latest technology.",
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: "img5",
    title: "AI Code Development",
    description: "NVIDIA engineers developing cutting-edge AI software.",
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: "img6",
    title: "Deep Learning Visualization",
    description: "Visual representation of NVIDIA's deep learning networks.",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
];

export default function MediaGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="media" className="section-padding bg-nvidia-dark text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Media Showcase</h2>
          <p className="text-lg text-gray-300">
            Explore NVIDIA's compelling videos and images that drove social media engagement
          </p>
        </div>

        <Tabs defaultValue="videos" className="max-w-5xl mx-auto">
          <TabsList className="bg-nvidia-gray/20 mb-8">
            <TabsTrigger value="videos" className="data-[state=active]:bg-nvidia-green">
              <VideoIcon className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="images" className="data-[state=active]:bg-nvidia-green">
              <ImageIcon className="h-4 w-4 mr-2" />
              Images
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-8">
              {videos.map((video) => (
                <Card key={video.id} className="bg-nvidia-dark border-nvidia-gray/30">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe 
                        src={video.embedUrl} 
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                      <p className="text-gray-300">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="images" className="animate-fade-in">
            <div className="relative">
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                <button
                  onClick={prevImage}
                  className="bg-nvidia-dark/60 hover:bg-nvidia-green text-white rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <AspectRatio ratio={16/9}>
                  <img
                    src={images[currentImageIndex].url}
                    alt={images[currentImageIndex].title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold mb-1">{images[currentImageIndex].title}</h3>
                  <p className="text-gray-300">{images[currentImageIndex].description}</p>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                <button
                  onClick={nextImage}
                  className="bg-nvidia-dark/60 hover:bg-nvidia-green text-white rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
              {images.map((image, index) => (
                <div 
                  key={image.id} 
                  className={cn(
                    "cursor-pointer rounded overflow-hidden border-2",
                    currentImageIndex === index ? "border-nvidia-green" : "border-transparent"
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <AspectRatio ratio={1/1}>
                    <img
                      src={image.url}
                      alt={image.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
