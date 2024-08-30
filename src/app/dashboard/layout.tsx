import Navbar from "@/components/navBar/NavBar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <main className="bg-bg min-h-screen w-screen overflow-hidden">
      {/* Dashboard Nav */}
      <Navbar />

      {/* Dashboard Body */}
      {children}
    </main>
  );
}
