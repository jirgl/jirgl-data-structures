rm -rf dist
tsc
cp package.json dist
cp README.md dist
cd dist
npm publish