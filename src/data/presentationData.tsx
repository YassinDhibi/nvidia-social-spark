import { teamMembers } from '@/components/TeamSection';
import { ReactNode } from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin, TrendingUp } from "lucide-react";

export type PresentationContent = {
  title: string;
  year: string;
  presenter: any;
  content: ReactNode;
  keyPoints: string[];
  image: string;
  videoUrl: string;
  additionalImages?: string[];
  fullBio?: string;
  platform?: string;
  platformIcon?: ReactNode;
  metrics?: {
    followers?: string;
    engagement?: string;
    reach?: string;
    contentType?: string;
  };
}

// Event IDs matching timeline years
export const presentationData: Record<string, PresentationContent> = {
  "2006": {
    title: "Facebook Marketing Beginnings",
    year: "2006",
    presenter: teamMembers[1], // Seif
    platform: "Facebook",
    platformIcon: <Facebook className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          In 2006, NVIDIA made its first strategic move into social media by establishing a presence on Facebook as the platform was just opening to the public beyond college campuses. This early adoption gave NVIDIA an advantage in connecting directly with technology enthusiasts and early adopters.
        </p>
        <p className="mb-4">
          Our research shows that NVIDIA's initial Facebook strategy focused on creating specialized groups and pages targeting gaming enthusiasts and graphics professionals. The company recognized that these technical audiences would benefit from direct interaction with product managers and engineers.
        </p>
        <p>
          By establishing authentic connections with core user communities, NVIDIA built a foundation of trust and engagement that would later evolve into one of the most sophisticated social media strategies in the technology industry. The company's early posts focused primarily on product updates, driver releases, and technical specifications—reflecting the platform's initially text-heavy format.
        </p>
      </div>
    ),
    keyPoints: [
      "Early Facebook adoption before competitors established presence",
      "Creation of specialized groups targeting technical audiences",
      "Direct connection between product teams and users through comments",
      "Text-focused content strategy suited to early Facebook functionality"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/UkC_iT-RRKc", // Facebook Marketing Strategy
    additionalImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "12,500 (by end of 2006)",
      engagement: "3.2% average engagement rate",
      reach: "Primarily US and European technical audiences",
      contentType: "Product announcements, driver releases, technical Q&As"
    },
    fullBio: "Seif Shell led the analysis of NVIDIA's early Facebook strategy, examining how the company built its initial social community from the ground up. His research uncovered how NVIDIA's approach differed from competitors by focusing on deep technical engagement rather than broad consumer marketing. By analyzing archived posts, comment threads, and interview data from early social media team members, Seif documents how NVIDIA established authentic connections with their most dedicated users through this emerging platform. His findings highlight that while modest in scale compared to later efforts, this early Facebook presence established important principles that would guide NVIDIA's social media approach across all future platforms."
  },
  "2010": {
    title: "YouTube Strategy Launch",
    year: "2010",
    presenter: teamMembers[0], // Rayen (corrected position)
    platform: "YouTube",
    platformIcon: <Youtube className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          In 2010, NVIDIA made a significant expansion of its social media strategy by launching a comprehensive YouTube presence. Our research reveals that this move was driven by recognition that visual demonstrations were essential for communicating the value of graphics technology and complex GPU capabilities.
        </p>
        <p className="mb-4">
          The NVIDIA GeForce YouTube channel was established with a clear content strategy focusing on three core content types: product demonstrations, technology explanations, and gaming performance showcases. This approach allowed NVIDIA to leverage YouTube's growing importance as both an entertainment platform and a search engine for technical information.
        </p>
        <p>
          Our analysis shows that NVIDIA's YouTube strategy was differentiated by its investment in high production values and technical accuracy, creating content that served both marketing and educational purposes. The company's video content established NVIDIA engineers and product managers as accessible experts, building credibility with both gaming and professional audiences.
        </p>
      </div>
    ),
    keyPoints: [
      "Established dedicated NVIDIA GeForce YouTube channel",
      "Developed three-part content strategy: demos, explanations, and gaming showcases",
      "Invested in high-quality production to differentiate from competitors",
      "Used video content to humanize the brand through engineer and developer features"
    ],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/lFUXwoWZ8jM", // YouTube Marketing Strategy
    additionalImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "325,000 subscribers by end of 2012",
      engagement: "4.7% average comment rate, 9.2% average like rate",
      reach: "Expanded to global audience, particularly strong in Asia-Pacific",
      contentType: "Technical demonstrations, gaming benchmarks, developer interviews"
    },
    fullBio: "Mohamed Rayen Bouquery's research on NVIDIA's YouTube strategy explores how the company built one of technology's most successful video channels through careful content planning and production excellence. His analysis tracks the evolution from simple product demonstrations to sophisticated content series that built audience loyalty and established NVIDIA as a thought leader. Through interviews with NVIDIA's video production team and analysis of hundreds of videos, Mohamed documents how the company used metrics and audience feedback to continuously refine its approach. His findings highlight NVIDIA's innovative use of YouTube not just for marketing but as a technical resource, creating sustained value that transcended product cycles and built long-term community engagement."
  },
  "2014": {
    title: "Twitter Engagement Growth",
    year: "2014",
    presenter: teamMembers[2], // Moadh (corrected position)
    platform: "Twitter",
    platformIcon: <Twitter className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          By 2014, Twitter had emerged as a critical platform for real-time communication and customer engagement. Our research indicates that NVIDIA implemented a sophisticated Twitter strategy that went beyond simple announcements to create a dynamic presence that drove both engagement and customer support.
        </p>
        <p className="mb-4">
          NVIDIA's approach to Twitter centered on rapid response and authentic conversation. The company established a dedicated social media team that could engage with customers, share breaking news, and coordinate with product teams to address technical concerns in real-time. This strategy positioned NVIDIA as unusually responsive and transparent compared to competitors.
        </p>
        <p>
          Particularly notable was NVIDIA's use of Twitter during product launches and major events like the Consumer Electronics Show and Computex. Our analysis shows that coordinated tweeting strategies during these periods significantly amplified NVIDIA's presence beyond the physical events, reaching global audiences with near-instant updates and responding to questions as they emerged.
        </p>
      </div>
    ),
    keyPoints: [
      "Developed rapid-response customer support protocol on Twitter",
      "Created event amplification strategy for trade shows and product launches",
      "Established distinct voice and tone guidelines for authentic engagement",
      "Implemented real-time monitoring and analytics for performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/gxuJnRWz7dQ", // Twitter for Business
    additionalImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "780,000 by end of 2014",
      engagement: "2.8% engagement rate (industry average: 0.7%)",
      reach: "Global audience with strong developer penetration",
      contentType: "Real-time updates, customer support, event coverage, technical announcements"
    },
    fullBio: "Moadh Hannechi's analysis of NVIDIA's Twitter strategy examines how the company transformed the platform from a basic announcement channel to a sophisticated engagement tool. Using advanced natural language processing on thousands of tweets and replies, Moadh quantifies how NVIDIA's conversation approach resulted in significantly higher engagement metrics than competitors. His research documents the company's innovative use of Twitter for customer support, breaking down response times and resolution rates across different types of queries. Moadh's work highlights how NVIDIA's rapid-response approach fundamentally changed customer expectations for technology companies on social media, establishing new industry benchmarks for transparency and authenticity."
  },
  "2016": {
    title: "Instagram Visual Storytelling",
    year: "2016",
    presenter: teamMembers[2], // Moadh
    platform: "Instagram",
    platformIcon: <Instagram className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          In 2016, NVIDIA made a strategic move to expand its social media presence to Instagram, recognizing the platform's growing importance for visual storytelling and its appeal to younger audiences. Our research shows that NVIDIA developed a distinctive Instagram strategy that highlighted the visual impact of its technology in ways that differed significantly from its approach on other platforms.
        </p>
        <p className="mb-4">
          NVIDIA's Instagram content strategy focused on four key categories: product aesthetics, behind-the-scenes glimpses of engineering and design processes, user-generated content showcasing NVIDIA-powered setups, and visualizations of complex data and AI concepts. This diverse approach allowed NVIDIA to communicate both the tangible and conceptual aspects of its technology.
        </p>
        <p>
          Particularly innovative was NVIDIA's use of Instagram to humanize the brand by featuring employee stories and workspace tours. Our analysis indicates that this content generated significantly higher engagement than product-focused posts, helping transform perceptions of NVIDIA from a hardware manufacturer to an innovation-driven culture.
        </p>
      </div>
    ),
    keyPoints: [
      "Lancement d'une présence Instagram avec des directives d'identité visuelle distinctes",
      "Création de quatre piliers de contenu: produits, coulisses, configurations utilisateurs et visualisation",
      "Utilisation des Stories Instagram pour la couverture d'événements et les teasers d'annonces",
      "Mise en œuvre d'un programme de promotion par les employés pour étendre la portée organique"
    ],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/bhHrXcG8-Xo", // Instagram Marketing
    additionalImages: [
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "425 000 à la fin de 2017",
      engagement: "Taux d'engagement moyen de 5,3% (2x la moyenne de l'industrie)",
      reach: "Démographie plus jeune que sur les autres plateformes (65% moins de 35 ans)",
      contentType: "Photographie de produits, coulisses, présentations d'employés, histoires visuelles de données"
    },
    fullBio: "La recherche de Moadh Hannechi sur la stratégie Instagram de NVIDIA documente comment l'entreprise a construit une présence visuelle distinctive sur une plateforme qui semblait initialement difficile pour une entreprise de matériel et de technologie. Par une analyse visuelle détaillée de centaines de publications et d'histoires, Moadh identifie les techniques visuelles spécifiques et les stratégies de contenu qui ont permis à NVIDIA de se démarquer dans une plateforme axée sur l'esthétique. Ses découvertes révèlent comment NVIDIA a réussi à traduire des concepts techniques complexes en contenu visuel attrayant, notamment dans l'explication de l'IA et la visualisation de données. La recherche examine également comment l'approche Instagram de NVIDIA différait des concurrents en mettant l'accent sur la culture organisationnelle et les histoires d'employés, créant une connexion émotionnelle avec les publics au-delà des spécifications de produits."
  },
  "2019": {
    title: "LinkedIn B2B Strategy",
    year: "2019",
    presenter: teamMembers[3], // Yassin
    platform: "LinkedIn",
    platformIcon: <Linkedin className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          By 2019, NVIDIA had established a strong consumer-facing presence across multiple social platforms, but our research shows that the company recognized the need to strengthen its business-to-business communication as AI and data center applications became increasingly important revenue drivers. LinkedIn became the centerpiece of this B2B strategy pivot.
        </p>
        <p className="mb-4">
          NVIDIA developed a sophisticated LinkedIn approach that positioned the company as an enterprise technology leader rather than just a component supplier. The content strategy centered on thought leadership articles, white papers, case studies, and executive perspectives that addressed business challenges rather than technical specifications.
        </p>
        <p>
          Particularly effective was NVIDIA's approach to showcasing customer success stories across diverse industries—from healthcare and financial services to automotive and retail. Our analysis indicates that this industry-specific content performed significantly better than general product announcements, driving higher-quality leads and supporting NVIDIA's enterprise sales efforts.
        </p>
      </div>
    ),
    keyPoints: [
      "Développement d'une stratégie de contenu B2B distincte pour LinkedIn focused sur la valeur d'entreprise",
      "Création de pistes de contenu spécifiques à l'industrie abordant les défis du marché vertical",
      "Positionnement des dirigeants comme leaders d'opinion à travers des articles signés et des interviews",
      "Mise en œuvre d'une stratégie de génération de leads à travers du contenu protégé et des promotions de webinaires"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/k7MtMbIIFg4", // LinkedIn Business Strategy
    additionalImages: [
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "1.2 million by end of 2019",
      engagement: "2.7% engagement rate on thought leadership content",
      reach: "C-suite and senior IT decision-makers at enterprise companies",
      contentType: "White papers, case studies, executive perspectives, industry solutions"
    },
    fullBio: "Yassin Dhibi's analysis of NVIDIA's LinkedIn strategy examines how the company successfully pivoted from a primarily consumer-facing brand to establishing credibility in enterprise technology circles. Through detailed content analysis and interview data, Yassin documents how NVIDIA's approach differed from traditional B2B technology marketing by emphasizing business outcomes rather than technical specifications. His research provides valuable insights into NVIDIA's executive positioning strategy, tracking how company leaders were systematically established as thought leaders in artificial intelligence, data science, and enterprise computing. Yassin's findings demonstrate how this LinkedIn-centered approach directly supported NVIDIA's business transformation, correlating social engagement metrics with enterprise revenue growth and market perception shifts."
  },
  "2023": {
    title: "Multi-Platform AI Integration",
    year: "2023",
    presenter: teamMembers[0], // Rayen
    platform: "Cross-Platform",
    platformIcon: <TrendingUp className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          By 2023, NVIDIA had established sophisticated strategies across all major social platforms, but our research reveals that the company's most significant innovation was in cross-platform integration. As AI emerged as the dominant technology narrative, NVIDIA implemented a coordinated approach that positioned the company at the center of this conversation across all channels.
        </p>
        <p className="mb-4">
          This integrated strategy leveraged each platform's strengths while maintaining consistent messaging: LinkedIn for business applications of AI, Twitter for real-time updates on AI breakthroughs, YouTube for in-depth technical explanations, Instagram for visual representations of AI concepts, and Facebook for community building among developers and researchers.
        </p>
        <p>
          Particularly effective was NVIDIA's approach to major AI announcements, with precisely choreographed content deployment across platforms to maximize impact and engagement. Our analysis shows that this coordinated approach resulted in NVIDIA dominating AI-related conversations even when compared to companies with significantly larger overall social media followings.
        </p>
      </div>
    ),
    keyPoints: [
      "Developed cross-platform content strategy with platform-specific adaptations",
      "Implemented central messaging framework ensuring consistency across channels",
      "Created rapid-response system to amplify AI research breakthroughs using NVIDIA technology",
      "Positioned CEO Jensen Huang as the face of AI innovation across all platforms"
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/3hk37hj5tjs", // Multi-Platform Social Media Strategy
    additionalImages: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "Over 15 million combined across all platforms",
      engagement: "8.3% average engagement on AI-related content",
      reach: "Global audience across technical, business, and consumer segments",
      contentType: "AI research, product applications, development resources, thought leadership"
    },
    fullBio: "Mohamed Rayen Bouquery's comprehensive analysis of NVIDIA's integrated social media approach examines how the company achieved unprecedented dominance of AI-related conversations across all major platforms. Using advanced topic modeling and influence mapping techniques, Rayen documents how NVIDIA successfully positioned itself at the center of AI discussions regardless of platform or audience segment. His research reveals the sophisticated coordination systems NVIDIA implemented to ensure consistent messaging while adapting content formats to each platform's unique characteristics. Rayen's findings demonstrate how this integrated approach delivered measurable business results, correlating social media conversation dominance with NVIDIA's extraordinary stock performance and market position as the definitive AI company of 2023."
  }
};

