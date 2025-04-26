"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  Circle,
  Plus,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { TimelineVisualization } from "./timeline-visualization";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface StudyTask {
  id: string;
  title: string;
  date: string;
  completed: boolean;
  category: "technical" | "behavioral" | "practice";
}

const initialTasks: StudyTask[] = [
  {
    id: "1",
    title: "Review Data Structures: Arrays and Strings",
    date: "2023-06-15",
    completed: true,
    category: "technical",
  },
  {
    id: "2",
    title: "Practice System Design Questions",
    date: "2023-06-16",
    completed: false,
    category: "technical",
  },
  {
    id: "3",
    title: "Prepare STAR Method Responses",
    date: "2023-06-17",
    completed: false,
    category: "behavioral",
  },
  {
    id: "4",
    title: "Mock Interview: Frontend Development",
    date: "2023-06-18",
    completed: false,
    category: "practice",
  },
  {
    id: "5",
    title: "Review Database Design Patterns",
    date: "2023-06-19",
    completed: false,
    category: "technical",
  },
];

const getCategoryColor = (category: StudyTask["category"]) => {
  switch (category) {
    case "technical":
      return "bg-blue-500 bg-opacity-20 text-blue-100 border-blue-400";
    case "behavioral":
      return "bg-green-500 bg-opacity-20 text-green-100 border-green-400";
    case "practice":
      return "bg-purple-500 bg-opacity-20 text-purple-100 border-purple-400";
    default:
      return "bg-gray-500 bg-opacity-20 text-gray-100 border-gray-400";
  }
};

interface TaskItemProps {
  task: StudyTask;
  onToggleComplete: (id: string) => void;
}

const TaskItem = ({ task, onToggleComplete }: TaskItemProps) => (
  <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-700 hover:bg-gray-800/50 transition-colors bg-gray-800">
    <div
      className="mt-1 cursor-pointer"
      onClick={() => onToggleComplete(task.id)}
    >
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
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h3>
        <span
          className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(
            task.category
          )}`}
        >
          {task.category}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
        <CalendarIcon className="h-4 w-4" />
        <span>{new Date(task.date).toLocaleDateString()}</span>
      </div>
    </div>
  </div>
);

interface AddTaskDialogProps {
  onAddTask: (task: Omit<StudyTask, "id">) => void;
}

function AddTaskDialog({ onAddTask }: AddTaskDialogProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<StudyTask["category"]>("technical");
  const [date, setDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;

    onAddTask({
      title,
      category,
      date: date.toISOString().split("T")[0],
      completed: false,
    });

    setTitle("");
    setCategory("technical");
    setDate(undefined);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-gray-100">Add New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">
              Task Title
            </label>
            <Input
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-800 border-gray-700 text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">
              Category
            </label>
            <Select
              value={category}
              onValueChange={(value: StudyTask["category"]) =>
                setCategory(value)
              }
            >
              <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-100">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="behavioral">Behavioral</SelectItem>
                <SelectItem value="practice">Practice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-gray-100",
                    !date && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-gray-900"
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button type="submit" className="w-full">
            Add Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function StudySchedule() {
  const [tasks, setTasks] = useState<StudyTask[]>(initialTasks);

  const handleAddTask = (newTask: Omit<StudyTask, "id">) => {
    const task: StudyTask = {
      ...newTask,
      id: Math.random().toString(36).substr(2, 9),
    };
    setTasks([...tasks, task]);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-100">Study Schedule</h2>
          <p className="text-gray-400">
            Plan your interview preparation timeline
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-gray-700 hover:bg-gray-800"
          >
            <BarChart3 className="h-4 w-4" />
            Progress
          </Button>
          <AddTaskDialog onAddTask={handleAddTask} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="overflow-hidden border-l-4 border-l-primary bg-gray-900 border-gray-700">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent pb-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-gray-100">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    Your Timeline
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Visualize your study plan
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium text-gray-300">
                    {completedTasks}/{totalTasks} completed
                  </div>
                  <div className="h-2 w-24 rounded-full bg-gray-700 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <TimelineVisualization tasks={tasks} />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="overflow-hidden h-full bg-gray-900 border-gray-700">
            <CardHeader className="pb-2 border-b border-gray-700">
              <CardTitle className="text-lg text-gray-100">
                Upcoming Tasks
              </CardTitle>
              <CardDescription className="text-gray-400">
                Your next study sessions
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-700">
                {tasks
                  .filter((task) => !task.completed)
                  .slice(0, 3)
                  .map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggleComplete={handleToggleComplete}
                    />
                  ))}
              </div>
              <div className="p-4 bg-gray-800/50 border-t border-gray-700">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-primary hover:bg-gray-800"
                >
                  <span>View All Tasks</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
