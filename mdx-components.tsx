import type { MDXComponents } from "mdx/types";
import { Tweet } from "react-tweet";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tweet,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-8 text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6 text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 text-foreground">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-foreground">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        style={{ textDecoration: "underline" }}
        className="text-primary transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed text-foreground">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground bg-secondary/20 rounded-r">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-secondary px-2 py-1 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-lg my-6 shadow-md"
      />
    ),
    hr: () => <hr className="my-8 border-border" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-foreground">{children}</em>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 bg-secondary font-semibold text-left">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2">{children}</td>
    ),
    ...components,
  };
}
