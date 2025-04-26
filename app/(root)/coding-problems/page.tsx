import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const companyLogos = {
  Google: "/company-logos/google.svg",
  Amazon: "/company-logos/amazon.svg",
  Microsoft: "/company-logos/microsoft.svg",
  Facebook: "/company-logos/facebook.svg",
  Apple: "/company-logos/apple.svg",
};

const difficultyColors = {
  Easy: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  Medium: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  Hard: "bg-red-500/10 text-red-500 border-red-500/20",
};

const problems = [
  {
    id: 1,
    title: "Two Sum",
    company: "Google",
    difficulty: "Medium",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    ],
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    company: "Amazon",
    difficulty: "Medium",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: "s = 'abcabcbb'",
        output: "3",
        explanation: "The answer is 'abc', with the length of 3.",
      },
    ],
  },
  {
    id: 3,
    title: "Container With Most Water",
    company: "Microsoft",
    difficulty: "Medium",
    description:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The above elevation map is represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
    ],
  },
  {
    id: 4,
    title: "3Sum",
    company: "Facebook",
    difficulty: "Medium",
    description:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "The distinct triplets are [-1,0,1] and [-1,-1,2].",
      },
    ],
  },
  {
    id: 5,
    title: "Remove Nth Node From End of List",
    company: "Apple",
    difficulty: "Medium",
    description:
      "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    examples: [
      {
        input: "head = [1,2,3,4,5], n = 2",
        output: "[1,2,3,5]",
        explanation: "We remove the second node from the end.",
      },
    ],
  },
  {
    id: 6,
    title: "Valid Sudoku",
    company: "Google",
    difficulty: "Medium",
    description:
      "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules.",
    examples: [
      {
        input:
          "board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
        output: "true",
        explanation: "The given Sudoku board is valid.",
      },
    ],
  },
  {
    id: 7,
    title: "Combination Sum",
    company: "Amazon",
    difficulty: "Medium",
    description:
      "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.",
    examples: [
      {
        input: "candidates = [2,3,6,7], target = 7",
        output: "[[2,2,3],[7]]",
        explanation:
          "2 and 3 are candidates, and 2 + 2 + 3 = 7. 7 is a candidate, and 7 = 7.",
      },
    ],
  },
  {
    id: 8,
    title: "Rotate Image",
    company: "Microsoft",
    difficulty: "Medium",
    description:
      "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]",
        explanation: "The matrix is rotated 90 degrees clockwise.",
      },
    ],
  },
  {
    id: 9,
    title: "Group Anagrams",
    company: "Facebook",
    difficulty: "Medium",
    description:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    examples: [
      {
        input: "strs = ['eat','tea','tan','ate','nat','bat']",
        output: "[['bat'],['nat','tan'],['ate','eat','tea']]",
        explanation: "The anagrams are grouped together.",
      },
    ],
  },
  {
    id: 10,
    title: "Longest Palindromic Substring",
    company: "Apple",
    difficulty: "Medium",
    description:
      "Given a string s, return the longest palindromic substring in s.",
    examples: [
      {
        input: "s = 'babad'",
        output: "'bab'",
        explanation: "'aba' is also a valid answer.",
      },
    ],
  },
];

export default function CodingProblemsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Coding Problems
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Practice medium-level coding problems from top tech companies
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <Link href={`/coding-problems/${problem.id}`} key={problem.id}>
            <Card className="group relative overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-white transition-colors">
                      {problem.title}
                    </h2>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-6 h-6">
                        <Image
                          src={
                            companyLogos[
                              problem.company as keyof typeof companyLogos
                            ]
                          }
                          alt={problem.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-400">
                        {problem.company}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      difficultyColors[
                        problem.difficulty as keyof typeof difficultyColors
                      ]
                    } border`}
                  >
                    {problem.difficulty}
                  </Badge>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {problem.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="bg-gray-800/50 hover:bg-gray-800"
                    >
                      Problem {problem.id}
                    </Badge>
                  </div>
                  <span className="text-xs text-gray-500">
                    Click to solve →
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
