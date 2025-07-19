// Recruiter Ramp Hub - Expanded Version with Full Functionality
// Now includes collapsible sections, markdown support, checkboxes, and more tabs

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
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
        </TabsList>

        <TabsContent value="week1">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-4">
              <Accordion type="multiple">
                <AccordionItem value="fundamentals">
                  <AccordionTrigger>GTM Fundamentals</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><Checkbox /> Learn OpenAI monetization (ChatGPT, API, fine-tuning, Team plans)</li>
                      <li><Checkbox /> Understand GTM pillars (Sales, PMM, BD, CS, RevOps)</li>
                      <li><Checkbox /> Read OpenAI’s <a className="underline text-blue-300" href="https://openai.com/blog">official blog</a></li>
                      <li><Checkbox /> Read <a className="underline text-blue-300" href="https://www.lennysnewsletter.com/">Lenny’s Newsletter</a>, <a className="underline text-blue-300" href="https://openviewpartners.com/plg/">OpenView</a>, <a className="underline text-blue-300" href="https://review.firstround.com/">First Round</a></li>
                      <li><Checkbox /> Memorize GTM terms (CAC, QBR, PLG, Churn, Win Rate)</li>
                      <li><Checkbox /> Reflect on one great GTM hire you’ve seen</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week3">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-4">
              <Accordion type="multiple">
                <AccordionItem value="gtm-talent">
                  <AccordionTrigger>Understanding GTM Talent</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><Checkbox /> Review AE, PMM, BD profiles (Stripe, OpenAI, Snowflake)</li>
                      <li><Checkbox /> Practice intake meeting with mock HM</li>
                      <li><Checkbox /> Review GTM interview structures (discovery, ROI, positioning)</li>
                      <li><Checkbox /> Boolean sourcing: ("enterprise AE" AND AI AND Singapore)</li>
                      <li><Checkbox /> Review GTM comp on levels.fyi</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-4">
              <Accordion type="multiple">
                <AccordionItem value="calibration">
                  <AccordionTrigger>Internal Alignment & Continued Learning</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><Checkbox /> Schedule alignment rituals & recap emails</li>
                      <li><Checkbox /> Use scorecards (PMM, AE) to align expectations</li>
                      <li><Checkbox /> Listen to <a className="underline text-blue-300" href="https://a16z.com/podcasts/">a16z Podcast</a> & follow Sarah Guo + Gokul</li>
                      <li><Checkbox /> Optional: Watch mock PMM or AE interviews</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scorecards">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Templates & Scorecards</h2>
              <ul className="list-disc list-inside">
                <li><a className="underline text-blue-300" href="https://docs.google.com/document/d/PMM-SCORECARD">PMM Interview Scorecard</a></li>
                <li><a className="underline text-blue-300" href="https://docs.google.com/document/d/AE-SCORECARD">AE Interview Scorecard</a></li>
                <li><a className="underline text-blue-300" href="https://docs.google.com/document/d/INTAKE-TEMPLATE">Intake Meeting Template</a></li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booleans">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Boolean Strings</h2>
              <ul className="list-disc list-inside">
                <li>AE: ("account executive" OR "enterprise AE") AND (AI OR SaaS) AND Singapore</li>
                <li>PMM: ("product marketing" OR PMM) AND (genAI OR LLM) AND APAC</li>
                <li>BD: ("business development" AND AI AND partnerships)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="talentmap">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Talent Map (Starter)</h2>
              <ul className="list-disc list-inside">
                <li><strong>Enterprise AE:</strong> Google Cloud, Salesforce, Databricks, Snowflake</li>
                <li><strong>PMM:</strong> Stripe, Canva, Notion, HubSpot</li>
                <li><strong>BD:</strong> Anthropic, Cohere, Runway, Hugging Face</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
