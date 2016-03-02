POC fort closure and angularjs


## Build the JS
### get normal deps
	
	bower install
	npm install

### get google closure deps
closure library, closure compiler src, and compiler jar
	
	make deps

### build
	
	grunt build


## Build the Server

	go get
	go build


## Run it

	./ui-widget


## Test it out

	chromium-browser ./example/index.html

