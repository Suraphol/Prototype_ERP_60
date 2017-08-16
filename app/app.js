var app = angular.module('myApp', ['ui.router']);

	var personList = [{id:'1',Fname:'สมิธ',Lname:'เปอตี',idCard:'xxxxxxxxxxxxx',unit:'กจ.'},
	{id:'2',Fname:'จอห์นสัน',Lname:'โตมาส์',idCard:'xxxxxxxxxxxxx',unit:'ตบ.'},
	{id:'3',Fname:'วิลเลียมส์',Lname:'แบร์นารด์',idCard:'xxxxxxxxxxxxx',unit:'สน.บถ.'},
	{id:'4',Fname:'โจนส์',Lname:'มาร์แตง',idCard:'xxxxxxxxxxxxx',unit:'กพส.'},
	{id:'5',Fname:'บราวน์',Lname:'เปเรซ',idCard:'xxxxxxxxxxxxx',unit:'กศ.'},]
	
	var borrowType = [{id:'1',name:'เงินทดรองราชการ'},
	{id:'2',name:'เงินงบประมาณ'},
	{id:'3',name:'เงินนอกงบประมาณ'},
	{id:'4',name:'เงินนอกงบประมาณ (ลงทะเบียน)'} ];

	var unit = [
	// {id:'1',code:'1500800000',name:'สถ.',fullName:''},
	{id:'2',code:'1500800001',name:'สล.สถ.',fullName:''},
	{id:'3',code:'1500800002',name:'กจ.',fullName:''},
	{id:'4',code:'1500800003',name:'กค.',fullName:''},
	{id:'5',code:'1500800004',name:'ตบ.',fullName:''},
	{id:'6',code:'1500800005',name:'ศส.',fullName:''},
	{id:'7',code:'1500800006',name:'สน.บถ.',fullName:''},
	{id:'8',code:'1500800007',name:'กพส.',fullName:''},
	{id:'9',code:'1500800008',name:'กยผ.',fullName:''},
	{id:'10',code:'1500800009',name:'ศปท.สถ.',fullName:''},
	{id:'11',code:'1500800011',name:'กศ.',fullName:''},
	{id:'12',code:'1500800012',name:'กปต.',fullName:''},
	{id:'13',code:'1500800013',name:'กม.',fullName:''},
	{id:'14',code:'1500800014',name:'สบ.พถ',fullName:''},
	{id:'15',code:'1500800015',name:'สน.คท.',fullName:''},
	{id:'16',code:'1500800016',name:'กพร.',fullName:''},
	{id:'17',code:'1500800017',name:'กตภ.',fullName:''}];

	var bankMaster = [{id:'1',name:'ธนาคารกรุงเทพ'},
	{id:'2',name:'ธนาคารกรุงศรีอยุธยา'},
	{id:'3',name:'ธนาคารกสิกรไทย'},
	{id:'4',name:'ธนาคารทหารไทย'},
	{id:'5',name:'ธนาคารกรุงไทย'},
	{id:'6',name:'ธนาคารไทยพาณิชย์'},
	{id:'7',name:'ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร'},
	{id:'8',name:'ธนาคารออมสิน'},
	{id:'9',name:'ธนาคารอาคารสงเคราะห์'},
	{id:'10',name:'ธนาคารอิสลามแห่งประเทศไทย'},
	{id:'11',name:'ธนาคารเกียรตินาคิน'}];

	var detailPayList = [{id:'1',name:'ค่าสมนาคุณวิทยากร'},
	{id:'2',name:'ค่าใช้จ่ายเดินทางไปราชการ'},
	{id:'3',name:'ค่าห้องพัก'},
	{id:'4',name:'ค่าอาหาร'},
	{id:'5',name:'ค่าอาหารว่างและเครื่องดื่ม'},
	{id:'6',name:'ค่าใช้จ่ายเดินทางไปราชการ'}];

	var statusFamailyList = [{id:'1',name:'บิดา'},
	{id:'2',name:'มารดา'},
	{id:'3',name:'ภรรยา'},
	{id:'4',name:'สามี'},
	{id:'5',name:'บุตรคน'}];

	var career = [{id:'1', name:'ไม่เป็นราชการประจำหรือลูกจ้างประจำ'},
	{id:'2', name:"เป็นข้าราชการ"},
	{id:'3', name:"ลูกจ้างประจำ"},
	{id:'4', name:'เป็นพนักงานหรือลูกจ้างในรัฐวิสาหกิจ'}];

