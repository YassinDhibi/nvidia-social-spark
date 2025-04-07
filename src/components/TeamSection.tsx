
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Seif Shell",
    role: "Team Member",
    bio: "Expertise in digital marketing strategy and social media analytics",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
  },
  {
    name: "Moadh Hannechi",
    role: "Team Member",
    bio: "Specializing in content creation and platform optimization",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop"
  },
  {
    name: "Mohamed Rayen Bouquery",
    role: "Team Member",
    bio: "Focused on data analysis and research methodology",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            The brilliant minds behind this research project on NVIDIA's social media success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-nvidia-dark/70 to-transparent z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-nvidia-green">{member.role}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="mb-4">{member.bio}</p>
                <div className="flex space-x-2 justify-center">
                  <a href="#" className="text-gray-500 hover:text-nvidia-green">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-nvidia-green">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-nvidia-green">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
