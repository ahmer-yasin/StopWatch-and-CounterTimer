starter.controller('watch',function($scope){

$scope.appName = "stop watch";
    var c=60;
    var t;
    $scope.stopCount= function stopCount() {
        clearTimeout(t)
    };

    $scope.timeCount= function timedCount() {
        document.getElementById('txt').value=c;
        c=c-1;
        if(c==-1) { alert("time over")
            stopcount()
        }
        t=setTimeout("timedCount()",1000)
    }

})