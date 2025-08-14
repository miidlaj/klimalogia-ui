/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShinyButton } from "@/app/components/shiny-button";
import { cn } from "@/lib/utils";
import React from "react";

// --- TYPE DEFINITION ---
// Added an optional 'category' object for more detailed badges.
export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  description: string;
  category?: {
    name: string;
    className?: string; // e.g., "bg-green-100 text-green-800 border-green-200"
  };
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface ChangelogProps {
  title?: string;
  description?: string;
  entries: ChangelogEntry[];
}

// --- UPGRADED COMPONENT ---
export const Changelog = ({
  title = "Changelog",
  description = "Get the latest updates and improvements to our platform.",
  entries,
}: ChangelogProps) => {
  return (
    <section className="py-24 sm:py-32 z-10">
      <div className="container">
        {/* Main Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-brand-gradient">{title}</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Entries Container */}
        <div className="mx-auto mt-20 max-w-6xl space-y-20 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => (
            <div key={index} className="relative group">
              {/* Subtle blurred background glow on hover */}
              <div className="absolute -inset-4 opacity-0 rounded-3xl blur-2xl group-hover:opacity-10 transition-opacity duration-500" />

              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-brand-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/5">
                <div className="relative flex flex-col lg:flex-row">
                  {/* Timeline Connector Line (Visible on lg screens) */}
                  <div className="absolute left-1/3 top-12 hidden h-[calc(100%-6rem)] w-px bg-border/80 lg:block" />

                  {/* Left side - Version info */}
                  <div className="flex-shrink-0 lg:w-1/3 p-8 md:p-12">
                    <div className="sticky top-28 flex flex-col items-start gap-4">
                      <Badge
                        variant="secondary"
                        className="text-sm w-fit bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/20 transition-colors"
                      >
                        {entry.version}
                      </Badge>
                      <span className="text-sm font-medium text-muted-foreground">
                        {entry.date}
                      </span>
                      {entry.category && (
                        <Badge
                          variant="outline"
                          className={cn("text-xs", entry.category.className)}
                        >
                          {entry.category.name}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1 space-y-8 p-8 md:p-12 lg:pl-16">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
                        {entry.title}
                      </h2>
                      <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
                        {entry.description}
                      </p>
                    </div>

                    {/* Items list */}
                    {entry.items && entry.items.length > 0 && (
                      <ul className="space-y-4">
                        {entry.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-4 group/item">
                            <CheckCircle className="flex-shrink-0 h-5 w-5 text-brand-primary mt-1" />
                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Image */}
                    {entry.image && (
                      <div className="pt-4">
                        <img
                          src={entry.image}
                          alt={`${entry.version} visual`}
                          className="w-full rounded-2xl object-cover shadow-lg border border-border/50"
                        />
                      </div>
                    )}

                    {/* Button */}
                    {entry.button && (
                      <div className="pt-6">
                        <a href={entry.button.url}>
                          <ShinyButton className="group">
                            <span className="flex items-center gap-2">
                              {entry.button.text}
                              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          </ShinyButton>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
