"use client";
import { useChat } from "ai/react";
import { sanitizeInput } from "../../utils/sanitizeInput";
import { FormatContent } from "../../utils/FormatContent";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat();
	const chatContainerRef = useRef<HTMLDivElement>(null);

	const sanitized = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const sanitizedInput = sanitizeInput(e.target.value);
		handleInputChange({
			...e,
			target: {
				...e.target,
				value: sanitizedInput,
			},
		});
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	}, [messages, input]);

	const hasAIMessages = messages.some((m) => m.role !== "user");

	return (
		<main className="grid min-h-screen w-screen overflow-hidden grid-rows-custom bg-fp-green text-slate-100">
			<nav className="w-screen h-fit p-6">
				<Image
					src="/PowerFuture.png"
					alt="Powering Futures Logo"
					height={120}
					width={160}
				/>
			</nav>
			<section className="p-4 flex flex-col gap-1 items-center h-full justify-between">
				<section className="w-3/4 flex flex-col gap-6">
					{!hasAIMessages && (
						<h1 className="text-4xl xl:text-6xl">
							Welcome to your career journey
						</h1>
					)}
					<div
						ref={chatContainerRef}
						className="whitespace-pre-wrap gap-4 p-4 text-lg flex flex-col overflow-y-scroll h-[600px] lg:h-[550px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-fp-gold scrollbar-track-transparent"
					>
						{messages.map((m) => (
							<div
								key={m.id}
								className={`p-4 ${m.role === "user" ? "w-fit self-end bg-slate-700 text-slate-50 rounded-md" : "self-start bg-slate-900 p-4 rounded-md"}`}
							>
								{m.role === "user" ? "" : "Career Advisor: "}
								{FormatContent(m.content)}
							</div>
						))}
						{input && (
							<div className="p-4 self-end w-fit bg-slate-800 text-slate-50 rounded-md">
								{input}
							</div>
						)}
					</div>
				</section>
				<section className="w-3/4 flex justify-center items-center gap-2 bg-slate-50 p-2 rounded-md">
					<textarea
						className={`text-slate-800 border-none w-full px-4 py-2 outline-1 outline-fp-gold bg-slate-50 ${
							isLoading ? "opacity-50 pointer-events-none" : "opacity-100"
						}`}
						value={input}
						placeholder={
							isLoading
								? "Just having a think..."
								: "Ask me about potential career paths..."
						}
						onChange={sanitized}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								handleSubmit(e);
							}
						}}
					/>
					<button
						className={`${isLoading ? "opacity-50 pointer-events-none" : "opacity-100"} transition-all duration-500 h-full w-fit text-xl px-6 py-2 bg-fp-gold text-slate-50 rounded-md`}
						type="button"
						onClick={handleSubmit}
						disabled={isLoading}
					>
						Submit
					</button>
				</section>
			</section>
		</main>
	);
}
