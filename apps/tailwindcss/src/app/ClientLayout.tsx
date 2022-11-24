"use client";

import Header from "../components/Header";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="min-h-screen bg-background-l dark:bg-background-d">
      <Header />
      {children}
    </div>
  );
}
