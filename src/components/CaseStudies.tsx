
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Youtube, Instagram, Twitter, Facebook, Check } from "lucide-react";

const caseStudies = [
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
    icon: <BarChart className="h-5 w-5" />
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
    icon: <Youtube className="h-5 w-5" />
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
    icon: <Instagram className="h-5 w-5" />
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
    icon: <Twitter className="h-5 w-5" />
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
    icon: <Facebook className="h-5 w-5" />
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-nvidia-light">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Social Media Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Exploring NVIDIA's most effective social media campaigns and platform-specific strategies
          </p>
        </div>

        <Tabs defaultValue="rtx" className="max-w-4xl mx-auto">
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
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  {study.icon}
                  <h3 className="text-xl font-bold">{study.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-nvidia-light p-3 rounded">
                    <p className="text-sm font-medium text-muted-foreground">Platform</p>
                    <p className="font-medium">{study.platform}</p>
                  </div>
                  <div className="bg-nvidia-light p-3 rounded md:col-span-2">
                    <p className="text-sm font-medium text-muted-foreground">Results</p>
                    <p className="font-medium">{study.results}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Strategy</h4>
                  <p>{study.strategy}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Key Components</h4>
                  <ul className="space-y-2">
                    {study.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-nvidia-green mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
