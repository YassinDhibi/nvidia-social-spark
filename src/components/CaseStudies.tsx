
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Youtube, Instagram, Twitter, Facebook, Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const caseStudiesEn = [
  {
    id: "rtx",
    title: "RTX Launch Campaign",
    platform: "Cross-Platform",
    results: "220M+ impressions, 40% engagement increase",
    strategy: "NVIDIA revolutionized its product launch strategy by creating an immersive digital experience across all social platforms. The RTX launch combined stunning real-time ray tracing demos, influencer partnerships, and interactive challenges that generated unprecedented excitement.",
    keyPoints: [
      "Coordinated launch across YouTube, Twitter, Instagram and Facebook",
      "Partnered with 200+ gaming influencers for content creation",
      "Interactive ray tracing demonstrations that users could share",
      "Community-driven challenges with RTX-enabled prizes"
    ],
    icon: <BarChart className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    additionalContent: "The RTX launch exemplifies NVIDIA's multi-platform strategy evolution, going beyond traditional product announcements to create interactive, shareable experiences. By coordinating messaging across all platforms, NVIDIA ensured consistent messaging while adapting content formats to each platform's strengths. The campaign achieved record engagement by demonstrating ray tracing technology through interactive demos that even non-technical users could appreciate, driving both awareness and understanding of complex technical innovations."
  },
  {
    id: "youtube",
    title: "YouTube Strategy",
    platform: "YouTube",
    results: "5.2M subscribers, 120M+ annual views",
    strategy: "NVIDIA's YouTube strategy transformed from product announcements to a rich content ecosystem including tutorials, behind-the-scenes innovation stories, and developer interviews. Their technical deep-dives and accessible AI explanations established thought leadership.",
    keyPoints: [
      "Regular 'AI Explained' series breaking down complex concepts",
      "Live streams of major product announcements and conferences",
      "Technical workshops and tutorials for developers",
      "Gaming optimization guides with impressive visual demonstrations"
    ],
    icon: <Youtube className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    additionalContent: "NVIDIA's transformation of its YouTube channel from product marketing to educational resource demonstrates the power of value-first content. By creating digestible explanations of complex AI technologies alongside practical tutorials for developers and gamers, NVIDIA positioned itself as a knowledge leader while building a loyal audience. Their 'AI Explained' series has become particularly valuable in translating technical innovations for business decision-makers, while their developer-focused content has created a strong community of technical ambassadors."
  },
  {
    id: "instagram",
    title: "Visual Storytelling",
    platform: "Instagram",
    results: "3.8M followers, 4x higher engagement than competitors",
    strategy: "On Instagram, NVIDIA mastered the art of visual storytelling through a careful balance of product aesthetics, technology applications, and behind-the-scenes glimpses of innovation. Their distinctive visual style combines technological precision with artistic presentation.",
    keyPoints: [
      "Consistent visual identity with signature green accents",
      "Regular features on real-world AI and tech applications",
      "Employee spotlights highlighting diverse talent",
      "Interactive Stories with polls and questions about tech trends"
    ],
    icon: <Instagram className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    additionalContent: "NVIDIA's Instagram approach demonstrates that even complex technology companies can excel on visually-focused platforms. Their strategy features a carefully crafted aesthetic that feels cohesive while showcasing diverse content types. By highlighting real-world applications of their technology rather than just the products themselves, NVIDIA makes abstract innovations tangible and relatable. Their employee spotlights humanize the brand while showcasing the diversity of talent driving innovation, creating emotional connections with their audience."
  },
  {
    id: "twitter",
    title: "Twitter/X Presence",
    platform: "Twitter/X",
    results: "2.5M followers, leader in tech conversation share",
    strategy: "NVIDIA dominates Twitter with a rapid-response approach to tech news and trends. Their team engages directly with developers, addresses customer questions in real-time, and participates actively in trending conversations about AI, gaming and computing.",
    keyPoints: [
      "Real-time engagement with AI and tech conversations",
      "Direct developer support and community management",
      "Quick, humorous responses to industry news and trends",
      "Strategic partnerships with other tech brands for amplification"
    ],
    icon: <Twitter className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    additionalContent: "NVIDIA's Twitter strategy centers on agility and conversation leadership. While many tech companies use Twitter primarily for announcements, NVIDIA has built a dynamic presence through active participation in industry conversations and responsive community management. Their social team's ability to translate complex technical topics into accessible, sometimes humorous content has made them a distinctive voice in the tech space. By continuously monitoring AI and computing trends, they position the brand at the center of the industry's most important conversations."
  },
  {
    id: "facebook",
    title: "Community Building",
    platform: "Facebook",
    results: "7M+ community members across official groups",
    strategy: "NVIDIA leveraged Facebook to build dedicated communities around specific products and technologies. Their developer groups, gaming communities, and AI discussion forums created valuable ecosystems that generate organic word-of-mouth and brand loyalty.",
    keyPoints: [
      "Dedicated groups for developers, gamers, and AI researchers",
      "Regular 'Ask Me Anything' sessions with NVIDIA engineers",
      "User-generated content challenges with featured highlights",
      "Exclusive announcements and beta access for community members"
    ],
    icon: <Facebook className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    additionalContent: "NVIDIA's Facebook community strategy demonstrates the power of creating spaces where users can connect not just with the brand but with each other. By establishing dedicated groups aligned with specific interest areas, NVIDIA created valuable ecosystems that generate continuous engagement through peer-to-peer interactions. Their 'Ask Me Anything' sessions with engineers build technical credibility while creating direct relationships between their product teams and users. The strategy has proven particularly effective for building developer loyalty, as these communities provide practical support, networking opportunities, and early access to new capabilities."
  }
];

