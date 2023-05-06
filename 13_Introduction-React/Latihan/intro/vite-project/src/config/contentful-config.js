import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "ro0crlnu0onv",
  environment: "master", // defaults to 'master' if not set
  accessToken: "H30LYD-oRTHTsxn0ruDG76B0F9Eq0KrxLIP2KoDKMII",
});
