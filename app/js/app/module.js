'use strict';
/**
 * @fileoverview Master bootstrap file.
 */
goog.provide('demo.widget.module');

goog.require('cache.tpl');
goog.require('demo.widget.WidgetCtrl');
goog.require('demo.widget.WidgetListCtrl');
goog.require('demo.widget.WidgetService');
goog.require('demo.widget.WidgetDirective');
goog.require('demo.widget.WidgetListDirective');



/** 
 * @type {angular.Module} 
 */
demo.widget.module = angular.module('demo.widget', [
		'ui.bootstrap',
		cache.tpl.name
	])
	.controller('demo.widget.WidgetCtrl', demo.widget.WidgetCtrl)
	.controller('demo.widget.WidgetListCtrl', demo.widget.WidgetListCtrl)
	.directive('widget', function() {
		return new demo.widget.WidgetDirective();
	})
	.directive('widgetList', function() {
		return new demo.widget.WidgetListDirective();
	})
	.factory('widgetService', ['$http', function($http) {
		return new demo.widget.WidgetService($http);
	}]);



