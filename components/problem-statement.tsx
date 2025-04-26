import { Card } from "@/components/ui/card";

interface Example {
  input: string;
  output: string;
  explanation: string;
}

interface Problem {
  id: number;
  title: string;
  company: string;
  difficulty: string;
  description: string;
  examples: Example[];
  constraints: string[];
}

interface ProblemStatementProps {
  problem: Problem;
}

export function ProblemStatement({ problem }: ProblemStatementProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">Problem Description</h2>
        <p className="text-gray-300 leading-relaxed">{problem.description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Examples</h2>
        <div className="space-y-4">
          {problem.examples.map((example, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
            >
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-purple-400">Input: </span>
                  <code className="bg-gray-900 px-2 py-1 rounded text-gray-300">
                    {example.input}
                  </code>
                </div>
                <div>
                  <span className="font-medium text-purple-400">Output: </span>
                  <code className="bg-gray-900 px-2 py-1 rounded text-gray-300">
                    {example.output}
                  </code>
                </div>
                <div>
                  <span className="font-medium text-purple-400">
                    Explanation:{" "}
                  </span>
                  <span className="text-gray-300">{example.explanation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Constraints</h2>
        <ul className="list-disc list-inside space-y-1">
          {problem.constraints.map((constraint, index) => (
            <li key={index} className="text-gray-300">
              <code className="bg-gray-900 px-2 py-1 rounded">
                {constraint}
              </code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