const caseStudiesFr = [
  {
    id: "rtx",
    title: "Campagne de Lancement RTX",
    platform: "Multi-Plateforme",
    results: "220M+ impressions, augmentation de 40% de l'engagement",
    strategy: "NVIDIA a révolutionné sa stratégie de lancement de produits en créant une expérience numérique immersive sur toutes les plateformes sociales. Le lancement RTX combinait des démonstrations époustouflantes de ray tracing en temps réel, des partenariats avec des influenceurs et des défis interactifs qui ont généré un enthousiasme sans précédent.",
    keyPoints: [
      "Lancement coordonné sur YouTube, Twitter, Instagram et Facebook",
      "Partenariat avec plus de 200 influenceurs gaming pour la création de contenu",
      "Démonstrations interactives de ray tracing que les utilisateurs pouvaient partager",
      "Défis communautaires avec des prix équipés de RTX"
    ],
    icon: <BarChart className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    additionalContent: "Le lancement RTX illustre l'évolution de la stratégie multiplateforme de NVIDIA, allant au-delà des annonces de produits traditionnelles pour créer des expériences interactives et partageables. En coordonnant les messages sur toutes les plateformes, NVIDIA a assuré une communication cohérente tout en adaptant les formats de contenu aux atouts de chaque plateforme. La campagne a atteint un niveau d'engagement record en démontrant la technologie de ray tracing à travers des démos interactives accessibles même aux utilisateurs non techniques, favorisant à la fois la sensibilisation et la compréhension d'innovations techniques complexes."
  },
  {
    id: "youtube",
    title: "Stratégie YouTube",
    platform: "YouTube",
    results: "5,2M d'abonnés, +120M de vues annuelles",
    strategy: "La stratégie YouTube de NVIDIA est passée des annonces de produits à un écosystème de contenu riche comprenant des tutoriels, des histoires d'innovation en coulisses et des entretiens avec des développeurs. Leurs analyses techniques approfondies et leurs explications accessibles sur l'IA ont établi leur leadership d'opinion.",
    keyPoints: [
      "Série régulière 'L'IA Expliquée' décomposant des concepts complexes",
      "Diffusions en direct des principales annonces de produits et conférences",
      "Ateliers techniques et tutoriels pour les développeurs",
      "Guides d'optimisation de jeux avec des démonstrations visuelles impressionnantes"
    ],
    icon: <Youtube className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    additionalContent: "La transformation de la chaîne YouTube de NVIDIA, passant du marketing de produits à une ressource éducative, démontre la puissance d'un contenu axé sur la valeur. En créant des explications digestes de technologies complexes d'IA aux côtés de tutoriels pratiques pour développeurs et joueurs, NVIDIA s'est positionnée comme un leader en matière de connaissances tout en construisant une audience fidèle. Leur série 'L'IA Expliquée' est devenue particulièrement précieuse pour traduire les innovations techniques aux décideurs d'entreprise, tandis que leur contenu axé sur les développeurs a créé une forte communauté d'ambassadeurs techniques."
  },
  {
    id: "instagram",
    title: "Storytelling Visuel",
    platform: "Instagram",
    results: "3,8M d'abonnés, engagement 4x supérieur à la concurrence",
    strategy: "Sur Instagram, NVIDIA a maîtrisé l'art du storytelling visuel grâce à un équilibre minutieux entre esthétique des produits, applications technologiques et aperçus des coulisses de l'innovation. Leur style visuel distinctif combine précision technologique et présentation artistique.",
    keyPoints: [
      "Identité visuelle cohérente avec des accents verts caractéristiques",
      "Présentations régulières d'applications concrètes d'IA et de technologies",
      "Mise en avant d'employés soulignant la diversité des talents",
      "Stories interactives avec sondages et questions sur les tendances technologiques"
    ],
    icon: <Instagram className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    additionalContent: "L'approche Instagram de NVIDIA démontre que même les entreprises technologiques complexes peuvent exceller sur des plateformes axées sur le visuel. Leur stratégie présente une esthétique soigneusement élaborée qui reste cohérente tout en présentant divers types de contenu. En mettant en valeur des applications concrètes de leur technologie plutôt que simplement les produits eux-mêmes, NVIDIA rend des innovations abstraites tangibles et accessibles. Leurs mises en avant d'employés humanisent la marque tout en montrant la diversité des talents qui motivent l'innovation, créant ainsi des connexions émotionnelles avec leur audience."
  },
  {
    id: "twitter",
    title: "Présence sur Twitter/X",
    platform: "Twitter/X",
    results: "2,5M d'abonnés, leader dans les conversations tech",
    strategy: "NVIDIA domine Twitter avec une approche de réponse rapide aux actualités et tendances technologiques. Leur équipe s'engage directement avec les développeurs, répond aux questions des clients en temps réel et participe activement aux conversations tendances sur l'IA, le gaming et l'informatique.",
    keyPoints: [
      "Engagement en temps réel dans les conversations sur l'IA et la technologie",
      "Support direct aux développeurs et gestion de communauté",
      "Réponses rapides et humoristiques aux actualités et tendances du secteur",
      "Partenariats stratégiques avec d'autres marques tech pour amplification"
    ],
    icon: <Twitter className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    additionalContent: "La stratégie Twitter de NVIDIA est centrée sur l'agilité et le leadership conversationnel. Alors que de nombreuses entreprises technologiques utilisent Twitter principalement pour des annonces, NVIDIA a construit une présence dynamique grâce à une participation active aux conversations du secteur et une gestion réactive de la communauté. La capacité de leur équipe sociale à traduire des sujets techniques complexes en contenu accessible, parfois humoristique, leur a donné une voix distinctive dans l'espace technologique. En surveillant continuellement les tendances en IA et en informatique, ils positionnent la marque au centre des conversations les plus importantes du secteur."
  },
  {
    id: "facebook",
    title: "Construction Communautaire",
    platform: "Facebook",
    results: "7M+ membres dans les groupes officiels",
    strategy: "NVIDIA a exploité Facebook pour construire des communautés dédiées autour de produits et technologies spécifiques. Leurs groupes de développeurs, communautés de gaming et forums de discussion sur l'IA ont créé des écosystèmes précieux qui génèrent du bouche-à-oreille organique et de la fidélité à la marque.",
    keyPoints: [
      "Groupes dédiés pour développeurs, joueurs et chercheurs en IA",
      "Sessions régulières 'Questions-Réponses' avec les ingénieurs NVIDIA",
      "Défis de contenu généré par les utilisateurs avec mises en avant",
      "Annonces exclusives et accès bêta pour les membres de la communauté"
    ],
    icon: <Facebook className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    additionalContent: "La stratégie communautaire Facebook de NVIDIA démontre la puissance de créer des espaces où les utilisateurs peuvent se connecter non seulement avec la marque mais aussi entre eux. En établissant des groupes dédiés alignés avec des domaines d'intérêt spécifiques, NVIDIA a créé des écosystèmes précieux qui génèrent un engagement continu grâce aux interactions entre pairs. Leurs sessions 'Questions-Réponses' avec des ingénieurs renforcent la crédibilité technique tout en créant des relations directes entre leurs équipes produit et les utilisateurs. La stratégie s'est révélée particulièrement efficace pour construire la fidélité des développeurs, car ces communautés fournissent un soutien pratique, des opportunités de réseautage et un accès anticipé aux nouvelles fonctionnalités."
  }
];

