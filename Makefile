

deps:
	mkdir closure
	wget http://dl.google.com/closure-compiler/compiler-latest.tar.gz \
		-O closure/compiler.tar.gz
	tar xzf closure/compiler.tar.gz -C closure/
	git clone https://github.com/google/closure-library.git closure/closure-library
	git clone https://github.com/google/closure-compiler.git closure/closure-compiler