// French language version
export const presentationDataFr: Record<string, PresentationContent> = {
  "2006": {
    title: "Débuts du Marketing sur Facebook",
    year: "2006",
    presenter: teamMembers[1], // Seif
    platform: "Facebook",
    platformIcon: <Facebook className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          En 2006, NVIDIA a fait son premier mouvement stratégique dans les médias sociaux en établissant une présence sur Facebook alors que la plateforme s'ouvrait tout juste au public au-delà des campus universitaires. Cette adoption précoce a donné à NVIDIA un avantage pour se connecter directement avec les passionnés de technologie et les premiers utilisateurs.
        </p>
        <p className="mb-4">
          Nos recherches montrent que la stratégie initiale de NVIDIA sur Facebook s'est concentrée sur la création de groupes et de pages spécialisés ciblant les passionnés de jeux et les professionnels de l'infographie. L'entreprise a reconnu que ces audiences techniques bénéficieraient d'une interaction directe avec les chefs de produit et les ingénieurs.
        </p>
        <p>
          En établissant des connexions authentiques avec les communautés d'utilisateurs de base, NVIDIA a construit une fondation de confiance et d'engagement qui évoluerait plus tard en l'une des stratégies de médias sociaux les plus sophistiquées de l'industrie technologique. Les premiers posts de l'entreprise se concentraient principalement sur les mises à jour de produits, les sorties de pilotes et les spécifications techniques—reflétant le format initialement axé sur le texte de la plateforme.
        </p>
      </div>
    ),
    keyPoints: [
      "Adoption précoce de Facebook avant l'établissement de la présence des concurrents",
      "Création de groupes spécialisés ciblant des audiences techniques",
      "Connexion directe entre les équipes produits et les utilisateurs via les commentaires",
      "Stratégie de contenu axée sur le texte adaptée aux premières fonctionnalités de Facebook"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/UkC_iT-RRKc", // Updated with working video
    additionalImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "12 500 (fin 2006)",
      engagement: "Taux d'engagement moyen de 3,2%",
      reach: "Principalement des audiences techniques américaines et européennes",
      contentType: "Annonces de produits, sorties de pilotes, Q&R techniques"
    },
    fullBio: "Seif Shell a dirigé l'analyse de la première stratégie Facebook de NVIDIA, examinant comment l'entreprise a construit sa communauté sociale initiale à partir de zéro. Sa recherche a révélé comment l'approche de NVIDIA différait des concurrents en se concentrant sur l'engagement technique approfondi plutôt que sur le marketing grand public. En analysant les publications archivées, les fils de commentaires et les données d'entretiens avec les premiers membres de l'équipe de médias sociaux, Seif documente comment NVIDIA a établi des connexions authentiques avec ses utilisateurs les plus dévoués grâce à cette plateforme émergente. Ses résultats soulignent que, bien que modeste en termes d'échelle par rapport aux efforts ultérieurs, cette première présence sur Facebook a établi des principes importants qui guideraient l'approche des médias sociaux de NVIDIA sur toutes les futures plateformes."
  },
  "2010": {
    title: "Lancement de la Stratégie YouTube",
    year: "2010",
    presenter: teamMembers[0], // Changed from [2] to [0] - now Rayen
    platform: "YouTube",
    platformIcon: <Youtube className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          En 2010, NVIDIA a considérablement étendu sa stratégie de médias sociaux en lançant une présence complète sur YouTube. Nos recherches révèlent que cette décision a été motivée par la reconnaissance que les démonstrations visuelles étaient essentielles pour communiquer la valeur de la technologie graphique et les capacités complexes des GPU.
        </p>
        <p className="mb-4">
          La chaîne YouTube NVIDIA GeForce a été établie avec une stratégie de contenu claire se concentrant sur trois types de contenu principaux: les démonstrations de produits, les explications technologiques et les présentations de performances de jeu. Cette approche a permis à NVIDIA de tirer parti de l'importance croissante de YouTube en tant que plateforme de divertissement et moteur de recherche pour les informations techniques.
        </p>
        <p>
          Notre analyse montre que la stratégie YouTube de NVIDIA se distinguait par son investissement dans des valeurs de production élevées et une précision technique, créant du contenu qui servait à la fois des objectifs marketing et éducatifs. Le contenu vidéo de l'entreprise a établi les ingénieurs et chefs de produit de NVIDIA comme des experts accessibles, créant de la crédibilité auprès des audiences de jeu et professionnelles.
        </p>
      </div>
    ),
    keyPoints: [
      "Établissement de la chaîne YouTube NVIDIA GeForce dédiée",
      "Développement d'une stratégie de contenu en trois parties: démos, explications et présentations de jeux",
      "Investissement dans une production de haute qualité pour se différencier des concurrents",
      "Utilisation du contenu vidéo pour humaniser la marque à travers des présentations d'ingénieurs et développeurs"
    ],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/lFUXwoWZ8jM", // Updated with working video
    additionalImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "325 000 abonnés fin 2012",
      engagement: "Taux de commentaires moyen de 4,7%, taux de like moyen de 9,2%",
      reach: "Élargissement à une audience mondiale, particulièrement forte dans la région Asie-Pacifique",
      contentType: "Démonstrations techniques, benchmarks de jeux, interviews de développeurs"
    },
    fullBio: "La recherche de Mohamed Rayen Bouquery sur la stratégie YouTube de NVIDIA explore comment l'entreprise a construit l'une des chaînes vidéo les plus réussies de la technologie grâce à une planification soigneuse du contenu et à l'excellence de la production. Son analyse suit l'évolution des simples démonstrations de produits aux séries de contenu sophistiquées qui ont fidélisé l'audience et établi NVIDIA comme un leader d'opinion. À travers des interviews avec l'équipe de production vidéo de NVIDIA et l'analyse de centaines de vidéos, Mohamed documente comment l'entreprise a utilisé les métriques et les retours d'audience pour affiner continuellement son approche. Ses résultats soulignent l'utilisation innovante de YouTube par NVIDIA non seulement pour le marketing mais comme une ressource technique, créant une valeur durable qui transcendait les cycles de produits et construisait un engagement communautaire à long terme."
  },
  "2014": {
    title: "Croissance de l'Engagement sur Twitter",
    year: "2014",
    presenter: teamMembers[2], // Changed from [0] to [2] - now Moadh
    platform: "Twitter",
    platformIcon: <Twitter className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          En 2014, Twitter était devenu une plateforme essentielle pour la communication en temps réel et l'engagement client. Nos recherches indiquent que NVIDIA a mis en œuvre une stratégie Twitter sophistiquée qui allait au-delà des simples annonces pour créer une présence dynamique qui stimulait à la fois l'engagement et le support client.
        </p>
        <p className="mb-4">
          L'approche de NVIDIA sur Twitter était centrée sur la réponse rapide et la conversation authentique. L'entreprise a établi une équipe dédiée aux médias sociaux qui pouvait interagir avec les clients, partager les dernières nouvelles et coordonner avec les équipes produit pour répondre aux préoccupations techniques en temps réel. Cette stratégie a positionné NVIDIA comme inhabituellement réactive et transparente par rapport aux concurrents.
        </p>
        <p>
          L'utilisation de Twitter par NVIDIA pendant les lancements de produits et lors d'événements majeurs comme le Consumer Electronics Show et Computex était particulièrement notable. Notre analyse montre que les stratégies de tweets coordonnées durant ces périodes ont considérablement amplifié la présence de NVIDIA au-delà des événements physiques, atteignant des audiences mondiales avec des mises à jour quasi instantanées et répondant aux questions dès leur apparition.
        </p>
      </div>
    ),
    keyPoints: [
      "Développement d'un protocole de support client à réponse rapide sur Twitter",
      "Création d'une stratégie d'amplification des événements pour les salons professionnels et lancements de produits",
      "Établissement de directives distinctes de voix et de ton pour un engagement authentique",
      "Mise en œuvre de surveillance et d'analyses en temps réel pour l'optimisation des performances"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/gxuJnRWz7dQ", // Updated with working video
    additionalImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "780 000 fin 2014",
      engagement: "Taux d'engagement de 2,8% (moyenne de l'industrie: 0,7%)",
      reach: "Audience mondiale avec forte pénétration des développeurs",
      contentType: "Mises à jour en temps réel, support client, couverture d'événements, annonces techniques"
    },
    fullBio: "L'analyse de Moadh Hannechi sur la stratégie Twitter de NVIDIA examine comment l'entreprise a transformé la plateforme d'un simple canal d'annonce en un outil d'engagement sophistiqué. En utilisant le traitement avancé du langage naturel sur des milliers de tweets et de réponses, Moadh quantifie comment l'approche conversationnelle de NVIDIA a entraîné des métriques d'engagement significativement plus élevées que les concurrents. Sa recherche documente l'utilisation innovante de Twitter par l'entreprise pour le support client, en détaillant les temps de réponse et les taux de résolution pour différents types de demandes. Le travail de Moadh souligne comment l'approche de réponse rapide de NVIDIA a fondamentalement changé les attentes des clients envers les entreprises technologiques sur les médias sociaux, établissant de nouvelles références industrielles pour la transparence et l'authenticité."
  },
  "2016": {
    title: "Narration Visuelle sur Instagram",
    year: "2016",
    presenter: teamMembers[2], // Moadh
    platform: "Instagram",
    platformIcon: <Instagram className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          En 2016, NVIDIA a fait un mouvement stratégique pour étendre sa présence sur les médias sociaux à Instagram, reconnaissant l'importance croissante de la plateforme pour la narration visuelle et son attrait pour les audiences plus jeunes. Nos recherches montrent que NVIDIA a développé une stratégie Instagram distinctive qui mettait en évidence l'impact visuel de sa technologie d'une manière significativement différente de son approche sur d'autres plateformes.
        </p>
        <p className="mb-4">
          La stratégie de contenu Instagram de NVIDIA se concentrait sur quatre catégories clés: l'esthétique des produits, des aperçus en coulisses des processus d'ingénierie et de conception, du contenu généré par les utilisateurs présentant des configurations alimentées par NVIDIA, et des visualisations de données complexes et de concepts d'IA. Cette approche diversifiée a permis à NVIDIA de communiquer à la fois les aspects tangibles et conceptuels de sa technologie.
        </p>
        <p>
          L'utilisation d'Instagram par NVIDIA pour humaniser la marque en présentant des histoires d'employés et des visites d'espaces de travail était particulièrement innovante. Notre analyse indique que ce contenu a généré un engagement significativement plus élevé que les posts centrés sur les produits, aidant à transformer les perceptions de NVIDIA d'un fabricant de matériel à une culture axée sur l'innovation.
        </p>
      </div>
    ),
    keyPoints: [
      "Lancement d'une présence Instagram avec des directives d'identité visuelle distinctes",
      "Création de quatre piliers de contenu: produits, coulisses, configurations utilisateurs et visualisation",
      "Utilisation des Stories Instagram pour la couverture d'événements et les teasers d'annonces",
      "Mise en œuvre d'un programme de promotion par les employés pour étendre la portée organique"
    ],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/bhHrXcG8-Xo", // Instagram Marketing
    additionalImages: [
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "425 000 à la fin de 2017",
      engagement: "Taux d'engagement moyen de 5,3% (2x la moyenne de l'industrie)",
      reach: "Démographie plus jeune que sur les autres plateformes (65% moins de 35 ans)",
      contentType: "Photographie de produits, coulisses, présentations d'employés, histoires visuelles de données"
    },
    fullBio: "La recherche de Moadh Hannechi sur la stratégie Instagram de NVIDIA documente comment l'entreprise a construit une présence visuelle distinctive sur une plateforme qui semblait initialement difficile pour une entreprise de matériel et de technologie. Par une analyse visuelle détaillée de centaines de publications et d'histoires, Moadh identifie les techniques visuelles spécifiques et les stratégies de contenu qui ont permis à NVIDIA de se démarquer dans une plateforme axée sur l'esthétique. Ses découvertes révèlent comment NVIDIA a réussi à traduire des concepts techniques complexes en contenu visuel attrayant, notamment dans l'explication de l'IA et la visualisation de données. La recherche examine également comment l'approche Instagram de NVIDIA différait des concurrents en mettant l'accent sur la culture organisationnelle et les histoires d'employés, créant une connexion émotionnelle avec les publics au-delà des spécifications de produits."
  },
  "2019": {
    title: "Stratégie B2B sur LinkedIn",
    year: "2019",
    presenter: teamMembers[3], // Yassin
    platform: "LinkedIn",
    platformIcon: <Linkedin className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          En 2019, NVIDIA avait établi une forte présence orientée consommateur sur plusieurs plateformes sociales, mais nos recherches montrent que l'entreprise a reconnu le besoin de renforcer sa communication business-to-business alors que l'IA et les applications de centres de données devenaient des moteurs de revenus de plus en plus importants. LinkedIn est devenu la pièce maîtresse de ce pivot stratégique B2B.
        </p>
        <p className="mb-4">
          NVIDIA a développé une approche LinkedIn sophistiquée qui positionnait l'entreprise comme un leader technologique d'entreprise plutôt que comme un simple fournisseur de composants. La stratégie de contenu était centrée sur des articles de leadership de pensée, des livres blancs, des études de cas et des perspectives de dirigeants qui abordaient les défis commerciaux plutôt que les spécifications techniques.
        </p>
        <p>
          L'approche de NVIDIA pour présenter des histoires de réussite clients dans diverses industries—de la santé et des services financiers à l'automobile et au commerce de détail—était particulièrement efficace. Notre analyse indique que ce contenu spécifique à l'industrie a obtenu des performances significativement meilleures que les annonces générales de produits, générant des prospects de meilleure qualité et soutenant les efforts de vente d'entreprise de NVIDIA.
        </p>
      </div>
    ),
    keyPoints: [
      "Développement d'une stratégie de contenu B2B distincte pour LinkedIn axée sur la valeur d'entreprise",
      "Création de pistes de contenu spécifiques à l'industrie abordant les défis du marché vertical",
      "Positionnement des dirigeants comme leaders d'opinion à travers des articles signés et des interviews",
      "Mise en œuvre d'une stratégie de génération de leads à travers du contenu protégé et des promotions de webinaires"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/k7MtMbIIFg4", // LinkedIn Business Strategy
    additionalImages: [
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "1,2 million fin 2019",
      engagement: "Taux d'engagement de 2,7% sur le contenu de leadership d'opinion",
      reach: "PDG et décideurs informatiques seniors dans les entreprises",
      contentType: "Livres blancs, études de cas, perspectives de dirigeants, solutions industrielles"
    },
    fullBio: "L'analyse de Yassin Dhibi sur la stratégie LinkedIn de NVIDIA examine comment l'entreprise a réussi à passer d'une marque principalement orientée consommateur à l'établissement d'une crédibilité dans les cercles de technologie d'entreprise. Grâce à une analyse détaillée du contenu et des données d'entretien, Yassin documente comment l'approche de NVIDIA différait du marketing technologique B2B traditionnel en mettant l'accent sur les résultats commerciaux plutôt que sur les spécifications techniques. Sa recherche fournit des informations précieuses sur la stratégie de positionnement des dirigeants de NVIDIA, suivant comment les leaders de l'entreprise ont été systématiquement établis comme des leaders d'opinion en intelligence artificielle, science des données et informatique d'entreprise. Les découvertes de Yassin démontrent comment cette approche centrée sur LinkedIn a directement soutenu la transformation commerciale de NVIDIA, en corrélant les métriques d'engagement social avec la croissance des revenus d'entreprise et les changements de perception du marché."
  },
  "2023": {
    title: "Intégration IA Multi-Plateforme",
    year: "2023",
    presenter: teamMembers[0], // Rayen
    platform: "Multi-Plateforme",
    platformIcon: <TrendingUp className="h-6 w-6" />,
    content: (
      <div>
        <p className="mb-4">
          En 2023, NVIDIA avait établi des stratégies sophistiquées sur toutes les principales plateformes sociales, mais nos recherches révèlent que l'innovation la plus significative de l'entreprise était dans l'intégration entre plateformes. Alors que l'IA émergeait comme le récit technologique dominant, NVIDIA a mis en œuvre une approche coordonnée qui a positionné l'entreprise au centre de cette conversation sur tous les canaux.
        </p>
        <p className="mb-4">
          Cette stratégie intégrée tirait parti des forces de chaque plateforme tout en maintenant une messagerie cohérente: LinkedIn pour les applications commerciales de l'IA, Twitter pour les mises à jour en temps réel sur les percées en IA, YouTube pour des explications techniques approfondies, Instagram pour les représentations visuelles des concepts d'IA, et Facebook pour la construction communautaire parmi les développeurs et chercheurs.
        </p>
        <p>
          L'approche de NVIDIA pour les annonces majeures d'IA, avec un déploiement de contenu précisément chorégraphié sur les plateformes pour maximiser l'impact et l'engagement, était particulièrement efficace. Notre analyse montre que cette approche coordonnée a permis à NVIDIA de dominer les conversations liées à l'IA même par rapport à des entreprises avec des suivis de médias sociaux globalement beaucoup plus importants.
        </p>
      </div>
    ),
    keyPoints: [
      "Développement d'une stratégie de contenu multi-plateforme avec des adaptations spécifiques à chaque plateforme",
      "Mise en œuvre d'un cadre de messagerie central assurant la cohérence entre les canaux",
      "Création d'un système de réponse rapide pour amplifier les percées de recherche en IA utilisant la technologie NVIDIA",
      "Positionnement du PDG Jensen Huang comme le visage de l'innovation en IA sur toutes les plateformes"
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/3hk37hj5tjs", // Multi-Platform Social Media Strategy
    additionalImages: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    ],
    metrics: {
      followers: "Plus de 15 millions combinés sur toutes les plateformes",
      engagement: "Engagement moyen de 8,3% sur le contenu lié à l'IA",
      reach: "Audience mondiale à travers les segments techniques, commerciaux et consommateurs",
      contentType: "Recherche en IA, applications de produits, ressources de développement, leadership de pensée"
    },
    fullBio: "L'analyse complète de Mohamed Rayen Bouquery sur l'approche intégrée des médias sociaux de NVIDIA examine comment l'entreprise a atteint une domination sans précédent des conversations liées à l'IA sur toutes les principales plateformes. En utilisant des techniques avancées de modélisation de sujets et de cartographie d'influence, Rayen documente comment NVIDIA s'est positionnée avec succès au centre des discussions sur l'IA indépendamment de la plateforme ou du segment d'audience. Sa recherche révèle les systèmes de coordination sophistiqués que NVIDIA a mis en œuvre pour assurer une messagerie cohérente tout en adaptant les formats de contenu aux caractéristiques uniques de chaque plateforme. Les découvertes de Rayen démontrent comment cette approche intégrée a livré des résultats commerciaux mesurables, corrélant la domination des conversations sur les médias sociaux avec la performance boursière extraordinaire de NVIDIA et sa position sur le marché comme l'entreprise d'IA par excellence de 2023."
  }
};
