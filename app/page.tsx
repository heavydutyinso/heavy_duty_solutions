'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'
import { PowerArtifacts } from '@/components/power-artifacts'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects-data'

export default function Home() {
  const [name, setName] = useState('')
  const [contactType, setContactType] = useState('individual')
  const [question, setQuestion] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Contact from ${name} (${contactType})`)
    const body = encodeURIComponent(
      `Name: ${name}\nType: ${
        contactType === 'individual' ? 'Individual' : 'Company'
      }\n\nQuestion/Inquiry:\n${question}`
    )

    window.location.href = `mailto:malaizyo@sonka.io?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PowerArtifacts />

      <Navbar activePage="home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-sm font-medium text-primary">
                  Powering Zambia Forward
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
                Innovative{' '}
                <span className="text-primary">Energy Solutions</span> for a
                Brighter Future
              </h1>
              <p className="text-lg text-foreground/70 text-balance mb-8">
                Zambia's Power Initiative is leading the transformation of
                energy production across the nation. Through cutting-edge
                technology and local expertise, we're building a sustainable
                power infrastructure that empowers communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/careers">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Join Our Mission
                  </Button>
                </Link>
                <a href="#contact">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-96 lg:h-full">
              <Image
                src="/images/oie_transparent.png"
                alt="Zambia Power Production - Solar, Wind, Hydro, and Nuclear Energy"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="features"
        className="py-20 md:py-32 bg-card/50 border-t border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Featured Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover our key initiatives transforming Zambia's energy
              landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="bg-background border-border hover:shadow-lg hover:border-primary/50 transition-all h-full cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 mb-4">
                      {project.impact}
                    </p>
                    <div className="flex items-center text-primary hover:gap-2 transition-all">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Explore All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Our Goals */}
      <section id="impact" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('/images/artifacts/square_panel.png')`,
              backgroundRepeat: 'repeat',
              backgroundSize: '100px 100px', // Adjust size as needed for square panels
              opacity: 0.5, // Subtle effect
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Goals
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Zambia's power production targets for sustainable energy
              transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '2M+', label: 'Households Reached' },
              { number: '1GW', label: 'Capacity Deployed' },
              { number: '15K', label: 'Jobs Created' },
              { number: '40%', label: 'Carbon Reduction' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section - Sliding Effect */}
      <section
        id="contact"
        className="relative py-20 md:py-32 bg-card/50 border-t border-border"
        style={{ position: 'relative', zIndex: 21 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Get In Touch
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions or want to collaborate? We'd love to hear from you.
              Reach out to the Zambian Power Initiative team.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>
                      I am a{contactType === 'individual' ? 'n' : ''}
                    </Label>
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50">
                      <div className="flex items-center gap-2">
                        {contactType === 'individual' ? (
                          <Image
                            src={'/images/lightbulb-off.png'}
                            alt={'Lightbulb off'}
                            width={32}
                            height={32}
                            className="object-contain transition-all duration-300 shrink-0 pt-2.5 pl-1"
                          />
                        ) : (
                          <Image
                            src={'/images/lightbulb_on2.png'}
                            alt={'Lightbulb on'}
                            width={54}
                            height={54}
                            className="object-contain transition-all duration-300 shrink-0"
                          />
                        )}
                        <span className="text-sm font-medium">
                          {contactType === 'individual'
                            ? 'Individual'
                            : 'Company'}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-end">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">
                            Individual
                          </span>
                          <Switch
                            checked={contactType === 'company'}
                            onCheckedChange={(checked) =>
                              setContactType(checked ? 'company' : 'individual')
                            }
                            className="scale-125"
                          />
                          <span className="text-sm text-muted-foreground">
                            Company
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="question">
                      What would you like to ask about?
                    </Label>
                    <Textarea
                      id="question"
                      placeholder="Tell us about your inquiry..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      required
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="hidden lg:flex items-center justify-center sticky top-24">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src={
                    contactType === 'individual'
                      ? '/images/lightbulb-off.png'
                      : '/images/lightbulb_on2.png'
                  }
                  alt={
                    contactType === 'individual'
                      ? 'Lightbulb off - Individual'
                      : 'Lightbulb on - Company'
                  }
                  fill
                  className="object-contain transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-linear-to-r from-secondary via-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Be Part of Zambia's Energy Future
          </h2>
          <p className="text-lg text-balance mb-8 opacity-90">
            Join us in building a sustainable, prosperous future powered by
            innovation and local expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-secondary"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
