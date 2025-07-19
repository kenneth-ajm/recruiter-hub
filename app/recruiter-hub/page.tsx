import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function RecruiterRampHub() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4">OpenAI Recruiter Ramp-Up Hub</h1>
      <p className="mb-6 text-gray-300">Curated onboarding plan for GTM recruiting in high-growth AI environments</p>

      <Tabs defaultValue="week1" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="week1">Week 1–2</TabsTrigger>
          <TabsTrigger value="week3">Week 3–4</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing Learning</TabsTrigger>
        </TabsList>

        <TabsContent value="week1">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Week 1–2: OpenAI & GTM Fundamentals</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Read OpenAI’s <a href="https://openai.com/blog" className="underline text-blue-300">official blog</a></li>
                <li>Understand GTM pillars: Sales, PMM, BD, CS, RevOps</li>
                <li>Resources:
                  <ul className="ml-4 list-disc">
                    <li><a href="https://www.lennysnewsletter.com/" className="underline text-blue-300">Lenny’s Newsletter</a></li>
                    <li><a href="https://openviewpartners.com/plg/" className="underline text-blue-300">OpenView PLG Content</a></li>
                    <li><a href="https://review.firstround.com/" className="underline text-blue-300">First Round Review</a></li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week3">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Week 3–4: GTM Talent Ramp-Up</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Build candidate profiles for AE, PMM, BD</li>
                <li>Study JDs from Stripe, Databricks, Snowflake</li>
                <li>Explore APAC GTM talent pools & comp benchmarks</li>
                <li>Communities: Pavilion, RevGenius, GTMfund</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Ongoing Learning & Internal Alignment</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Understand how OpenAI evaluates GTM talent</li>
                <li>Shadow intake meetings with hiring managers</li>
                <li>Resources:
                  <ul className="ml-4 list-disc">
                    <li><a href="https://a16z.com/podcasts/" className="underline text-blue-300">a16z Podcast</a> (AI GTM strategy)</li>
                    <li>Follow Sarah Guo, Gokul Rajaram on X</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
