import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#b72c30]">JP Government Contract Services, Inc.</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Helping small businesses navigate and succeed in the world of GSA MAS contracting. Personalized service. Proven results.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/services">
            <Button className="bg-[#d8cc46] text-black">View Services</Button>
          </Link>
          <Link href="https://calendly.com/jennpelton/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-[#d8cc46] text-[#d8cc46]">Book a Call</Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-[#1f4f8a]">MAS Contract Setup</h2>
            <p>End-to-end support for first-time GSA MAS offers, tailored to small businesses.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-[#1f4f8a]">FAS Catalog Transition</h2>
            <p>Streamlined help for service-based contractors transitioning to the FCP system.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-[#1f4f8a]">Contract Mods & Strategy</h2>
            <p>Adding SINs, price adjustments, or just keeping your contract healthy—we've got it.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}