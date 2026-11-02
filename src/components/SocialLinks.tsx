import type { Social } from "@/data/resumeData";
import { getSocialIcon } from "@/lib/socialIcons";

const ORDER = ["github", "linkedin", "twitter", "youtube", "instagram", "facebook"];

function rank(name: string) {
  const index = ORDER.indexOf(name.toLowerCase());
  return index === -1 ? ORDER.length : index;
}

type SocialLinksProps = {
  social: Social[];
  listClassName?: string;
  linkClassName: string;
};

export default function SocialLinks({
  social,
  listClassName,
  linkClassName,
}: SocialLinksProps) {
  const ordered = [...social].sort((a, b) => rank(a.name) - rank(b.name));

  return (
    <ul className={listClassName} aria-label="Social profiles">
      {ordered.map((network) => {
        const Icon = getSocialIcon(network.name);
        const label = network.name.charAt(0).toUpperCase() + network.name.slice(1);

        return (
          <li key={network.name}>
            <a
              href={network.url}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label={`${label} profile (opens in a new tab)`}
              className={linkClassName}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
