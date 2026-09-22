"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function HowItWorks() {
  const router = useRouter();

  const steps = [
    {
      number: "01",
      title: "Ask Your Question",
      description:
        "Start by asking Adira a question related to women's safety, legal rights, protection, or available support resources.",
    },
    {
      number: "02",
      title: "Relevant Information is Retrieved",
      description:
        "Adira searches its curated knowledge base and retrieves the most relevant information related to your query.",
    },
    {
      number: "03",
      title: "AI-Assisted Response",
      description:
        "The retrieved context is processed through Adira's AI pipeline to provide a clear, relevant, and easy-to-understand response.",
    },
    {
      number: "04",
      title: "Continue the Conversation",
      description:
        "Ask follow-up questions and continue your conversation while Adira helps you explore relevant information and resources.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <h1 className="text-2xl md:text-3xl font-bold">
              Adira
            </h1>

            <span className="text-sm text-zinc-600">
              1.0
            </span>
          </div>

          <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base">

            <button
              onClick={() => router.push("/")}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => router.push("/adira")}
              className="border border-zinc-700 px-5 py-2 rounded-lg text-zinc-200 hover:bg-white hover:text-black transition-all duration-300"
            >
              Try Adira ↗
            </button>

          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-28">

        <p className="text-sm tracking-[0.35em] text-zinc-500 uppercase mb-6">
          Behind Adira
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          How It Works
        </h1>

        <p className="mt-8 max-w-2xl text-zinc-400 text-lg md:text-xl leading-relaxed">
          Adira combines intelligent information retrieval with AI-assisted
          responses to make women's safety and legal information easier to
          access and understand.
        </p>

        <button
          onClick={() => router.push("/adira")}
          className="mt-10 px-8 py-3 rounded-full border border-zinc-600 text-zinc-200 hover:bg-white hover:text-black transition-all duration-300"
        >
          Start a Conversation ↗
        </button>

      </section>


      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-zinc-800" />


      {/* Process Section */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <div className="mb-16">

          <p className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-4">
            The Process
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            From question to guidance.
          </h2>

          <p className="text-zinc-500 mt-5 max-w-xl leading-relaxed">
            Adira follows a simple pipeline designed to retrieve relevant
            information and present it in a more accessible conversational
            format.
          </p>

        </div>


        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group border border-zinc-800 rounded-2xl p-8 md:p-10 bg-zinc-950/40 hover:border-zinc-600 transition-all duration-300"
            >

              <div className="flex justify-between items-start mb-12">

                <span className="text-sm text-zinc-600">
                  {step.number}
                </span>

                <span className="w-8 h-8 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition">
                  ↘
                </span>

              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Architecture */}
      <section className="max-w-6xl mx-auto px-6 pb-28">

        <div className="border border-zinc-800 rounded-3xl p-8 md:p-14">

          <p className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-4">
            Under the Hood
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mb-12">
            Built around a retrieval pipeline.
          </h2>


          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4">

            <FlowBox
              title="Your Query"
              subtitle="Question from the user"
            />

            <Arrow />

            <FlowBox
              title="Knowledge Base"
              subtitle="Relevant context retrieval"
            />

            <Arrow />

            <FlowBox
              title="AI Layer"
              subtitle="Context-aware processing"
            />

            <Arrow />

            <FlowBox
              title="Adira"
              subtitle="Helpful response"
            />

          </div>

        </div>

      </section>


      {/* Technology */}
      <section className="max-w-6xl mx-auto px-6 pb-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          <div>

            <p className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-4">
              Technology
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Technology working
              <br />
              behind Adira.
            </h2>

          </div>


          <div className="grid grid-cols-2 gap-4">

            <TechCard title="Next.js" subtitle="Interface" />

            <TechCard title="Node.js" subtitle="Backend" />

            <TechCard title="RAG" subtitle="Retrieval" />

            <TechCard title="Firebase" subtitle="Authentication & Data" />

          </div>

        </div>

      </section>


      {/* Safety Note */}
      <section className="max-w-6xl mx-auto px-6 pb-28">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-14">

          <span className="text-zinc-500 text-sm tracking-[0.25em] uppercase">
            Important
          </span>

          <h2 className="text-3xl font-semibold mt-4 mb-5">
            Information, not a replacement for professional help.
          </h2>

          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            Adira is designed to make safety and legal information more
            accessible. It does not replace professional legal advice,
            law enforcement, medical assistance, or emergency services.
            In an immediate emergency, users should contact the appropriate
            local emergency services or a trusted person.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-28">

        <div className="text-center border-t border-zinc-800 pt-24">

          <p className="text-zinc-500 mb-5">
            Ready to explore Adira?
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold">
            Ask. Understand. Act.
          </h2>

          <button
            onClick={() => router.push("/adira")}
            className="mt-10 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-300 transition-colors"
          >
            Try Adira ↗
          </button>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-zinc-900">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-600">

          <span>
            © 2026 Adira
          </span>

          <span>
            AI for Women's Safety
          </span>

        </div>

      </footer>

    </main>
  );
}


function FlowBox({ title, subtitle }) {
  return (
    <div className="flex-1 min-h-[130px] border border-zinc-800 rounded-xl p-6 flex flex-col justify-center">
      <h3 className="text-lg font-medium">
        {title}
      </h3>

      <p className="text-sm text-zinc-500 mt-2">
        {subtitle}
      </p>
    </div>
  );
}


function Arrow() {
  return (
    <div className="flex items-center justify-center text-zinc-600 text-xl px-1">
      <span className="hidden lg:block">→</span>
      <span className="lg:hidden">↓</span>
    </div>
  );
}


function TechCard({ title, subtitle }) {
  return (
    <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors">
      <h3 className="text-lg font-medium">
        {title}
      </h3>

      <p className="text-sm text-zinc-500 mt-2">
        {subtitle}
      </p>
    </div>
  );
}