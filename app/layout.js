import './globals.css';
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrackingBootstrap from '@/components/TrackingBootstrap';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: 'BrandView India | Creative Agency',
  description: 'We craft digital experiences that inspire, engage, and deliver results for ambitious brands.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} antialiased`}>
        <TrackingBootstrap />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
