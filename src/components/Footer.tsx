
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-nvidia-dark text-white py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-nvidia-green">NVIDIA</span>
            <span className="text-sm font-medium">Social Spark</span>
          </div>
          
          <p className="text-center text-gray-400 mb-4">
            A presentation on how NVIDIA leveraged social media to become the world's most valuable chip company
          </p>
          
          <p className="flex items-center justify-center text-sm text-gray-500">
            Created with <Heart className="h-4 w-4 text-nvidia-green mx-1" /> by Seif Shell, Moadh Hannechi, and Mohamed Rayen Bouquery
          </p>
          
          <p className="mt-2 text-sm text-gray-500">
            © {currentYear} | Academic Research Project
          </p>
        </div>
      </div>
    </footer>
  );
}
