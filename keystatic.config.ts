import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "cloud",
    //repo: `4thokage/4thokage.github.io`,
  },
  cloud: {
    project: "devs/website",
  },

  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { length: { max: 100 } } },
        }),
        description: fields.text({
          label: "Description",
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        author: fields.text({ label: "Author", defaultValue: "JSR" }),
        date: fields.date({ label: "Date" }),
        category: fields.text({
          label: "Category",
          validation: { isRequired: true },
        }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
        }),
      },
    }),
    music: collection({
      label: "Songs",
      slugField: "title",
      path: "src/content/music/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Publish Date", defaultValue: 'today' }),
        duration: fields.integer({ label: "Duration", defaultValue: 0 }),
        image: fields.image({
          label: "Cover",
          directory: "public/images/uploads",
          publicPath: "/images/uploads/",
        }),
        content: fields.file({
          label: "File",
          directory: "public/assets",
          publicPath: "/assets/",
        }),
      },
    }),
  },
});
