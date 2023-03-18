import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

export const client = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
