'use strict';

goog.provide('demo.widget.WidgetDirectiveFactory');
goog.provide('demo.widget.WidgetDirective');

goog.require('demo.widget.WidgetCtrl');

/**
 * @constructor
 * @ngInject
 */
demo.widget.WidgetDirectiveFactory = function() {
	return new demo.widget.WidgetDirective();
};

/**
 * @constructor
 * @ngInject
 */
demo.widget.WidgetDirective = function() {
};

/**
 * @public
 * @export
 */
demo.widget.WidgetDirective.prototype.controller = demo.widget.WidgetCtrl;

/**
 * @public
 * @export
 */
demo.widget.WidgetDirective.prototype.templateUrl = 'app/tpl/widget.html';

/**
 * @public
 * @export
 */
demo.widget.WidgetDirective.prototype.link = function($scope, $elem, $attrs) {
	$scope.host = $attrs.host;
};