app.controller('erps001FController',function($scope){
	$scope.units = unit;
	$scope.AA = true;
	$scope.BB = false;
	$scope.subType = '1';

	$scope.showDetailsub = function(){
		if($scope.subType == 1){
			$scope.AA = true;
			$scope.BB = false;
		}else{
			$scope.AA = false;
			$scope.BB = true;
		}
	};

	$scope.showDetailPros = function(){
		console.log($scope.subType2);
		if($scope.subType2 == 0){
			$scope.Affiliation =true;
		}else{h
			$scope.Affiliation =false;
		}
	};

}).controller('erps004FController',function($scope){
	console.log('erps00F4Controller');
	$scope.bankMasterList = bankMaster;
	
	if($scope.inlineRadioOptions==null){
		$scope.inlineRadioOptions = 1;
	}
	
	$scope.A = true; $scope.B = false;
	$scope.showDetail = function(){
		console.log($scope.inlineRadioOptions);
		if($scope.inlineRadioOptions==1){
				$scope.A = true;
				$scope.B = false;
		}else{
				$scope.A = false;
				$scope.B = true;
				$scope.subType = 1;
				showDetailsub();
		}
	};
	$scope.showDetailsub = function(){
		showDetailsub();
	}
	var showDetailsub = function(){
		if($scope.subType==1){
			$scope.BA=true;
			$scope.BB=false;
		}else{
			$scope.BA=false;
			$scope.BB=true;
		}
	};


}).controller('erps006FController',function($scope){
	console.log('erps006FController');
	$scope.typeLendList = borrowType;

	$scope.borrowType = [{id:'1',name:'เงินทดรองราชการ'},
	{id:'2',name:'เงินงบประมาณ'},
	{id:'3',name:'เงินนอกงบประมาณ'},
	{id:'4',name:'เงินนอกงบประมาณ (ลงทะเบียน)'} ];
	
	$scope.personList=[{id:'1',idCard:'1123456789012', FName:'AAAA', LName:'BBBB'},
	{id:'2',idCard:'2234567890123', FName:'CCCC', LName:'DDDDD'},
	{id:'3',idCard:'3345678901234', FName:'EEEEE', LName:'FFFFF'},
	{id:'4',idCard:'4456789012345', FName:'GGGGGGG', LName:'HHHHHHHH'}];
	
	$scope.other = false;
	$scope.between = false;
	$scope.pay = true;
	$scope.viaBank = false;
	$scope.viaCheque = false;
	$scope.viaCash = false;
	$scope.payViaType = 1;


	$scope.showDetail = function(){
	console.log('erps006FController~~'+$scope.typeLend);
			$scope.other = false;
			$scope.between = false;
			$scope.pay = true;
		if($scope.typeLend == '1'){
			$scope.other = false;
			$scope.between = true;
			$scope.pay = false;
		}else if($scope.typeLend == '2' || $scope.typeLend == '3'){
			console.log('2 or 3');
			$scope.other = false;
			$scope.between = false;
			$scope.pay = true;
		}else if($scope.typeLend == '4'){
			$scope.other = true;
			$scope.between = false;
			$scope.pay = true;
		}
	}

	$scope.showNumberDetail = function(){
		if($scope.borrowTypeId=='2' || $scope.borrowTypeId =='3' ){
			$scope.gfDoc = true;
			$scope.courseDoc = false;
		}else if($scope.borrowTypeId =='4'){
			$scope.gfDoc = false;
			$scope.courseDoc = true;
		}else{
			$scope.gfDoc = false;
			$scope.courseDoc = false;
		}
	}

	$scope.payViaDetail = function(){
		console.log('payViaDetail');
		console.log($scope.payViaType);
		if($scope.payViaType == '2'){
			$scope.viaBank = false;
			$scope.viaCheque = true;
			$scope.viaCash = false;
		}else if($scope.payViaType == '3'){
			$scope.viaBank = true;
			$scope.viaCheque = false;
			$scope.viaCash = false;
		}else{
			$scope.viaBank = false;
			$scope.viaCheque = false;
			$scope.viaCash = false;
		}
	}

}).controller('erps005FController',function($scope){
	console.log('erps005FController');
	$scope.subType='1';
	$scope.showDetailsub =function(){
		if($scope.subType=='2'){
			$scope.showMonth=true;
		}else{
			$scope.showMonth=false;
		}
	}
}).controller('erps003CController',function($scope){
	console.log('erps003CController');
	$scope.borrowType=borrowType;
}).controller('erpr002CController',function($scope){
	console.log('erpr002CController');
	$scope.units=unit;
}).controller('erps001FMController',function($scope){
	$scope.careerList = career;
	$scope.showCount = false;
	$scope.showCareer = false;
	$scope.showPositionDetail = false;
	$scope.relationType = function(){
		if($scope.relationId == '5'){
			$scope.showCount = true;
			$scope.showCareer = false;
			$scope.showCount1 = false;
		}else if($scope.relationId == '3' ||$scope.relationId == '4' ){
			$scope.showCount = false;
			$scope.showCareer = true;
			$scope.showCount1 = false;
		}else if($scope.relationId == '1' ||$scope.relationId == '2'){
			$scope.showCount1 = true;
			$scope.showCount = false;
			$scope.showCareer = false;
		}else{
			$scope.showCount = false;
			$scope.showCareer = false;
			$scope.showCount1 = false;
		}
	}

	$scope.showPosition =function(){
		if($scope.careerId != '1'){
			$scope.showPositionDetail = true;
		}else{
			$scope.showPositionDetail = false;
		}
	}

})
.controller('erps018FController',function($scope){
	$scope.showCount = false;	
	$scope.relationType = function(){
		if($scope.relationId == '5'){
			$scope.showCount = true;
		}
	}
})
.controller('erps019FController',function($scope, $http){
	console.log('erps019FController');
	$http.get('changwats_th.json').success(function(response){
		console.log(response.th.changwats[0].name);
	});
});

// MenuMain
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	
	$stateProvider
	.state('erp01',{url:"/erp01",
		templateUrl:"partials/erp01.html"
	})
	.state('erp02',{url:"/erp02",
		templateUrl:"partials/erp02.html"
	})
	.state('erp03',{url:"/erp03",
		templateUrl:"partials/erp03.html"
	})
	.state('erp04',{url:"/erp04",
		templateUrl:"partials/erp04.html"
	})
	.state('erp05',{url:"/erp05",
		templateUrl:"partials/erp05.html"
	});
});

