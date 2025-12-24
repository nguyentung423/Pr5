import { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
}

export default function Prose({ children }: ProseProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-fg prose-headings:font-medium prose-p:text-fg prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-fg prose-code:text-fg prose-code:bg-border/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-fg prose-pre:text-bg prose-blockquote:border-accent prose-blockquote:text-muted prose-li:text-fg prose-img:rounded-lg">
      {children}
    </div>
  );
}
