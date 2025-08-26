import { Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-accent/20">
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Temple Pilates</h3>
              <p className="text-foreground/80 mb-6 max-w-md">
                A modern sanctuary for movement. Beat-driven Pilates and breath-led Yoga 
                designed to lift your energy and quiet your mind.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:hello@templepilates.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-foreground/80 space-y-2">
                <p>123 Wellness Way<br />San Francisco, CA 94102</p>
                <p>(415) 555-0123</p>
                <p>hello@templepilates.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <p className="text-foreground/80 text-sm mb-4">
                Join our community for class updates and wellness tips.
              </p>
              {/* Newsletter signup placeholder */}
              <div className="p-4 bg-background/50 rounded-lg border border-accent/20">
                <p className="text-sm text-foreground/60">
                  Newsletter signup form embed goes here
                  <br />
                  (Mailchimp/Formspree integration)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2024 Temple Pilates. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;