import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeEditor } from "@/components/code-editor";
import { ProblemStatement } from "@/components/problem-statement";
import Image from "next/image";

const companyLogos = {
  Google: "/company-logos/google.svg",
  Amazon: "/company-logos/amazon.svg",
  Microsoft: "/company-logos/microsoft.svg",
  Facebook: "/company-logos/facebook.svg",
  Apple: "/company-logos/apple.svg",
};

const problems = {
  1: {
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
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
    ],
    starterCode: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
    }
};`,
  },
  2: {
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
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces",
    ],
    starterCode: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Write your solution here
    }
};`,
  },
  3: {
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
    constraints: [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4",
    ],
    starterCode: `class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your solution here
    }
};`,
  },
  4: {
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
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    starterCode: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // Write your solution here
    }
};`,
  },
  5: {
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
    constraints: [
      "The number of nodes in the list is sz",
      "1 <= sz <= 30",
      "0 <= Node.val <= 100",
      "1 <= n <= sz",
    ],
    starterCode: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        // Write your solution here
    }
};`,
  },
};

export default function ProblemDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const problem = problems[params.id as keyof typeof problems];

  if (!problem) {
    return <div>Problem not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            {problem.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src={
                    companyLogos[problem.company as keyof typeof companyLogos]
                  }
                  alt={problem.company}
                  fill
                  className="object-contain"
                />
              </div>
              <Badge variant="outline" className="text-gray-400">
                {problem.company}
              </Badge>
            </div>
            <Badge
              variant="outline"
              className="bg-amber-500/10 text-amber-500 border-amber-500/20"
            >
              {problem.difficulty}
            </Badge>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
          Submit Solution
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <ProblemStatement problem={problem} />
        </Card>
        <Card className="p-6 border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <CodeEditor defaultCode={problem.starterCode} />
        </Card>
      </div>
    </div>
  );
}
