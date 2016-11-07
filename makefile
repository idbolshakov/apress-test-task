all:
	@rm -rf build/;\
	mkdir build/;\
	\
	cp static/index.html build/index.html;\
	\
	mkdir build/bundles/;\
	cp src/tmp/bundle.js build/bundles/bundle.js;\
	\
	mkdir build/static;\
	cp -R static/img/ build/static/img;

