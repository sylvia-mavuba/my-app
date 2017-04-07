(function () {
    'use strict';

    angular.module('blogApp', [
        'templates',
        'ui.router',
        'blogApp.App',
        'blogApp.common'
    ])
    .config(function ($httpProvider) {
        $httpProvider.useLegacyPromiseExtensions = false;
    })
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('blogApp');
    })
}());
