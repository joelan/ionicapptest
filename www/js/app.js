// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.mycontroller'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })

})
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider){


  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $stateProvider

  /*  .state('tabs', {
      url: "/tabs",
      abstract: true,
      templateUrl: "tabs/tabs.html"
    })*/
    .state('tabs', {
      url: "/tabs",
      abstract: true,
      views:{

        'tabs-all':{
          templateUrl: "tabs/tabs.html"

        }
      }

    })

    .state('tabs.taba', {
      url: "/taba",
      views:{
        'tabs-taba':
        {
        templateUrl: "tabs/tab1.html",
         controller:"mycontroller2"
        }
       }

    })

    .state('tabs.tabb', {
      url: "/tabb",
      views:{
        'tabs-tabb':
        {
          templateUrl: "tabs/tab2.html",
          controller:"controllerdash2"
        }
      }

    })

    .state('tabs.tabc', {
      url: "/tabc",
      views:{
        'tabs-tabc':
        {
          templateUrl: "tabs/tab3.html"
        }

      }

    })
  .state('tabs.myotherpage', {
    url: "/otherpage",
    views:{
      'tabs-tabb':
      {
        templateUrl: "tabs/ontherpage.html"
      }

    }

  })
    .state('tabs.myotherpage2', {
      url: "/otherpage2",
      views:{
        'tabs-tabb':
        {
          templateUrl: "tabs/ontherotherpage.html"
        }

      }

    })



 /* .state('slidemenu', {
    url: "/sidemenu",
    abstract: true,
    views:{
      'menu-content':
      {
        templateUrl: "tabs/sidemenu.html"
      }

    }

  });*/

$urlRouterProvider.otherwise('/tabs/taba');




/*    $stateProvider

   .state('tabs', {
   url: "/tabs",
   abstract: true,
   templateUrl: "tabs/tabs.html"
   })

   .state('tabs.taba', {
   url: "/taba",


   templateUrl: "tabs/tab1.html"


   })

   .state('tabs.tabb', {
   url: "/tabb",

   templateUrl: "tabs/tab2.html"


   })

   .state('tabs.tabc', {
   url: "/tabc",

   templateUrl: "tabs/tab3.html"

   });
   $urlRouterProvider.otherwise('/tabs/taba');*/




})
/*  .directive('hideTabs', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      scope.$on('$ionicView.beforeEnter', function() {
        scope.$watch(attributes.hideTabs, function(value){
          $rootScope.hideTabs = value;
        });
      });

      scope.$on('$ionicView.beforeLeave', function() {
        $rootScope.hideTabs = false;
      });
    }
  };
});*/
/*  .directive('hideTabs',function($rootScope){

    return {

      restrict:'A',

      link:function($scope){

        $rootScope.hideTabs = 'tabs-item-hide';

        $scope.$on('$destroy',function(){
         // alert("In destroy of:" + scope.todo.text);
          $rootScope.hideTabs = ' ';

        })



      }

    }

  });*/
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {

        scope.$on('$ionicView.beforeEnter', function() {

          scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = 'tabs-item-hide';
          });

        });

        scope.$on('$ionicView.beforeLeave', function() {
          scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = 'tabs-item-hide';
          });
          scope.$watch('$destroy',function(){
            $rootScope.hideTabs = false;
          })

        });
      }
    };
  });


