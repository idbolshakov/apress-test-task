all:
	@rm -rf build/;
	@mkdir build/;
	@cp static/index.html build/index.html;
	
	@mkdir build/bundles/;

	@node ./node_modules/.bin/uglifyjs src/tmp/bundle.js -o \
	build/bundles/bundle.js;
	
	@mkdir build/static;
	@cp -R static/img/ build/static/img;

	@for f in build/static/img/*.svg build/static/img/*/*.svg; do\
		node ./node_modules/.bin/svgo -q -i $${f};\
	done;

