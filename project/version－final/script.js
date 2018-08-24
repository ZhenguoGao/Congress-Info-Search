// Code goes here

//                                                   var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
//                                                    app.controller('customersCtrl', function($scope, $http) {
//                                                        $scope.cars = ["",
//                                                            "California", "California"  
//                                                        ];
//                                                        $scope.pageSize = 10;
//                                                        
//                                                        
//                                                        $http({
//                                                         method:'GET',
//                                                         url:'http://localhost:8887/index1.php?symbol=APPL'
//                                                     }).then(function successCallback(response){
//                                                            console.log(response.statusText);
//                                                            $scope.names = response.data.results;
//                                                             console.log(response.data); 
//                                                             }, function errorCallback(response){
//
//                                                     });
//                                                        
//                                                    });



$(document).ready(function () {




    // 循环轮播到上一个项目
    $("#btn-prev").click(function () {
        $("#myCarousel").carousel('prev');
        $("#myCarousel").carousel('pause');
    });

    $("#btn-prev2").click(function () {
        $("#myCarousel2").carousel('prev');
        $("#myCarousel2").carousel('pause');
    });
    
    $("#btn-prev3").click(function () {
        $("#myCarousel3").carousel('prev');
        $("#myCarousel3").carousel('pause');
    });
    
    $("#btn-prev4").click(function () {
        $("#myCarousel3").carousel(0);
        $("#myCarousel3").carousel('pause');
    });
    // 循环轮播到下一个项目
    //            $(".next-slide").click(function(){
    //                $("#myCarousel").carousel('next');
    //            });

    


    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });




    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });


});



var app = angular.module('myApp', ['angularUtils.directives.dirPagination', 'ui.bootstrap']);

app.filter('startsWithLetter', function () {
  return function (x, selectedCar) {
    var filtered = [];
    if(selectedCar=='All States'){
    for (var i = 0; i < x.length; i++) {
      var item = x[i];
      
        filtered.push(item);
   
    }
    }
      
    else{
         for (var i = 0; i < x.length; i++) {
      var item = x[i];
      if(x[i].state_name == selectedCar)
        filtered.push(item);
   
    }
    }
    return filtered;
  };
});



