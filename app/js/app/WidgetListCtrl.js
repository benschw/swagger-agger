'use strict';

goog.provide('demo.widget.WidgetListCtrl');


/**
 * Home controller
 * @param  {angular.Scope=} $scope
 * @param {demo.widget.WidgetService} widgetService
 * @constructor
 * @ngInject
 */
demo.widget.WidgetListCtrl = function($scope, widgetService) {
	/**
	 * @type {string}
	 * @export
	 */
	$scope.widget = widgetService;
	
	/**
	 * @type {function(string)}
	 * @export
	 */
	$scope.onSelect = function(item) {
		$scope.widget.selected = item;
	};
};


