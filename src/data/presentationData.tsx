
// Import team member data to link presenters to timeline events
import { teamMembers } from '@/components/TeamSection';
import { ReactNode } from 'react';

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
}

// Event IDs matching timeline years
export const presentationData: Record<string, PresentationContent> = {
  "2006": {
    title: "Social Media Beginnings",
    year: "2006",
    presenter: teamMembers[0], // Seif Shell
    content: (
      <div>
        <p className="mb-4">
          In 2006, NVIDIA took its first steps into the world of social media, a time when platforms like Facebook were just opening to the public and Twitter was in its infancy. Our analysis shows that NVIDIA's initial strategy focused primarily on reaching tech enthusiasts and early adopters in the gaming community.
        </p>
        <p>
          During this period, NVIDIA maintained a modest but focused presence, sharing product announcements and technical content aimed at building credibility within specialized communities. The company recognized early on that social media could serve as a direct communication channel with their most passionate users.
        </p>
      </div>
    ),
    keyPoints: [
      "Established initial presence on early social platforms",
      "Focused on technical content for specialized audiences",
      "Built foundation for community engagement strategies",
      "Created dedicated forums for GPU enthusiasts and developers"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    ],
    fullBio: "Seif Shell led the analysis of NVIDIA's early social media strategy, with particular focus on how the company established its initial online presence. His research explores how NVIDIA crafted targeted content for technical audiences, emphasizing product capabilities and innovations rather than broad consumer marketing. By analyzing forum engagement patterns and early social platform adoption, Seif demonstrates how NVIDIA built a foundation for what would later become one of tech's most successful community-building strategies. His presentation draws on archived web content, interviews with early NVIDIA community managers, and quantitative analysis of engagement metrics from this formative period."
  },
  "2012": {
    title: "GeForce Community Growth",
    year: "2012",
    presenter: teamMembers[1], // Moadh Hannechi
    content: (
      <div>
        <p className="mb-4">
          By 2012, NVIDIA had successfully positioned its GeForce brand as the premier choice for PC gaming enthusiasts. Our research indicates that the company shifted its social media strategy to build dedicated communities around its core products, particularly the GeForce line of GPUs.
        </p>
        <p>
          This period saw NVIDIA leverage platforms like Facebook, YouTube, and forums to create spaces where gamers could share experiences, troubleshoot issues, and showcase their gaming setups. The GeForce community became a powerful marketing tool, with user-generated content amplifying NVIDIA's message across the gaming ecosystem.
        </p>
      </div>
    ),
    keyPoints: [
      "Expanded social presence with dedicated GeForce channels",
      "Implemented community management strategies",
      "Leveraged user-generated content to increase engagement",
      "Created the GeForce Experience software to connect with users"
    ],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop"
    ],
    fullBio: "Moadh Hannechi's research focuses on NVIDIA's community-building strategies during the critical 2010-2014 period. By analyzing the company's shift toward dedicated brand channels and community management approaches, Moadh demonstrates how NVIDIA transformed passive customers into active brand advocates. His work examines the launch of GeForce Experience software as both a technical utility and social connector, allowing NVIDIA to establish direct relationships with users. Through careful analysis of engagement metrics across multiple platforms, Moadh quantifies how these community investments translated into market share growth and brand loyalty during a highly competitive period in the GPU market. His presentation includes exclusive interviews with GeForce community members and NVIDIA's social media team from this era."
  },
  "2016": {
    title: "AI & Deep Learning Focus",
    year: "2016",
    presenter: teamMembers[2], // Mohamed Rayen Bouquery
    content: (
      <div>
        <p className="mb-4">
          In 2016, NVIDIA made a strategic pivot that would ultimately transform the company's future. Our analysis shows that NVIDIA began to significantly shift its messaging on social media to highlight its work in artificial intelligence and deep learning.
        </p>
        <p>
          This pivotal year marked NVIDIA's emergence as not just a gaming company but as a key player in the AI revolution. The company's social media channels began featuring more content about AI research, partnerships with research institutions, and applications of NVIDIA technology in emerging fields like autonomous vehicles and healthcare.
        </p>
      </div>
    ),
    keyPoints: [
      "Pivoted social content strategy to highlight AI innovations",
      "Featured research partnerships and scientific breakthroughs",
      "Positioned NVIDIA GPUs as essential for deep learning",
      "Created the NVIDIA AI blog and developer resources"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop"
    ],
    fullBio: "Mohamed Rayen Bouquery specializes in analyzing NVIDIA's strategic communications pivot toward AI and deep learning in 2016. His research tracks how the company successfully shifted public perception from a gaming-focused hardware vendor to a key enabler of the AI revolution. Through comprehensive content analysis of NVIDIA's social media presence, blog content, and press releases, Mohamed documents the company's deliberate repositioning strategy. His presentation includes a detailed timeline of key messaging inflection points, visualization of keyword frequency changes across platforms, and case studies of specific campaigns that effectively communicated NVIDIA's AI capabilities to new audience segments including researchers, enterprise IT decision-makers, and investors. Mohamed's analysis provides valuable insights into how companies can use social media to facilitate major brand pivots."
  },
  "2018": {
    title: "RTX Launch Campaign",
    year: "2018",
    presenter: teamMembers[3], // Yassin Dhibi
    content: (
      <div>
        <p className="mb-4">
          The 2018 launch of NVIDIA's RTX technology represented one of the company's most ambitious social media campaigns to date. Our research shows that NVIDIA executed a coordinated, cross-platform strategy that generated unprecedented engagement.
        </p>
        <p>
          Using a combination of influencer partnerships, technical demonstrations, and real-time ray tracing showcases, NVIDIA effectively communicated the revolutionary nature of RTX technology to both gaming enthusiasts and creative professionals. The campaign successfully positioned RTX as the future of graphics.
        </p>
      </div>
    ),
    keyPoints: [
      "Coordinated multi-platform launch strategy for RTX",
      "Partnered with game developers and content creators",
      "Created viral ray-tracing demonstration videos",
      "Established #RTXOn as a recognizable hashtag campaign"
    ],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop"
    ],
    fullBio: "Yassin Dhibi's research provides a comprehensive analysis of NVIDIA's RTX launch campaign of 2018, widely considered one of the most successful product launches in the company's history. Through detailed campaign tracking and engagement analysis across multiple platforms, Yassin demonstrates how NVIDIA created a coordinated social media strategy that generated unprecedented audience excitement. His presentation examines NVIDIA's strategic influencer partnerships, innovative content formats including real-time ray tracing demonstrations, and the viral success of the #RTXOn hashtag campaign. Yassin's work includes proprietary data on engagement metrics, conversion analysis, and a breakdown of how NVIDIA successfully communicated complex technical innovations to both gaming and professional creative audiences. The presentation features exclusive visual materials from the campaign and interviews with key marketing strategists involved in the launch."
  },
  "2021": {
    title: "Crypto & Gaming Boom",
    year: "2021",
    presenter: teamMembers[0], // Seif Shell
    content: (
      <div>
        <p className="mb-4">
          The COVID-19 pandemic and cryptocurrency boom of 2021 created both unprecedented challenges and opportunities for NVIDIA. Our analysis reveals how the company navigated these complex market dynamics through strategic social media communications.
        </p>
        <p>
          With demand for GPUs at all-time highs due to crypto mining and pandemic-driven gaming growth, NVIDIA used social media to address supply concerns, announce new product lines, and maintain consumer goodwill during a period of extreme scarcity. The company's transparent communication approach helped maintain brand loyalty despite product availability issues.
        </p>
      </div>
    ),
    keyPoints: [
      "Addressed supply chain challenges through transparent communication",
      "Created content for both gaming and crypto audiences",
      "Leveraged pandemic gaming surge with stay-at-home content",
      "Used social channels to announce CMP (Crypto Mining Processor) products"
    ],
    image: "https://images.unsplash.com/photo-1621761225528-63d9e994ee4c?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=400&fit=crop"
    ],
    fullBio: "Seif Shell's analysis of NVIDIA's 2021 social media strategy examines how the company navigated the dual challenges of unprecedented demand and severe supply constraints during the pandemic-era GPU shortage. Through comprehensive sentiment analysis and engagement metrics, Seif demonstrates how NVIDIA maintained consumer goodwill despite widespread product availability issues. His research documents the company's strategic pivot to create specialized content for both gaming and cryptocurrency audiences, including the controversial but effective launch of dedicated Crypto Mining Processor (CMP) products. The presentation includes detailed timeline analysis of NVIDIA's communication strategy during critical supply chain disruptions, examples of successful community management during periods of customer frustration, and quantitative analysis of how these efforts impacted brand perception metrics during this challenging period."
  },
  "2023": {
    title: "AI Revolution Leadership",
    year: "2023",
    presenter: teamMembers[1], // Moadh Hannechi
    content: (
      <div>
        <p className="mb-4">
          By 2023, NVIDIA had cemented its position as not just a leader in GPUs but as the backbone of the AI revolution. Our research demonstrates how NVIDIA's social media strategy evolved to capture this pivotal moment in technology.
        </p>
        <p>
          NVIDIA's content across platforms shifted to emphasize its role in generative AI, large language models, and enterprise AI solutions. The company effectively positioned itself at the center of conversations about the future of technology, with CEO Jensen Huang becoming a recognizable thought leader across social channels.
        </p>
      </div>
    ),
    keyPoints: [
      "Dominated AI conversation across all major platforms",
      "Positioned Jensen Huang as a visionary industry leader",
      "Created NVIDIA AI-focused channels and communities",
      "Leveraged GTC (GPU Technology Conference) for major announcements"
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    ],
    fullBio: "Moadh Hannechi's research on NVIDIA's 2023 social media presence analyzes how the company completed its transformation into an AI-first technology leader. Through extensive content analysis across all major platforms, Moadh documents how NVIDIA shifted from technical product marketing to becoming the central voice in conversations about AI's future. His presentation examines the company's strategic elevation of CEO Jensen Huang as a thought leader, the creation of specialized AI developer communities, and the evolution of the GPU Technology Conference (GTC) into a premier AI industry event. Using advanced topic modeling and influence mapping, Moadh quantifies NVIDIA's dominance of AI-related conversations across social platforms and demonstrates how this translated into unprecedented stock performance and market position. The research includes exclusive social listening data tracking industry sentiment toward NVIDIA during this transformative period."
  }
};

