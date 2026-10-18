import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";

const title = "Emad Keton | Syrian Businessman | Official Website";
const description =
  "Emad Keton is a Syrian businessman, founder of Najez Import & Export, active in general trading and industrial raw materials, and owner of Score Academy.";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
    ],
  }),
  component: () => <Site lang="en" />,
});
