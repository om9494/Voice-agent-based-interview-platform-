import React from "react";
import { Calendar, CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  completed: boolean;
  category: "technical" | "behavioral" | "practice";
}

interface TimelineVisualizationProps {
  tasks: TimelineItem[];
}

export function TimelineVisualization({ tasks }: TimelineVisualizationProps) {
  // Sort tasks by date
  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Get the date range
  const startDate = new Date(sortedTasks[0].date);
  const endDate = new Date(sortedTasks[sortedTasks.length - 1].date);
  const totalDays =
    Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;

  // Group tasks by date
  const tasksByDate = sortedTasks.reduce((acc, task) => {
    const date = task.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {} as Record<string, TimelineItem[]>);

  // Get all dates in the range
  const allDates: string[] = [];
  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    allDates.push(date.toISOString().split("T")[0]);
  }

  const getCategoryColor = (category: TimelineItem["category"]) => {
    switch (category) {
      case "technical":
        return {
          bg: "bg-blue-500",
          text: "text-blue-100",
          label: "bg-blue-500 bg-opacity-20 text-blue-100",
        };
      case "behavioral":
        return {
          bg: "bg-green-500",
          text: "text-green-100",
          label: "bg-green-500 bg-opacity-20 text-green-100",
        };
      case "practice":
        return {
          bg: "bg-purple-500",
          text: "text-purple-100",
          label: "bg-purple-500 bg-opacity-20 text-purple-100",
        };
      default:
        return {
          bg: "bg-gray-500",
          text: "text-gray-100",
          label: "bg-gray-500 bg-opacity-20 text-gray-100",
        };
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-600 md:left-1/2 md:-ml-0.5"></div>

      {/* Timeline items */}
      <div className="space-y-8">
        {allDates.map((date, index) => {
          const dateTasks = tasksByDate[date] || [];
          const hasTasks = dateTasks.length > 0;

          return (
            <div key={date} className="relative">
              {/* Date marker */}
              <div
                className={`absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                  hasTasks
                    ? "border-primary bg-primary/20"
                    : "border-gray-600 bg-gray-800"
                } md:left-1/2 md:-ml-4`}
              >
                <Calendar
                  className={`h-4 w-4 ${
                    hasTasks ? "text-primary" : "text-gray-400"
                  }`}
                />
              </div>

              {/* Date label */}
              <div className="ml-16 text-sm text-gray-300 md:ml-0 md:mr-auto md:pr-8 md:text-right">
                {new Date(date).toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </div>

              {/* Tasks for this date */}
              {hasTasks && (
                <div className="ml-16 space-y-3 md:ml-auto md:pl-8">
                  {dateTasks.map((task) => {
                    const colors = getCategoryColor(task.category);
                    return (
                      <div
                        key={task.id}
                        className={`group relative rounded-lg border border-gray-700 p-3 transition-all hover:shadow-md ${
                          task.completed ? "bg-gray-800/50" : "bg-gray-800"
                        }`}
                      >
                        <div
                          className={`absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 bg-gray-900 ${colors.bg}`}
                        ></div>

                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            {task.completed ? (
                              <CheckCircle2 className="h-5 w-5 text-green-400" />
                            ) : (
                              <Circle className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3
                                className={`font-medium text-gray-100 ${
                                  task.completed
                                    ? "line-through text-gray-500"
                                    : ""
                                }`}
                              >
                                {task.title}
                              </h3>
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${colors.label}`}
                              >
                                {task.category}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                              <Clock className="h-4 w-4" />
                              <span>Today</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
