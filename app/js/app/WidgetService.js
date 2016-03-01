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


	var url = "http://localhost:8000/api/widget?callback=JSON_CALLBACK";

	var that = this;

	$http.jsonp(url)
		.success(function(data){
			that.items = data;
			console.log(data);
		});

};
