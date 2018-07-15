 angular.module('App', ['ui.bootstrap']);

/* ngBind */
$scope.name = 'Whirledd';

function CtrlBind($scope) {
  $scope.name = 'Whirled';
}

/* Vnet */
var uid = 1;


function ContactController($scope) {
    
    $scope.contacts = [
        {id:0, 'empid':'423370' , 'name': 'Jebasuthan', 'email':'Jebasuthan.C@cognizant.com', 'vnet': '423243'}
    ];
    var selectedIndex = 0;
    $scope.saveContact = function() {
        if($scope.action == "edit") {
            $scope.contacts[selectedIndex].empid = $scope.empid;
            $scope.contacts[selectedIndex].name = $scope.name;
            $scope.contacts[selectedIndex].email = $scope.email;
            $scope.contacts[selectedIndex].vnet = $scope.vnet;
            $scope.action = "";
        } else {
            $scope.contacts.push({
                "id" : uid++,
                "empid" : $scope.empid,
                "name": $scope.name,
                "email": $scope.email,
                "vnet": $scope.vnet
            });
        }        
        $scope.empid = "";
        $scope.name = "";
        $scope.email = "";
        $scope.vnet = "";
    }

    
    $scope.delete = function(index) {
        var response = confirm("Are You Sure want to delete a Record?");
        if(response) {
            $scope.contacts.splice(index,1);
        }        
    }
    
    
    $scope.edit = function(index) {
        selectedIndex = index;
        var editRecord = $scope.contacts[index];
        $scope.empid = editRecord.empid;
        $scope.name = editRecord.name;
        $scope.email = editRecord.email;
        $scope.vnet = editRecord.vnet;

        $scope.action = "edit";
        
    }
}


    function EmailController($scope) {
        $scope.emails = ["Jebasuthan.C@cognizant.com ", "Dinesh@cognizant.com "];
 
        $scope.add = function() {
        $scope.emails.push($scope.newemail);
        $scope.newemail = "";
        }
    }