"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Book,
  Video,
  FileText,
  Globe,
  Code,
  Youtube,
  Laptop,
  Brain,
  GitBranch,
  Database,
  Layout,
  Server,
  Plus,
} from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type:
    | "book"
    | "video"
    | "article"
    | "website"
    | "course"
    | "github"
    | "practice";
  category:
    | "frontend"
    | "backend"
    | "dsa"
    | "system-design"
    | "behavioral"
    | "general";
}

const resources: Resource[] = [
  // Frontend Development
  {
    id: "1",
    title: "Frontend Interview Handbook",
    description:
      "Comprehensive guide covering HTML, CSS, JavaScript, and React interview questions",
    url: "https://www.frontendinterviewhandbook.com",
    type: "website",
    category: "frontend",
  },
  {
    id: "2",
    title: "React Interview Questions & Answers",
    description:
      "Essential React concepts, hooks, state management, and best practices",
    url: "https://github.com/sudheerj/reactjs-interview-questions",
    type: "github",
    category: "frontend",
  },
  {
    id: "3",
    title: "JavaScript: Understanding the Weird Parts",
    description: "Deep dive into JavaScript fundamentals and advanced concepts",
    url: "https://www.udemy.com/course/understand-javascript",
    type: "course",
    category: "frontend",
  },

  // Backend Development
  {
    id: "4",
    title: "System Design Primer",
    description:
      "Learn how to design large-scale systems and prepare for system design interviews",
    url: "https://github.com/donnemartin/system-design-primer",
    type: "github",
    category: "backend",
  },
  {
    id: "5",
    title: "Backend Developer Interview Guide",
    description: "Comprehensive guide for backend development interviews",
    url: "https://www.techinterviewhandbook.org/backend-interview-guide",
    type: "website",
    category: "backend",
  },
  {
    id: "6",
    title: "Database Internals Book",
    description: "Deep dive into database design and implementation",
    url: "https://www.databass.dev",
    type: "book",
    category: "backend",
  },

  // Data Structures & Algorithms
  {
    id: "7",
    title: "Grokking Algorithms",
    description: "Illustrated guide to algorithms with practical examples",
    url: "https://www.manning.com/books/grokking-algorithms",
    type: "book",
    category: "dsa",
  },
  {
    id: "8",
    title: "NeetCode DSA Roadmap",
    description: "Structured approach to learning DSA with video explanations",
    url: "https://neetcode.io/roadmap",
    type: "course",
    category: "dsa",
  },
  {
    id: "9",
    title: "LeetCode Patterns",
    description: "Collection of common patterns for solving coding problems",
    url: "https://seanprashad.com/leetcode-patterns",
    type: "website",
    category: "dsa",
  },

  // System Design
  {
    id: "10",
    title: "System Design Interview Guide",
    description: "Step-by-step guide to tackling system design interviews",
    url: "https://bytebytego.com",
    type: "course",
    category: "system-design",
  },
  {
    id: "11",
    title: "Designing Data-Intensive Applications",
    description: "Essential book for understanding distributed systems",
    url: "https://dataintensive.net",
    type: "book",
    category: "system-design",
  },
  {
    id: "12",
    title: "High Scalability Blog",
    description: "Real-world architecture case studies and best practices",
    url: "http://highscalability.com",
    type: "website",
    category: "system-design",
  },

  // Behavioral
  {
    id: "13",
    title: "STAR Method Interview Preparation",
    description: "Guide to structuring behavioral interview responses",
    url: "https://www.themuse.com/advice/star-interview-method",
    type: "article",
    category: "behavioral",
  },
  {
    id: "14",
    title: "Top Behavioral Questions in Tech",
    description: "Common behavioral questions with example answers",
    url: "https://www.techinterviewhandbook.org/behavioral-questions",
    type: "website",
    category: "behavioral",
  },
  {
    id: "15",
    title: "Mock Interview Platform",
    description: "Practice behavioral interviews with AI and peers",
    url: "https://www.pramp.com",
    type: "practice",
    category: "behavioral",
  },
];

