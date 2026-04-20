import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";

interface MediaLink {
  type: string;
  url: string;
  label: string;
  icon: React.ReactNode;
}

interface TalkCardProps {
  title: string;
  description: string;
  date: string;
  event: string;
  location: string;
  thumbnail?: string;
  media?: readonly MediaLink[];
  tags?: readonly string[];
  className?: string;
}

export function TalkCard({
  title,
  description,
  date,
  event,
  location,
  thumbnail,
  media,
  tags,
  className,
}: TalkCardProps) {
  return (
    <Card className={cn("flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full group", className)}>
      {/* Thumbnail with platform badges */}
      {thumbnail && (
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {media && media.length > 1 && (
            <div className="absolute top-2 right-2 flex gap-1">
              {media.slice(0, 3).map((m, idx) => (
                <div key={idx} className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
                  {m.icon}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <CardHeader className="flex flex-col gap-2 px-4 py-3">
        {/* Event and Date */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium">{event}</span>
          <time className="tabular-nums">{date}</time>
        </div>

        {/* Title */}
        <CardTitle className="line-clamp-2 text-base leading-tight">{title}</CardTitle>

        {/* Location */}
        {location && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 px-4 pb-2">
        {/* Description */}
        <Markdown className="prose prose-sm max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge key={tag} variant="outline" className="px-2 py-0 text-[10px] font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-2">
        {/* Media Links */}
        {media && media.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {media?.map((link, idx) => (
              <Link href={link.url} key={idx} target="_blank" rel="noopener noreferrer" className="group/link">
                <Badge variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                  {link.icon}
                  <span>{link.label}</span>
                  <svg className="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}