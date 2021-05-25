render: light-render
	npx tailwindcss build styles/main.css -o dist/css/main.css

light-render:
	pug pug/{index,me,photo}.pug --out dist/
	rm -r dist/assets && mkdir -p dist/assets
	cp -r assets/* dist/assets/.

watch:
	pug pug/index.pug --out dist/
	npx tailwindcss build styles/main.css -o dist/css/main.css
