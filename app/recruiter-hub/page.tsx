// Recruiter Ramp Hub - Expanded Version with Full Functionality + Quiz Section
// Updated to display all learning items upfront without accordion toggles
// Mobile optimizations added for responsiveness and readability

'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 py-6 font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">OpenAI Recruiter Ramp-Up Hub</h1>
      <p className="mb-6 text-gray-300 text-sm sm:text-base">Comprehensive onboarding plan for GTM recruiting in AI startups and high-growth environments</p>

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
              <h2 className="text-xl font-semibold">GTM Fundamentals</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Learn OpenAI monetization (ChatGPT, API, fine-tuning, Team plans)</li>
                <li>Understand GTM pillars (Sales, PMM, BD, CS, RevOps)</li>
                <li>Read OpenAI’s <a href="https://openai.com/blog" className="text-blue-400 underline" target="_blank">official blog</a></li>
                <li>Read <a href="https://www.lennysnewsletter.com" className="text-blue-400 underline" target="_blank">Lenny’s Newsletter</a>, <a href="https://openviewpartners.com" className="text-blue-400 underline" target="_blank">OpenView</a>, <a href="https://firstround.com" className="text-blue-400 underline" target="_blank">First Round</a></li>
                <li>Memorize GTM terms (CAC, QBR, PLG, Churn, Win Rate)</li>
                <li>Reflect on one great GTM hire you've seen</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week3">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Understanding GTM Talent</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Review AE, PMM, BD profiles (Stripe, OpenAI, Snowflake)</li>
                <li>Practice intake meeting with mock HM</li>
                <li>Review GTM interview structures (discovery, ROI, positioning)</li>
                <li>Boolean sourcing: ("enterprise AE" AND AI AND Singapore)</li>
                <li>Review GTM comp on <a href="https://www.levels.fyi" className="text-blue-400 underline" target="_blank">levels.fyi</a></li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Ongoing Learning</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Follow key AI newsletters (Import AI, Latent Space)</li>
                <li>Study compensation trends quarterly</li>
                <li>Track top GTM hires at Anthropic, DeepMind, OpenAI</li>
                <li>Contribute to hiring strategy & onboarding docs</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scorecards">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Templates & Scorecards</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Discovery Interview: 3 core areas + motivations</li>
                <li>AE Hiring Scorecard: metrics, closing skills, startup grit</li>
                <li>PMM Scorecard: narrative skills, GTM exposure, test projects</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booleans">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Boolean Strings</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>("enterprise AE" AND AI AND Singapore)</li>
                <li>(PMM OR "product marketing") AND (Lenny OR messaging OR launch)</li>
                <li>("business development" OR "GTM partnerships") AND (OpenAI OR Anthropic)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="talentmap">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Talent Map</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Top GTM talent at OpenAI, Anthropic, DeepMind</li>
                <li>Source pools from Snowflake, Stripe, Databricks</li>
                <li>Track regional GTM leaders in Singapore, Japan, Australia</li>
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
