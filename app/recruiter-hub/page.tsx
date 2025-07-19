// Recruiter Ramp Hub - All Tabs Restored + Quiz + Content + Resources

'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function RecruiterRampHub() {
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState({
    q1: "", q2: "", q3: "", q4: "", q5: ""
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
        ) : children}
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
          <Card className="bg-white/5 border border-white/10 text-white backdrop-blur-lg">
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
                    <li><strong>CAC</strong>: Customer Acquisition Cost</li>
                    <li><strong>LTV</strong>: Lifetime Value</li>
                    <li><strong>PLG</strong>: Product-Led Growth</li>
                    <li><strong>Churn</strong>: Customer Retention Metric</li>
                  </ul>
                </ResourceItem>
                <ResourceItem>
                  GTM Org Structure:
                  <ul className="ml-4 list-disc">
                    <li><strong>Sales</strong>: Closes revenue</li>
                    <li><strong>BD</strong>: Builds partnerships</li>
                    <li><strong>PMM</strong>: Messaging & Positioning</li>
                    <li><strong>CS</strong>: Adoption & Retention</li>
                  </ul>
                </ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week3">
          <Card className="bg-white/5 border border-white/10 text-white backdrop-blur-lg">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Week 3–4: GTM Talent Fluency</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>Study AE profiles from Snowflake/Stripe—note quota size, deal size, titles</ResourceItem>
                <ResourceItem>Observe GTM intake calls. Identify how GTM differs from Tech/Eng roles</ResourceItem>
                <ResourceItem>Review OpenAI/Databricks GTM job descriptions—note metrics and cross-function</ResourceItem>
                <ResourceItem url="https://levels.fyi">Compare compensation bands on Levels.fyi (Sales, PMM)</ResourceItem>
                <ResourceItem>Draft Boolean for PMM in Singapore with SaaS/PLG filters</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing">
          <Card className="bg-white/5 border border-white/10 text-white backdrop-blur-lg">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Ongoing Learning</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>Follow top GTM voices: Sarah Guo, Gokul Rajaram, Andrew Chen</ResourceItem>
                <ResourceItem url="https://a16z.com/podcasts">Listen to a16z podcasts on AI GTM</ResourceItem>
                <ResourceItem>Sync with hiring managers monthly on org changes and new targets</ResourceItem>
                <ResourceItem>Shadow internal alignment meetings</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scorecards">
          <Card className="bg-white/5 border border-white/10 text-white backdrop-blur-lg">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Templates & Scorecards</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>Coming soon: OpenAI PMM & AE scorecards (internal only)</ResourceItem>
                <ResourceItem url="https://docs.google.com">Explore public scorecard templates from Notion, Stripe</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booleans">
          <Card className="bg-white/5 border border-white/10 text-white backdrop-blur-lg">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Boolean Strings</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>GTM PMM: ("product marketing" OR "go-to-market") AND (SaaS OR PLG) AND Singapore</ResourceItem>
                <ResourceItem>Sales IC: ("Account Executive" OR "Enterprise AE") AND (quota OR ARR) AND Singapore</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="talentmap">
          <Card className="bg-white/5 border border-white/10 text-white backdrop-blur-lg">
            <CardContent className="p-4 space-y-3 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Talent Map</h2>
              <ul className="space-y-2 list-none">
                <ResourceItem>Target GTM talent from Stripe, Canva, Glean, Snowflake, Databricks</ResourceItem>
                <ResourceItem>Filter by APAC GTM hubs: Singapore, Sydney, Tokyo, Bengaluru</ResourceItem>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quiz">
          <Card className="bg-white/5 border border-white/10 text-white backdrop-blur-lg">
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
                  <label>2. Which role is responsible for product messaging?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q2} onChange={(e) => setAnswers({...answers, q2: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">PMM</option>
                    <option value="b">AE</option>
                    <option value="c">CS</option>
                  </select>
                </div>
                <div>
                  <label>3. What does CAC measure?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q3} onChange={(e) => setAnswers({...answers, q3: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">Customer Affinity Curve</option>
                    <option value="b">Customer Acquisition Cost</option>
                    <option value="c">Client Account Cost</option>
                  </select>
                </div>
                <div>
                  <label>4. Who manages partnerships?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q4} onChange={(e) => setAnswers({...answers, q4: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">AE</option>
                    <option value="b">BD</option>
                    <option value="c">PMM</option>
                  </select>
                </div>
                <div>
                  <label>5. What’s a good sign of product-market fit?</label><br />
                  <select className="bg-gray-800 border rounded px-2 py-1 mt-1" value={answers.q5} onChange={(e) => setAnswers({...answers, q5: e.target.value})}>
                    <option value="">Select</option>
                    <option value="a">High retention and referrals</option>
                    <option value="b">More internal emails</option>
                    <option value="c">New brand colors</option>
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