const getTypeIcon = (type: Resource["type"]) => {
  switch (type) {
    case "book":
      return <Book className="h-4 w-4" />;
    case "video":
      return <Video className="h-4 w-4" />;
    case "article":
      return <FileText className="h-4 w-4" />;
    case "website":
      return <Globe className="h-4 w-4" />;
    case "course":
      return <Laptop className="h-4 w-4" />;
    case "github":
      return <GitBranch className="h-4 w-4" />;
    case "practice":
      return <Brain className="h-4 w-4" />;
    default:
      return <Globe className="h-4 w-4" />;
  }
};

const getCategoryIcon = (category: Resource["category"]) => {
  switch (category) {
    case "frontend":
      return <Layout className="h-5 w-5" />;
    case "backend":
      return <Server className="h-5 w-5" />;
    case "dsa":
      return <Code className="h-5 w-5" />;
    case "system-design":
      return <Database className="h-5 w-5" />;
    case "behavioral":
      return <Brain className="h-5 w-5" />;
    default:
      return <Globe className="h-5 w-5" />;
  }
};

const getTypeColor = (type: Resource["type"]) => {
  switch (type) {
    case "book":
      return "bg-blue-500 bg-opacity-20 text-blue-100 border-blue-400";
    case "video":
      return "bg-red-500 bg-opacity-20 text-red-100 border-red-400";
    case "article":
      return "bg-green-500 bg-opacity-20 text-green-100 border-green-400";
    case "website":
      return "bg-purple-500 bg-opacity-20 text-purple-100 border-purple-400";
    case "course":
      return "bg-yellow-500 bg-opacity-20 text-yellow-100 border-yellow-400";
    case "github":
      return "bg-gray-500 bg-opacity-20 text-gray-100 border-gray-400";
    case "practice":
      return "bg-pink-500 bg-opacity-20 text-pink-100 border-pink-400";
    default:
      return "bg-gray-500 bg-opacity-20 text-gray-100 border-gray-400";
  }
};

const getCategoryColor = (category: Resource["category"]) => {
  switch (category) {
    case "frontend":
      return "from-blue-500/20 to-purple-500/20 border-blue-500/50";
    case "backend":
      return "from-green-500/20 to-emerald-500/20 border-green-500/50";
    case "dsa":
      return "from-yellow-500/20 to-orange-500/20 border-yellow-500/50";
    case "system-design":
      return "from-red-500/20 to-pink-500/20 border-red-500/50";
    case "behavioral":
      return "from-purple-500/20 to-indigo-500/20 border-purple-500/50";
    default:
      return "from-gray-500/20 to-gray-600/20 border-gray-500/50";
  }
};

interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80 transition-all">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`p-2 rounded-lg bg-gray-800`}>
                {getCategoryIcon(resource.category)}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(
                  resource.type
                )}`}
              >
                {resource.type}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              {resource.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{resource.description}</p>
            <Button
              variant="outline"
              className="w-full border-gray-800 hover:bg-gray-800"
              onClick={() => window.open(resource.url, "_blank")}
            >
              <span className="flex items-center gap-2">
                {getTypeIcon(resource.type)}
                Visit Resource
              </span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function InterviewResources() {
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-100">
            Interview Resources
          </h2>
          <p className="text-gray-400">
            Curated collection of resources to help you prepare
          </p>
        </div>
        <Button variant="outline" className="gap-2 border-gray-700">
          <Plus className="h-4 w-4" />
          Add Resource
        </Button>
      </div>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <div className="flex items-center gap-2">
            {getCategoryIcon(category)}
            <h3 className="text-lg font-semibold text-gray-100 capitalize">
              {category.replace("-", " ")}
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter((resource) => resource.category === category)
              .map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
