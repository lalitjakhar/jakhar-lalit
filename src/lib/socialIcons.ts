import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  github: FaGithub,
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  x: FaXTwitter,
  youtube: FaYoutube,
};

export function getSocialIcon(name: string): IconType {
  return iconMap[name.toLowerCase()] || FaLinkedinIn;
}
