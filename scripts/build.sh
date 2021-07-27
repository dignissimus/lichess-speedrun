# tsc --project tsconfig.json --outDir out
rollup -c
# rollup out/speedrun.js --file out/speedrun.js --format iife
# sass src:out No longer necessary, will be removed
npm run build --prefix src/ui # Build UI
