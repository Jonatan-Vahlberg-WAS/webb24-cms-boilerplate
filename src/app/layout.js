import Layout from "@/components/layout";
import "./globals.css";
import StoryblokProvider from "@/providers/StoryblokProvider";

export default async function RootLayout({ children }) {
  // const currentConfig = await StoryblokCMS.getConfig();
  return (
    <StoryblokProvider>
      <html>
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </StoryblokProvider>
  );
}
