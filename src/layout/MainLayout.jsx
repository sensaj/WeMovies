import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <AppNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
