import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export default function NavbarIsland() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Navbar />
    </ThemeProvider>
  );
}
