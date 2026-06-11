import React, { useMemo, useState } from "react";
import { ArrowRight, Award, BookOpen, CheckCircle2, ClipboardList, Clock3, FileText, GraduationCap, Headphones, Mail, MessageCircle, Microscope, PhoneCall, ShieldCheck, Sigma, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Thesis & Dissertation Writing",
  "Research Paper Writing",
  "Journal Article Preparation",
  "Literature Review Writing",
  "Synopsis & Proposal Development",
  "Data Analysis & Interpretation",
  "Statistical Analysis",
  "Systematic Review & Meta-Analysis",
  "Scientific Editing & Proofreading",
  "Plagiarism Reduction",
  "Formatting & Referencing",
  "Conference Paper Preparation",
];

const expertise = [
  "Chemistry",
  "Organic Chemistry",
  "Inorganic Chemistry",
  "Analytical Chemistry",
  "Physical Chemistry",
  "Medicinal Chemistry",
  "Pharmaceutical Chemistry",
  "Pharmacology",
  "Pharmacognosy",
  "Biotechnology",
  "Biochemistry",
  "Life Sciences",
];

const software = [
  "SPSS",
  "R Studio",
  "GraphPad Prism",
  "Stata",
  "Minitab",
  "Excel",
  "ChemDraw",
  "MarvinSketch",
  "ACD Labs",
  "EndNote",
  "OriginPro",
  "LaTeX",
];

const reasons = [
  "Experienced research professionals",
  "100% original and well-structured content",
  "Confidential and secure communication",
  "Unlimited revisions",
  "On-time delivery",
  "Affordable pricing",
  "24/7 support",
  "International academic standards",
];

const processSteps = [
  "Submit your query",
  "Discuss requirements",
  "Receive quotation",
  "Project assignment",
  "Research and drafting",
  "Quality check and review",
  "Final delivery",
  "Post-delivery support",
];

const faqs = [
  {
    q: "How do I place an order?",
    a: "Use the query form, email, or WhatsApp number below and share your requirements, deadline, and file details.",
  },
  {
    q: "Is my information confidential?",
    a: "Yes. All project details and communications are handled with complete confidentiality.",
  },
  {
    q: "Do you provide revisions?",
    a: "Yes. Revisions are included to make sure the final work matches your requirements.",
  },
  {
    q: "Can you help with publication support?",
    a: "Yes. We support manuscript writing, editing, referencing, and submission preparation.",
  },
];

const stats = [
  { value: "100%", label: "Confidential" },
  { value: "24/7", label: "Support" },
  { value: "12+", label: "Expert Areas" },
  { value: "50+", label: "Tools Used" },
];

export default function ResearchHelperWebsite() {
  const [openFaq, setOpenFaq] = useState(0);

  const highlights = useMemo(
    () => [
      { icon: ShieldCheck, text: "Plagiarism Free" },
      { icon: Clock3, text: "On-Time Delivery" },
      { icon: Headphones, text: "24/7 Support" },
      { icon: Award, text: "Professional Quality" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
              Research Helper
            </p>
            <p className="text-xs text-slate-500">Academic writing and scientific consulting</p>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="outline" className="rounded-full">
              <PhoneCall className="mr-2 h-4 w-4" /> 8840752490
            </Button>
            <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
              Get Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.16),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div>
              <Badge className="mb-5 rounded-full bg-cyan-100 px-4 py-1 text-cyan-900 hover:bg-cyan-100">
                <Sparkles className="mr-2 h-3.5 w-3.5" /> Premium academic support
              </Badge>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Transform your research into high-impact publications.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Professional assistance for thesis writing, research papers, journal articles,
                statistical analysis, editing, formatting, and subject-specific scientific work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-full bg-cyan-700 px-6 py-6 text-base text-white hover:bg-cyan-800">
                  Submit Your Query <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-full px-6 py-6 text-base">
                  WhatsApp / Call 24×7
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item) => (
                  <Card key={item.label} className="rounded-2xl border-slate-200 shadow-sm">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="rounded-3xl border-slate-200 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Quick Inquiry</h2>
                    <p className="text-sm text-slate-500">Tell us your requirements and deadline</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Email Address" />
                  <Input placeholder="Phone Number / WhatsApp" />
                  <Input placeholder="Subject / Topic" />
                  <Textarea placeholder="Write your query here..." className="min-h-32" />
                  <Button className="rounded-2xl bg-slate-900 py-6 text-white hover:bg-slate-800">
                    Send Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.text} className="rounded-2xl border-slate-200">
                  <CardContent className="flex items-center gap-3 p-5">
                    <div className="rounded-2xl bg-slate-100 p-3 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-medium text-slate-700">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-3xl border-slate-200 lg:col-span-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-cyan-700" />
                  <h3 className="text-xl font-bold">Services</h3>
                </div>
                <div className="grid gap-3">
                  {services.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 lg:col-span-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Microscope className="h-5 w-5 text-violet-700" />
                  <h3 className="text-xl font-bold">Subject Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 lg:col-span-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Sigma className="h-5 w-5 text-emerald-700" />
                  <h3 className="text-xl font-bold">Tools & Software</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
                  {software.map((item) => (
                    <div key={item} className="rounded-2xl border bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-3xl border-slate-200">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Users className="h-5 w-5 text-cyan-700" />
                  <h3 className="text-xl font-bold">Why Choose Us</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {reasons.map((item) => (
                    <div key={item} className="flex items-start gap-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <ClipboardList className="h-5 w-5 text-violet-700" />
                  <h3 className="text-xl font-bold">How It Works</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {processSteps.map((step, index) => (
                    <div key={step} className="flex gap-3 rounded-2xl border bg-white p-4 shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm font-medium text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-3xl border-slate-200">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-700" />
                  <h3 className="text-xl font-bold">Contact</h3>
                </div>
                <div className="space-y-4 text-slate-700">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-semibold">researchhelper2025@gmail.com</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Mobile / WhatsApp / Call</p>
                    <p className="font-semibold">8840752490</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Availability</p>
                    <p className="font-semibold">24×7</p>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <PhoneCall className="mr-2 h-4 w-4" /> Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-violet-700" />
                  <h3 className="text-xl font-bold">FAQ</h3>
                </div>
                <div className="space-y-3">
                  {faqs.map((item, index) => (
                    <div key={item.q} className="overflow-hidden rounded-2xl border">
                      <button
                        onClick={() => setOpenFaq(index)}
                        className="flex w-full items-center justify-between p-4 text-left font-medium"
                      >
                        <span>{item.q}</span>
                        <span className="text-slate-400">{openFaq === index ? "−" : "+"}</span>
                      </button>
                      {openFaq === index && (
                        <div className="border-t bg-slate-50 p-4 text-sm text-slate-600">{item.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Card className="rounded-3xl border-slate-200 bg-slate-950 text-white">
            <CardContent className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Submit your query</p>
                <h3 className="mt-2 text-3xl font-bold">Get a professional response today</h3>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Share your topic, deadline, and requirements. Receive clear guidance, quotation,
                  and support for your academic or scientific project.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full bg-white px-6 py-6 text-slate-950 hover:bg-slate-100">
                  <Mail className="mr-2 h-4 w-4" /> researchhelper2025@gmail.com
                </Button>
                <Button className="rounded-full bg-cyan-600 px-6 py-6 text-white hover:bg-cyan-700">
                  <PhoneCall className="mr-2 h-4 w-4" /> 8840752490
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © 2026 Research Helper. Academic writing, research consulting, and publication support.
        </div>
      </footer>
    </div>
  );
}
