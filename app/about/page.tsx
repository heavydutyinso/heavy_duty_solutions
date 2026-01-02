'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Users,
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'
import { PowerArtifacts } from '@/components/power-artifacts'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PowerArtifacts />

      <Navbar activePage="about" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              About{' '}
              <span className="text-primary">Zambian Power Initiative</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 text-balance">
              Leading Zambia's transformation to sustainable, reliable, and
              accessible energy for all. We're building the future of power
              production through innovation, local expertise, and community
              partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-sm font-medium text-primary flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Powering Zambia's Future
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                Our mission is to transform Zambia's energy landscape by
                developing and deploying innovative power solutions that are
                sustainable, reliable, and accessible to all communities across
                the nation.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                We combine cutting-edge technology with deep local knowledge to
                create energy infrastructure that empowers communities, drives
                economic growth, and protects our environment for future
                generations.
              </p>
              <p className="text-lg text-foreground/70">
                Through strategic partnerships, community engagement, and a
                commitment to excellence, we're building a power grid that
                serves every Zambian household and business.
              </p>
            </div>
            <div className="relative h-64 md:h-96 lg:h-full min-h-[400px]">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 lg:h-full min-h-[400px] order-2 lg:order-1">
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Eye className="w-32 h-32 text-primary/30" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-sm font-medium text-primary flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Our Vision
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                A Sustainable Energy Future
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                We envision a Zambia where every community has access to
                reliable, affordable, and clean energy. A nation where power
                outages are a thing of the past, and renewable energy sources
                power our homes, businesses, and industries.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Our vision extends beyond infrastructure—we see a future where
                Zambia becomes a leader in sustainable energy innovation,
                exporting knowledge and technology across Africa while creating
                thousands of local jobs and opportunities.
              </p>
              <p className="text-lg text-foreground/70">
                We're committed to building an energy ecosystem that balances
                economic growth with environmental stewardship, ensuring that
                our progress today doesn't compromise tomorrow's possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-sm font-medium text-primary flex items-center gap-2 justify-center">
                <Heart className="w-4 h-4" />
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              What Drives Us
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide every decision we make and every project
              we undertake
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Community First',
                description:
                  'We prioritize the needs and well-being of the communities we serve, ensuring our solutions create lasting positive impact.',
              },
              {
                icon: Shield,
                title: 'Sustainability',
                description:
                  'Environmental responsibility is at the core of everything we do, balancing progress with planet protection.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description:
                  'We embrace cutting-edge technology and creative solutions to solve complex energy challenges.',
              },
              {
                icon: Users,
                title: 'Local Expertise',
                description:
                  'We believe in empowering local talent and leveraging Zambian knowledge to build solutions that work.',
              },
            ].map((value, i) => (
              <Card key={i} className="bg-background border-border">
                <CardHeader>
                  <value.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="relative py-20 md:py-32"
        style={{ position: 'relative', zIndex: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Local Zambian Innovators
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet the passionate team driving Zambia's energy revolution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Muzumala',
                role: 'CEO & Founder',
                expertise: 'Energy Infrastructure and AI',
              },
              {
                name: 'Chambo Lungu',
                role: 'CTO',
                expertise: 'Smart Grid Technology',
              },
              {
                name: 'Natasha Mudenda',
                role: 'Head of Operations',
                expertise: 'Community Engagement',
              },
            ].map((member, i) => (
              <Card key={i} className="bg-background text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">
                    {member.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why We Exist
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Understanding the challenges that drive our mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-xl">The Energy Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Zambia faces significant energy challenges, including power
                  shortages, aging infrastructure, and limited access to
                  electricity in rural areas. These challenges hinder economic
                  growth and limit opportunities for millions of Zambians.
                </p>
                <p className="text-foreground/70">
                  We exist to address these challenges head-on, developing
                  solutions that are sustainable, scalable, and accessible to
                  all.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-xl">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  We're committed to transforming Zambia's energy sector through
                  innovation, partnership, and a deep understanding of local
                  needs. Every project we undertake is designed to create
                  lasting value for communities and the nation.
                </p>
                <p className="text-foreground/70">
                  Our work goes beyond infrastructure—we're building capacity,
                  creating jobs, and empowering the next generation of energy
                  leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-linear-to-r from-secondary via-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Join Us in Powering Zambia's Future
          </h2>
          <p className="text-lg text-balance mb-8 opacity-90">
            Whether you're looking to partner with us, join our team, or learn
            more about our projects, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-secondary"
              >
                Explore Our Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
