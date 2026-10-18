import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { absoluteUrl } from "@/lib/seo";

const title = "Emad Keton | Syrian Businessman | Official Website";
const description =
  "Emad Keton is a Syrian businessman, founder of Najez Import & Export, active in general trading and industrial raw materials, and owner of Score Academy.";
const canonical = absoluteUrl("/en");

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index,follow" },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "en", href: canonical },
      { rel: "alternate", hrefLang: "ar", href: absoluteUrl("/ar") },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
    ],
  }),
  component: () => <Site lang="en" />,
});
