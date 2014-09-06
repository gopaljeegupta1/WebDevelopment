/* ===================================================
 * For all pages : Design by Gopal
 * =================================================== */

$(document).ready(function(e) { 

	
	<!--<link href="bootstrap/css/bootstrap-datetimepicker.min.css" rel="stylesheet" > -->
	<!--<script src="bootstrap/js/jquery-2.1.0.js" type="text/javascript" charset="UTF-8"> -->
	<!--<script src="bootstrap/js/bootstrap-datetimepicker.js" type="text/javascript" charset="UTF-8"> -->
	<!-- Start Enabling Calender Control for DatePicker-->	
		$('.form_date').datetimepicker({
        	weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0
	    });
	<!-- End Enabling Calender Control for DatePicker-->
	
	
	
	<!--Start Calender Control for Date Range-->
	$('.input-daterange').datepicker({
    	todayBtn: "linked"
	});
    <!--End Calender Control for Date Range-->
    
	
	
	<!-- START enabling right panel for leave page-->
	//	$("#left").hide();
//
//		/*$(".leave_right").hide();
//		$('#leave-left').css({width: '100%', height: 'auto'}) */
//		$(".leave_right").show();
//		$('#leave-left').css({width: '70%', height: 'auto'}) 
//		
//		$("#navigation_button1").click(function(){
//			
//
//		if ( ($('.leave_right').is(':hidden') == true) ) {
//           	<!--alert("hidden right");-->
//			$('#leave-left').css({width: '70%', height: 'auto'})
//			$(".leave_right").toggle("slow");
//			/*$('#leave-right').css({width: '25%', height: 'auto'})*/
//        }else if ( ($('.leave_right').is(':hidden') == false) ) {
//           	<!--alert("no hidden right");-->
//			$('#leave-left').css({width: '97%', height: 'auto'})
//			$(".leave_right").hide();
//
//        } 
//
//		<!--start button images fuctionality-->
//		if ($('.icon-chevron-left').is(':hidden') == true) {
//           	$("#left").show();
//			$("#right").hide();
//        } else if ($('.icon-chevron-right').is(':hidden') == true) {
//           $("#right").show();
//		   $("#left").hide();		   
//        } 
//		<!--end button images fuctionality-->
//		
//		});
	<!-- END enabling right panel for leave page-->
	
	
	<!-- START enabling right panel-->
		$("#left").hide();

		$(".leave_right").show();
		$('#leave-left').css({width: '74%', height: 'auto'}) 
		
		$("#navigation_button1").click(function(){
			

		if ( ($('.leave_right').is(':hidden') == true) ) {
           	<!--alert("hidden right");-->
			$('#leave-left').css({width: '74%', height: 'auto'})
			$(".leave_right").show();
			/*$('#leave-right').css({width: '25%', height: 'auto'})*/
        }else if ( ($('.leave_right').is(':hidden') == false) ) {
           	<!--alert("no hidden right");-->
			$('#leave-left').css({width: '97%', height: 'auto'})
			$(".leave_right").hide();

        } 
		
		
		<!--start button images fuctionality-->
		if ($('.icon-chevron-left').is(':hidden') == true) {
           	$("#left").show();
			$("#right").hide();
        } else if ($('.icon-chevron-right').is(':hidden') == true) {
           $("#right").show();
		   $("#left").hide();		   
        } 
		<!--end button images fuctionality-->
		
		});
	<!-- END enabling right panel-->
	
	
	/*<script src="bootstrap/js/jquery.twbsPagination.js" type="text/javascript" >*/
	<!--  Start Pagination -->
	$('#pagination-demo').twbsPagination({
       		totalPages: 35,
       		visiblePages: 5,
			startPage:1,
			<!--href: '?page={{number}}',-->
        	onPageClick: function (event, page) {
			$('#page-content').text('Page Showing ' + page + ' of 35 ');
    	    }
	});
	<!--  End Pagination -->
	
	/*<script src="bootstrap/js/jquery.twbsPagination.js" type="text/javascript" >*/
	<!--  Start Pagination -->
	$('#pagination-demo1').twbsPagination({
       		totalPages: 35,
       		visiblePages: 5,
			startPage:1,
			<!--href: '?page={{number}}',-->
        	onPageClick: function (event, page) {
			$('#page-content').text('Page Showing ' + page + ' of 35 ');
    	    }
	});
	<!--  End Pagination -->
	
	/*<script src="bootstrap/js/jquery.twbsPagination.js" type="text/javascript" >*/
	<!--  Start Pagination -->
	$('#pagination-demo2').twbsPagination({
       		totalPages: 35,
       		visiblePages: 5,
			startPage:1,
			<!--href: '?page={{number}}',-->
        	onPageClick: function (event, page) {
			$('#page-content').text('Page Showing ' + page + ' of 35 ');
    	    }
	});
	<!--  End Pagination -->
	
	/*<script src="bootstrap/js/jquery.twbsPagination.js" type="text/javascript" >*/
	<!--  Start Pagination -->
	$('#pagination-demo3').twbsPagination({
       		totalPages: 35,
       		visiblePages: 5,
			startPage:1,
			<!--href: '?page={{number}}',-->
        	onPageClick: function (event, page) {
			$('#page-content').text('Page Showing ' + page + ' of 35 ');
    	    }
	});
	<!--  End Pagination -->
	
	/*<script src="bootstrap/js/jquery.twbsPagination.js" type="text/javascript" >*/
	<!--  Start Pagination -->
	$('#pagination-demo4').twbsPagination({
       		totalPages: 35,
       		visiblePages: 5,
			startPage:1,
			<!--href: '?page={{number}}',-->
        	onPageClick: function (event, page) {
			$('#page-content').text('Page Showing ' + page + ' of 35 ');
    	    }
	});
	<!--  End Pagination -->
	
	/*<script src="bootstrap/js/jquery.twbsPagination.js" type="text/javascript" >*/
	<!--  Start Pagination -->
	$('#pagination-demo5').twbsPagination({
       		totalPages: 35,
       		visiblePages: 5,
			startPage:1,
			<!--href: '?page={{number}}',-->
        	onPageClick: function (event, page) {
			$('#page-content').text('Page Showing ' + page + ' of 35 ');
    	    }
	});
	<!--  End Pagination -->

	
	<!--Visible Adv Search Container-->
	$("#adv_search").click(function(){
    	$("#Adv_search_container").toggle("slow");
		$('.down_icon').hide();
		$('.up_icon').show();
  		});
	

	$('#datetimepicker3').datetimepicker({
      pickTime: false
    });


	<!-- Start Enabling Calender Control for DatePicker-->	
		$('.form_date_of_duty').datetimepicker({
        	weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0
	    });
	<!-- End Enabling Calender Control for DatePicker-->


	});