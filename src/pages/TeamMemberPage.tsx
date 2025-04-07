
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '@/components/TeamSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function TeamMemberPage() {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const member = teamMembers.find(member => member.name.toLowerCase().replace(/\s+/g, '-') === id);
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);
  
  if (!member) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container py-20">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Team member not found' : 'Membre de l\'équipe non trouvé'}
          </h1>
          <Link to="/#team">
            <Button>
              {language === 'en' ? 'Return to Team Page' : 'Retourner à la Page d\'Équipe'}
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  const translations = {
    en: {
      backToTeam: "Back to Team",
      expertise: "Areas of Expertise",
      education: "Education",
      languages: "Languages",
      contact: "Contact Information",
      biography: "Professional Biography",
      researchContribution: "Research Contribution"
    },
    fr: {
      backToTeam: "Retour à l'Équipe",
      expertise: "Domaines d'Expertise",
      education: "Formation",
      languages: "Langues",
      contact: "Coordonnées",
      biography: "Biographie Professionnelle",
      researchContribution: "Contribution à la Recherche"
    }
  };
  
  const t = language === 'en' ? translations.en : translations.fr;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-8 px-4">
          <Link to="/#team" className="flex items-center text-nvidia-green hover:underline mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            {t.backToTeam}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sidebar with profile information */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden sticky top-20">
                <div className="aspect-square relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-1">{member.name}</h1>
                  <p className="text-nvidia-green font-medium mb-4">{member.role}</p>
                  
                  <div className="mb-4">
                    <h2 className="text-sm font-semibold text-muted-foreground mb-2">{t.expertise}</h2>
                    <ul className="list-disc pl-5 space-y-1">
                      {member.expertise?.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {member.education && (
                    <div className="mb-4">
                      <h2 className="text-sm font-semibold text-muted-foreground mb-2">{t.education}</h2>
                      <p>{member.education}</p>
                    </div>
                  )}
                  
                  {member.languages && (
                    <div className="mb-4">
                      <h2 className="text-sm font-semibold text-muted-foreground mb-2">{t.languages}</h2>
                      <p>{member.languages.join(', ')}</p>
                    </div>
                  )}
                  
                  <Separator className="my-4" />
                  
                  <h2 className="text-sm font-semibold text-muted-foreground mb-2">{t.contact}</h2>
                  <div className="flex gap-4 mt-4">
                    <a href="#" className="text-gray-500 hover:text-nvidia-green">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-nvidia-green">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-nvidia-green">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-nvidia-green">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">{t.biography}</h2>
                <div className="prose max-w-none dark:prose-invert">
                  {member.detailedBio?.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">{t.researchContribution}</h2>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="mb-4">
                    {language === 'en' 
                      ? `${member.name} has played a crucial role in our research on NVIDIA's social media strategy, focusing particularly on the company's approach to ${member.expertise[0].toLowerCase()} and ${member.expertise[1].toLowerCase()}.`
                      : `${member.name} a joué un rôle crucial dans notre recherche sur la stratégie de médias sociaux de NVIDIA, se concentrant particulièrement sur l'approche de l'entreprise en matière de ${member.expertise[0].toLowerCase()} et ${member.expertise[1].toLowerCase()}.`
                    }
                  </p>
                  <p>
                    {language === 'en'
                      ? `Their analysis has provided valuable insights into how NVIDIA has successfully leveraged social media to transform its brand positioning and engage with diverse audience segments. Through rigorous methodologies and in-depth platform analysis, ${member.name} has helped quantify the impact of NVIDIA's strategic communication choices across multiple channels and time periods.`
                      : `Son analyse a fourni des insights précieux sur la façon dont NVIDIA a réussi à exploiter les médias sociaux pour transformer son positionnement de marque et interagir avec divers segments d'audience. Grâce à des méthodologies rigoureuses et à une analyse approfondie des plateformes, ${member.name} a aidé à quantifier l'impact des choix de communication stratégique de NVIDIA sur plusieurs canaux et périodes.`
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
