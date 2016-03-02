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
	 * @type {Array<*>}
	 */
	this.items = [];

	this.http = $http;

	
	this.refreshAll();
};

/**
 * @type {angular.$http}
 * @private
 */
demo.widget.WidgetService.prototype.http = null;

demo.widget.WidgetService.prototype.refreshAll = function() {
	var url = "http://localhost:8000/api/widget?callback=JSON_CALLBACK";
	var that = this;
	this.http.jsonp(url)//.success(this.refreshAllSuccess);
		.success(function(data){
			that.refreshAllSuccess(data);
		});

};
/**
 * @export
 * @param {Array<*>} data
 */
demo.widget.WidgetService.prototype.refreshAllSuccess = function(data) {
	this.items = data;

	console.log(this);
};
