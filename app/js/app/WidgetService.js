'use strict';

goog.provide('demo.widget.WidgetService');


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
	 * @type {Array<string>}
	 */
	this.items = [];

	/**
	 * @type {angular.$http}
	 */
	this.http = $http;

	this.refreshAll();
};

demo.widget.prototype.refreshAll = function() {
	var url = "http://localhost:8000/api/widget?callback=JSON_CALLBACK";
	this.http.jsonp(url).success(this.findAllSuccess);
};
demo.widget.prototype.findAllSuccess = function(data) {
	this.items = data;
};
