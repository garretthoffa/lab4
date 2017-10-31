var app= window.angular.module('app',[])

app.factory('reciepeFetcher', recipeFetcher)
app.controller('mainCtrl', mainCtrl)

function reciepeFetcher ($http)
{
	var API_ROOT ='cookbook'
	return {
	  get: function () {
		return $http
			.get(API_ROOT)
			.then(function (resp) {
			   return resp.data
			})
		}
	}
}

function mainCtrl ($scope, reciepeFetcher, $http)
{
	$scope.reciepe =[];
	$scope.addReciepe = function() {
	var formData = {name:$scope.Name,ingredient1:$scope.Ingredient1,ingredient2:$scope.Ingredient2,ingredient3:$scope.Ingredient3,ingredient4:$scope.Ingredient4}
var cookbookURL = "cookbook"
 $http({
     url: cookbookURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
    console.log("Post failed");
  });
}
 reciepeFetcher.get()
    .then(function (data) {
      $scope.recipie = data
    })
}
