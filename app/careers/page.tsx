import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  MapPin,
  Briefcase,
  Users,
  Target,
  Leaf,
  TrendingUp,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior Power Systems Engineer',
      department: 'Engineering',
      location: 'Lusaka, Zambia',
      type: 'Full-time',
      description:
        'Lead the design and implementation of large-scale power infrastructure projects across Zambia.',
      requirements: [
        '10+ years experience',
        'Power systems expertise',
        'Project management skills',
      ],
    },
    {
      title: 'Renewable Energy Specialist',
      department: 'Engineering',
      location: 'Lusaka, Zambia',
      type: 'Full-time',
      description:
        'Develop and optimize renewable energy solutions including solar and hydroelectric systems.',
      requirements: [
        '5+ years in renewable energy',
        'Technical certification',
        'Field experience',
      ],
    },
    {
      title: 'Smart Grid Software Developer',
      department: 'Technology',
      location: 'Lusaka, Zambia',
      type: 'Full-time',
      description:
        'Build intelligent power distribution systems using cutting-edge IoT and AI technologies.',
      requirements: [
        '5+ years software development',
        'IoT/embedded systems knowledge',
        'Python/C++ proficiency',
      ],
    },
    {
      title: 'Community Engagement Officer',
      department: 'Operations',
      location: 'Regional - Various Provinces',
      type: 'Full-time',
      description:
        'Connect with communities across Zambia to understand needs and implement local power solutions.',
      requirements: [
        '3+ years community engagement',
        'Fluent in local languages',
        'Strong communication skills',
      ],
    },
    {
      title: 'Environmental Impact Analyst',
      department: 'Sustainability',
      location: 'Lusaka, Zambia',
      type: 'Full-time',
      description:
        'Monitor and assess environmental impacts of power projects to ensure sustainable development.',
      requirements: [
        'Environmental science degree',
        'GIS expertise',
        'Impact assessment experience',
      ],
    },
    {
      title: 'Project Coordinator',
      department: 'Operations',
      location: 'Lusaka, Zambia',
      type: 'Full-time',
      description:
        'Coordinate power infrastructure projects from planning through implementation and monitoring.',
      requirements: [
        '3+ years project coordination',
        'PRINCE2 or PMP certification preferred',
        'Problem-solving skills',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePage="careers" />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Join the <span className="text-primary">Energy Revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 text-balance mb-8">
              Help us build Zambia's sustainable energy future. We're hiring
              talented professionals who are passionate about innovation and
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Browse Positions
              </Button>
              <Button size="lg" variant="outline">
                Learn About ZPI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Join ZPI?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Be part of a mission-driven organization transforming energy
              access across Zambia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Impact',
                desc: 'Work on projects that directly improve lives',
              },
              {
                icon: Users,
                title: 'Team',
                desc: 'Collaborate with passionate local innovators',
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                desc: 'Build a cleaner energy future',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                desc: 'Develop skills and advance your career',
              },
            ].map((benefit, i) => (
              <Card key={i} className="bg-background border-border">
                <CardHeader>
                  <benefit.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Open Positions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our current job openings and find your next opportunity
            </p>
          </div>
          <div className="space-y-6">
            {positions.map((position, i) => (
              <Card
                key={i}
                className="bg-background border-border hover:shadow-lg transition overflow-hidden"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-2">
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-foreground/60">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4">
                    {position.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Key Requirements:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {position.requirements.map((req, j) => (
                        <li
                          key={j}
                          className="text-sm text-foreground/60 flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 md:py-32 bg-linear-to-r from-secondary via-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            How to Apply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '1',
                title: 'Submit Application',
                desc: "Click 'Apply Now' and fill out your application with your resume and portfolio",
              },
              {
                number: '2',
                title: 'Interview Process',
                desc: "Our team will review your application and contact you for interviews if you're a good fit",
              },
              {
                number: '3',
                title: 'Join the Team',
                desc: "After successful interviews, join us on our mission to transform Zambia's energy sector",
              },
            ].map((step, i) => (
              <div key={i}>
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="opacity-90">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm border border-primary-foreground/20">
            <p className="text-lg mb-6 opacity-90">
              Questions about opportunities? Contact our HR team at{' '}
              <a
                href="mailto:careers@zpi.zm"
                className="font-semibold hover:underline"
              >
                careers@zpi.zm
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
