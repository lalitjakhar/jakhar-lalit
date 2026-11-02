import { buildStructuredDataGraph } from "@/data/seo";

export default function StructuredData() {
  const structuredData = buildStructuredDataGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
