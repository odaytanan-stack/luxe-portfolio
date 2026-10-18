import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/en" });
  },
  head: () => ({
    meta: [
      { title: "Emad Keton | Official Website" },
      { name: "description", content: "Official website of Emad Keton, Syrian businessman." },
      { property: "og:title", content: "Emad Keton | Official Website" },
      { property: "og:description", content: "Official website of Emad Keton, Syrian businessman." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
