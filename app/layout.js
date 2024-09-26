import "./globals.css";

export const metadata = {
  title: "IamBanky | linktree",
  description: "linktree.iambanky.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
