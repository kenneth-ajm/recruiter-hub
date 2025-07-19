// Recruiter Ramp Hub - Restored Full Version with Checkboxes, Links & Quiz
// All content now rendered upfront with detailed resources, mobile-optimized layout

'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function RecruiterRampHub() {
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const handleSubmit = () => {
    let points = 0;
    if (answers.q1 === "c") points++;
    if (answers.q2 === "a") points++;
    if (answers.q3 === "b") points++;
    if (answers.q4 === "b") points++;
    if (answers.q5 === "a") points++;
    setScore(points);
  };

  const ResourceItem = ({ children, url }: { children: string; url?: string }) => (
    <li className="flex items-start gap-2">
      <input type="checkbox" className="mt-1" />
      <span>
        {url ? (
          <a href={url} className="underline text-blue-300" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          children
        )}
      </span>
    </li>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 py-6 font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">OpenAI Recruiter Ramp-Up Hub</h1>
      <p className="mb-6 text-gray-300 text-sm sm:text-base">Structured onboarding for GTM recruiting in AI-driven environments</p>

      <Tabs defaultValue="week1" className="w-full">
        <TabsList className="mb-4 flex flex-wrap gap-2 px-2 sm:px-0">
          <TabsTrigger value="week1">Week 1–2</TabsTrigger>
          <TabsTrigger value="week3">Week 3–4</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing Learning</TabsTrigger>
          <TabsTrigger value="scorecards">Templates & Scorecards</TabsTrigger>
          <TabsTrigger value="booleans">Boolean Strings</TabsTrigger>
          <TabsTrigger value="talentmap">Talent Map</TabsTrigger>
          <TabsTrigger value="quiz">Knowledge Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="week1">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Week 1–2: GTM Fundamentals</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem url="https://openai.com/blog">Read OpenAI Blog (for product & GTM direction)</ResourceItem>
                <ResourceItem url="https://www.lennysnewsletter.com">Subscribe to Lenny’s Newsletter (PMM, GTM cases)</ResourceItem>
                <ResourceItem url="https://openviewpartners.com/plg">Read OpenView’s PLG deep dive</ResourceItem>
                <ResourceItem>Understand revenue channels: ChatGPT, API, Teams</ResourceItem>
                <ResourceItem>Study GTM acronyms: CAC, LTV, PLG, Churn</ResourceItem>
                <ResourceItem>Summarize GTM org structure (Sales, BD, PMM, CS)</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week3">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Week 3–4: Talent Fluency</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>Review AE profiles from Snowflake & Stripe</ResourceItem>
                <ResourceItem>Shadow hiring manager intake calls</ResourceItem>
                <ResourceItem>Review GTM JDs from OpenAI and Databricks</ResourceItem>
                <ResourceItem url="https://levels.fyi">Compare comp bands at Levels.fyi</ResourceItem>
                <ResourceItem>Draft Boolean string for PMM in Singapore</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Ongoing Learning</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem url="https://latent.space">Subscribe to Latent Space newsletter</ResourceItem>
                <ResourceItem>Track AI GTM hires monthly (OpenAI, Anthropic)</ResourceItem>
                <ResourceItem>Contribute to team onboarding playbooks</ResourceItem>
                <ResourceItem>Attend external events via Pavilion, GTMfund</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scorecards">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-3">Interview Templates</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>AE: Discovery, Objection Handling, Closing</li>
                <li>PMM: Messaging, GTM strategy, Collaboration</li>
                <li>BD: Ecosystem thinking, Prior deals, Storytelling</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booleans">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-3">Boolean Strings</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>("account executive" OR AE) AND (AI OR "machine learning") AND Singapore</li>
                <li>(PMM OR "product marketing") AND ("go-to-market" OR launch)</li>
                <li>("business development" OR BD) AND ("openai" OR "chatgpt")</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="talentmap">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-3">Talent Map</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Track AE, PMM, BD leads from Stripe, Snowflake, Anthropic</li>
                <li>Flag notable GTM switches in APAC and U.S. every quarter</li>
                <li>Map VP+ profiles across GTM teams using LinkedIn projects</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quiz">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-6 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Knowledge Quiz</h2>
              <div className="space-y-4">
                <div>
                  <p className="mb-1">1. What is a key GTM metric?</p>
                  <label><input type="radio" name="q1" value="a" onChange={(e) => setAnswers({ ...answers, q1: e.target.value })} /> Return Rate</label><br/>
                  <label><input type="radio" name="q1" value="b" onChange={(e) => setAnswers({ ...answers, q1: e.target.value })} /> Likes</label><br/>
                  <label><input type="radio" name="q1" value="c" onChange={(e) => setAnswers({ ...answers, q1: e.target.value })} /> Churn</label>
                </div>
                <div>
                  <p className="mb-1">2. What does a PMM primarily do?</p>
                  <label><input type="radio" name="q2" value="a" onChange={(e) => setAnswers({ ...answers, q2: e.target.value })} /> Craft messaging & enable sales</label><br/>
                  <label><input type="radio" name="q2" value="b" onChange={(e) => setAnswers({ ...answers, q2: e.target.value })} /> Design logos</label>
                </div>
                <div>
                  <p className="mb-1">3. Where can you benchmark comp?</p>
                  <label><input type="radio" name="q3" value="a" onChange={(e) => setAnswers({ ...answers, q3: e.target.value })} /> Instagram</label><br/>
                  <label><input type="radio" name="q3" value="b" onChange={(e) => setAnswers({ ...answers, q3: e.target.value })} /> Levels.fyi</label>
                </div>
                <div>
                  <p className="mb-1">4. A good Boolean string contains:</p>
                  <label><input type="radio" name="q4" value="a" onChange={(e) => setAnswers({ ...answers, q4: e.target.value })} /> Emojis</label><br/>
                  <label><input type="radio" name="q4" value="b" onChange={(e) => setAnswers({ ...answers, q4: e.target.value })} /> AND/OR keywords</label>
                </div>
                <div>
                  <p className="mb-1">5. What’s a great GTM resource?</p>
                  <label><input type="radio" name="q5" value="a" onChange={(e) => setAnswers({ ...answers, q5: e.target.value })} /> Lenny’s Newsletter</label><br/>
                  <label><input type="radio" name="q5" value="b" onChange={(e) => setAnswers({ ...answers, q5: e.target.value })} /> Reddit memes</label>
                </div>
              </div>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Submit Answers
              </button>
              {score !== null && (
                <p className="mt-4 text-lg font-semibold">
                  You scored {score}/5 – {score >= 4 ? "✅ Passed!" : "❌ Try Again"}
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
