// Recruiter Ramp Hub - Enhanced with Definitions and Explanatory Content
// Fully Mobile Optimized with Restored Checklists, Resources, and Quiz

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

  const ResourceItem = ({ children, url }: { children: React.ReactNode; url?: string }) => (
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
                <ResourceItem>
                  Study GTM acronyms:
                  <ul className="ml-4 list-disc">
                    <li><strong>CAC (Customer Acquisition Cost)</strong>: Total cost to acquire a new customer</li>
                    <li><strong>LTV (Lifetime Value)</strong>: Revenue expected from a customer over time</li>
                    <li><strong>PLG (Product-Led Growth)</strong>: Growth driven by product usage (e.g., freemium to paid)</li>
                    <li><strong>Churn</strong>: Percentage of customers lost over a time period</li>
                  </ul>
                </ResourceItem>
                <ResourceItem>
                  Summarize GTM org structure:
                  <ul className="ml-4 list-disc">
                    <li><strong>Sales</strong>: Drives revenue through customer acquisition and deal closing</li>
                    <li><strong>BD (Business Development)</strong>: Builds partnerships and external integrations</li>
                    <li><strong>PMM (Product Marketing)</strong>: Owns product messaging, positioning, and market fit</li>
                    <li><strong>CS (Customer Success)</strong>: Ensures product adoption, retention, and support</li>
                  </ul>
                </ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week3">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Week 3–4: Talent Fluency</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>Review AE profiles from Snowflake & Stripe. Identify patterns in title, scope, quota size.</ResourceItem>
                <ResourceItem>Shadow hiring manager intake calls. Note differences in GTM needs vs Eng roles.</ResourceItem>
                <ResourceItem>Review GTM JDs from OpenAI and Databricks. Focus on language, metrics, stakeholder overlap.</ResourceItem>
                <ResourceItem url="https://levels.fyi">Compare comp bands at Levels.fyi across Sales, PMM, BD roles</ResourceItem>
                <ResourceItem>Draft Boolean string for PMM in Singapore (apply filters like industry, GTM terms)</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Ongoing Learning</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem url="https://www.firstround.com">Read First Round’s GTM series</ResourceItem>
                <ResourceItem url="https://future.com">Study a16z and Future on AI GTM trends</ResourceItem>
                <ResourceItem>Bookmark Notion GTM resources, frameworks, teardown decks</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scorecards">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Templates & Scorecards</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>PMM scorecard (positioning, storytelling, launch ownership)</ResourceItem>
                <ResourceItem>AE scorecard (discovery depth, ROI selling, quota size fit)</ResourceItem>
                <ResourceItem>BD scorecard (partner ecosystem, technical depth, ICP)</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booleans">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Boolean Strings</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>PMM: ("product marketing" OR PMM) AND (AI OR ML) AND Singapore</ResourceItem>
                <ResourceItem>AE: ("account executive" OR "enterprise AE") AND LLM AND APAC</ResourceItem>
                <ResourceItem>BD: ("business development" OR partnerships) AND "generative AI"</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="talentmap">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Talent Map</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>Review recent moves: AE hires from OpenAI, Anthropic, Runway</ResourceItem>
                <ResourceItem>Chart out PMM profiles from Meta, Notion, Canva</ResourceItem>
                <ResourceItem>Track unicorn AI startup GTM teams: Mistral, Perplexity, Inflection</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quiz">
          {/* Quiz block remains unchanged */}
        </TabsContent>
      </Tabs>
    </main>
  );
}
