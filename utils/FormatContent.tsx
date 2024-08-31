import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const FormatContent = (content: string) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
				h1: ({ node, ...props }) => (
					<h1 className="text-4xl xl:text-6xl" {...props} />
				),
				h2: ({ node, ...props }) => (
					<h2 className="text-3xl xl:text-5xl" {...props} />
				),
				h3: ({ node, ...props }) => (
					<h3 className="text-2xl xl:text-4xl" {...props} />
				),
				p: ({ node, ...props }) => <p className="text-lg" {...props} />,
				code: ({
					inline,
					className,
					children,
					...props
				}: {
					inline?: boolean;
					className?: string;
					children?: React.ReactNode;
					props?: React.HTMLAttributes<HTMLElement>;
				}) => {
					const match = /language-(\w+)/.exec(className || "");
					return !inline && match ? (
						<pre className={`language-${match[1]}`} {...props}>
							<code className={className}>{children}</code>
						</pre>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					);
				},
			}}
		>
			{content}
		</ReactMarkdown>
	);
};
