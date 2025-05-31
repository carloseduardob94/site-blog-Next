import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  content: string;
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={
        {
          h1: ({ children }) => (
            <h1 className="md-4 text-heading-md md:text-heading-xl">{children}</h1>
          ),
          p: ({ children }) => (
            <p className="mb-6 leading-relaxed text-gray-200">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-extrabold text-gray-100">{children}</strong>
          ),
          a: ({ children, href }) => (
            <a href={href} className="text-blue-200 hover:underline">{children}</a>
          )
        }
      }
    >
      {content}
    </ReactMarkdown>
  )
}