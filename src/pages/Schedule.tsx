import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

const Schedule = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section bg-secondary/20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Class Schedule & Booking</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Book your practice with our easy online scheduling system. 
            Choose from beat-driven Pilates and breath-led Yoga classes throughout the week.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="tag">You Belong Here</span>
            <span className="tag">Start where you are</span>
          </div>
        </div>
      </section>

      {/* External Booking Info */}
      <section className="section">
        <div className="container max-w-4xl">
          <Card className="bg-accent/5 border-2 border-accent/30">
            <CardHeader className="text-center">
              <ExternalLink className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">External Booking System</CardTitle>
              <p className="text-foreground/80">
                We use a secure, professional booking platform to manage our class schedules, 
                memberships, and payments. This ensures the best experience for our community.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Real-Time Availability</h4>
                  <p className="text-sm text-foreground/80">
                    See live class availability, waitlist options, and instant confirmation.
                  </p>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Easy Management</h4>
                  <p className="text-sm text-foreground/80">
                    Manage your bookings, track your class history, and handle cancellations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Options */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Choose Your Booking Platform</h2>
            <p className="text-lg text-foreground/80">
              We offer multiple booking options for your convenience
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Calendly Option */}
            <Card className="bg-background/80 border-accent/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Calendly Booking</CardTitle>
                <p className="text-foreground/80">
                  Simple, streamlined scheduling for individual classes
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-accent/30 rounded-lg p-8 text-center bg-secondary/10">
                  <Calendar className="h-16 w-16 text-accent mx-auto mb-4" />
                  <p className="text-foreground/60 mb-4">
                    Calendly booking embed will be integrated here
                  </p>
                  <code className="text-xs bg-background/50 px-3 py-2 rounded text-foreground/60 block">
                    {`<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/templepilates" 
     style="min-width:320px;height:700px;">
</div>
<script type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async>
</script>
<!-- Calendly inline widget end -->`}
                  </code>
                </div>
                <Button asChild size="lg" className="w-full" variant="outline">
                  <a href="https://calendly.com/templepilates" target="_blank" rel="noopener noreferrer">
                    Open Calendly Booking
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Zoho Bookings Option */}
            <Card className="bg-background/80 border-accent/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Zoho Bookings</CardTitle>
                <p className="text-foreground/80">
                  Full-featured booking with membership management
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-accent/30 rounded-lg p-8 text-center bg-secondary/10">
                  <Calendar className="h-16 w-16 text-accent mx-auto mb-4" />
                  <p className="text-foreground/60 mb-4">
                    Zoho Bookings embed will be integrated here
                  </p>
                  <code className="text-xs bg-background/50 px-3 py-2 rounded text-foreground/60 block">
                    {`<!-- Zoho Bookings embed begin -->
<iframe src="https://zohobookings.com/portal/templepilates" 
        width="100%" 
        height="700px" 
        frameborder="0">
</iframe>
<!-- Zoho Bookings embed end -->`}
                  </code>
                </div>
                <Button asChild size="lg" className="w-full">
                  <a href="https://zohobookings.com/portal/templepilates" target="_blank" rel="noopener noreferrer">
                    Open Zoho Booking
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Class Information */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Class Schedule Overview</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Our weekly schedule is designed to support your routine with consistent class times and variety.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-secondary/30 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Mat Pilates</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <span className="text-foreground/80">7:00 AM, 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-foreground/80">12:00 PM, 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Friday</span>
                    <span className="text-foreground/80">9:00 AM, 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="text-foreground/80">10:00 AM</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mt-4 text-center">
                  50-minute energizing sessions
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/30 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Yoga</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-foreground/80">7:30 AM, 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Thursday</span>
                    <span className="text-foreground/80">12:30 PM, 7:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-foreground/80">9:00 AM, 5:00 PM</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mt-4 text-center">
                  60-minute calming flows
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="section section--secondary">
        <div className="container max-w-4xl">
          <Card className="bg-background/50 border-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Booking Tips & Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Before You Book</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• First-time students: consider our New Student Special</li>
                    <li>• Check our FAQ for what to bring and expect</li>
                    <li>• Arrive 10-15 minutes early for check-in</li>
                    <li>• Classes fill up quickly—book in advance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Cancellation Policy</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Cancel 12+ hours in advance for full credit</li>
                    <li>• Late cancellations may incur a fee</li>
                    <li>• No-shows forfeit the class</li>
                    <li>• Waitlist options available for full classes</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-accent/20 text-center">
                <p className="text-foreground/80 mb-4">
                  Need help with booking or have questions about our policies?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <a href="mailto:hello@templepilates.com">
                      Email Support
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/faq">
                      View FAQ
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;