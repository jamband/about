import posthtml from "posthtml";
import include from "posthtml-include";
import type { PluginOption } from "vite";

export default function htmlInclude(): PluginOption {
  return {
    name: "html-include",
    transformIndexHtml: {
      order: "pre",
      async handler(html: string) {
        return await posthtml([include({ root: "./src" })])
          .process(html)
          .then((result) => result.html);
      },
    },
    handleHotUpdate({ server }) {
      server.ws.send({ type: "full-reload" });
    },
  };
}
