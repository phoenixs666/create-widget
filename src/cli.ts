import { yParser } from "@umijs/utils";

const args = yParser(process.argv.slice(2), {
  alias: {
    version: ["v"],
    help: ["h"],
  },
  boolean: ["version"],
});

require("./")
  .default({
    cwd: process.cwd(),
    args,
  })
  .catch((err: Error) => {
    console.error(`Create failed, ${err.message}`);
    console.error(err);
  });
