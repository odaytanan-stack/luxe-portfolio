import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";

const title = "عماد كيطون | رجل أعمال سوري | الموقع الشخصي الرسمي";
const description =
  "عماد كيطون، رجل أعمال سوري ومؤسس شركة ناجز للاستيراد والتصدير، يعمل في التجارة العامة والحديد والمواد الأولية، ويملك أكاديمية سكور الرياضية.";

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "ar_SY" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
    ],
  }),
  component: () => <Site lang="ar" />,
});
