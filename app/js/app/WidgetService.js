'use strict';

goog.provide('demo.widget.WidgetService');


/**
 * @param {string} msg
 * @constructor
 * @ngInject
 */
demo.widget.WidgetService = function() {
	/**
	 * @export
	 * @type {string}
	 */
	this.selected = '';

	/**
	 * @export
	 * @type {Array<string>}
	 */
	this.items = [
		"hello world",
		"hello solar system",
		"hello galaxy",
		"hello universe"
	];

};