// Menu
//erp01
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('erp01.erps000',{
		url:"/erps000",
		views:{
			'from@erp01':{templateUrl:"partials/erps000L.html",
			controller:function($scope){
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}
	})
	.state('erp01.erps000.add',{url:"/add",
		views:{
			'from@erp01':{templateUrl:"partials/erps000F.html",
			controller:function($scope){
				$scope.back='erp01.erps000';
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}		
	})
	.state('erp01.erps001',{
		url:"/erps001",
		views:{
			'from@erp01':{templateUrl:"partials/erps001L.html"}
		}
	})
	.state('erp01.erps001.add',{url:"/add",
		views:{
			'from@erp01':{templateUrl:"partials/erps001F.html",
			controller:function($scope){
				$scope.back='erp01.erps001';
			}}
		}		
	})
	.state('erp01.erps001.add.family',{url:"/addFamily",
		views:{
			'from@erp01':{templateUrl:"partials/erps001FM.html",
			controller:function($scope){
				$scope.back='erp01.erps001.add';
				$scope.statusFamailyList = statusFamailyList;
			}
		}
		}		
	})
	.state('erp01.erps002',{url:"/erps002",
		views:{
			'from@erp01':{templateUrl:"partials/erps002L.html"}
		}
	})
	.state('erp01.erps002.add',{url:"/erps002",
		views:{
			'from@erp01':{templateUrl:"partials/erps002F.html"}
		}
	})
	.state('erp01.erps003',{url:"/erps003",
		views:{
			'from@erp01':{templateUrl:"partials/erps003L.html"}
		}
	})
	.state('erp01.erps003.add',{url:"/add",
		views:{
			'from@erp01':{templateUrl:"partials/erps003F.html"}
		}		
	})
	.state('erp01.erps005',{url:"/erps005",
		views:{
			'from@erp01':{templateUrl:"partials/erps005L.html"}
		}
	})
	.state('erp01.erps005.add',{url:"/add",
		views:{
			'from@erp01':{templateUrl:"partials/erps005F.html"}
		}		
	})
	.state('erp01.erps004',{url:"/erps004",
		views:{
			'from@erp01':{templateUrl:"partials/erps004L.html"}
		}
	})
	.state('erp01.erps004.add',{url:"/add",
		views:{
			'from@erp01':{templateUrl:"partials/erps004F.html"}
		}		
	})
	.state('erp01.erps004.add.bankDetail',{url:"/bankDetail",
		views:{
			'from@erp01':{templateUrl:"partials/erps004FD.html"}
		}		
	})
	.state('erp01.erpr001',{url:"/erpr001",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps001C.html"}
		}
	})
	.state('erp01.erpr002',{url:"/erpr002",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps002C.html"}
		}
	})
	.state('erp01.erpr003',{url:"/erpr003",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps003C.html"}
		}
	})
	.state('erp01.erpr004',{url:"/erpr004",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps004C.html"}
		}
	})
	.state('erp01.erpr005',{url:"/erpr005",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps005C.html"}
		}
	})
	.state('erp01.erpr006',{url:"/erpr006",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps006C.html"}
		}
	})
	.state('erp01.erpr007',{url:"/erpr007",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps007C.html"}
		}
	})
	.state('erp01.erpr008',{url:"/erpr008",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps008C.html"}
		}
	})
	.state('erp01.erpr009',{url:"/erpr009",
		views:{
			'from@erp01':{templateUrl:"partials/Report/erps009C.html"}
		}
	});
});
//end erp001

