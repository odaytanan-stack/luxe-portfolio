import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { absoluteUrl } from "@/lib/seo";

const title = "عماد كيطون | رجل أعمال سوري | الموقع الشخصي الرسمي";
const description =
  "عماد كيطون، رجل أعمال سوري ومؤسس شركة ناجز للاستيراد والتصدير، ينشط في التجارة العامة والحديد والمواد الأولية ومجال الرياضة.";
const canonical = absoluteUrl("/ar");

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "ar_SY" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: absoluteUrl("/favicon.svg") },
      { property: "og:image:width", content: "64" },
      { property: "og:image:height", content: "64" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl("/favicon.svg") },
      { name: "robots", content: "index,follow" },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl("/en") },
      { rel: "alternate", hrefLang: "ar", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl("/en") },
    ],
  }),
  component: () => <Site lang="ar" />,
});
