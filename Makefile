render: light-render
	npx tailwindcss build styles/main.css -o docs/css/main.css

light-render:
	pug pug/{index,me,photo}.pug --out docs/
	rm -r docs/assets && mkdir -p docs/assets
	cp -r assets/* docs/assets/.

watch:
	pug pug/index.pug --out docs/
	npx tailwindcss build styles/main.css -o docs/css/main.css
