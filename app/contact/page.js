import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Creative Street', 'Design District, NY 10001']
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@zesty.agency', 'support@zesty.agency']
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (234) 567-890', '+1 (234) 567-891']
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9AM - 6PM', 'Sat - Sun: Closed']
  }
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <div key={info.title} className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-lg border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-muted-foreground">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Location</h2>
              <div className="aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/5 flex items-center justify-center">
                  <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10">
                    <MapPin className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">123 Creative Street</p>
                    <p className="text-muted-foreground">Design District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}