export default function CaseStudies() {
  const { language } = useLanguage();
  const caseStudies = language === 'en' ? caseStudiesEn : caseStudiesFr;
  
  return (
    <section id="case-studies" className="section-padding bg-nvidia-light py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {language === 'en' ? 'Social Media Success Stories' : 'Réussites sur les Médias Sociaux'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === 'en' 
              ? 'Exploring NVIDIA\'s most effective social media campaigns and platform-specific strategies'
              : 'Exploration des campagnes et stratégies les plus efficaces de NVIDIA sur les médias sociaux'}
          </p>
        </div>

        <Tabs defaultValue="rtx" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {caseStudies.map((study) => (
              <TabsTrigger key={study.id} value={study.id} className="flex items-center gap-2">
                {study.icon}
                <span className="hidden md:inline">{study.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {caseStudies.map((study) => (
            <TabsContent key={study.id} value={study.id}>
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 animate-fade-in">
                <div className="lg:col-span-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      {study.icon}
                      <h3 className="text-2xl font-bold">{study.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-nvidia-light p-3 rounded">
                        <p className="text-sm font-medium text-muted-foreground">
                          {language === 'en' ? 'Platform' : 'Plateforme'}
                        </p>
                        <p className="font-medium">{study.platform}</p>
                      </div>
                      <div className="bg-nvidia-light p-3 rounded md:col-span-2">
                        <p className="text-sm font-medium text-muted-foreground">
                          {language === 'en' ? 'Results' : 'Résultats'}
                        </p>
                        <p className="font-medium">{study.results}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">{language === 'en' ? 'Strategy' : 'Stratégie'}</h4>
                      <p>{study.strategy}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">{language === 'en' ? 'Key Components' : 'Composants Clés'}</h4>
                      <ul className="space-y-2">
                        {study.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-nvidia-green mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">{language === 'en' ? 'In-Depth Analysis' : 'Analyse Approfondie'}</h4>
                      <p className="text-muted-foreground">{study.additionalContent}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4">
                        {language === 'en' ? 'Implementation Highlights' : 'Points Forts de l\'implémentation'}
                      </h4>
                      <p className="text-muted-foreground mb-6">
                        {language === 'en' 
                          ? 'NVIDIA\'s comprehensive approach to this platform includes detailed performance tracking, content optimization, and audience segmentation.'
                          : 'L\'approche complète de NVIDIA pour cette plateforme comprend un suivi détaillé des performances, l\'optimisation du contenu et la segmentation de l\'audience.'}
                      </p>
                      <Button variant="outline" className="flex items-center gap-1 mt-auto">
                        {language === 'en' ? 'Explore Full Case Study' : 'Explorer l\'étude de cas complète'}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
