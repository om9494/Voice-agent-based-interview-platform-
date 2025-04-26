import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview Prep Planner",
  description: "Create and manage your interview preparation plan",
};

export default function PrepPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container mx-auto py-6">{children}</div>
      </main>
    </div>
  );
}
