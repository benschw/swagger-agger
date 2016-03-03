'use strict';
/**
 * @fileoverview Master bootstrap file.
 */
goog.provide('demo.widget.module');

goog.require('cache.tpl');
goog.require('demo.widget.WidgetCtrl');
goog.require('demo.widget.WidgetListCtrl');
goog.require('demo.widget.WidgetServiceFactory');
goog.require('demo.widget.WidgetDirectiveFactory');
goog.require('demo.widget.WidgetListDirectiveFactory');



/** 
 * @type {angular.Module} 
 */
demo.widget.module = angular.module('demo.widget', [
		'ui.bootstrap',
		cache.tpl.name
	])
	.controller('demo.widget.WidgetCtrl', demo.widget.WidgetCtrl)
	.controller('demo.widget.WidgetListCtrl', demo.widget.WidgetListCtrl)
	.directive('widget', demo.widget.WidgetDirectiveFactory)
	.directive('widgetList', demo.widget.WidgetListDirectiveFactory)
	.factory('widgetService', demo.widget.WidgetServiceFactory);
