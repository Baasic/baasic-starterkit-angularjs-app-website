﻿(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('appMenu', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/utils/app-menu.html',
            scope: true,              
        };
    });
    
}(angular));        