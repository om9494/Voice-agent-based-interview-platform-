import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  BookOpen,
  Code,
  MessageSquare,
  Rocket,
  Target,
  Award,
  Brain,
} from "lucide-react";
import { TechRoadmap } from "@/components/tech-roadmap";
import { StudySchedule } from "@/components/study-schedule";
import { InterviewResources } from "@/components/interview-resources";

export default function PrepPlannerPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Interview Prep Planner</h1>
          <p className="text-muted-foreground mt-1">
            Create a personalized study plan to ace your interviews
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            My Schedule
          </Button>
          <Button className="gap-2">
            <Rocket className="h-4 w-4" />
            Create New Plan
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Code className="h-5 w-5" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-700">65%</p>
            <p className="text-sm text-blue-600">Mastery Level</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <MessageSquare className="h-5 w-5" />
              Behavioral Prep
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-700">78%</p>
            <p className="text-sm text-green-600">Mastery Level</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-700">
              <Target className="h-5 w-5" />
              Interview Readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-700">72%</p>
            <p className="text-sm text-purple-600">Overall Score</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-amber-700">
              <Brain className="h-5 w-5" />
              Problem Solving
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-amber-700">60%</p>
            <p className="text-sm text-amber-600">Mastery Level</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="roadmap" className="space-y-6">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="roadmap">Tech Roadmap</TabsTrigger>
          <TabsTrigger value="schedule">Study Schedule</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap" className="space-y-6">
          <TechRoadmap />
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <StudySchedule />
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <InterviewResources />
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              Ready to take your interview preparation to the next level?
            </h2>
            <p className="text-muted-foreground mt-1">
              Create a personalized study plan tailored to your goals and
              timeline
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <Award className="h-5 w-5" />
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
}
