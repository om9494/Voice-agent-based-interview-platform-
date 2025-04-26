import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export function PrepPlannerButton() {
  return (
    <Link href="/prep-planner">
      <Button variant="outline" className="gap-2">
        <BookOpen className="h-4 w-4" />
        Prep Planner
      </Button>
    </Link>
  );
}
