import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const tsconfig = {
  compilerOptions: {
    downlevelIteration: true,
    skipLibCheck: true,
    strict: false,
  },
  types: ["lichess"],
};

const tsc = typescript(tsconfig);

function pathResolve(options) {
  return {
    resolveId: function (file, origin) {
      if (file.startsWith("./") || file.startsWith("../")) {
        return tsc.resolveId("src/" + file + ".ts");
      }
      return null;
    },
  };
}

const contentscript = (name) => ({
  input: `src/${name}.ts`,
  output: {
    file: `build/scripts/${name}.js`,
    format: "cjs",
  },
  plugins: [pathResolve(), nodeResolve(), tsc],
});
export default [contentscript("userPage"), contentscript("potentialGame")];
