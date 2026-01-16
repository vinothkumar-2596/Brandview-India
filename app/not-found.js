'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="text-[150px] sm:text-[200px] font-bold text-gradient leading-none mb-4">
          404
        </h1>
        
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8">
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 border-white/20 hover:bg-white/5"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}