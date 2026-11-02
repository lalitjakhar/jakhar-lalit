import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  github: Github,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
};

export function getSocialIcon(name: string): LucideIcon {
  return iconMap[name.toLowerCase()] || Linkedin;
}
