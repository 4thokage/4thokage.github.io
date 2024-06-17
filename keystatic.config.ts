import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
    //repo: `4thokage/4thokage.github.io`,
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
    songs: collection({
      label: "Songs",
      slugField: "title",
      path: "src/content/music/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.file({
          label: "File",
        }),
      },
    }),
  },
});
