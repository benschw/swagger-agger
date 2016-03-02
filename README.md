[![Build Status](https://drone.io/github.com/benschw/ui-widget/status.png)](https://drone.io/github.com/benschw/ui-widget/latest)


[download latest](https://drone.io/github.com/benschw/ui-widget/files)


download and run the app and test it out here: http://benschw.github.io/ui-widget/example/


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

