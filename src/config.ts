import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	blog: {
		path: "/blog",
		title: "blog",
	},
	tags: {
		path: "/tags",
		title: "tags",
	},
	media: {
		path: "/cv",
		title: "CV",
	},
	about: {
		path: "/music",
		title: "music",
	},
};

export const SITE = {
	name: "JSR",
	title: "José Silva Rodrigues",
	description: "Zezadas Personal website",
	url: "https://jose-rodrigues.info",
	githubUrl: "https://github.com/4thokage/4thokage.github.io",
	listDrafts: false,
	image:
		"https://raw.githubusercontent.com/4thokage/4thokage.github.io/main/public/banner.png",
	ytChannelId: "@JoseRodrigues-if7ct",
	author: "José SRodrigues", 
	authorTwitter: "Zezadas1", 
	authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = false;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = false;
