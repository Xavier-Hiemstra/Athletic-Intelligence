// Static export has no image optimizer, and next/image doesn't add basePath to
// local images in that mode. Prefix it here so images resolve on GitHub Pages.
export default function imageLoader({ src }: { src: string }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
