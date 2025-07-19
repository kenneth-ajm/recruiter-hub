// Recruiter Ramp Hub - Expanded Version with Full Functionality + Quiz Section
// Updated to display all learning items upfront without accordion toggles

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function RecruiterRampHub() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4">OpenAI Recruiter Ramp-Up Hub</h1>
      <p className="mb-6 text-gray-300">Comprehensive onboarding plan for GTM recruiting in AI startups and high-growth environments</p>

      <Tabs defaultValue="week1" className="w-full">
        <TabsList className="mb-4 flex flex-wrap gap-2">
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
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">GTM Fundamentals</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><Checkbox /> Learn OpenAI monetization via <a className="underline text-blue-300" href="https://openai.com/pricing" target="_blank">pricing page</a>, <a className="underline text-blue-300" href="https://platform.openai.com/docs/guides/fine-tuning" target="_blank">fine-tuning guide</a>, and <a className="underline text-blue-300" href="https://openai.com/blog" target="_blank">OpenAI blog</a></li>
                <li><Checkbox /> Understand GTM pillars via <a className="underline text-blue-300" href="https://www.lennysnewsletter.com/p/how-the-best-companies-structure" target="_blank">Lenny’s GTM Structure Guide</a> and <a className="underline text-blue-300" href="https://blog.hubspot.com/operations/revops" target="_blank">HubSpot RevOps Guide</a></li>
                <li><Checkbox /> Read OpenAI’s <a className="underline text-blue-300" href="https://openai.com/blog" target="_blank">official blog</a></li>
                <li><Checkbox /> Read <a className="underline text-blue-300" href="https://www.lennysnewsletter.com/" target="_blank">Lenny’s Newsletter</a>, <a className="underline text-blue-300" href="https://openviewpartners.com/plg/" target="_blank">OpenView PLG</a>, <a className="underline text-blue-300" href="https://review.firstround.com/" target="_blank">First Round Review</a></li>
                <li><Checkbox /> Memorize GTM terms: CAC, QBR, PLG, Churn, Win Rate</li>
                <li><Checkbox /> Reflect on one great GTM hire you've seen—what made them effective?</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week3">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Understanding GTM Talent</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><Checkbox /> Review AE/PMM/BD LinkedIn profiles from Stripe, OpenAI, Snowflake</li>
                <li><Checkbox /> Practice intake meetings using <a className="underline text-blue-300" href="https://www.notion.so/sample-recruiting-intake-template" target="_blank">this intake guide</a></li>
                <li><Checkbox /> Study GTM interviews: <a className="underline text-blue-300" href="https://hbr.org/2022/03/3-interview-questions-that-reveal-high-performers-in-sales" target="_blank">Sales</a>, <a className="underline text-blue-300" href="https://www.sharebird.com/" target="_blank">PMM (Sharebird)</a></li>
                <li><Checkbox /> Practice Boolean sourcing: e.g. ("enterprise AE" OR "account executive") AND AI AND Singapore</li>
                <li><Checkbox /> Research compensation on <a className="underline text-blue-300" href="https://www.levels.fyi" target="_blank">levels.fyi</a> or <a className="underline text-blue-300" href="https://www.teamblind.com/" target="_blank">TeamBlind</a></li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Internal Alignment & Continued Learning</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><Checkbox /> Schedule alignment rituals & send recap emails</li>
                <li><Checkbox /> Use scorecards (PMM, AE) to align expectations</li>
                <li><Checkbox /> Listen to <a className="underline text-blue-300" href="https://a16z.com/podcasts/" target="_blank">a16z Podcast</a> & follow Sarah Guo, Gokul Rajaram</li>
                <li><Checkbox /> Optional: Watch mock PMM or AE interviews on YouTube</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        // ... unchanged scorecards, booleans, talentmap, quiz tabs remain here ...

      </Tabs>
    </main>
  );
}
