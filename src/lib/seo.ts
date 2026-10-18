export const siteUrl = (import.meta.env.VITE_SITE_URL || "https://emadketon.com").replace(/\/$/, "");

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
