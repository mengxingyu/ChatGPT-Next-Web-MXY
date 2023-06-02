/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { getBuildConfig } from "./config/build";

const buildConfig = getBuildConfig();

export const metadata = {
  title: "星星星星宇的私人Ai助手",
  description: "Starain personal ChatGPT Chat Bot.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "星星星星宇的私人Ai助手",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>
        {children}
        <footer
          style={{
            backgroundColor: "#F5F5F5",
            height: "60px",
            lineHeight: "60px",
            textAlign: "center",
            fontSize: "14px",
            color: "#999",
          }}
        >
          <FontAwesomeIcon
            icon={faGlobeAsia}
            style={{ fontSize: "18px", marginRight: "5px", color: "#999" }}
          />
          <span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#999", textDecoration: "none" }}
            >
              备案号：粤ICP备2023015959号-1
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
