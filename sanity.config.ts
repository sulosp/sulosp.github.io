import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'

const config = defineConfig ({
    projectId: "sjsn3je8",
    dataset: "production",
    title:"sulosp.github.io",
    apiVersion :"2024-06-22",
    basePath :"/studio",
    plugins: [
        structureTool(),
      ]
})

export default config;