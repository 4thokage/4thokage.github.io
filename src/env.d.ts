/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URI: string;
  readonly KEYSTATIC_GITHUB_CLIENT_ID: string;
  // more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
