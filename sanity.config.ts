import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "norxio",
  title: "Norxio CMS",
  projectId: process.env.SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
