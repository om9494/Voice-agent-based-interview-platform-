"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ResumeAnalyzerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a PDF file.",
      });
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      // 5MB limit
      toast({
        variant: "destructive",
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
      });
      return;
    }

    setFile(selectedFile);
    toast({
      title: "File selected",
      description: selectedFile.name,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select a PDF file to analyze.",
      });
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze resume");
      }

      const data = await response.json();
      setAnalysis(data.analysis);
      toast({
        variant: "success",
        title: "Analysis complete",
        description: "Your resume has been successfully analyzed.",
      });
    } catch (error) {
      console.error("Error analyzing resume:", error);
      toast({
        variant: "destructive",
        title: "Analysis failed",
        description: "Failed to analyze resume. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Resume Analyzer</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center p-8 border-2 border-dashed rounded-lg bg-muted/50">
            <Upload className="w-12 h-12 mb-4 text-muted-foreground" />
            <label className="cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf"
                className="hidden"
              />
              <span className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Select PDF Resume
              </span>
            </label>
            {file && (
              <p className="mt-2 text-sm text-muted-foreground">
                Selected: {file.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!file || isLoading}
            className="w-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </form>

        {analysis && (
          <div className="mt-8 p-6 rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            <div className="prose prose-invert max-w-none">
              {analysis.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
