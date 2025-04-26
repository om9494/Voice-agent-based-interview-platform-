"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CodeEditorProps {
  defaultCode?: string;
}

export function CodeEditor({ defaultCode }: CodeEditorProps) {
  const [editor, setEditor] = useState<any>(null);
  const [language, setLanguage] = useState("cpp");
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && editorRef.current) {
      import("@monaco-editor/react").then(({ Editor }) => {
        setEditor(
          <Editor
            height="500px"
            defaultLanguage="cpp"
            defaultValue={
              defaultCode ||
              `#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    // Write your solution here
};`
            }
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              readOnly: false,
              automaticLayout: true,
            }}
          />
        );
      });
    }
  }, [defaultCode]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Code Editor</h2>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-x-2">
          <Button variant="outline">Run Code</Button>
          <Button>Submit</Button>
        </div>
      </div>
      <Card className="p-4 border-gray-800">
        <div ref={editorRef} className="h-[500px]">
          {editor}
        </div>
      </Card>
    </div>
  );
}
