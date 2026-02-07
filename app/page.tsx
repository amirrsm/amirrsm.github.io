"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Home() {
  const [image, setImage] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setImage(img)
    }
    img.src = "/cv-image.jpg"
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12">
        <header className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                {image ? (
                    <img
                    src={image.src}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
                AMIRREZA<br />SALARIMANESH
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary mb-8 font-medium">
                SRE | DevOps Enginner | Backend Developer
              </p>
              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground">
                <a
                  href="https://github.com/amirrsm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Github className="w-5 h-5" />
                  amirrsm
                </a>
                <a
                  href="https://www.linkedin.com/in/amirrsm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:amirrezasalarimanesh1302@gmail.com"
                  
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href="https://t.me/FileNotFoundException"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <MessageCircle className="w-5 h-5" />
                  @FileNotFoundException
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              SUMMARY
            </h2>
            <p className="text-foreground leading-relaxed text-lg whitespace-pre-line">
              DevOps Engineer and Backend Developer with expertise in cloud infrastructure, automation, and CI/CD pipelines. Skilled in containerization, orchestration, and configuration management using tools like Docker, Kubernetes, and Ansible. Dedicated to improving system reliability, scalability, and deployment efficiency across development environments.

            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              PROFESSIONAL EXPERIENCE
            </h2>
            
            <div className="space-y-10">
              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Site Reliability Engineer
                  </h3>
                  <span className="text-primary font-medium text-lg">Dec 2024 - Present</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">Limoo Host</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Kubernetes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Docker</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Linux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Python</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Go</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Log &amp; Monitoring Stack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Ansible &amp; AWX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>CI/CD &amp; GitOps(ArgoCD)</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Network Monitoring
                  </h3>
                  <span className="text-primary font-medium text-lg">Nov 2023 - Jan 2025</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">Part Software Group</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>ELK</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Promethues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Grafana</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Telegraf</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Bash Script</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              PROJECTS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg ">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Project Name
                  </h3>
                  <span className="text-primary font-medium">Jan 2024 - Present</span>
                </div>
                <p className="text-foreground mb-3 text-sm">Project description here.</p>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Key achievement 1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Key achievement 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Key achievement 3</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg ">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Another Project
                  </h3>
                  <span className="text-primary font-medium">Jan 2023 - Dec 2023</span>
                </div>
                <p className="text-foreground mb-3 text-sm">Another project description.</p>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Achievement 1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Achievement 2</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

<section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              VOLUNTEERING
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Volunteer Position
                  </h3>
                  <span className="text-primary font-medium">Jan 2024 · 1 mo</span>
                </div>
                <p className="text-primary mb-3 font-medium text-lg">Organization Name</p>
                <p className="text-foreground">
                  Description of your volunteer work.
                </p>
                <br />
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">View Link</a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              SKILLS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "GoLang", "FastAPI", "Node.js", "Ansible", "GitOps", "Helm", "CI/CD Pipelines", "Prometheus", "Automations", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Platforms & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Kubernetes", "AWS", "Docker", "AWX"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Teamwork", "Communication", "Event Planning"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              EDUCATION
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Bachelor&#039;s degree in Computer Engineering
                  </h3>
                  <span className="text-primary font-medium">2020 - 2026</span>
                </div>
                <p className="text-muted-foreground">Ferdowsi University of Mashhad</p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Associate&#039;s degree, Computer Science
                  </h3>
                  <span className="text-primary font-medium">Sep 2018 - May 2020</span>
                </div>
                <p className="text-muted-foreground">Community College</p>
              </div>
            </div>
          </section>

          <section className="pb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              LANGUAGES
            </h2>
            
            <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
              <ul className="space-y-3 text-foreground list-none">
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-lg">English</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
