import React from "react";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  icon: React.ReactNode;
  title: string;
  level: number;
  color: string;
  delay?: number;
}

export function SkillBadge({
  icon,
  title,
  level,
  color,
  delay = 0,
}: SkillBadgeProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border bg-card p-4 shadow-sm transition-all hover:shadow-md"
      style={{
        borderColor: `${color}20`,
        backgroundColor: `${color}05`,
      }}
    >
      <div
        className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-10 transition-all group-hover:scale-150 group-hover:opacity-20"
        style={{ backgroundColor: color }}
      ></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className="mb-2 rounded-full p-2 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </div>
        <h3 className="font-medium">{title}</h3>
        <div className="mt-2 flex w-full items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full transition-all"
              style={{
                backgroundColor: i < level ? color : `${color}20`,
                animation:
                  i < level ? `pulse 2s infinite ${delay + i * 0.2}s` : "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
