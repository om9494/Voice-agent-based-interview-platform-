"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Server,
  Layout,
  GitBranch,
  Terminal,
  Cloud,
  Lock,
  Settings,
  Layers,
  Network,
  Box,
  Cpu,
  Globe,
  Plus,
} from "lucide-react";

interface Topic {
  id: string;
  title: string;
  description: string;
  status: "not-started" | "in-progress" | "completed";
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedHours: number;
  resources: string[];
}

interface TechPath {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  topics: Topic[];
}

const techPaths: TechPath[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Master modern frontend development with React and related technologies",
    icon: <Layout className="h-5 w-5" />,
    topics: [
      {
        id: "html-css",
        title: "HTML & CSS Fundamentals",
        description:
          "Core concepts of HTML5, semantic markup, CSS3, Flexbox, and Grid",
        status: "not-started",
        difficulty: "beginner",
        estimatedHours: 20,
        resources: [
          "MDN Web Docs",
          "CSS-Tricks",
          "freeCodeCamp HTML/CSS Course",
        ],
      },
      {
        id: "javascript",
        title: "JavaScript Essentials",
        description:
          "ES6+, DOM manipulation, async programming, and modern JavaScript features",
        status: "not-started",
        difficulty: "intermediate",
        estimatedHours: 40,
        resources: [
          "JavaScript.info",
          "Eloquent JavaScript",
          "You Don't Know JS",
        ],
      },
      {
        id: "react",
        title: "React & Ecosystem",
        description: "React fundamentals, hooks, state management, and routing",
        status: "not-started",
        difficulty: "intermediate",
        estimatedHours: 50,
        resources: ["React Docs", "React Patterns", "Redux Documentation"],
      },
      {
        id: "typescript",
        title: "TypeScript",
        description:
          "Type system, interfaces, generics, and advanced TypeScript patterns",
        status: "not-started",
        difficulty: "advanced",
        estimatedHours: 30,
        resources: ["TypeScript Handbook", "TypeScript Deep Dive"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Build scalable server-side applications and APIs",
    icon: <Server className="h-5 w-5" />,
    topics: [
      {
        id: "node-express",
        title: "Node.js & Express",
        description:
          "Server-side JavaScript, REST APIs, and middleware patterns",
        status: "not-started",
        difficulty: "intermediate",
        estimatedHours: 40,
        resources: [
          "Node.js Docs",
          "Express Guide",
          "REST API Design Best Practices",
        ],
      },
      {
        id: "databases",
        title: "Database Design",
        description: "SQL, NoSQL, data modeling, and query optimization",
        status: "not-started",
        difficulty: "intermediate",
        estimatedHours: 35,
        resources: [
          "PostgreSQL Tutorial",
          "MongoDB University",
          "Database Design Fundamentals",
        ],
      },
      {
        id: "auth-security",
        title: "Authentication & Security",
        description: "JWT, OAuth, security best practices, and API security",
        status: "not-started",
        difficulty: "advanced",
        estimatedHours: 25,
        resources: [
          "OWASP Top 10",
          "Web Security Academy",
          "Auth0 Documentation",
        ],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Learn cloud platforms, CI/CD, and infrastructure management",
    icon: <Cloud className="h-5 w-5" />,
    topics: [
      {
        id: "git-github",
        title: "Git & GitHub",
        description:
          "Version control, branching strategies, and collaboration workflows",
        status: "not-started",
        difficulty: "beginner",
        estimatedHours: 15,
        resources: ["Git Book", "GitHub Guides", "Advanced Git Tutorial"],
      },
      {
        id: "docker",
        title: "Docker & Containers",
        description:
          "Containerization, Docker Compose, and container orchestration",
        status: "not-started",
        difficulty: "intermediate",
        estimatedHours: 30,
        resources: [
          "Docker Documentation",
          "Docker in Practice",
          "Container Best Practices",
        ],
      },
      {
        id: "aws",
        title: "AWS Fundamentals",
        description:
          "Core AWS services, cloud architecture, and deployment patterns",
        status: "not-started",
        difficulty: "advanced",
        estimatedHours: 45,
        resources: [
          "AWS Documentation",
          "AWS in Action",
          "Cloud Design Patterns",
        ],
      },
    ],
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Design scalable distributed systems and architectures",
    icon: <Database className="h-5 w-5" />,
    topics: [
      {
        id: "basics",
        title: "System Design Fundamentals",
        description: "Scalability, reliability, and distributed systems basics",
        status: "not-started",
        difficulty: "intermediate",
        estimatedHours: 30,
        resources: [
          "System Design Primer",
          "Distributed Systems for Fun and Profit",
        ],
      },
      {
        id: "microservices",
        title: "Microservices Architecture",
        description:
          "Service design, communication patterns, and deployment strategies",
        status: "not-started",
        difficulty: "advanced",
        estimatedHours: 40,
        resources: [
          "Microservices Patterns",
          "Building Microservices",
          "Domain-Driven Design",
        ],
      },
      {
        id: "scaling",
        title: "Scaling & Performance",
        description: "Load balancing, caching strategies, and database scaling",
        status: "not-started",
        difficulty: "advanced",
        estimatedHours: 35,
        resources: [
          "High Performance Browser Networking",
          "Designing Data-Intensive Applications",
        ],
      },
    ],
  },
];

const getDifficultyColor = (difficulty: Topic["difficulty"]) => {
  switch (difficulty) {
    case "beginner":
      return "text-green-400";
    case "intermediate":
      return "text-yellow-400";
    case "advanced":
      return "text-red-400";
    default:
      return "text-gray-400";
  }
};

const getStatusColor = (status: Topic["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-500 bg-opacity-20 text-green-100 border-green-400";
    case "in-progress":
      return "bg-yellow-500 bg-opacity-20 text-yellow-100 border-yellow-400";
    case "not-started":
      return "bg-gray-500 bg-opacity-20 text-gray-100 border-gray-400";
    default:
      return "bg-gray-500 bg-opacity-20 text-gray-100 border-gray-400";
  }
};

interface TopicCardProps {
  topic: Topic;
  onUpdateStatus: (id: string, status: Topic["status"]) => void;
}

function TopicCard({ topic, onUpdateStatus }: TopicCardProps) {
  const nextStatus: Record<Topic["status"], Topic["status"]> = {
    "not-started": "in-progress",
    "in-progress": "completed",
    completed: "not-started",
  };

  return (
    <Card className="overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80 transition-all">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-100">
                  {topic.title}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(
                    topic.status
                  )}`}
                >
                  {topic.status.replace("-", " ")}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">{topic.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <span className={getDifficultyColor(topic.difficulty)}>
                {topic.difficulty}
              </span>
              <span>{topic.estimatedHours}h estimated</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-800 hover:bg-gray-800"
              onClick={() => onUpdateStatus(topic.id, nextStatus[topic.status])}
            >
              Update Status
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TechRoadmap() {
  const [paths, setPaths] = React.useState(techPaths);

  const handleUpdateStatus = (topicId: string, newStatus: Topic["status"]) => {
    setPaths(
      paths.map((path) => ({
        ...path,
        topics: path.topics.map((topic) =>
          topic.id === topicId ? { ...topic, status: newStatus } : topic
        ),
      }))
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-100">Tech Roadmap</h2>
          <p className="text-gray-400">
            Structured learning paths for different tech stacks
          </p>
        </div>
        <Button variant="outline" className="gap-2 border-gray-700">
          <Plus className="h-4 w-4" />
          Add Path
        </Button>
      </div>

      {paths.map((path) => (
        <div key={path.id} className="space-y-4">
          <div className="flex items-center gap-2">
            {path.icon}
            <h3 className="text-lg font-semibold text-gray-100">
              {path.title}
            </h3>
          </div>
          <p className="text-gray-400">{path.description}</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {path.topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onUpdateStatus={handleUpdateStatus}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
