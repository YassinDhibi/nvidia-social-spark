
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" }
  ];
  
  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm"
        aria-label="Toggle language menu"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{language === "en" ? "EN" : "FR"}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  language === lang.code ? "text-nvidia-green font-medium" : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
