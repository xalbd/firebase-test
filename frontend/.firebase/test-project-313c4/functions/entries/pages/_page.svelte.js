import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import axios from "axios";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const api_path = "https://test-project-313c4.web.app";
  let test_result;
  axios.get(api_path + "/api/test").then((response) => test_result = response.data["test"]).catch((error) => console.log(error));
  return `<h1 data-svelte-h="svelte-9jrv7r">Firebase Test</h1> <p>Result of API call to /api/test: ${escape(test_result)}</p>`;
});
export {
  Page as default
};
