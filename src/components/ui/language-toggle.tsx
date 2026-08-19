import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-muted-foreground hover:text-foreground"
      aria-label="Toggle language"
    >
      <Globe className="mr-2 h-4 w-4" />
      <span className="font-mono text-xs uppercase">{i18n.language.startsWith("pt") ? "PT" : "EN"}</span>
    </Button>
  );
}
