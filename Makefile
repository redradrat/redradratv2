render:
	rm -r docs/ && mkdir -p docs/assets
	pug pug/{index,about,photo}.pug --out docs/
	cp -r assets/* docs/assets/.
	npx tailwindcss -i styles/main.css -o docs/css/main.css

watch:
	rm -rf build && mkdir build && \
	cp -r assets build/. && \
	pug -w pug/ --out build/ & \
	npx tailwindcss -i styles/main.css -o build/css/main.css --watch
