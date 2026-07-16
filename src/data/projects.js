/**
 * ポートフォリオに掲載するプロジェクトの一覧。
 * 掲載内容の追加・変更はこのファイルだけで完結する。
 * links の type は ProjectLink コンポーネントの LINK_PRESETS に対応する。
 */
export const projectCategories = [
  {
    title: "Web Projects",
    projects: [
      {
        name: "Speed Queen",
        tech: ["TypeScript", "React"],
        links: [{ type: "website", url: "https://www.speedqueen-cl.com/" }],
      },
      {
        name: "Naachan Journey",
        tech: ["PHP", "WordPress"],
        links: [{ type: "website", url: "https://naachan-journey.com" }],
      },
    ],
  },
  {
    title: "Mobile Projects",
    projects: [
      {
        name: "SketchMap",
        tech: ["Dart", "Flutter"],
        links: [
          {
            type: "appStore",
            url: "https://apps.apple.com/jp/app/sketchmap/id6738701125",
          },
          {
            type: "googlePlay",
            url: "https://play.google.com/store/apps/details?id=com.sketch_map&hl=ja",
          },
        ],
      },
      {
        name: "Kokokara",
        tech: ["Dart", "Flutter"],
        links: [
          {
            type: "appStore",
            url: "https://apps.apple.com/jp/app/kokokara/id6740821050",
          },
          {
            type: "googlePlay",
            url: "https://play.google.com/store/apps/details?id=com.kokokara&hl=ja",
          },
        ],
      },
      {
        name: "シンプル当番表",
        tech: ["Dart", "Flutter"],
        links: [
          {
            type: "appStore",
            url: "https://apps.apple.com/jp/app/%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E5%BD%93%E7%95%AA%E8%A1%A8/id6747189273",
          },
          {
            type: "googlePlay",
            url: "https://play.google.com/store/apps/details?id=com.simpledutyroster&hl=ja",
          },
        ],
      },
    ],
  },
];
