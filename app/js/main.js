'use strict';
/**
 * @fileoverview Master bootstrap file.
 */
goog.provide('demo');

goog.require('demo.widget.module');

angular.element(document).ready(function() {
	angular.bootstrap(document, ['demo.widget']);
});

