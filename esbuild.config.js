const { build } = require('esbuild');
const pkg = require('./package.json');

const dev = process.argv.includes('--watch');

const entryPoints = Object.values(pkg.exports).map((e) => e.source);

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const watch = dev;
const minify = !dev;

const baseConfig = {
  entryPoints,
  outdir: 'dist',
  target: 'es2015',
  bundle: true,
  sourcemap: true,
  external,
  watch,
  minify,
};

Promise.all([
  build({
    ...baseConfig,
    format: 'cjs',
  }),
  build({
    ...baseConfig,
    format: 'esm',
    outExtension: {
      '.js': '.mjs',
    },
  }),
]).catch(() => process.exit(1));
