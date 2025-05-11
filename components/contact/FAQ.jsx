"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="w-full mx-auto mt-12 px-0 md:px-6 lg:px-4 py-8">
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-xl py-12 px-4 lg:px-12 bg-zinc-800/50 "
      >
        <span className="flex justify-center gap-2 mb-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
        </span>

        <AccordionItem
          value="item-1"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            Does sender&apos;s identity remains anonymous?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Sender&apos;s identity is always anonymous. We don&apos;t ask
            user to register or log in.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            Does sender&apos;s IP address get compromised?
          </AccordionTrigger>
          <AccordionContent>
            No, the sender&apos;s identity is never compromised. We don&apos; t
            track the IP address of user in our website. Only the report details
            are saved in the database.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            Which association handles the reports?
          </AccordionTrigger>
          <AccordionContent>
            We collect the reports from users and send them to local emergency
            services or law authorities of the mentioned location.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            How to track the status of my report?
          </AccordionTrigger>
          <AccordionContent>
            While you submit an anonymous report, we generate a token for your
            report. You can save the token somewhere in your system, and later
            track your report status via&nbsp;
            <a href="/track-report" className="underline">
              Track Report
            </a>{" "}
            option.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            What if somebody submit fake incident report?
          </AccordionTrigger>
          <AccordionContent>
            We use advanced AI features to check if the incident is fake or not.
            We monitor the incident report, and then send it to local
            authorities, they verify if the report is genuine or fake.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
