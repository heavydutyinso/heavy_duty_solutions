import { Zap, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-bold">Zambian Power Initiative</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm">
              Powering the nation, one solution at a time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Renewable Energy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Smart Grid
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Infrastructure
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="mailto:info@zpi.zm"
                  className="hover:text-primary transition"
                >
                  info@zpi.zm
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="tel:+260977456789"
                  className="hover:text-primary transition"
                >
                  +260 (977) 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Lusaka, Zambia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-sm text-secondary-foreground/60">
            © 2025 Zambian Power Initiative. Powering Zambia's future.
          </p>
        </div>
      </div>
    </footer>
  )
}

