'use strict';

goog.provide('demo.widget.WidgetServiceFactory');
goog.provide('demo.widget.WidgetService');


/**
 * @param {angular.$http} $http
 * @constructor
 * @ngInject
 */
demo.widget.WidgetServiceFactory = function($http) {
	return new demo.widget.WidgetService($http);
};

/**
 * @param {angular.$http} $http
 * @constructor
 * @ngInject
 */
demo.widget.WidgetService = function($http) {
	/**
	 * @export
	 * @type {string}
	 */
	this.selected = '';

	/**
	 * @export
	 * @type {Array<*>}
	 */
	this.items = [];

	this.http = $http;

};

/**
 * @type {string}
 * @public
 */
demo.widget.WidgetService.prototype.host = '';

/**
 * @type {angular.$http}
 * @private
 */
demo.widget.WidgetService.prototype.http = null;

/**
 * @param {string} host
 * @public
 */
demo.widget.WidgetService.prototype.setHost = function(host) {
	this.host = host;
};

/**
 * @public
 */
demo.widget.WidgetService.prototype.refreshAll = function() {
	var url = this.host + '/api/widget';
	
	console.log(url);

	var that = this;
	//this.http.jsonp(url+'?callback=JSON_CALLBACK')
	this.http.get(url)
		.success(function(data){
			that.items = data;
		});
};

/**
 * @param {string} message
 */
demo.widget.WidgetService.prototype.addWidget = function(message) {
	var url = this.host + '/api/widget';
	var that = this;
	this.http.post(url, {'message': message})
		.success(function(){
			that.refreshAll();
		});
};
