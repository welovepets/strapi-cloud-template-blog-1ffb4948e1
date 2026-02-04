import Image from "next/image";
import Link from "next/link";
import { Article, getStrapiMedia } from "@/lib/strapi";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const coverUrl = getStrapiMedia(article.cover?.url);
  const authorAvatarUrl = getStrapiMedia(article.author?.avatar?.url);

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/article/${article.slug}`}>
        {coverUrl && (
          <div className="relative h-48 w-full">
            <Image
              src={coverUrl}
              alt={article.cover?.alternativeText || article.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6">
          {article.category && (
            <span className="text-sm font-medium text-blue-600 mb-2 block">
              {article.category.name}
            </span>
          )}
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {article.description}
          </p>
          {article.author && (
            <div className="flex items-center gap-3">
              {authorAvatarUrl && (
                <Image
                  src={authorAvatarUrl}
                  alt={article.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span className="text-sm text-gray-500">{article.author.name}</span>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
