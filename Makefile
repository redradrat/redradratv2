render: light-render
	npx tailwindcss -i styles/main.css -o docs/css/main.css

light-render:
	pug pug/{index,about,photo}.pug --out docs/
	rm -r docs/assets && mkdir -p docs/assets
	cp -r assets/* docs/assets/.

watch:
	rm -rf build && mkdir build && \
	cp -r assets build/. && \
	pug -w pug/ --out build/ & \
	npx tailwindcss -i styles/main.css -o build/css/main.css --watch
