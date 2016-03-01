'use strict';

goog.provide('demo.widget.WidgetCtrl');


/**
 * Home controller
 * @param {angular.Scope} $scope
 * @param {demo.widget.WidgetService} widgetService
 * @constructor
 * @ngInject
 */
demo.widget.WidgetCtrl = function($scope, widgetService) {
	/**
	 * @type {demo.widget.WidgetService}
	 * @export
	 */
	$scope.widget = widgetService;
	
};

