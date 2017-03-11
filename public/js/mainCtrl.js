angular.module("myChats").controller("mainCtrl", function($scope, mainSrvc, $interval){

  $scope.chatAppName = "Name my chatapp";

  //Dummy data to show what the chat messages should look like
  // to work with the frontend
  // TODO Remove once server is integrated;
 

  $scope.addChat = function(chatmessage){
    // TODO Call service to add chats
    mainSrvc.addChats(chatmessage);
  };

  function getChats(){
    // TODO Tell service to get chats
    mainSrvc.getChats().then(function(chats){
      $scope.chats = chats;
    })
  }

  $scope.deleteChats = function(){
    // TODO Tell service to delete all chats
    mainSrvc.deleteChats();
  };

  // Gets initial chats
  getChats();
  
  $scope.setScreenname = function(screenname){
    mainSrvc.setScreenname(screenname);
  };

  // Set up repeating call to get chats
  $interval(getChats, 3000);

});
