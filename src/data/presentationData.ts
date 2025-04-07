
// Import team member data to link presenters to timeline events
import { teamMembers } from '@/components/TeamSection';

// Event IDs matching timeline years
export const presentationData: Record<string, any> = {
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
  }
};
