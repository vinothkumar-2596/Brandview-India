import { Space_Grotesk } from "next/font/google";
import AdminBodyClass from "@/components/admin/AdminBodyClass";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Admin",
};

export default function AdminLayout({ children }) {
  return (
    <div className={spaceGrotesk.className}>
      <AdminBodyClass />
      {children}
    </div>
  );
}
