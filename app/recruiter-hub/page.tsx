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

        {/* Other tabs unchanged */}

        <TabsContent value="quiz">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-4 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Knowledge Quiz</h2>
              <form className="space-y-4">
                <div>
                  <label>1. What does PLG stand for?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q1} onChange={(e) => setAnswers({...answers, q1: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">Private Local Growth</option>
                    <option value="b">Product Lifecycle Generation</option>
                    <option value="c">Product-Led Growth</option>
                  </select>
                </div>
                <div>
                  <label>2. Which role is responsible for crafting product positioning?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q2} onChange={(e) => setAnswers({...answers, q2: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">PMM</option>
                    <option value="b">AE</option>
                    <option value="c">BD</option>
                  </select>
                </div>
                <div>
                  <label>3. What does CAC measure?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q3} onChange={(e) => setAnswers({...answers, q3: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">Customer After Care</option>
                    <option value="b">Customer Acquisition Cost</option>
                    <option value="c">Customer Action Curve</option>
                  </select>
                </div>
                <div>
                  <label>4. Who is primarily responsible for partnerships?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q4} onChange={(e) => setAnswers({...answers, q4: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">PMM</option>
                    <option value="b">BD</option>
                    <option value="c">AE</option>
                  </select>
                </div>
                <div>
                  <label>5. What is a sign of product-market fit?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q5} onChange={(e) => setAnswers({...answers, q5: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">High retention and referrals</option>
                    <option value="b">New office launches</option>
                    <option value="c">Product redesign</option>
                  </select>
                </div>
                <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
              </form>
              {score !== null && (
                <p className="mt-4 text-lg">You scored {score}/5. {score >= 4 ? "✅ Great job!" : "⚠️ Review the onboarding material and try again."}</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