app.controller('customersCtrl', function ($scope, $http) {

//    $scope.fav_legislators = JSON.parse(localStorage.getItem('todo'));
//    localStorage.clear();
    $scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.addTodo = function(sym) {
		$scope.todos.push(sym
		);
        console.log(3);
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
    
//    if (fav_legislators == null) {
//        fav_legislators = [];
//    }
   
    $scope.isInFavlegislators = function (sym) {
        var k=false;
        var oldTodos = $scope.todos;
		angular.forEach(oldTodos, function(todo){
			if (todo.bioguide_id==sym.bioguide_id)
				k = true;
		});
        
        console.log(10);
        return k;
    };
//
    $scope.removeFromFavLegislators = function (sym) {
//        var oldTodos = $scope.todos;
//		$scope.todos = [];
		angular.forEach($scope.todos, function(todo,index){
			if (todo.bioguide_id==sym.bioguide_id)
//				$scope.todos.push(todo);
            $scope.todos.splice(index, 1);
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
         console.log(12);
        
        
    };

    $scope.myFav = function (e) {
        console.log(e);
        if ($scope.isInFavlegislators(e) == false) {
            $scope.addTodo(e);
            console.log(5);
            console.log($scope.todos);
        }
        else if($scope.isInFavlegislators(e) == true){
            $scope.removeFromFavLegislators(e);
            console.log(11);
        }
    };
    
    $scope.Defalegis = function (e) {
        $scope.removeFromFavLegislators(e);
    };
    
    
    
    $scope.saved2 = localStorage.getItem('todos2');
	$scope.todos2 = (localStorage.getItem('todos2')!==null) ? JSON.parse($scope.saved2) : [];
	localStorage.setItem('todos2', JSON.stringify($scope.todos));

	$scope.addTodo2 = function(sym) {
		$scope.todos2.push(sym
		);
        console.log(3);
		localStorage.setItem('todos2', JSON.stringify($scope.todos2));
	};
    
//    if (fav_legislators == null) {
//        fav_legislators = [];
//    }
    

    $scope.isInFavbills = function (sym) {
        var k=false;
        var oldTodos2 = $scope.todos2;
		angular.forEach(oldTodos2, function(todo){
			if (todo.bill_id==sym.bill_id)
				k = true;
		});
        
        console.log(10);
        return k;
    };
//
    $scope.removeFromFavBills = function (sym) {
//        var oldTodos = $scope.todos;
//		$scope.todos = [];
		angular.forEach($scope.todos2, function(todo,index){
			if (todo.bioguide_id==sym.bioguide_id)
//				$scope.todos.push(todo);
            $scope.todos2.splice(index, 1);
		});
		localStorage.setItem('todos2', JSON.stringify($scope.todos2));
         console.log(12);
        
        
    };

    $scope.myFav3 = function (e) {
        console.log(e);
        if ($scope.isInFavbills(e) == false) {
            $scope.addTodo2(e);
            console.log(5);
            console.log($scope.todos);
        }
        else if($scope.isInFavbills(e) == true){
            $scope.removeFromFavBills(e);
            console.log(11);
        }
    };
    
    $scope.Defabills = function (e) {
        $scope.removeFromFavBills(e);
    };
    
    
    
    
    $scope.saved3 = localStorage.getItem('todos3');
	$scope.todos3 = (localStorage.getItem('todos3')!==null) ? JSON.parse($scope.saved3) : [];
	localStorage.setItem('todos3', JSON.stringify($scope.todos));

	$scope.addTodo3 = function(sym) {
		$scope.todos3.push(sym
		);
        console.log(3);
		localStorage.setItem('todos3', JSON.stringify($scope.todos3));
	};
    
//    if (fav_legislators == null) {
//        fav_legislators = [];
//    }
    

    $scope.isInFavcommittees = function (sym) {
        var k=false;
        var oldTodos3 = $scope.todos3;
		angular.forEach(oldTodos3, function(todo){
			if (todo.committee_id==sym.committee_id)
				k = true;
		});
        
        console.log(10);
        return k;
    };
//
    $scope.removeFromFavCommittees = function (sym) {
//        var oldTodos = $scope.todos;
//		$scope.todos = [];
		angular.forEach($scope.todos3, function(todo,index){
			if (todo.committee_id==sym.committee_id)
//				$scope.todos.push(todo);
            $scope.todos3.splice(index, 1);
		});
		localStorage.setItem('todos3', JSON.stringify($scope.todos3));
         console.log(12);
        
        
    };

    $scope.myFav5 = function (e) {
        console.log(e);
        if ($scope.isInFavcommittees(e) == false) {
            $scope.addTodo3(e);
            console.log(5);
            console.log($scope.todos3);
        }
        else if($scope.isInFavcommittees(e) == true){
            $scope.removeFromFavCommittees(e);
            console.log(11);
        }
    };
    
    $scope.Defacommittees = function (e) {
        $scope.removeFromFavCommittees(e);
    };
    
    
    

    
   


    


    $scope.cars = ['All States','Alabama',
                             'Alaska',
                             'Arizona',
                             'Arkansas',
                             'California',
                             'Colorado',
                             'Connecticut',
                             'Delaware',
                             'Florida',
                             'Georgia',
                             'Hawaii',
                             'Idaho',
                             'Illinois',
                             'Indiana',
                             'Iowa',
                             'Kansas',
                             'Kentucky',
                             'Louisiana',
                             'Maine',
                             'Maryland',
                             'Massachusetts',
                             'Michigan',
                             'Minnesota',
                             'Mississippi',
                             'Missouri',
                             'Montana',
                             'Nebraska',
                             'Nevada',
                             'New Hampshire',
                             'New Jersey',
                             'New Mexico',
                             'New York',
                             'North Carolina',
                             'North Dakota',
                             'Ohio',
                             'Oklahoma',
                             'Oregon',
                             'Pennsylvania',
                             'Rhode Island',
                             'South Carolina',
                             'South Dakota',
                             'Tennessee',
                             'Texas',
                             'Utah',
                             'Vermont',
                             'Virginia',
                             'Washington',
                             'West Virginia',
                             'Wisconsin',
                             'Wyoming'
                                                            
                                                        ];
    $scope.pageSize = 10;
    $scope.f = $scope.selectedCar;

    $http({
        method: 'GET',
        url: 'index7.php?symbol=APPL'
    }).then(function successCallback(response) {
        console.log("kkkkkk");
        console.log(response.statusText);
        $scope.name1 = response.data.results;
        console.log(response.data);
    }, function errorCallback(response) {
        console.log("kkk");

    });
    $http({
        method: 'GET',
        url: 'index7.php?symbol1=APPL'
    }).then(function successCallback(response) {
        console.log("kkkkkkaaaaaaaaa");
        console.log(response.statusText);
        $scope.name2 = response.data.results;
        console.log(response.data);
    }, function errorCallback(response) {
        console.log("kkkkkkaaa");

    });
    
    $http({
        method: 'GET',
        url: 'index7.php?symbol5=APPL'
    }).then(function successCallback(response) {
        console.log("kkkkkkaaaaaaaaa");
        console.log(response.statusText);
        $scope.name8 = response.data.results;
        console.log(response.data);
    }, function errorCallback(response) {
        console.log("kkkkkkaaa");

    });
    
    
    $http({
        method: 'GET',
        url: 'index7.php?symbol2=APPL'
    }).then(function successCallback(response) {
        console.log(response.statusText);
        $scope.name3 = response.data.results;
        console.log(response.data);
    }, function errorCallback(response) {

    });

    $scope.myFunc = function (e) {
        console.log(e);
        //                                                        jQuery(".next-slide").click(function(){
        //                                                        $("#myCarousel").carousel('next');
        //                                                        $("#myCarousel").carousel('pause');
        //                                                        
        //                                                        });
        jQuery("#myCarousel").carousel(1);

        $scope.xx = e;
        var start = new Date(e.term_start),
            end = new Date(e.term_end),
            today = new Date();
        $scope.dynamic = Math.round((today - start) / (end - start) * 100);

        $http({
            method: 'GET',
            url: 'index7.php',
            params: {
                symbol3: 'APPL',
                member_ids: e.bioguide_id
            }
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.name4 = response.data.results;

        }, function errorCallback(response) {

        });

        $http({
            method: 'GET',
            url: 'index7.php',
            params: {
                symbol4: 'APPL',
                sponsor_id: e.bioguide_id
            }
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.name5 = response.data.results;

        }, function errorCallback(response) {

        });



    };
    
    $scope.myFunc3 = function (e) {
        console.log(e);
        //                                                        jQuery(".next-slide").click(function(){
        //                                                        $("#myCarousel").carousel('next');
        //                                                        $("#myCarousel").carousel('pause');
        //                                                        
        //                                                        });
        jQuery("#myCarousel3").carousel(1);

        $scope.xxx = e;
        var start = new Date(e.term_start),
            end = new Date(e.term_end),
            today = new Date();
        $scope.dynamicx = Math.round((today - start) / (end - start) * 100);

        $http({
            method: 'GET',
//            url: 'http://firstapp.fdqhirpuwu.us-west-2.elasticbeanstalk.com/index6.php',
            url: 'index7.php',
            params: {
                symbol3: 'APPL',
                member_ids: e.bioguide_id
            }
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.name6 = response.data.results;

        }, function errorCallback(response) {

        });

        $http({
            method: 'GET',
            url: 'index7.php',
            params: {
                symbol4: 'APPL',
                sponsor_id: e.bioguide_id
            }
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.name7 = response.data.results;

        }, function errorCallback(response) {

        });



    };


    $scope.myFunc4 = function (e) {
        console.log(e);
        //                                                        jQuery(".next-slide").click(function(){
        //                                                        $("#myCarousel").carousel('next');
        //                                                        $("#myCarousel").carousel('pause');
        //                                                        
        //                                                        });
        jQuery("#myCarousel3").carousel(2);

        $scope.xxx2 = e;

    };
    
    
    $scope.myFunc2 = function (e) {
        console.log(e);
        //                                                        jQuery(".next-slide").click(function(){
        //                                                        $("#myCarousel").carousel('next');
        //                                                        $("#myCarousel").carousel('pause');
        //                                                        
        //                                                        });
        jQuery("#myCarousel2").carousel(1);

        $scope.xx2 = e;

    };
    
    

    //click star function:




});









// $('.carousel').carousel({
//        interval: false
//    });