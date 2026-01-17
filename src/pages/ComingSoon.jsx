import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, Bell } from "lucide-react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <Rocket className="h-10 w-10 text-primary" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
          Something Amazing is <span className="text-primary">Coming Soon</span>
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-12">
          We're working hard to bring you something extraordinary. Stay tuned and be the first to
          know when we launch.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-12">
          {[
            { value: countdown.days, label: "Days" },
            { value: countdown.hours, label: "Hours" },
            { value: countdown.minutes, label: "Minutes" },
            { value: countdown.seconds, label: "Seconds" },
          ].map((item) => (
            <div key={item.label} className="p-4 sm:p-6 rounded-2xl border border-white/10 bg-card">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-muted-foreground text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-secondary border-white/10 rounded-full py-6"
              required
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6"
            >
              <Bell className="mr-2 h-4 w-4" />
              Notify Me
            </Button>
          </form>
        ) : (
          <div className="p-6 rounded-2xl border border-primary/50 bg-primary/10 max-w-md mx-auto">
            <p className="text-lg font-medium text-primary">You're on the list!</p>
            <p className="text-muted-foreground mt-1">We'll notify you when we launch.</p>
          </div>
        )}
      </div>
    </div>
  );
}
