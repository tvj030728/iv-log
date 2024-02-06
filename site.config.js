const CONFIG = {
  // profile setting (required)
  profile: {
    name: "ivLis",
    image: "https://r2.ivl.is/images/universal/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Developer",
    bio: "대한민국에 흔해빠진 올라운더 개발자.",
    email: "me@ivl.is",
    linkedin: "tvj030728",
    github: "tvj030728",
    instagram: "pic_jakka",
  },
  projects: [
    {
      name: `프로젝트`,
      href: "https://github.com/tvj030728/",
    },
  ],
  blog: {
    title: "iv-log",
    description: "누추한분이 귀한 곳에!",
  },

  link: "https://ivl.is",
  since: 2013, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "212598f43dfd07cc62ec22aa29355b6c853c8106",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "tvj030728/iv-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
