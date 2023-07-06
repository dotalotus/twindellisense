const twindRegex = /export default\s*{([\s\S]*?)}\s*as Options/;

export default async function writeTailwindConfigFromTwindConfig(
  twindPath = "./twind.config.ts",
  tailwindPath = "./tailwind.config.js",
) {
  const twindText = await Deno.readTextFile(twindPath);
  if (twindRegex.test(twindText)) {
    const result = twindRegex.exec(twindText);
    if (result !== null) {
      const twindConfig = result[1].replace(
        /selfURL:\s*import\.meta\.url,\n/,
        "",
      );
      const tailwindText = `module.exports = {${twindConfig}}`;
      await Deno.writeTextFile(tailwindPath, tailwindText);
    }
  }
}
