import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Grid from "../components/Grid";
import Feature from "../components/Feature";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import NavItem from "@/components/NavItem"
import Hero from "@/components/Hero"
import JobList from "@/components/JobList"
import FilterBar from "@/components/FilterBar"


export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    header: Header,
    footer: Footer,
    "nav-item": NavItem,
    hero: Hero,
    "job-list": JobList,
    "filter-bar": FilterBar
  },
  apiOptions: {
    region: "eu"
  },
});