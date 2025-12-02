import Link from "next/link";
import { cn, localizedPath } from "@/lib/utils";

export const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`mt-8 max-w-5xl mx-auto`, className)}>{children}</div>
  );
};

export const GraphMock = ({
  text,
  department,
}: {
  text?: React.ReactNode;
  department?: string;
  className?: string;
}) => (
  <div className="mt-8 max-w-5xl mx-auto bg-card rounded-xl shadow-chart slide-up slide-up-delay-2">
    <div
      className={`w-full h-80 bg-muted text-muted-foreground flex items-center justify-center`}
    >
      {department} {text ?? "Graph"}
    </div>
  </div>
);

export const H1 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight ${className}`}>
    {children}
  </h1>
);

export const H2 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <h2 className={`text-2xl font-bold mb-6 ${className}`}>{children}</h2>;

export const H3 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3 className={`text-xl text-muted-foreground font-bold mb-6 ${className}`}>
    {children}
  </h3>
);

export const ChartContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`mb-8 ${className}`}>{children}</div>;

export const P = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`text-muted-foreground leading-relaxed mb-4 ${className}`}>
    {children}
  </p>
);

export const UL = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <ul
    className={`text-muted-foreground leading-relaxed mb-4 list-disc list-inside ${className}`}
  >
    {children}
  </ul>
);

export const Intro = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <P className={`mt-4 text-lg ${className}`}>{children}</P>;

export const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">{children}</div>
);

export const PageContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn("w-full max-w-6xl mx-auto px-4 sm:px-6 pb-8 pt-2", className)}
  >
    {children}
  </div>
);

export const ExternalLink = ({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    className={`text-primary underline hover:text-primary/80 ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export const InternalLink = ({
  children,
  href,
  className = "",
  lang,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  lang?: string;
}) => {
  // If lang is provided, ensure the href is localized
  const localizedHref = lang ? localizedPath(href, lang) : href;

  return (
    <Link
      href={localizedHref}
      className={`text-primary underline hover:text-primary/80 ${className}`}
    >
      {children}
    </Link>
  );
};
