var angularPOC = angular.module('angularPOC', []);

angularPOC.controller('MainController', function($scope,$filter, focus) {	

	$scope.resourceInfos = [{
		'id': 1,
		'empName' : 'Jeba',
		'currentCompany': 'Cognizant Technology Soln',
		'location': 'Chennai',
		'contactNumber':'9597986749',
		'coreSkills':'Javascript',
		'joinedDate':'12/mar/2015',
		'grade':'A+',
		'interviewedBy':'Basha'
	},
	{
		'id': 2,
		'empName' : 'Anandh',
		'currentCompany': 'Tech Magendra Soln',
		'location': 'Mumbai',
		'contactNumber':'456454564',
		'coreSkills':'Angularjs',
		'joinedDate':'1/jan/2015',
		'grade':'A+',
		'interviewedBy':'Vivek Kanana'
	},
	{
		'id': 1,
		'empName' : 'Suthan',
		'currentCompany': 'Infosys',
		'location': 'Chennai',
		'contactNumber':'34534535',
		'coreSkills':'Backbone',
		'joinedDate':'18/feb/2015',
		'grade':'A+',
		'interviewedBy':'Ajay'
	}];

	$scope.action = 'add';
	$scope.seletedRowIndex = 0;
	$scope.showGrid = true;
	$scope.saveResourceInfo = function (form) {
		console.log(form.empName)
		// Trigger validation flag.
      	$scope.submitted = true;

      	// If form is invalid, return and let AngularJS show validation errors.
      	if (form.$invalid) {
      		$scope.focusTextbox();
        	return;
      	}
      	if($scope.action =='edit') {
			$scope.resourceInfos[$scope.seletedRowIndex].empName = $scope.empName;
			$scope.resourceInfos[$scope.seletedRowIndex].currentCompany = $scope.currentCompany;
			$scope.resourceInfos[$scope.seletedRowIndex].location = $scope.location;
			$scope.resourceInfos[$scope.seletedRowIndex].contactNumber = $scope.contactNumber;
			$scope.resourceInfos[$scope.seletedRowIndex].whichProject = $scope.whichProject;
			$scope.resourceInfos[$scope.seletedRowIndex].overallStatus = $scope.overallStatus;
			$scope.resourceInfos[$scope.seletedRowIndex].coreSkills = $scope.coreSkills;
			$scope.resourceInfos[$scope.seletedRowIndex].suitableforOther = $scope.suitableforOther;
			$scope.resourceInfos[$scope.seletedRowIndex].profileReceived = $scope.profileReceived;
			$scope.resourceInfos[$scope.seletedRowIndex].screening = $scope.screening;
			$scope.resourceInfos[$scope.seletedRowIndex].screeningMode = $scope.screeningMode;
			$scope.resourceInfos[$scope.seletedRowIndex].screeningStatus = $scope.screeningStatus;
			$scope.resourceInfos[$scope.seletedRowIndex].f2fInterviewDate = $scope.f2fInterviewDate;
			$scope.resourceInfos[$scope.seletedRowIndex].interviewStatus = $scope.interviewStatus;
			$scope.resourceInfos[$scope.seletedRowIndex].doj = $scope.doj;
			$scope.resourceInfos[$scope.seletedRowIndex].rrso = $scope.rrso;
			$scope.resourceInfos[$scope.seletedRowIndex].grade = $scope.grade;
			$scope.resourceInfos[$scope.seletedRowIndex].comments = $scope.comments;
			$scope.resourceInfos[$scope.seletedRowIndex].interviewedBy = $scope.interviewedBy;
			$scope.action = 'add';
			alert('Resource Informations Updated Successfully');
			$scope.reset();
			$scope.showGrid = true;
			$scope.addorEdit = false;
		}else {
			$scope.resourceInfos.push({
				'empName' : $scope.empName,
				'currentCompany': $scope.currentCompany,
				'location': $scope.location,
				'contactNumber': $scope.contactNumber,
				'whichProject': $scope.whichProject,
				'overallStatus':$scope.overallStatus,					
				'coreSkills': $scope.coreSkills,
				'suitableforOther':$scope.suitableforOther,
				'profileReceived':$scope.profileReceived,
				'screening':$scope.screening,
				'screeningMode':$scope.screeningMode,
				'screeningStatus':$scope.screeningStatus,
				'f2fInterviewDate':$scope.f2fInterviewDate,
				'interviewStatus':$scope.interviewStatus,
				'doj':$scope.doj,
				'rrso':$scope.rrso,
				'grade': $scope.grade,
				'comments':$scope.comments,
				'interviewedBy':$scope.interviewedBy
			});
			alert('Resource Informations Created Successfully');
			$scope.reset();
			$scope.showGrid = true;
			$scope.addorEdit = false;
		}
	}

	$scope.reset = function () {
		$scope.empName = '';
		$scope.currentCompany = '';
		$scope.location = '';
		$scope.contactNumber ='';
		$scope.whichProject = '';
		$scope.overallStatus = '';
		$scope.coreSkills = '';
		$scope.suitableforOther = '';
		$scope.profileReceived = '';
		$scope.screening = '';
		$scope.screeningMode = '';
		$scope.screeningStatus = '';
		$scope.screeningStatus = '';
		$scope.f2fInterviewDate = '';
		$scope.doj = '';
		$scope.rrso = '';
		$scope.grade = '';
		$scope.comments = '';
		$scope.interviewedBy = '';
	}

	$scope.focusTextbox = function () {
		if(!$scope.empName) {
			focus('empName');
		} else 
		if(!$scope.currentCompany) {
			focus('currentCompany');
		} else if(!$scope.location) {
			focus('location');
		} else if(!$scope.contactNumber) {
			focus('contactNumber');
		} else if(!$scope.coreSkills) {
			focus('coreSkills');
		} else if(!$scope.grade) {
			focus('grade');
		} else if(!$scope.interviewedBy) {
			focus('interviewedBy');
		}
	}

	$scope.deleteRecord = function(index) {
		var response = confirm("Are You Sure want to delete a Record?");
		if(response) {
			$scope.resourceInfos.splice(index,1);
		}
	}

	$scope.editRecord = function (index) {		
		$scope.seletedRowIndex = index;
		$scope.action = 'edit';
		var selectedEditRecord = $scope.resourceInfos[index];
		$scope.empName = selectedEditRecord.empName;
		$scope.currentCompany = selectedEditRecord.currentCompany;
		$scope.location = selectedEditRecord.location;
		$scope.contactNumber = selectedEditRecord.contactNumber;
		$scope.whichProject = selectedEditRecord.whichProject;
		$scope.overallStatus = selectedEditRecord.overallStatus;
		$scope.coreSkills = selectedEditRecord.coreSkills;
		$scope.suitableforOther = selectedEditRecord.suitableforOther;
		$scope.profileReceived = selectedEditRecord.profileReceived;
		$scope.screening = selectedEditRecord.screening;
		$scope.screeningMode = selectedEditRecord.screeningMode;
		$scope.screeningStatus = selectedEditRecord.screeningStatus;
		$scope.f2fInterviewDate = selectedEditRecord.f2fInterviewDate;
		$scope.interviewStatus = selectedEditRecord.interviewStatus;
		$scope.doj = selectedEditRecord.doj;
		$scope.rrso = selectedEditRecord.rrso;
		$scope.grade = selectedEditRecord.grade;
		$scope.comments = selectedEditRecord.comments;
		$scope.interviewedBy = selectedEditRecord.interviewedBy;
		$scope.showGrid = false;
		$scope.addorEdit = true;
	}

	$scope.addNewResource = function () {
		$scope.addorEdit = true;
		$scope.showGrid = false;
	}

	$scope.selectedCls = function(column) {
        if(column == $scope.orderByField) {
            return ('icon-chevron-' + (($scope.reverseSort) ? 'down' : 'up'));
        }
        else{
            return'icon-sort'
        }
    };

    $scope.cancel = function () {
    	$scope.addorEdit = false;
		$scope.showGrid = true;
    }
});

angularPOC.directive('focusOn',function() {
    return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if(name === attr.focusOn) {
          	elem[0].focus();
        }
      });
   };
});

angularPOC.factory('focus',function($rootScope, $timeout) {
    return function(name) {
	    $timeout(function () {
	      	$rootScope.$broadcast('focusOn', name);
	    });
	}
});

