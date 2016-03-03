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
	$scope.$watch($scope.host, function() {
		widgetService.setHost($scope.host);
		widgetService.refreshAll();
	});

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

