import Image from "next/image";
import { Block, getStrapiMedia } from "@/lib/strapi";

interface BlockRendererProps {
  blocks: Block[];
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block) => {
        switch (block.__component) {
          case "shared.rich-text":
            return (
              <div
                key={block.id}
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: block.body }}
              />
            );

          case "shared.media":
            const mediaUrl = getStrapiMedia(block.file?.url);
            if (!mediaUrl) return null;
            return (
              <figure key={block.id} className="my-8">
                <Image
                  src={mediaUrl}
                  alt={block.file?.alternativeText || ""}
                  width={block.file?.width || 800}
                  height={block.file?.height || 600}
                  className="rounded-lg w-full h-auto"
                />
              </figure>
            );

          case "shared.quote":
            return (
              <blockquote
                key={block.id}
                className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg"
              >
                {block.title && (
                  <p className="font-semibold text-lg mb-2">{block.title}</p>
                )}
                <p className="text-gray-700 italic">{block.body}</p>
              </blockquote>
            );

          case "shared.slider":
            return (
              <div
                key={block.id}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8"
              >
                {block.files?.map((file, index) => {
                  const url = getStrapiMedia(file.url);
                  if (!url) return null;
                  return (
                    <Image
                      key={index}
                      src={url}
                      alt={file.alternativeText || ""}
                      width={file.width || 400}
                      height={file.height || 300}
                      className="rounded-lg w-full h-auto"
                    />
                  );
                })}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