//erp002
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('erp02.erps000',{
		url:"/erps000",
		views:{
			'from@erp02':{templateUrl:"partials/erps000L.html",
			controller:function($scope){
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}
	})
	.state('erp02.erps000.add',{url:"/add",
		views:{
			'from@erp02':{templateUrl:"partials/erps000F.html",
			controller:function($scope){
				$scope.back='erp02.erps000';
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}		
	})
	.state('erp02.erps001',{
		url:"/erps001",
		views:{
			'from@erp02':{templateUrl:"partials/erps001L.html"}
		}
	})
	.state('erp02.erps001.add',{url:"/add",
		views:{
			'from@erp02':{templateUrl:"partials/erps001F.html",
			controller:function($scope){
				$scope.back='erp02.erps001';
			}
		}
		}		
	})
	.state('erp02.erps001.add.family',{url:"/addFamily",
		views:{
			'from@erp02':{templateUrl:"partials/erps001FM.html",
			controller:function($scope){
				$scope.back='erp02.erps001.add';
				$scope.statusFamailyList = statusFamailyList;
			}
		}
		}		
	})
	.state('erp02.erps006',{url:"/erps006",
		views:{
			'from@erp02':{templateUrl:"partials/erps006L.html"}
		}
	})
	.state('erp02.erps006.add',{url:"/add",
		views:{
			'from@erp02':{templateUrl:"partials/erps006F.html"}
		}		
	}).state('erp02.erps007',{url:"/erps007",
		views:{
			'from@erp02':{templateUrl:"partials/erps007L.html"}
		}
	})
	.state('erp02.erps007.edit',{url:"/edit",
		views:{
			'from@erp02':{templateUrl:"partials/erps007F.html"}
		}		
	}).state('erp02.erpr010',{url:"/erpr010",
		views:{
			'from@erp02':{templateUrl:"partials/Report/erps010C.html"}
		}
	}).state('erp02.erpr011',{url:"/erpr011",
		views:{
			'from@erp02':{templateUrl:"partials/Report/erps011C.html"}
		}
	}).state('erp02.erpr012',{url:"/erpr012",
		views:{
			'from@erp02':{templateUrl:"partials/Report/erps012C.html"}
		}
	}).state('erp02.erpr013',{url:"/erpr013",
		views:{
			'from@erp02':{templateUrl:"partials/Report/erps013C.html"}
		}
	});
});
//end erp002

//erp003
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('erp03.erps000',{
		url:"/erps000",
		views:{
			'from@erp03':{templateUrl:"partials/erps000L.html",
			controller:function($scope){
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}
	})
	.state('erp03.erps000.add',{url:"/add",
		views:{
			'from@erp03':{templateUrl:"partials/erps000F.html",
			controller:function($scope){
				$scope.back='erp03.erps000';
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}		
	})
	.state('erp03.erps008',{
		url:"/erps008",
		views:{
			'from@erp03':{templateUrl:"partials/erps008L.html",
			controller:function($scope){
				$scope.pageCode='COU001';
				$scope.pageName='ตั้งต้นรายการจ่าย';
			}
		}
		}
	})
	.state('erp03.erps008.add',{
		url:"/erps008",
		views:{
			'from@erp03':{templateUrl:"partials/erps008F.html",
			controller:function($scope){
				$scope.pageCode='COU001';
				$scope.pageName='ตั้งต้นรายการจ่าย';
			}
		}
		}
	})
	.state('erp03.erps009',{
		url:"/erps009",
		views:{
			'from@erp03':{templateUrl:"partials/erps009L.html",
			controller:function($scope){
				$scope.pageCode='COU003';
				$scope.pageName='จัดการโครงการ';
			}
		}
		}
	})
	.state('erp03.erps009.add',{
		url:"/erps009",
		views:{
			'from@erp03':{templateUrl:"partials/erps009F.html",
			controller:function($scope){
				$scope.pageCode='COU003';
				$scope.pageName='จัดการโครงการ';
			}
		}
		}
	})
	.state('erp03.erps010',{
		url:"/erps010",
		views:{
			'from@erp03':{templateUrl:"partials/erps010L.html",
			controller:function($scope){
				$scope.pageCode='COU004';
				$scope.pageName='รายรับ';
			}
		}
		}
	})
	.state('erp03.erps010.add',{
		url:"/erps010",
		views:{
			'from@erp03':{templateUrl:"partials/erps010F.html",
			controller:function($scope){
				$scope.pageCode='COU004';
				$scope.pageName='รายรับ';
			}
		}
		}
	})
	.state('erp03.erps011',{
		url:"/erps011",
		views:{
			'from@erp03':{templateUrl:"partials/erps011L.html",
			controller:function($scope){
				$scope.pageCode='COU005';
				$scope.pageName='รายจ่าย';
			}
		}
		}
	})
	.state('erp03.erps011.add',{
		url:"/erps011",
		views:{
			'from@erp03':{templateUrl:"partials/erps011F.html",
			controller:function($scope){
				$scope.pageCode='COU005';
				$scope.pageName='รายจ่าย';
				$scope.detailPays = detailPayList;
			}
		}
		}
	}).state('erp03.erps012',{
		url:"/erps012",
		views:{
			'from@erp03':{templateUrl:"partials/erps012L.html",
			controller:function($scope){
				$scope.pageCode='EPRS012';
				$scope.pageName='เงินเพิ่ม';
			}
		}
		}
	})
	.state('erp03.erps012.add',{
		url:"/erps012",
		views:{
			'from@erp03':{templateUrl:"partials/erps012F.html",
			controller:function($scope){
				$scope.pageCode='EPRS012';
				$scope.pageName='เงินเพิ่ม';
				$scope.detailPays = detailPayList;
			}
		}
		}
	})
	.state('erp03.erps013',{
		url:"/erps013",
		views:{
			'from@erp03':{templateUrl:"partials/erps013L.html",
			controller:function($scope){
				$scope.pageCode='COU007';
				$scope.pageName='ทะเบียนคุมการใช้บัตรเครดิต';
			}
		}
		}
	})
	.state('erp03.erps013.add',{
		url:"/erps013",
		views:{
			'from@erp03':{templateUrl:"partials/erps013F.html",
			controller:function($scope){
				$scope.pageCode='COU007';
				$scope.pageName='ทะเบียนคุมการใช้บัตรเครดิต';
				$scope.personList =personList;
			}
		}
		}
	})
	.state('erp03.erps014',{
		url:"/erps014",
		views:{
			'from@erp03':{templateUrl:"partials/erps014L.html",
			controller:function($scope){
				$scope.pageCode='COU008';
				$scope.pageName='ทะเบียนการรับ-จ่าย บัตรเครดิต';
			}
		}
		}
	})
	.state('erp03.erps014.add',{
		url:"/erps014",
		views:{
			'from@erp03':{templateUrl:"partials/erps014F.html",
			controller:function($scope){
				$scope.pageCode='COU008';
				$scope.pageName='ทะเบียนการรับ-จ่าย บัตรเครดิต';
			}
		}
		}
	})
	.state('erp03.erps015',{
		url:"/erps015",
		views:{
			'from@erp03':{templateUrl:"partials/erps015L.html",
			controller:function($scope){
				$scope.pageCode='COU009';
				$scope.pageName='ทะเบียนคุมข้อมูลอัตราค่าบริการโรงแรม';
			}
		}
		}
	})
	.state('erp03.erps015.add',{
		url:"/erps015",
		views:{
			'from@erp03':{templateUrl:"partials/erps015F.html",
			controller:function($scope){
				$scope.pageCode='COU009';
				$scope.pageName='ทะเบียนคุมข้อมูลอัตราค่าบริการโรงแรม';
			}
		}
		}
	})
	.state('erp03.erps016',{
		url:"/erps016",
		views:{
			'from@erp03':{templateUrl:"partials/erps016L.html",
			controller:function($scope){
				$scope.pageCode='COU002';
				$scope.pageName='โรงแรม';
			}
		}
		}
	})
	.state('erp03.erps016.add',{
		url:"/erps015",
		views:{
			'from@erp03':{templateUrl:"partials/erps016F.html",
			controller:function($scope){
				$scope.pageCode='COU002';
				$scope.pageName='โรงแรม';
			}
		}
		}
	})
	.state('erp03.erps017',{
		url:"/erps017",
		views:{
			'from@erp03':{templateUrl:"partials/erps017L.html",
			controller:function($scope){
				$scope.pageCode='COU006';
				$scope.pageName='นำส่งรายได้แผนดิน';
			}
		}
		}
	})
	.state('erp03.erps017.add',{
		url:"/erps017",
		views:{
			'from@erp03':{templateUrl:"partials/erps017F.html",
			controller:function($scope){
				$scope.pageCode='COU006';
				$scope.pageName='นำส่งรายได้แผนดิน';
			}
		}
		}
	})	
	.state('erp03.erpr014',{url:"/erpr014",
		views:{
			'from@erp03':{templateUrl:"partials/Report/erps014C.html",
			controller:function($scope){
				$scope.pageCode='COU010';
				$scope.pageName='รายงานด้านรับ';
			}}
		}
	})
	.state('erp03.erpr015',{url:"/erpr015",
		views:{
			'from@erp03':{templateUrl:"partials/Report/erps015C.html",
			controller:function($scope){
				$scope.pageCode='COU011';
				$scope.pageName='รายงานด้านจ่าย';
			}}
		}
	})
	.state('erp03.erpr016',{url:"/erpr016",
		views:{
			'from@erp03':{templateUrl:"partials/Report/erps016C.html",
			controller:function($scope){
				$scope.pageCode='COU012';
				$scope.pageName='รายงานรับ-จ่าย';
			}}
		}
	})
	.state('erp03.erpr017',{url:"/erpr017",
		views:{
			'from@erp03':{templateUrl:"partials/Report/erps017C.html",
			controller:function($scope){
				$scope.pageCode='COU013';
				$scope.pageName='รายงานสรุปภาพรวมค่าใช้จ่ายโครงการฝึกอบรม';
			}}
		}
	})
	.state('erp03.erpr018',{url:"/erpr018",
		views:{
			'from@erp03':{templateUrl:"partials/Report/erps018C.html",
			controller:function($scope){
				$scope.pageCode='COU014';
				$scope.pageName='รายงานทะเบียนคุมบัตรเครดิตราชการ';
			}}
		}
	})
	.state('erp03.erpr019',{url:"/erpr019",
		views:{
			'from@erp03':{templateUrl:"partials/Report/erps019C.html",
			controller:function($scope){
				$scope.pageCode='COU015';
				$scope.pageName='รายงานทะเบียนการรับ-จ่ายบัตรวงเงินถาวร';
			}}
		}
	})
	.state('erp03.erpr020',{url:"/erpr020",
		views:{
			'from@erp03':{templateUrl:"partials/Report/erps020C.html",
			controller:function($scope){
				$scope.pageCode='COU016';
				$scope.pageName='รายงานอัตราค่าบริการของโครงการฝึกอบรม';
			}}
		}
	});	
});
	
//end erp03

//erp04
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('erp04.erps000',{
		url:"/erps000",
		views:{
			'from@erp04':{templateUrl:"partials/erps000L.html",
			controller:function($scope){
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}
	})
	.state('erp04.erps000.add',{url:"/add",
		views:{
			'from@erp04':{templateUrl:"partials/erps000F.html",
			controller:function($scope){
				$scope.back='erp04.erps000';
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}		
	})
	.state('erp04.erps001',{
		url:"/erps001",
		views:{
			'from@erp04':{templateUrl:"partials/erps001L.html"}
		}
	})
	.state('erp04.erps001.add',{url:"/add",
		views:{
			'from@erp04':{templateUrl:"partials/erps001F.html",
			controller:function($scope){
				$scope.back='erp04.erps001';
			}
		}
		}		
	})
	.state('erp04.erps001.add.family',{url:"/addFamily",
		views:{
			'from@erp04':{templateUrl:"partials/erps001FM.html",
			controller:function($scope){
				$scope.back='erp04.erps001.add';
				$scope.statusFamailyList = statusFamailyList;
			}
		}
		}		
	})	
	.state('erp04.erps018',{
		url:"/erps018",
		views:{
			'from@erp04':{templateUrl:"partials/erps018L.html",
			controller:function($scope){
				$scope.pageCode='BEN001';
				$scope.pageName='เบิกเงินรักษาพยาบาล';
			}
		}
		}
	})
	.state('erp04.erps018.add',{
		url:"/erps018",
		views:{
			'from@erp04':{templateUrl:"partials/erps018F.html",
			controller:function($scope){
				$scope.pageCode='BEN001';
				$scope.pageName='เบิกเงินรักษาพยาบาล';
				$scope.statusFamailyList = statusFamailyList;
			}
		}
		}
	})
	.state('erp04.erps019',{
		url:"/erps019",
		views:{
			'from@erp04':{templateUrl:"partials/erps019L.html",
			controller:function($scope){
				$scope.pageCode='BEN002';
				$scope.pageName='เบิกเงินค่าเล่าเรียน';
			}
		}
		}
	})
	.state('erp04.erps019.add',{
		url:"/erps019",
		views:{
			'from@erp04':{templateUrl:"partials/erps019F.html",
			controller:function($scope){
				$scope.pageCode='BEN002';
				$scope.pageName='เบิกเงินค่าเล่าเรียน';
			}
		}
		}
	})
	.state('erp04.erpr021',{url:"/erpr021",
		views:{
			'from@erp04':{templateUrl:"partials/Report/erps021C.html",
			controller:function($scope){
				$scope.pageCode='BEN003';
				$scope.pageName='รายงานผู้เบิกเงินสวัสดิการ';
			}}
		}
	})
	.state('erp04.erpr022',{url:"/erpr022",
		views:{
			'from@erp04':{templateUrl:"partials/Report/erps022C.html",
			controller:function($scope){
				$scope.pageCode='BEN004';
				$scope.pageName='รายงานทะเบียนคุมเบิกเงินรักษาพยาบาล';
			}}
		}
	})
	.state('erp04.erpr023',{url:"/erpr023",
		views:{
			'from@erp04':{templateUrl:"partials/Report/erps023C.html",
			controller:function($scope){
				$scope.pageCode='BEN005';
				$scope.pageName='รายงานทะเบียนคุมเบิกเงินค่าเล่าเรียน';
			}}
		}
	})
	.state('erp04.erpr024',{url:"/erpr024",
		views:{
			'from@erp04':{templateUrl:"partials/Report/erps024C.html",
			controller:function($scope){
				$scope.pageCode='BEN006';
				$scope.pageName='รายงานทะเบียนคุมเบิกเงินฎีกาคลัง';
			}}
		}
	})
	.state('erp04.erpr025',{url:"/erpr025",
		views:{
			'from@erp04':{templateUrl:"partials/Report/erps025C.html",
			controller:function($scope){
				$scope.pageCode='BEN007';
				$scope.pageName='รายงานสรุปการเบิกเงินรักษาพยาบาล';
			}}
		}
	}).state('erp04.erps020',{
		url:"/erps020",
		views:{
			'from@erp04':{templateUrl:"partials/erps020L.html",
			controller:function($scope){
				$scope.pageCode='EPRS020';
				$scope.pageName='ประเภทและอัตราเงินบำรุงและค่าเล่าเรียน';
			}
		}
		}
	})
	.state('erp04.erps020.add',{
		url:"/erps020",
		views:{
			'from@erp04':{templateUrl:"partials/erps020F.html",
			controller:function($scope){
				$scope.pageCode='EPRS020';
				$scope.pageName='ประเภทและอัตราเงินบำรุงและค่าเล่าเรียน';
				$scope.statusFamailyList = statusFamailyList;
			}
		}
		}
	});
});
//end erp04

//erp05
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('erp05.erps000',{
		url:"/erps000",
		views:{
			'from@erp05':{templateUrl:"partials/erps000L.html",
			controller:function($scope){
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}
	})
	.state('erp05.erps000.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps000F.html",
			controller:function($scope){
				$scope.back='erp05.erps000';
				$scope.pageCode='MAS001';
				$scope.pageName='ข้อกฎหมาย/เอกสารประกอบการเบิก';
			}
		}
		}		
	})
	.state('erp05.erps021',{
		url:"/erps021",
		views:{
			'from@erp05':{templateUrl:"partials/erps021L.html",
			controller:function($scope){
				$scope.pageCode='MAT001';
				$scope.pageName='หน่วยนับ';
			}
		}
		}
	})
	.state('erp05.erps021.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps021F.html",
			controller:function($scope){
				$scope.back='erp05.erps021';
				$scope.pageCode='MAT001';
				$scope.pageName='หน่วยนับ';
			}
		}
		}		
	})
	.state('erp05.erps022',{
		url:"/erps022",
		views:{
			'from@erp05':{templateUrl:"partials/erps022L.html",
			controller:function($scope){
				$scope.pageCode='MAT002';
				$scope.pageName='ประเภทวัสดุ';
			}
		}
		}
	})
	.state('erp05.erps022.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps022F.html",
			controller:function($scope){
				$scope.back='erp05.erps022';
				$scope.pageCode='MAT002';
				$scope.pageName='ประเภทวัสดุ';
			}
		}
		}		
	})
	.state('erp05.erps022.add1',{url:"/add1",
		views:{
			'from@erp05':{templateUrl:"partials/erps022F.html",
			controller:function($scope){
				$scope.back='erp05.erps022';
				$scope.pageCode='MAT002';
				$scope.pageName='ประเภทวัสดุ';
				$scope.name='เครื่องเขียน';
			}
		}
		}		
	})
	.state('erp05.erps022.add2',{url:"/add2",
		views:{
			'from@erp05':{templateUrl:"partials/erps022F.html",
			controller:function($scope){
				$scope.back='erp05.erps022';
				$scope.pageCode='MAT002';
				$scope.pageName='ประเภทวัสดุ';
				$scope.name='เครื่องเขียน->ปากกา';
			}
		}
		}		
	})
	.state('erp05.erps023',{
		url:"/erps023",
		views:{
			'from@erp05':{templateUrl:"partials/erps023L.html",
			controller:function($scope){
				$scope.pageCode='MAT007';
				$scope.pageName='บันทึกรายการทะเบียนคุมวัสดุ';
			}
		}
		}
	})
	.state('erp05.erps023.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps023F.html",
			controller:function($scope){
				$scope.back='erp05.erps023';
				$scope.pageCode='MAT007';
				$scope.pageName='บันทึกรายการทะเบียนคุมวัสดุ';
			}
		}
		}		
	})
	.state('erp05.erps024',{
		url:"/erps024",
		views:{
			'from@erp05':{templateUrl:"partials/erps024L.html",
			controller:function($scope){
				$scope.pageCode='MAT008';
				$scope.pageName='บันทึกรายการเบิกวัสดุ';
			}
		}
		}
	})
	.state('erp05.erps024.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps024F.html",
			controller:function($scope){
				$scope.back='erp05.erps024';
				$scope.pageCode='MAT008';
				$scope.pageName='บันทึกรายการเบิกวัสดุ';
			}
		}
		}		
	})
	.state('erp05.erps025',{
		url:"/erps025",
		views:{
			'from@erp05':{templateUrl:"partials/erps025L.html",
			controller:function($scope){
				$scope.pageCode='MAT003';
				$scope.pageName='ประเภทครุภัณฑ์';
			}
		}
		}
	})
	.state('erp05.erps025.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps025F.html",
			controller:function($scope){
				$scope.back='erp05.erps025';
				$scope.pageCode='MAT003';
				$scope.pageName='ประเภทครุภัณฑ์';
				$scope.maxlength = '5';
			}
		}
		}		
	})
	.state('erp05.erps025.add1',{url:"/add1",
		views:{
			'from@erp05':{templateUrl:"partials/erps025F.html",
			controller:function($scope){
				$scope.back='erp05.erps025';
				$scope.pageCode='MAT003';
				$scope.pageName='ประเภทครุภัณฑ์';
				$scope.cc='01';
				$scope.maxlength = '3';
			}
		}
		}		
	})
	.state('erp05.erps026',{
		url:"/erps026",
		views:{
			'from@erp05':{templateUrl:"partials/erps026L.html",
			controller:function($scope){
				$scope.pageCode='MAT009';
				$scope.pageName='บันทึกรายการครุภัณฑ์';
			}
		}
		}
	})
	.state('erp05.erps026.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps026F.html",
			controller:function($scope){
				$scope.back='erp05.erps026';
				$scope.pageCode='MAT009';
				$scope.pageName='บันทึกรายการครุภัณฑ์';
			}
		}
		}		
	})
	.state('erp05.erps026.edit',{url:"/edit",
		views:{
			'from@erp05':{templateUrl:"partials/erps026FE.html",
			controller:function($scope){
				$scope.back='erp05.erps026';
				$scope.pageCode='MAT009';
				$scope.pageName='บันทึกรายการครุภัณฑ์';
			}
		}
		}		
	})
	.state('erp05.erps027',{
		url:"/erps027",
		views:{
			'from@erp05':{templateUrl:"partials/erps027L.html",
			controller:function($scope){
				$scope.pageCode='MAT010';
				$scope.pageName='บันทึกรายการ ยืม-คืน ครุภัณฑ์';
				$scope.unit = unit;
			}
		}
		}
	})
	.state('erp05.erps027.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps027F.html",
			controller:function($scope){
				$scope.back='erp05.erps027';
				$scope.pageCode='MAT010';
				$scope.pageName='บันทึกรายการ ยืม-คืน ครุภัณฑ์';
				$scope.unit = unit;
			}
		}
		}		
	})
	.state('erp05.erps028',{
		url:"/erps028",
		views:{
			'from@erp05':{templateUrl:"partials/erps028L.html",
			controller:function($scope){
				$scope.pageCode='MAT011';
				$scope.pageName='บันทึกรายการ ส่งซ่อม-รับคืน ครุภัณฑ์';
			}
		}
		}
	})
	.state('erp05.erps028.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps028F.html",
			controller:function($scope){
				$scope.back='erp05.erps028';
				$scope.pageCode='MAT011';
				$scope.pageName='บันทึกรายการ ส่งซ่อม-รับคืน ครุภัณฑ์';
			}
		}
		}		
	})
	.state('erp05.erps029',{
		url:"/erps029",
		views:{
			'from@erp05':{templateUrl:"partials/erps029L.html",
			controller:function($scope){
				$scope.pageCode='MAT012';
				$scope.pageName='บันทึกรายการ ชำรุดส่งคืนครุภัณฑ์';
			}
		}
		}
	})
	.state('erp05.erps029.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps029F.html",
			controller:function($scope){
				$scope.back='erp05.erps029';
				$scope.pageCode='MAT012';
				$scope.pageName='บันทึกรายการ ชำรุดส่งคืนครุภัณฑ์';
			}
		}
		}		
	})
	.state('erp05.erps030',{
		url:"/erps030",
		views:{
			'from@erp05':{templateUrl:"partials/erps030L.html",
			controller:function($scope){
				$scope.pageCode='MAT013';
				$scope.pageName='บันทึกรายการโทรศัพท์มือถือ';
			}
		}
		}
	})
	.state('erp05.erps030.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps030F.html",
			controller:function($scope){
				$scope.back='erp05.erps030';
				$scope.pageCode='MAT013';
				$scope.pageName='บันทึกรายการโทรศัพท์มือถือ';
				$scope.unit = unit;
			}
		}
		}		
	})
	.state('erp05.erps031',{
		url:"/erps031",
		views:{
			'from@erp05':{templateUrl:"partials/erps031L.html",
			controller:function($scope){
				$scope.pageCode='MAT014';
				$scope.pageName='บันทึกรายการ ส่งซ่อม-รับคืน โทรศัพท์มือถือ';
			}
		}
		}
	})
	.state('erp05.erps031.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps031F.html",
			controller:function($scope){
				$scope.back='erp05.erps031';
				$scope.pageCode='MAT014';
				$scope.pageName='บันทึกรายการ ส่งซ่อม-รับคืน โทรศัพท์มือถือ';
			}
		}
		}		
	})
	.state('erp05.erps032',{
		url:"/erps032",
		views:{
			'from@erp05':{templateUrl:"partials/erps032L.html",
			controller:function($scope){
				$scope.pageCode='MAT004';
				$scope.pageName='ข้อมูลเจ้าหน้าที่หรือคณะกรรมการจัดชื้อ';
				$scope.units = unit;
			}
		}
		}
	})
	.state('erp05.erps032.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps032F.html",
			controller:function($scope){
				$scope.back='erp05.erps032';
				$scope.pageCode='MAT004';
				$scope.pageName='ข้อมูลเจ้าหน้าที่หรือคณะกรรมการจัดชื้อ';
				$scope.units = unit;
			}
		}
		}		
	})
	.state('erp05.erps033',{
		url:"/erps033",
		views:{
			'from@erp05':{templateUrl:"partials/erps033L.html",
			controller:function($scope){
				$scope.pageCode='MAT005';
				$scope.pageName='ขออนุมัติจัดชื้อพัสดุ';
				$scope.units = unit;
			}
		}
		}
	})
	.state('erp05.erps033.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps033F.html",
			controller:function($scope){
				$scope.back='erp05.erps033';
				$scope.pageCode='MAT005';
				$scope.pageName='ขออนุมัติจัดชื้อพัสดุ';
				$scope.units = unit;
			}
		}
		}		
	})
	.state('erp05.erps034',{
		url:"/erps034",
		views:{
			'from@erp05':{templateUrl:"partials/erps034L.html",
			controller:function($scope){
				$scope.pageCode='MAT006';
				$scope.pageName='ข้อมูลการตรวจรับพัสดุ';
				$scope.units = unit;
			}
		}
		}
	})
	.state('erp05.erps034.add',{url:"/add",
		views:{
			'from@erp05':{templateUrl:"partials/erps034F.html",
			controller:function($scope){
				$scope.back='erp05.erps034';
				$scope.pageCode='MAT006';
				$scope.pageName='ข้อมูลการตรวจรับพัสดุ';
				$scope.units = unit;
			}
		}
		}		
	})
	.state('erp05.erpr026',{url:"/erpr026",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps026C.html",
			controller:function($scope){
				$scope.pageCode='MAT015';
				$scope.pageName='ทะเบียนวัสดุสำนักงาน';
			}}
		}
	})
	.state('erp05.erpr027',{url:"/erpr027",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps027C.html",
			controller:function($scope){
				$scope.pageCode='MAT016';
				$scope.pageName='รายการเบิกเบิกวัสดุ';
			}}
		}
	})
	.state('erp05.erpr028',{url:"/erpr028",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps028C.html",
			controller:function($scope){
				$scope.pageCode='MAT017';
				$scope.pageName='ทะเบียนควบคุมทรัพย์สิน(รายตัว)';
			}}
		}
	})
	.state('erp05.erpr029',{url:"/erpr029",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps029C.html",
			controller:function($scope){
				$scope.pageCode='MAT018';
				$scope.pageName='บัญชีตรวจสอบครุภัณฑ์ที่ชำรุด';
			}}
		}
	})
	.state('erp05.erpr030',{url:"/erpr030",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps030C.html",
			controller:function($scope){
				$scope.pageCode='MAT019';
				$scope.pageName='บัญชีตรวจสอบครุภัณฑ์ประจำปี';
			}}
		}
	})
	.state('erp05.erpr031',{url:"/erpr031",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps031C.html",
			controller:function($scope){
				$scope.pageCode='MAT020';
				$scope.pageName='รายละเอียดวัสดุคงเหลือ';
			}}
		}
	})
	.state('erp05.erpr032',{url:"/erpr032",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps032C.html",
			controller:function($scope){
				$scope.pageCode='MAT021';
				$scope.pageName='รายละเอียดยืมครุภัณฑ์';
			}}
		}
	})
	.state('erp05.erpr033',{url:"/erpr033",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps033C.html",
			controller:function($scope){
				$scope.pageCode='MAT022';
				$scope.pageName='รายละเอียดโทรศัพท์มือถือ';
			}}
		}
	})
	.state('erp05.erpr034',{url:"/erpr034",
		views:{
			'from@erp05':{templateUrl:"partials/Report/erps034C.html",
			controller:function($scope){
				$scope.pageCode='MAT023';
				$scope.pageName='ประวัติการส่งซ่อมโทรศัพท์มือถือ';
			}}
		}
	})
});
//end erp05
//end Menu
