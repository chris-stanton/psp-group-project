app.controller('AdminFlaggedController', ['$firebaseAuth','$http', '$location',"$routeParams",'AdminFactory', function($firebaseAuth, $http, $location,$routeParams,AdminFactory){
  var self = this;
  var auth = $firebaseAuth();
self.ideaToFlagObject = {list:[] };
self.allUsers = AdminFactory.allUsers;

self.deactivateUser = function(userId) {
  console.log(userId);
  AdminFactory.deactivateUser(userId);
};

self.reactivateUser = function(userId) {
  console.log(userId);
  AdminFactory.reactivateUser(userId);
};


self.flagCommentClick = function (comments){
  $routeParams.id = comments.id;
  $routeParams.idea_id = comments.idea_id;
  $routeParams.user_id = comments.user_id;
    $location.path('flag/'+$routeParams.id+'/'+$routeParams.idea_id+'/'+$routeParams.user_id);
};//end of flagCommentClick

console.log($routeParams);
self.flagIdeaClick = function (idea){
  console.log('idea',idea);
  console.log("routeParams",$routeParams);
  $routeParams.id = idea.id;
  $routeParams.idea_id = idea.idea_id;
  $routeParams.user_id = idea.user_id;
    $location.path('flag/'+$routeParams.id+'/'+$routeParams.idea_id+'/'+$routeParams.user_id);
};//end of flagCommentClick

self.getAllFlaggedItems = function() {
  $http({
    method: 'GET',
    url: '/admin/allFlags',
    // headers:flagObject
  }).then(function(response) {
    console.log(response.data);
    self.ideaToFlagObject.list = response.data;
    console.log('this worked');
    console.log("in the get flag return for idea",self.ideaToFlagObject.list);
  });
}//end of getComments()
// self.getIdeaToFlag();
self.getAllFlaggedItems();

}]);
