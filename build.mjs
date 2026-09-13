import { cpSync, mkdirSync, existsSync } from "fs";

mkdirSync("dist", { recursive: true });
cpSync("index.html", "dist/index.html");

for (const dir of ["css", "js", "fonts", "images"]) {
  if (existsSync(dir)) {
    cpSync(dir, `dist/${dir}`, { recursive: true });
  }
}

console.log("Build complete");
