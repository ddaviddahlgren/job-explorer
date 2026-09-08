import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Grid from "../components/Grid";
import Feature from "../components/Feature";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature
  },
  apiOptions: {
    region: "eu"
  },
});