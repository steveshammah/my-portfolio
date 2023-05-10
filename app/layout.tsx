
import BottomNavigation from "@components/BottomNavigation/BottomNavigation";
import "../styles/global.css";
import TopNav from "@components/TopNav/TopNav";

export const metadata = {
  title: "Shammah Odhiambo",
  description:
    "Welcome to my portfolio website where I list down my career path and invlovement in different aspects of tech and some of the projects I have worked on.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
