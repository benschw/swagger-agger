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

<div class="fluid-container">
			<div class="row-fluid">
				<div class="col-md-2">
					<widget-list></widget-list>
				</div>
				<div class="col-md-6">
					<widget></widget>
				</div>
			</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.2.1/ui-bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.2.1/ui-bootstrap-tpls.min.js"></script>

<script src="http://localhost:8000/assets/app.js"></script>

