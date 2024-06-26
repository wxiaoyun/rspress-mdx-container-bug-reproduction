import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Rspack",
  description: "The fast Rust-based web bundler",
  logo: {
    light:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/navbar-logo-2027.png",
    dark: "https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/navbar-logo-dark-2027.png",
  },
  lang: "en",
  markdown: {
    checkDeadLinks: true,
    highlightLanguages: [["rs", "rust"]],
  },
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
    locales: [
      {
        lang: "en",
        title: "Rspack",
        description: "The fast Rust-based web bundler",
        label: "English",
        editLink: {
          docRepoBaseUrl:
            "https://github.com/web-infra-dev/rspack/tree/main/website/docs",
          text: "📝 Edit this page on GitHub",
        },
      },
    ],
  },
  builderConfig: {
    dev: {
      startUrl: true,
    },
  },
});
