import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    if (!file.type.includes("pdf")) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a PDF file." },
        { status: 400 }
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "uploads");
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `resume_${timestamp}.pdf`;
    const filepath = join(uploadDir, filename);

    // Convert File to Buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    // Engineering-focused resume analysis
    const analysis = `# Engineering Resume Analysis Report

1. Personal Information
   - Name: [Extracted from resume]
   - Contact: [Email/Phone]
   - Location: [City, Country]
   - LinkedIn: [Profile URL if available]

2. Engineering Background
   - Branch: [e.g., Computer Science, Software Engineering]
   - Graduation Year: [Year]
   - Degree Status: [Completed/Pursuing]

3. Technical Skills Assessment
   Programming Languages:
   - Primary: [Languages with strong proficiency]
   - Secondary: [Languages with working knowledge]
   
   Frameworks & Tools:
   - Backend: [e.g., Node.js, Django, Spring]
   - Frontend: [e.g., React, Angular, Vue.js]
   - DevOps: [e.g., Docker, Kubernetes, CI/CD]
   - Cloud: [e.g., AWS, Azure, GCP]
   
   Database Technologies:
   - SQL: [e.g., PostgreSQL, MySQL]
   - NoSQL: [e.g., MongoDB, Redis]

4. Education Details
   - Degree: [Bachelor's/Master's] in [Field]
   - Institution: [University Name]
   - CGPA: [Score]/[Scale]
   - Key Coursework: [Relevant courses]

5. Project Analysis
   Project 1:
   - Title: [Project Name]
   - Tech Stack: [Technologies used]
   - Summary: [Brief description]
   - Innovation Rating: [1-5]/5
   - Impact & Results: [Quantifiable outcomes]

   Project 2:
   - Title: [Project Name]
   - Tech Stack: [Technologies used]
   - Summary: [Brief description]
   - Innovation Rating: [1-5]/5
   - Impact & Results: [Quantifiable outcomes]

6. Professional Experience
   Role 1:
   - Position: [Job Title]
   - Company: [Company Name]
   - Duration: [Start Date - End Date]
   - Technologies: [Tech stack used]
   - Key Achievements:
     * [Achievement 1]
     * [Achievement 2]

   Role 2:
   - Position: [Job Title]
   - Company: [Company Name]
   - Duration: [Start Date - End Date]
   - Technologies: [Tech stack used]
   - Key Achievements:
     * [Achievement 1]
     * [Achievement 2]

7. Certifications & Achievements
   Certifications:
   - [Certification 1]
   - [Certification 2]
   
   Technical Achievements:
   - [Achievement 1]
   - [Achievement 2]

8. Overall Assessment
   Resume Score: [X]/10

   Strengths:
   - [Strength 1]
   - [Strength 2]
   - [Strength 3]

   Areas for Improvement:
   - [Improvement 1]
   - [Improvement 2]
   - [Improvement 3]

   Recommendations:
   1. [Specific recommendation for improvement]
   2. [Specific recommendation for improvement]
   3. [Specific recommendation for improvement]

   Industry Fit:
   - Best suited for: [Types of roles]
   - Potential career paths: [Career trajectory suggestions]`;

    // Clean up - delete the file after analysis
    await writeFile(filepath, "");

    return NextResponse.json({
      success: true,
      analysis: analysis,
    });
  } catch (error) {
    console.error("Error processing resume:", error);
    return NextResponse.json(
      { error: "Failed to process resume" },
      { status: 500 }
    );
  }
}
