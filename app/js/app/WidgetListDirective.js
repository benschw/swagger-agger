'use strict';

goog.provide('demo.widget.WidgetListDirectiveFactory');
goog.provide('demo.widget.WidgetListDirective');

goog.require('demo.widget.WidgetListCtrl');

/**
 * @constructor
 * @ngInject
 */
demo.widget.WidgetListDirectiveFactory = function() {
	return new demo.widget.WidgetListDirective();
};

/**
 * @constructor
 * @ngInject
 */
demo.widget.WidgetListDirective = function() {
};

/**
 * @public
 * @export
 */
demo.widget.WidgetListDirective.prototype.controller = demo.widget.WidgetListCtrl;

/**
 * @public
 * @export
 */
demo.widget.WidgetListDirective.prototype.templateUrl = 'app/tpl/list.html';
