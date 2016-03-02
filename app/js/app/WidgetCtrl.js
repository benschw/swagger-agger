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
	

	/**
	 * @type {string}
	 * @export
	 */
	$scope.newWidget = '';

	/**
	 * @type {function()}
	 * @export
	 */
	$scope.addWidget = function() {
		widgetService.addWidget($scope.newWidget);
	};
};

