app.controller('watch',function($scope,Duration,$location,$ionicPopup){
    $scope.appName = "Stop Watch";
    $scope.time ="";
    $scope.duration = 0;
    $scope.showTime = false;
    Duration.setTime($scope.duration);
    $scope.duration = Duration.getDuration();
    $scope.reset = Duration.reset;
    $scope.stop =  Duration.stop;
    $scope.add = function(time){
        if(!time){
            $scope.showAlert();
        }else {
            $scope.duration = Duration.setTime(time);
            $scope.duration = Duration.getDuration();
            $location.path('/countDown');
            return $scope.duration;
        }
    };
    $scope.start = function(){
        $scope.showTime = true;
        Duration.start();

    };
    $scope.addStart = function(){
        $scope.showTime = true;
        Duration.addStart();
    };
    if($scope.duration.value == 0){
        Duration.stop();
    }
    // An alert dialog
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Alert!',
            template: 'Please Enter Number'
        });
        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
});