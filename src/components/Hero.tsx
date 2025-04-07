
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="introduction" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-nvidia-dark">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-20"></div>
      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block mb-2">How</span>
            <span className="text-nvidia-green text-7xl sm:text-8xl block mb-2">NVIDIA</span>
            <span className="block">Dominated Social Media</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-lg text-gray-300">
            Exploring the strategies that transformed NVIDIA into the world's most valuable chip company through social media excellence
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-nvidia-green hover:bg-nvidia-green/90 text-white" asChild>
              <a href="#timeline">Explore Journey</a>
            </Button>
            <Button variant="outline" className="border-nvidia-green text-nvidia-green hover:bg-nvidia-green/10" asChild>
              <a href="#team">Meet The Team</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#timeline" className="text-white hover:text-nvidia-green transition-colors duration-300">
            <ArrowDownCircle size={36} />
          </a>
        </div>
      </div>
    </section>
  );
}
