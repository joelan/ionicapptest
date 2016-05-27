/**
 * Created by JC001 on 2016/5/24.
 */
angular.module('starter.mycontroller',[])
  .controller('mycontroller',function($scope){

   $scope.doSomething=function()
   {
     alert('点击了返回按钮');
   };

  })
  .controller('mycontroller2',function($scope, $timeout, $ionicPopup){

    $scope.images = [
      'http://img5.imgtn.bdimg.com/it/u=655087530,2441427485&fm=21&gp=0.jpg'
      , 'http://www.pp3.cn/uploads/1304/156.jpg'
      , 'http://image.tianjimedia.com/uploadImages/2012/273/3A8BOW0L2KP6.jpg'
      , 'http://photo.enterdesk.com/2010-4-26/enterdesk.com-A6CDA5F106871AF455DB252C004FC7D2.jpg'
      , 'http://img4.imgtn.bdimg.com/it/u=1264855026,1984585600&fm=21&gp=0.jpg'
    ]

    $scope.photoBrowser = photoBrowser;

    function photoBrowser(index){
      photoBrowserStandalone(index, $scope.images)
    }

    function photoBrowserStandalone(index, images){
      var myApp = new Framework7({
        init: false, //IMPORTANT - just do it, will write about why it needs to false later
      });
      var myPhotoBrowserStandalone = myApp.photoBrowser({
        type: 'standalone',
        theme: 'light',
        photos : images,
        initialSlide: index,
        onClose: function(){
          myApp = undefined;
        }
      });
      myPhotoBrowserStandalone.open();
    }

  })
  .controller('controllerdash2',function($scope,$state){

    $scope.changepage=function(){
      console.log("this is changepage");
      $state.go('myotherpage');

      console.log("this is changepage end!!");
    }
  })
  .controller('ContentController',function($scope,$ionicSideMenuDelegate){

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    }

  })


;
