var app= window.angular.module('app',[])

app.factory('recipeFetcher', recipeFetcher)
app.controller('mainCtrl', mainCtrl)

function recipeFetcher ($http)
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

function mainCtrl ($scope, recipeFetcher, $http)
{
	$scope.recipe =[];
	$scope.addRecipe = function() {
	var formData = {name:$scope.Name,ingredient1:$scope.Ingredient1,ingredient2:$scope.Ingredient2,ingredient3:$scope.Ingredient3,ingredient4:$scope.Ingredient4,instructions:$scope.Instructions}
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
 recipeFetcher.get()
    .then(function (data) {
      $scope.recipe = data
    })
}