// French language version
export const presentationDataFr: Record<string, PresentationContent> = {
  "2006": {
    title: "Débuts des Médias Sociaux",
    year: "2006",
    presenter: teamMembers[0], // Seif Shell
    content: (
      <div>
        <p className="mb-4">
          En 2006, NVIDIA a fait ses premiers pas dans le monde des médias sociaux, à une époque où des plateformes comme Facebook s'ouvraient au public et Twitter en était à ses débuts. Notre analyse montre que la stratégie initiale de NVIDIA était principalement axée sur les passionnés de technologie et les premiers utilisateurs de la communauté des joueurs.
        </p>
        <p>
          Durant cette période, NVIDIA a maintenu une présence modeste mais ciblée, partageant des annonces de produits et du contenu technique visant à établir sa crédibilité au sein de communautés spécialisées. L'entreprise a rapidement compris que les médias sociaux pouvaient servir de canal de communication direct avec ses utilisateurs les plus passionnés.
        </p>
      </div>
    ),
    keyPoints: [
      "Établissement d'une présence initiale sur les premières plateformes sociales",
      "Concentration sur le contenu technique pour des audiences spécialisées",
      "Construction d'une base pour les stratégies d'engagement communautaire",
      "Création de forums dédiés aux enthousiastes de GPU et aux développeurs"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    ],
    fullBio: "Seif Shell a dirigé l'analyse de la stratégie initiale de NVIDIA sur les médias sociaux, en se concentrant particulièrement sur la façon dont l'entreprise a établi sa présence en ligne. Ses recherches explorent comment NVIDIA a créé du contenu ciblé pour des audiences techniques, mettant l'accent sur les capacités et les innovations des produits plutôt que sur un marketing grand public. En analysant les modèles d'engagement des forums et l'adoption précoce des plateformes sociales, Seif démontre comment NVIDIA a posé les bases de ce qui deviendrait l'une des stratégies de construction communautaire les plus réussies du secteur technologique. Sa présentation s'appuie sur des archives de contenu web, des entretiens avec les premiers responsables communautaires de NVIDIA et une analyse quantitative des métriques d'engagement de cette période formatrice."
  },
  "2012": {
    title: "Croissance de la Communauté GeForce",
    year: "2012",
    presenter: teamMembers[1], // Moadh Hannechi
    content: (
      <div>
        <p className="mb-4">
          En 2012, NVIDIA avait réussi à positionner sa marque GeForce comme le choix premier des passionnés de jeux sur PC. Nos recherches indiquent que l'entreprise a modifié sa stratégie de médias sociaux pour construire des communautés dédiées autour de ses produits phares, particulièrement la gamme de GPU GeForce.
        </p>
        <p>
          Cette période a vu NVIDIA exploiter des plateformes comme Facebook, YouTube et des forums pour créer des espaces où les joueurs pouvaient partager leurs expériences, résoudre des problèmes et présenter leurs configurations de jeu. La communauté GeForce est devenue un puissant outil marketing, avec du contenu généré par les utilisateurs amplifiant le message de NVIDIA dans tout l'écosystème du gaming.
        </p>
      </div>
    ),
    keyPoints: [
      "Expansion de la présence sociale avec des canaux dédiés à GeForce",
      "Mise en œuvre de stratégies de gestion communautaire",
      "Exploitation du contenu généré par les utilisateurs pour augmenter l'engagement",
      "Création du logiciel GeForce Experience pour connecter les utilisateurs"
    ],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop"
    ],
    fullBio: "Les recherches de Moadh Hannechi se concentrent sur les stratégies de création communautaire de NVIDIA durant la période critique 2010-2014. En analysant le virage de l'entreprise vers des canaux de marque dédiés et des approches de gestion communautaire, Moadh démontre comment NVIDIA a transformé des clients passifs en défenseurs actifs de la marque. Son travail examine le lancement du logiciel GeForce Experience à la fois comme utilitaire technique et connecteur social, permettant à NVIDIA d'établir des relations directes avec les utilisateurs. Grâce à une analyse minutieuse des métriques d'engagement sur plusieurs plateformes, Moadh quantifie comment ces investissements communautaires se sont traduits par une croissance de parts de marché et une fidélité à la marque pendant une période hautement compétitive sur le marché des GPU. Sa présentation inclut des interviews exclusives avec des membres de la communauté GeForce et l'équipe de médias sociaux de NVIDIA de cette époque."
  },
  "2016": {
    title: "Focus sur l'IA et l'Apprentissage Profond",
    year: "2016",
    presenter: teamMembers[2], // Mohamed Rayen Bouquery
    content: (
      <div>
        <p className="mb-4">
          En 2016, NVIDIA a effectué un pivot stratégique qui transformerait ultimement l'avenir de l'entreprise. Notre analyse montre que NVIDIA a commencé à modifier significativement ses messages sur les médias sociaux pour mettre en avant son travail dans l'intelligence artificielle et l'apprentissage profond.
        </p>
        <p>
          Cette année charnière a marqué l'émergence de NVIDIA non plus simplement comme une entreprise de jeux vidéo, mais comme un acteur clé de la révolution de l'IA. Les canaux de médias sociaux de l'entreprise ont commencé à présenter davantage de contenu sur la recherche en IA, les partenariats avec des institutions de recherche, et les applications de la technologie NVIDIA dans des domaines émergents comme les véhicules autonomes et la santé.
        </p>
      </div>
    ),
    keyPoints: [
      "Réorientation de la stratégie de contenu social pour mettre en avant les innovations en IA",
      "Présentation des partenariats de recherche et des percées scientifiques",
      "Positionnement des GPU NVIDIA comme essentiels pour l'apprentissage profond",
      "Création du blog NVIDIA AI et de ressources pour développeurs"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop"
    ],
    fullBio: "Mohamed Rayen Bouquery se spécialise dans l'analyse du pivot stratégique des communications de NVIDIA vers l'IA et l'apprentissage profond en 2016. Ses recherches suivent comment l'entreprise a réussi à faire évoluer la perception du public, passant d'un fournisseur de matériel axé sur le gaming à un facilitateur clé de la révolution de l'IA. Grâce à une analyse complète du contenu de la présence de NVIDIA sur les médias sociaux, du contenu de blog et des communiqués de presse, Mohamed documente la stratégie délibérée de repositionnement de l'entreprise. Sa présentation comprend une chronologie détaillée des points d'inflexion clés des messages, une visualisation des changements de fréquence des mots-clés sur les plateformes, et des études de cas de campagnes spécifiques qui ont efficacement communiqué les capacités d'IA de NVIDIA à de nouveaux segments d'audience, notamment les chercheurs, les décideurs informatiques d'entreprise et les investisseurs. L'analyse de Mohamed fournit des informations précieuses sur la façon dont les entreprises peuvent utiliser les médias sociaux pour faciliter des pivots majeurs de marque."
  },
  "2018": {
    title: "Campagne de Lancement RTX",
    year: "2018",
    presenter: teamMembers[3], // Yassin Dhibi
    content: (
      <div>
        <p className="mb-4">
          Le lancement en 2018 de la technologie RTX de NVIDIA représentait l'une des campagnes de médias sociaux les plus ambitieuses de l'entreprise à ce jour. Nos recherches montrent que NVIDIA a exécuté une stratégie coordonnée multi-plateforme qui a généré un engagement sans précédent.
        </p>
        <p>
          Utilisant une combinaison de partenariats avec des influenceurs, de démonstrations techniques et de présentations de ray tracing en temps réel, NVIDIA a efficacement communiqué la nature révolutionnaire de la technologie RTX aux passionnés de jeux et aux professionnels créatifs. La campagne a positionné avec succès le RTX comme l'avenir des graphismes.
        </p>
      </div>
    ),
    keyPoints: [
      "Stratégie de lancement multi-plateforme coordonnée pour RTX",
      "Partenariats avec des développeurs de jeux et créateurs de contenu",
      "Création de vidéos virales de démonstration de ray tracing",
      "Établissement de #RTXOn comme une campagne de hashtag reconnaissable"
    ],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop"
    ],
    fullBio: "La recherche de Yassin Dhibi fournit une analyse complète de la campagne de lancement RTX de NVIDIA en 2018, largement considérée comme l'un des lancements de produits les plus réussis de l'histoire de l'entreprise. Grâce à un suivi détaillé de la campagne et à l'analyse de l'engagement sur plusieurs plateformes, Yassin démontre comment NVIDIA a créé une stratégie coordonnée de médias sociaux qui a généré un enthousiasme sans précédent du public. Sa présentation examine les partenariats stratégiques de NVIDIA avec des influenceurs, les formats de contenu innovants, y compris les démonstrations de ray tracing en temps réel, et le succès viral de la campagne de hashtag #RTXOn. Le travail de Yassin comprend des données propriétaires sur les métriques d'engagement, l'analyse de conversion et une décomposition de la façon dont NVIDIA a réussi à communiquer des innovations techniques complexes aux audiences de joueurs et de professionnels créatifs. La présentation présente des documents visuels exclusifs de la campagne et des interviews avec des stratégistes marketing clés impliqués dans le lancement."
  },
  "2021": {
    title: "Boom des Crypto-monnaies et du Gaming",
    year: "2021",
    presenter: teamMembers[0], // Seif Shell
    content: (
      <div>
        <p className="mb-4">
          La pandémie de COVID-19 et le boom des crypto-monnaies de 2021 ont créé à la fois des défis et des opportunités sans précédent pour NVIDIA. Notre analyse révèle comment l'entreprise a navigué dans cette dynamique de marché complexe grâce à des communications stratégiques sur les médias sociaux.
        </p>
        <p>
          Avec une demande de GPU à des niveaux historiques due au minage de crypto-monnaies et à la croissance du gaming pendant la pandémie, NVIDIA a utilisé les médias sociaux pour répondre aux préoccupations d'approvisionnement, annoncer de nouvelles gammes de produits et maintenir la bienveillance des consommateurs pendant une période de rareté extrême. L'approche de communication transparente de l'entreprise a aidé à maintenir la fidélité à la marque malgré les problèmes de disponibilité des produits.
        </p>
      </div>
    ),
    keyPoints: [
      "Réponse aux défis de la chaîne d'approvisionnement par une communication transparente",
      "Création de contenu pour les audiences de gaming et de crypto-monnaies",
      "Exploitation de la hausse du gaming pendant la pandémie avec du contenu pour rester à la maison",
      "Utilisation des canaux sociaux pour annoncer les produits CMP (Crypto Mining Processor)"
    ],
    image: "https://images.unsplash.com/photo-1621761225528-63d9e994ee4c?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=400&fit=crop"
    ],
    fullBio: "L'analyse de Seif Shell sur la stratégie de médias sociaux de NVIDIA en 2021 examine comment l'entreprise a navigué face au double défi d'une demande sans précédent et de contraintes d'approvisionnement sévères pendant la pénurie de GPU de l'ère pandémique. Grâce à une analyse complète du sentiment et des métriques d'engagement, Seif démontre comment NVIDIA a maintenu la bienveillance des consommateurs malgré des problèmes généralisés de disponibilité des produits. Sa recherche documente le pivot stratégique de l'entreprise pour créer du contenu spécialisé pour les audiences de gaming et de crypto-monnaies, y compris le lancement controversé mais efficace des produits dédiés au minage de crypto-monnaies (CMP). La présentation comprend une analyse chronologique détaillée de la stratégie de communication de NVIDIA pendant les perturbations critiques de la chaîne d'approvisionnement, des exemples de gestion communautaire réussie pendant les périodes de frustration des clients, et une analyse quantitative de l'impact de ces efforts sur les métriques de perception de la marque pendant cette période difficile."
  },
  "2023": {
    title: "Leadership de la Révolution IA",
    year: "2023",
    presenter: teamMembers[1], // Moadh Hannechi
    content: (
      <div>
        <p className="mb-4">
          En 2023, NVIDIA avait consolidé sa position non seulement comme leader dans les GPU mais comme colonne vertébrale de la révolution de l'IA. Nos recherches démontrent comment la stratégie de médias sociaux de NVIDIA a évolué pour capturer ce moment charnière dans la technologie.
        </p>
        <p>
          Le contenu de NVIDIA sur toutes les plateformes s'est concentré sur son rôle dans l'IA générative, les grands modèles de langage et les solutions d'IA pour entreprises. L'entreprise s'est positionnée efficacement au centre des conversations sur l'avenir de la technologie, avec le PDG Jensen Huang devenant un leader d'opinion reconnaissable sur tous les canaux sociaux.
        </p>
      </div>
    ),
    keyPoints: [
      "Domination de la conversation sur l'IA sur toutes les principales plateformes",
      "Positionnement de Jensen Huang comme un leader visionnaire de l'industrie",
      "Création de canaux et communautés NVIDIA axés sur l'IA",
      "Utilisation de la GTC (GPU Technology Conference) pour des annonces majeures"
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    additionalImages: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    ],
    fullBio: "La recherche de Moadh Hannechi sur la présence de NVIDIA sur les médias sociaux en 2023 analyse comment l'entreprise a complété sa transformation en un leader technologique axé sur l'IA. Grâce à une analyse de contenu extensive sur toutes les principales plateformes, Moadh documente comment NVIDIA est passé du marketing technique de produits à devenir la voix centrale dans les conversations sur l'avenir de l'IA. Sa présentation examine l'élévation stratégique du PDG Jensen Huang comme leader d'opinion, la création de communautés spécialisées de développeurs d'IA, et l'évolution de la GPU Technology Conference (GTC) en un événement majeur de l'industrie de l'IA. Utilisant des modèles avancés de sujet et de cartographie d'influence, Moadh quantifie la domination de NVIDIA dans les conversations liées à l'IA sur les plateformes sociales et démontre comment cela s'est traduit par une performance boursière et une position sur le marché sans précédent. La recherche inclut des données exclusives d'écoute sociale suivant le sentiment de l'industrie envers NVIDIA pendant cette période transformative."
  }
};
