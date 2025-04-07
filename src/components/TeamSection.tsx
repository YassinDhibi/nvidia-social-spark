
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, UserCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

export const teamMembers = [
  {
    name: "Seif Shell",
    role: "Team Member",
    bio: "Expertise in digital marketing strategy and social media analytics",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    detailedBio: `Seif Shell brings over 8 years of experience in digital marketing analytics and social media strategy to our research team. His background includes work with major technology brands where he developed expertise in quantifying the impact of social media campaigns through sophisticated attribution models.

    At our research group, Seif leads the data analytics initiatives, applying natural language processing and sentiment analysis to evaluate the effectiveness of NVIDIA's social media strategies across different platforms and time periods. His methodologies for measuring brand perception shifts following strategic campaigns have been particularly valuable in quantifying NVIDIA's successful transition to an AI-focused company.
    
    Seif holds an MBA with a specialization in Marketing Analytics from Stanford University and has contributed to several publications on digital marketing metrics and social media ROI. His current research focuses on developing predictive models for social media campaign performance based on historical patterns from industry leaders like NVIDIA.`,
    education: "MBA, Marketing Analytics - Stanford University",
    expertise: [
      "Social Media Analytics",
      "Digital Marketing Strategy",
      "Brand Attribution Modeling",
      "Sentiment Analysis"
    ],
    languages: ["English", "Arabic", "French"],
    contact: {
      email: "seif.shell@example.com",
      linkedin: "linkedin.com/in/seif-shell",
      twitter: "@SeifShell"
    }
  },
  {
    name: "Moadh Hannechi",
    role: "Team Member",
    bio: "Specializing in content creation and platform optimization",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop",
    detailedBio: `Moadh Hannechi is a content strategy specialist with particular expertise in platform-specific optimization techniques. With experience spanning both agency and in-house roles, Moadh brings a comprehensive understanding of how content strategies must adapt to different social media environments and audience expectations.

    For this research project, Moadh has focused on analyzing NVIDIA's content evolution across platforms, with particular attention to how the company has maintained brand consistency while optimizing for platform-specific features and audience behaviors. His comparative analysis of NVIDIA's approach versus competitors provides valuable insights into the company's content differentiation strategy.
    
    Prior to joining our research team, Moadh worked with several Fortune 500 technology companies on their social media content strategies. He holds a Master's degree in Digital Communication from Northwestern University and has been recognized with industry awards for innovative social media campaigns.`,
    education: "Master's in Digital Communication - Northwestern University",
    expertise: [
      "Platform-Specific Content Strategy",
      "Social Media Campaign Development",
      "Content Performance Analytics",
      "Audience Engagement Techniques"
    ],
    languages: ["English", "French", "Arabic"],
    contact: {
      email: "moadh.hannechi@example.com",
      linkedin: "linkedin.com/in/moadh-hannechi",
      twitter: "@MoadhHannechi"
    }
  },
  {
    name: "Mohamed Rayen Bouquery",
    role: "Team Member",
    bio: "Focused on data analysis and research methodology",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    detailedBio: `Mohamed Rayen Bouquery brings a strong background in quantitative research and data science to our team. With a Ph.D. in Computational Social Science from MIT, Mohamed specializes in developing rigorous methodologies for analyzing social media effectiveness and impact across multiple dimensions.

    For the NVIDIA social media study, Mohamed has designed the core research framework, ensuring that our analysis maintains scientific validity while extracting meaningful insights from complex, multi-platform data. His expertise in statistical modeling has been instrumental in identifying significant patterns in NVIDIA's strategy evolution over time.
    
    Mohamed previously served as a research scientist at the Social Media Lab at Carnegie Mellon University, where he contributed to groundbreaking studies on information diffusion in social networks. His published work on measuring brand authority in digital spaces has been cited in numerous academic and industry publications, establishing him as a thought leader in social media research methodology.`,
    education: "Ph.D. in Computational Social Science - MIT",
    expertise: [
      "Research Methodology Design",
      "Statistical Analysis",
      "Data Visualization",
      "Information Diffusion Analysis"
    ],
    languages: ["English", "French", "Arabic"],
    contact: {
      email: "mohamed.bouquery@example.com",
      linkedin: "linkedin.com/in/mohamed-bouquery",
      twitter: "@MohamedBouquery"
    }
  },
  {
    name: "Yassin Dhibi",
    role: "Team Member",
    bio: "Specializing in strategic communications and brand positioning",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    detailedBio: `Yassin Dhibi is a strategic communications expert who specializes in brand positioning and narrative development in the technology sector. With over a decade of experience in corporate communications, Yassin brings valuable insights into how companies like NVIDIA craft and evolve their brand stories across different mediums and audiences.

    For our NVIDIA research, Yassin has focused on analyzing the company's communication strategy during key inflection points, including the RTX launch and the pivot toward AI leadership. His qualitative analysis of messaging themes, executive communications, and brand voice evolution provides context for understanding NVIDIA's successful market positioning.
    
    Before joining our research team, Yassin served as Communications Director at a leading technology firm and as a consultant to numerous tech startups on brand positioning. He holds a Master's degree in Strategic Communications from Columbia University and regularly contributes to industry publications on technology branding and messaging strategy.`,
    education: "Master's in Strategic Communications - Columbia University",
    expertise: [
      "Brand Positioning",
      "Narrative Strategy",
      "Crisis Communications",
      "Executive Messaging"
    ],
    languages: ["English", "Arabic", "Spanish"],
    contact: {
      email: "yassin.dhibi@example.com",
      linkedin: "linkedin.com/in/yassin-dhibi",
      twitter: "@YassinDhibi"
    }
  }
];

export default function TeamSection() {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      title: "Meet Our Team",
      subtitle: "The brilliant minds behind this research project on NVIDIA's social media success",
      viewProfile: "View Profile",
      expertiseLabel: "Areas of Expertise",
      educationLabel: "Education",
      languagesLabel: "Languages",
      contactLabel: "Contact"
    },
    fr: {
      title: "Rencontrez Notre Équipe",
      subtitle: "Les esprits brillants derrière ce projet de recherche sur le succès de NVIDIA dans les médias sociaux",
      viewProfile: "Voir le Profil",
      expertiseLabel: "Domaines d'Expertise",
      educationLabel: "Formation",
      languagesLabel: "Langues",
      contactLabel: "Contact"
    }
  };
  
  const t = language === 'en' ? translations.en : translations.fr;
  
  return (
    <section id="team" className="section-padding py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
              <CardContent className="p-6">
                <p className="mb-6">{member.bio}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="col-span-2">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">{t.expertiseLabel}</h4>
                    <ul className="list-disc pl-5 text-sm">
                      {member.expertise.slice(0, 2).map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
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
                  
                  <Link to={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <UserCircle2 className="h-4 w-4" />
                      {t.viewProfile}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
