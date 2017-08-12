myApp.controller('homeCtrl', function ($scope, $uibModal) {
    console.log('inside home')
    $scope.openSignUp = function () {
        $uibModal.open({
            templateUrl: 'components/common/signup.html', // loads the template
            backdrop: true, // setting backdrop allows us to close the modal window on clicking outside the modal window
            windowClass: 'modal', // windowClass - additional CSS class(es) to be added to a modal window template
            controller: function ($scope, homeFact) {
                console.log('inside siginin');
                $scope.data = {};
                $scope.doSignUp = function () {
                    console.log($scope.data);
                    homeFact.doSignUp($scope.data).then(function (success) {
                        console.log(success);
                    }, function (err) {
                        console.log(err)
                    })
                }
            }
        });//end of modal.open
    }
})