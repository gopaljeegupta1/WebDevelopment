// JavaScript Document

/*$.fn.greenify = function() {
this.css( "background", "green" );
};*/

(function($) {

    $.fn.helloWorld = function() {
		 this.each( function() {
            $(this).text("Hello, World!");
        });
	}
	}(jQuery));

function hepl_initializeTable(tableId,totalBarId,filterId,fixedColumnNo,tableRow,accessHiddenFeature,disableFeature){debugger
	
	hm_cTable = $("#" + tableId).html();  					//add roottable data into pTable for appending maximaize table 
	hm_StyleClassID(tableId); 							/*enabling DataTable style featured, add classes, add ids into default Table*/
	hm_addCustomFilter(tableId,totalBarId,filterId);
	hm_DataTableFeature(tableId,fixedColumnNo,tableRow,totalBarId,filterId);			/*enable DataTable features (Parent Master Feature)*/
	hm_bodyBorder(tableId);       							//add border into table body
	applyCustomFilter(tableId); 							//apply custom filtering in footer for custom searching 
	
	hm_accessHiddenFeature(tableId,totalBarId,filterId,accessHiddenFeature);	//access hidden features
	hm_disableFeature(tableId,totalBarId,filterId,disableFeature);	//disable(remove) some features
	
	maximize_wrapper(hm_cTable,tableId,tableRow);	//for maximize popup
	
	$('#'+tableId+'_wrapper').find('.DTFC_ScrollWrapper').css('height','auto !important');		//reset the root table height
}



<!--For enabling DataTable style featured to fit into default Table -->
function hm_StyleClassID(tableId){
	$('#'+tableId)							/*setup bootstrap style into default table*/
		.removeClass( 'display' )
		.addClass('table table-stripedd table-bordered table-hoverr');
	
	$("#"+tableId+" thead").addClass('dataTable_thread');	/*add dataTable_thread class into table thead*/
	
	$("#"+tableId+" thead").find("th:first-child")			
		.addClass('dataTable_checkbox')						/*add dataTable_checkbox class into first thead th*/
		.attr("id",tableId+"_check_all")					//set check_all id into thead th //
		.find("[type=checkbox]")
			.attr("id",tableId+"_get_Select_AllCheck")		//set get_Select_AllCheck id into thead th checkbox //
			.attr("onclick",'hm_getSelectAllCheck('+tableId+')');
	
	$("#"+tableId+" tbody").find("td:first-child")
		.addClass('dataTable_checkbox');					/*add dataTable_checkbox class into first tbody td*/
	
	$("#"+tableId).find("[type=checkbox]")
		.addClass('case')									/*add case class into all checkbox*/
		.attr("name","case");									
	$("#"+tableId+' tbody').find("[type=checkbox]")
		.addClass(tableId+'_checknewgrid');					/*add checknewgrid class into all checkbox*/
		
	$("#"+tableId+" tbody td:first-child").each(function() {	//generate all checkbox id into first tbody td
		for(var i=0;i<$("#"+tableId+" tbody td:first-child").length;i++){
			$("#"+tableId+" tbody td:first-child").eq(i).find("[type=checkbox]")
				.attr("id",tableId+"_chk_"+parseFloat(1+i))
				.attr("onclick",'hm_selectRowbyCheck(this)');
		}	
	});
}



<!--Start Enabling DataTable Features -->
function hm_DataTableFeature(tableId,fixedcolumnno,tableRow,totalBarId,filterId){
	if( tableRow != null && tableRow!= '' && tableRow>=5 ){
		hm_noOfRow=tableRow;
	}else {
		hm_noOfRow=5;
	}
		/*****************************
		l - length changing input control
		f - filtering input
		t - The table!
		i - Table information summary
		p - pagination control
		r - processing display element
		C - toggle column display element
		T - TableTools display element
		******************************/
	var Ttable;                     //define variable for paren-table that have dataTable features (Parent Master Feature)
	Ttable = $('#'+tableId).dataTable(
		{
			"orderClasses": false,
			renderer: "bootstrap",
			//Enable statesave,stateduration(60 * 60 * 24) feature of a table whan reloaded page*/	
			/*"stateSave": true,		
			"stateDuration": 60,*/
			"processing": true,		//Enable or disable the 'processing' indicator when table processing	
			"scrollX": true,		//enable table body scrolling scrolling in horizontal direction 
			"scrollY": "202px",		//enable table body scrolling in the vertical direction
			"scrollCollapse": false,
			"autoWidth": false,		//Disable column autowidth features, when table have null record.
			"searching": true,	//enable the search bar
			"bInfo" :  true, 	//enable page detail summary or "info": false
			"paging":  true,	//enable pagination  or "paginate": false
			"ordering": true,	//enable ordering in table
			"pagingType": "full_numbers", //enable first,prev,next,last, page numbers
			'iDisplayLength': hm_noOfRow,	//define number of row display in tables
			"aLengthMenu": [ hm_noOfRow, 10, 25, 50],	//Change the options in the page length select list.
			destroy: true,	//Destroy existing table and recreate table with this feature
					
			//Remove Sorting from first colummn by classname
			'aoColumnDefs': [{ 'bSortable': false, 'aTargets': ['table_checkbox'] }],
			//Remove Sorting from first colummn by index
			'aoColumnDefs': [{ 'bSortable': false, 'aTargets': [0] }],
			//Remove Sorting image from first colummn by index
			"aaSorting": [[ 0, 'sorting_asc' ]], 
			//Disable Column reordering into first column
			"oColReorder": { "iFixedColumns": 1	},
			
			"dom": 'r<"clear"> <"toolbar"> C T<"clear">  R  f<"clear_both"> t pil ',	//Enable tableprocessing, toolbar, Togglecolumn, column reordering functionality Via Dom object
			
			//Setup the language for table processing
			"language": {
				"processing": "DataTables is currently busy",
				"loadingRecords": "Please wait - loading...",
				"emptyTable": "No data available in table",
				"zeroRecords": "No records to display"
				},
			
			//Enable Toggle column functionality
			"colVis": {
				"buttonText": "<span class='icon-tasks' style='margin:3px;'></span>",	//set text on toggle button
				activate: "mouseclick",	//activate mouseover on toggle button
				"aiExclude": [ 0 ],		//disable column visiblity on first column
				restore: "Restore",		//enable reset feature
				showAll: "Show all"		//enable showall column feature
				},
					
			//Enable TableTools features for copy,print, exporting data
			"oTableTools": {
				"sSwfPath": "../swf/copy_csv_xls_pdf.swf",
				"aButtons": [ {"sExtends": "print", "sButtonText":"<span class='icon-print' style='margin:3px;'></span>", "sToolTip": ""}  ]
				}
							
	});
		
	CustomToolbar(tableId,totalBarId,filterId,Ttable);    				/*for add custom toolbar into table */
	FixColumns(tableId,Ttable,fixedcolumnno);	                /*for fix first column (remove ordering)*/
	resetColumnReorder(tableId,Ttable);          				/*for column reordering*/
}
<!--End Enable DataTable Features -->


<!--Fix the header and column functionality-->
function  FixColumns(tableId,Ttable,fixedcolumnno){
	//Fix the header to the top of the window , when table show full screen 
	/*new $.fn.dataTable.FixedHeader( Ttable ,{"iLeftHeaders": 1});*/
	//Fix the column that r not scrollable 
	if( fixedcolumnno != null && fixedcolumnno!= '' && fixedcolumnno>0 ){
		hm_fixedColumnNo=fixedcolumnno;
		new $.fn.dataTable.FixedColumns( Ttable,{"iLeftColumns": hm_fixedColumnNo, "sHeightMatch":"auto", "bAutoWidth": true});
	}else {
		hm_fixedColumnNo=1;
		new $.fn.dataTable.FixedColumns( Ttable,{"iLeftColumns": hm_fixedColumnNo, "sHeightMatch":"auto", "bAutoWidth": true});
	}
	
	$('#'+tableId+'_wrapper')
		.find('.DTFC_LeftBodyLiner').css('margin','-1px 0 0')
		.find('table').css('width','-moz-fit-content');
}

	
/*Reset column reordering functionality	*/
function resetColumnReorder(tableId,Ttable){   
		/*var colReorder = new $.fn.dataTable.ColReorder( Ttable, { "aiOrder": [ 5,4, 3, 2, 1, 0 ]} ); //Manually reset ordering*/
		var colReorder = new $.fn.dataTable.ColReorder( Ttable );
		$('#'+tableId+'_wrapper').find('#'+tableId+'_reset_order').click( function (e) {
			colReorder.fnReset();
			return false;
		} );
}

/*For refresh table data */
function refreshData(Ttable){
		Ttable.ajax.reload();
}


/*For creating userdefined toolbar*/
function CustomToolbar(tableId,totalBarId,filterId,Ttable) { 
		var efile = tableId;
		$("div.toolbar").html(' <nav class="navbar navbar-default" role="navigation"> <ul class="nav navbar-nav"> ' +
	'	<li class="dropdown mar"> <button data-toggle="dropdown" class="btn" data-original-title="Actions"> <span class="icon-edit"></span> <span class="caret"></span> </button> <ul class="dropdown-menu">	' +
	'	<li><a href="#" id="addnewrow" onClick="getNew()"> New </a></li> <li><a href="#" onClick="getDelete()" id="btndelete1"> Delete </a></li>	<li class="dropdown-submenu"><a href="#">Export (beta)</a>		<ul class="dropdown-menu"><li><a id="pngExport" onClick="getPngExport(' + efile + ')" href="#"> <img width="20px" src="Images/png.png"> PNG</a></li> <li><a onClick="getPdfExport(' + efile + ')" href="#"><img width="20px" src="Images/pdf.png"> PDF</a></li> <li><a onClick="getXlsExport(' + efile + ')" href="#"><img width="20px" src="Images/xls.png"> XLS</a></li> <li><a onClick="getCsvExport(' + efile + ')" href="#"><img width="20px" src="Images/csv.png">CSV</a></li> <li><a onClick="getTxtExport(' + efile + ')" href="#"><img width="20px" src="Images/txt.png">TXT</a></li>	</ul></li>		<li ><a href="#" id="get_Select_All" onclick="hm_getSelectAll('+tableId+')">Select All</a></li>  <li ><a href="#" id="get_UnSelect_All" onclick="hm_getUnSelectAll('+tableId+')">De-select All</a></li>   </ul></li>	' +
	'	<li class="dropdown mar"><button data-toggle="dropdown" class="btn" data-original-title="View"><span class="icon-eye-open"></span>  <span class="caret"></span> </button>	<ul class="dropdown-menu">		<li class="dropdown-submenu"><a href="#">Toggle Feature</a>	<ul class="dropdown-menu"><li class="search"><a id="searchBar" onclick="toggleSearch(' + efile + ')" href="#"> Search <i class="search icon-ok" ></i></a></li> <li class="customfilter"><a id="FilterMenu" onclick="toggleCustomFilter('+tableId+','+filterId+')" href="#"> Filter <i class="customfilter icon-ok" ></i></a></li> <li class="customtotal"><a id="TotalMenu" onclick="toggleCustomTotal('+tableId+','+totalBarId+')" href="#"> Total <i class="customtotal icon-ok" ></i></a></li> </ul></li>		<li ><a href="#" id="reset_order" > Reset Column Position </a></li> <li ><a href="#" data-target="#'+tableId+'_modal" data-toggle="modal" id="maximizeOption" ">Maximize</a></li> </ul></li>	' +
	'	<li><button class="btn mar mar1" id="'+tableId+'_addnewrow" title="New" data-placement="top" onClick="getNew()"><span class="icon-plus" style="margin: 3px;"></span> </button></li>	' +
	'	<li class="aa"><button class="btn mar" name="btndelete" id="'+tableId+'_btndelete" onClick="getDelete()" title="Delete" data-placement="top"><span class="icon-remove" style="margin: 3px;"></span> </button></li>	' +
	'	<li><button class="btn mar1 mar" onclick="refreshData('+Ttable+')" title="Refresh" id="'+tableId+'_refresh" data-placement="top"> <span class="icon-refresh" style="margin: 3px;"></span> </button> </li>	' +
	'	</ul> </nav> ');
	
	
	hm_createToolbarID(tableId);			/*create all anchor tag id in toolbar on runtime*/
	hm_hideDelete(tableId);            //for hide delete option
	hm_enableTooltip(tableId);	            //Enabling ToolTip features
	hm_toggleCheckIcons(tableId);		        //Hide/show icon-ok image on toggle functionality
}


/*create all anchor tag id in toolbar on runtime*/
function hm_createToolbarID(tableId){
	$('#'+tableId+'_wrapper').find('.toolbar').each(function(){
    	for(var i=0; i<$(this).find('a').length; i++){
			var anchorId=$(this).find('a').eq(i).attr('id');
			$(this).find('a').eq(i).attr('id',tableId+'_'+anchorId);
		}
	});
}

//for hide delete option
function hm_hideDelete(tableId) {
		$('#'+tableId+'_btndelete').attr('disabled', 'true');
		$('#'+tableId+'_wrapper .toolbar').find('#'+tableId+'_btndelete1').css('pointer-events', 'none');
}

/*Enabling ToolTip features */
function hm_enableTooltip(tableId) {
		$('#'+tableId+'_wrapper').find('div.toolbar button').tooltip();
		$('#'+tableId+'_wrapper').find('.ColVis button').tooltip({ title: "Columns" });
		$('#'+tableId+'_wrapper').find('.DTTT_container a').tooltip({ title: "Print Preview" });
}

/*Hide/show icon-ok image on toggle functionality */
function hm_toggleCheckIcons(tableId) {
		$('#'+tableId+'_wrapper').find(".search .icon-ok").addClass('hideicon-ok');
		$('#'+tableId+'_wrapper').find(".customfilter .icon-ok").addClass('hideicon-ok');
		$('#'+tableId+'_wrapper').find(".customtotal .icon-ok").addClass('hideicon-ok');
		$('#'+tableId+'_wrapper').find(".search").click(function () {
			$('#'+tableId+'_wrapper').find(".search .icon-ok")
				.toggle()
				.removeClass('hideicon-ok')
				.addClass('showicon-ok');
		});
		$('#'+tableId+'_wrapper').find(".customfilter").click(function () {
			$(".customfilter .icon-ok")
				.toggle()
				.removeClass('hideicon-ok')
				.addClass('showicon-ok');
		});
		$('#'+tableId+'_wrapper').find(".customtotal").click(function () {
			$(".customtotal .icon-ok")
				.toggle()
				.removeClass('hideicon-ok')
				.addClass('showicon-ok');
		});
}
	
<!--Start Exporting table Data Feature-->
function getPngExport(efile1){  
		aVar=efile1.id;
		$('#'+aVar).tableExport({type:'png',escape:'false'});
	}
	function getPdfExport(efile1){   
		aVar=efile1.id;
		$('#'+aVar).tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});
	}
	function getXlsExport(efile1){   
		aVar=efile1.id;
		$('#'+aVar).tableExport({type:'excel',escape:'false'});
	}
	function getCsvExport(efile1){   
		aVar=efile1.id;
		$('#'+aVar).tableExport({type:'csv',escape:'false',ignoreColumn: [0]});
	}
	function getTxtExport(efile1){   
		aVar=efile1.id;
		$('#'+aVar).tableExport({type:'txt',escape:'false'});
}
<!--End Exporting table Data Feature-->

//Add border into table body  -->
function hm_bodyBorder(tableId) {
	$('#'+tableId+'_wrapper').find('.dataTables_scrollBody #'+tableId)
		.css('border-left', '1px solid #ddd')
		.css('border-right', '1px solid #ddd')
		.css('border-bottom', '1px solid #ddd')
		.css('border-top', '1px solid #ddd');
	//$(".Wrapper").css('border-bottom', '1px solid #ddd');   //setup first column border
	//$('.DTFC_LeftBodyLiner').css('width','1px'); //setup first column border
}


/****** Start Custom Filter ******/
//Add Custom Filter in footer for custom searching -->
function hm_addCustomFilter(tableId,totalBarId,filterId) { 
	if( totalBarId != null && totalBarId!= '' && $('#'+tableId+' tfoot').find('tr:first').length >0 ){
		console.log("tfoot exits");
	}else{
		totalBarId="";
		console.log("tfoot td doesn't exits,becoz "+totalBarId+" is null.");		
	}
	
	if( filterId != null && filterId!= ''){
		var theadLength=$('#' + tableId + ' thead th').length;
		$('#'+tableId).find('tfoot').append($('<tr id='+filterId+'></tr>'));
		for(i=0;i<theadLength;i++){
			//$('#'+tableId+'_wrapper').find('tfoot #'+totalBarId).append($('<td></td>'));
			$('#'+tableId).find('tfoot #'+filterId).append($('<th></th>'));
		}
		$('#'+tableId).find('tfoot th').each(function () {
			if ($(this).index() > 0) {
				var title = $('#'+tableId).find('thead th').eq($(this).index()).text();
				var width = $('#'+tableId).find('thead th').eq($(this).index()).width() - 5;
				$('#'+tableId).find('tfoot th').eq($(this).index()).html('<input type="text" class="input-small" placeholder="' + title + '" style="width:' + width + 'px" />');
			}
		});
	}else{
		console.log("tfoot th doesn't exits,becoz "+filterId+" is null.");
	}
}

<!--Apply the Custom Filter for searching -->
function applyCustomFilter(tableId){
	
	$('#'+tableId+'_wrapper .dataTables_scrollFoot .dataTables_scrollFootInner').find('tfoot').on("click", "th", function(event){
		var colIdx= $(this).index();
		$(this).on('keyup change' , 'input', function(event){
		var data=$(this).val();
		var table = $("#"+tableId).DataTable();
		table
		.column( colIdx )
		.search( data )
		.draw();
		});
	});
}

/*//Add Custom Filter in footer for custom searching -->
function hm_addCustomFilter(tableId,totalBarId,filterId) {
		
	var theadLength=$('#' + tableId + ' thead th').length;
	$('#'+tableId+'_wrapper').find('tfoot').append($('<tr id='+totalBarId+'></tr>'));
	$('#'+tableId+'_wrapper').find('tfoot').append($('<tr id='+filterId+'></tr>'));
	for(i=0;i<theadLength;i++){
		$('#'+tableId+'_wrapper').find('tfoot #'+totalBarId).append($('<td></td>'));
		$('#'+tableId+'_wrapper').find('tfoot #'+filterId).append($('<th></th>'));
	}
	$('#'+tableId+'_wrapper').find('tfoot th').each(function () { 
		if ($(this).index() > 0) {
			var title = $('#'+tableId+'_wrapper .dataTables_scroll').find('table thead th').eq($(this).index()).text();
			var width = $('#'+tableId+'_wrapper .dataTables_scroll').find('table thead th').eq($(this).index()).width() - 5;
			$('#'+tableId+'_wrapper .dataTables_scroll').find('tfoot th').eq($(this).index()).html('<input type="text" class="input-small" placeholder="' + title + '" style="width:' + width + 'px" />');
			$('#'+tableId+'_wrapper .dataTables_scroll').find('tfoot td').eq($(this).index()).html('Total');
		}
	});

	applyCustomFilter(tableId); //apply custom filtering in footer for custom searching 
}*/

/****** End Custom Filter ******/

/*****Disabling features *********/
function hm_accessHiddenFeature(tableId,totalBarId,filterId, accessHiddenFeature){
	
	if(accessHiddenFeature != null && accessHiddenFeature!= ''){
		for ( var i = 0; i < accessHiddenFeature.length; i = i + 1 ) { 
			var hVal=accessHiddenFeature[ i ];
			if(hVal.toUpperCase()=="SearchBar".toUpperCase()){
				hideToggleSearch(tableId);		//hide search bar 
			}else if(hVal.toUpperCase()=="FilterBar".toUpperCase()){
				hideCustomFilter(tableId,filterId);		//Hide Custom Filter in footer for custom searching
			}else if(hVal.toUpperCase()=="TotalBar".toUpperCase()){
				hideCustomTotal(tableId,totalBarId);	//Hide Custom Total row in footer for counting total value
			/*}else if(hVal.toUpperCase()=="ToolBar".toUpperCase()){
				hideFulltoolbar(tableId);	//Hide Totalbar from the table
			}else if(hVal.toUpperCase()=="PaginationInfo".toUpperCase()){
				hidePaginationInfo(tableId);	//Hide hidePaginationInfo from the table*/
			}else if(hVal.toUpperCase()=="All".toUpperCase()){
				hm_hideAll(tableId,totalBarId,filterId);			//hide all bar 
			}
		}
		}else{
			hideToggleSearch(tableId);
			hideCustomFilter(tableId,filterId);
			hideCustomTotal(tableId,totalBarId);
		}
}

<!--Hide toggle search -->
function hideToggleSearch(tableId){
	$("#"+tableId+"_wrapper").find("#"+tableId+"_filter").hide();
	
	//$("#"+tableId+"_wrapper").find("#"+tableId+"_searchBar").hide();
}
<!--Hide Custom Filter in footer for custom searching -->
function hideCustomFilter(tableId,filterId){
	$('#'+tableId+'_wrapper').find('tfoot #'+filterId).hide();
	
	//$("#"+tableId+"_wrapper").find("#"+tableId+"_FilterMenu").hide();
}
<!--Hide Custom Total row in footer for counting total value  -->
function hideCustomTotal(tableId,totalBarId){
	$('#'+tableId+'_wrapper').find('tfoot #'+totalBarId).hide();
	
	//$("#"+tableId+"_wrapper").find("#"+tableId+"_TotalMenu").hide();
}
<!--Hide All Bar -->
function hm_hideAll(tableId,totalBarId,filterId){
	hideToggleSearch(tableId);
	hideCustomFilter(tableId,filterId);
	hideCustomTotal(tableId,totalBarId);
	
	//hideFulltoolbar(tableId);
	//hidePaginationInfo(tableId);
}
/*<!--Hide full toolBar -->
function hideFulltoolbar(tableId){
	$('#'+tableId+'_wrapper').find('#'+tableId+'_processing').hide()
	$('#'+tableId+'_wrapper').find('.toolbar').hide()
	$('#'+tableId+'_wrapper').find('.ColVis').hide()
	$('#'+tableId+'_wrapper').find('.DTTT_container').hide();
}
<!--Hide hidePaginationInfo -->
function hidePaginationInfo(tableId){
	$('#'+tableId+'_wrapper').find('#'+tableId+'_paginate').hide()
	$('#'+tableId+'_wrapper').find('#'+tableId+'_info').hide()
	$('#'+tableId+'_wrapper').find('#'+tableId+'_length').hide()
}*/

	
/*<!--Show All Bar-->
function showAll(tableId,totalBarId,filterId){
	$('#'+tableId+'_wrapper').find("#"+tableId+"_filter").show();	//for search bar
	$('#'+tableId+'_wrapper').find('tfoot #'+filterId).show();		//for tfoot th	(filter)
	$('#'+tableId+'_wrapper').find('tfoot #'+totalBarId).show();	//for tfoot td	(total)
}*/
	
	

/*Removing some features */
function hm_disableFeature(tableId,totalBarId,filterId, disableFeature){
	if(disableFeature != null && disableFeature!= ''){
		for ( var i = 0; i < disableFeature.length; i = i + 1 ) {
			var hVal=disableFeature[ i ];
			if(hVal.toUpperCase()=="SearchBar".toUpperCase()){
				removeToggleSearch(tableId);		//remove search bar 
			}else if(hVal.toUpperCase()=="FilterBar".toUpperCase()){
				removeCustomFilter(tableId,filterId);		//remove Custom Filter in footer for custom searching
			}else if(hVal.toUpperCase()=="TotalBar".toUpperCase()){
				removeCustomTotal(tableId,totalBarId);	//remove Custom Total row in footer for counting total value
			}else if(hVal.toUpperCase()=="ToolBar".toUpperCase()){
				removeFulltoolbar(tableId);	//remove Totalbar from the table
			}else if(hVal.toUpperCase()=="PaginationInfo".toUpperCase()){
				removePaginationInfo(tableId);	//remove hidePaginationInfo from the table
			}else if(hVal.toUpperCase()=="All".toUpperCase()){
				removeAllFeature(tableId,totalBarId,filterId);			//remove all bar 
			}
		}
	}
}

<!--Hide toggle search -->
function removeToggleSearch(tableId){
	$("#"+tableId+"_wrapper").find("#"+tableId+"_filter").remove();
	
	$("#"+tableId+"_wrapper").find("#"+tableId+"_searchBar").remove();
}
<!--Hide Custom Filter in footer for custom searching -->
function removeCustomFilter(tableId,filterId){
	$('#'+tableId+'_wrapper').find('tfoot #'+filterId).remove();
	
	$("#"+tableId+"_wrapper").find("#"+tableId+"_FilterMenu").remove();
}
<!--Hide Custom Total row in footer for counting total value  -->
function removeCustomTotal(tableId,totalBarId){ 
	$('#'+tableId+'_wrapper').find('tfoot #'+totalBarId).remove();
	
	$("#"+tableId+"_wrapper").find("#"+tableId+"_TotalMenu").remove();
}
<!--Hide full toolBar -->
function removeFulltoolbar(tableId){
	$('#'+tableId+'_wrapper').find('#'+tableId+'_processing').remove()
	$('#'+tableId+'_wrapper').find('.toolbar').remove()
	$('#'+tableId+'_wrapper').find('.ColVis').remove()
	$('#'+tableId+'_wrapper').find('.DTTT_container').remove();
}
<!--Hide hidePaginationInfo -->
function removePaginationInfo(tableId){
	$('#'+tableId+'_wrapper').find('#'+tableId+'_paginate').remove()
	$('#'+tableId+'_wrapper').find('#'+tableId+'_info').remove()
	$('#'+tableId+'_wrapper').find('#'+tableId+'_length').remove()
}
<!--Hide All Bar -->
function removeAllFeature(tableId,totalBarId,filterId){
	removeToggleSearch(tableId);
	removeCustomFilter(tableId,filterId);
	removeCustomTotal(tableId,totalBarId);
	removeFulltoolbar(tableId);
	removePaginationInfo(tableId);
	
	$('#'+tableId+'_wrapper').find('.dataTables_scrollFoot').remove();
}


/***********************************
function running from  Custom Toolbar
************************************/
/*Hide/show toggle search */
function toggleSearch(tableId){
	//searchid=tableId.id;
	$("#"+tableId.id+"_filter").toggle('10');
}
<!--Hide/show Custom Filter in footer for custom searching -->
function toggleCustomFilter(tableId,filterId){ 
	/*$('.dataTables_scrollFoot').toggle();*/
	$('#'+tableId.id+'_wrapper').find('tfoot #'+filterId.id).toggle();
	FixColumns();	//recall for fack process
}
<!--Hide/show Custom Total row in footer for counting total value  -->
function toggleCustomTotal(tableId,totalBarId){ 
	/*$('.dataTables_scrollFoot').toggle();*/
	$('#'+tableId.id+'_wrapper').find('tfoot #'+totalBarId.id).toggle();
	FixColumns();	//recall for fack process
}


/***********************************
Select all rows by option
************************************/
function hm_getSelectAll(tableId) { 
	tableId=tableId.id;
    $('.case').prop('checked', true);

    $('#'+tableId+'_wrapper').find('.'+tableId+'_checknewgrid').each(function () {
        if ($(this).is(':checked')) { 
            if ($(this).parent().parent().hasClass("oddHover")) {
                $(this).parent().parent().removeClass("oddHover").addClass("selectOdd");
                $('#'+tableId+' #' + $(this).val() + "").removeClass("oddHover").addClass("selectOdd");
            } else if ($(this).parent().parent().hasClass("evenHover")) {
                $(this).parent().parent().removeClass("evenHover").addClass("selectEven");
            }

            $(this).parent().parent().addClass("highlight_row");
           $('#'+tableId+' #' + $(this).val() + "").addClass("highlight_row");
           hm_showDelete(tableId);   //for show delete option
        }
    });
	
    //var oTT = TableTools.fnGetInstance('#example');
    //oTT.fnSelectAll();
}

//for show delete option
function hm_showDelete(tableId) {
    $('#'+tableId+'_btndelete').removeAttr('disabled', 'false');
    $('#'+tableId+'_wrapper .toolbar').find('#'+tableId+'_btndelete1').css('pointer-events', 'pointer');
}	

/***********************************
Deselect all rows by option
************************************/
function hm_getUnSelectAll(tableId) {
	tableId=tableId.id;
    $('.case').removeAttr('checked');

    $('#'+tableId+'_wrapper').find('.'+tableId+'_checknewgrid').each(function () {
        if ($(this).parent().parent().hasClass("selectOdd")) {
            $(this).parent().parent().removeClass("selectOdd").addClass("oddHover");
            $('#'+tableId+' #' + $(this).val() + '').removeClass("selectOdd").addClass("oddHover");
        } else if ($(this).parent().parent().hasClass("selectEven")) {
            $(this).parent().parent().removeClass("selectEven").addClass("even");
        }
        $(this).parent().parent().removeClass("highlight_row")
        $('#example'+tableId+' #' + $(this).val() + '').removeClass("highlight_row")
        hm_hideDelete(tableId);   //for hide delete option
    });
	
    //var oTT = TableTools.fnGetInstance('#example');
    //oTT.fnSelectNone();   
}


/***********************************
Dselect/de-select all rows by checkbox
************************************/
var bool = false;
function hm_getSelectAllCheck(tableId) { 
    tableId=tableId.id;
	if (bool == false) {
        $('#'+tableId+'_get_Select_AllCheck').prop('checked', true);
        bool = true;

    } else {
        $('#'+tableId+'_get_Select_AllCheck').prop('checked', false);
        bool = false;

    }

    var isCheck = $('#'+tableId+'_get_Select_AllCheck').is(':checked');
    if (isCheck) {
    	$('.case').prop('checked', true);
		hm_getSelectAll2(tableId);
    } else {
        $('.case').removeAttr('checked');
		hm_getUnSelectAll2(tableId);
    }
}
function hm_getSelectAll2(tableId) {
	//tableId=tableId.id;
    //$('.case').prop('checked', true);
    $('#'+tableId+'_wrapper').find('.'+tableId+'_checknewgrid').each(function () {
        if ($(this).is(':checked')) { 
            if ($(this).parent().parent().hasClass("oddHover")) {
                $(this).parent().parent().removeClass("oddHover").addClass("selectOdd");
                $('#'+tableId+' #' + $(this).val() + "").removeClass("oddHover").addClass("selectOdd");
            } else if ($(this).parent().parent().hasClass("evenHover")) {
                $(this).parent().parent().removeClass("evenHover").addClass("selectEven");
            }

            $(this).parent().parent().addClass("highlight_row");
           $('#'+tableId+' #' + $(this).val() + "").addClass("highlight_row");
           hm_showDelete(tableId);   //for show delete option
        }
    });
}
function hm_getUnSelectAll2(tableId) {
	//tableId=tableId.id;
    //$('.case').removeAttr('checked');
    $('#'+tableId+'_wrapper').find('.'+tableId+'_checknewgrid').each(function () {
        if ($(this).parent().parent().hasClass("selectOdd")) {
            $(this).parent().parent().removeClass("selectOdd").addClass("oddHover");
            $('#'+tableId+' #' + $(this).val() + '').removeClass("selectOdd").addClass("oddHover");
        } else if ($(this).parent().parent().hasClass("selectEven")) {
            $(this).parent().parent().removeClass("selectEven").addClass("evenHover");
        }
        $(this).parent().parent().removeClass("highlight_row")
        $('#example'+tableId+' #' + $(this).val() + '').removeClass("highlight_row")
        hm_hideDelete(tableId);   //for hide delete option
    });   
}


/***********************************
select row by chekbox and highlight row with(highlight_row) class into tr
************************************/
function hm_selectRowbyCheck(tableId) { 
var tablessss=$(tableId).attr('id').split('_')[0];
		if (tableId.checked) {
            if ($(tableId).parent().parent().hasClass("oddHover")) {
                $(tableId).parent().parent().removeClass("oddHover").addClass("selectOdd");
				for(var i=0;i< $("#"+tablessss).find('tr').length;i++)
				{
					if($("#"+tablessss).find('tr').find('input[type=checkbox]').eq(i).attr('id')==tableId.id)
					{
						$("#"+tablessss).find('tr').find('input[type=checkbox]').eq(i).parent().parent().removeClass("oddHover").addClass("selectOdd").addClass("highlight_row");
					}
				}
            }else if ($(tableId).parent().parent().hasClass("evenHover")) {
                $(tableId).parent().parent().removeClass("evenHover").addClass("selectEven");
				for(var i=0;i< $("#"+tablessss).find('tr').length;i++)
				{
					if($("#"+tablessss).find('tr').find('input[type=checkbox]').eq(i).attr('id')==tableId.id)
					{
						$("#"+tablessss).find('tr').find('input[type=checkbox]').eq(i).parent().parent().removeClass("evenHover").addClass("selectEven").addClass("highlight_row");
					}
				}
            }
			hm_showDelete(tablessss);   //for show delete option
        }

        
		else {
			if ($(tableId).parent().parent().hasClass("selectOdd")) {
                $(tableId).parent().parent().removeClass("selectOdd").addClass("oddHover");
				for(var i=0;i< $("#"+tablessss).find('tr').length;i++)
				{
					if($("#"+tablessss).find('tr').find('input[type=checkbox]').eq(i).attr('id')==tableId.id)
					{
						$("#"+tablessss).find('tr').find('input[type=checkbox]').eq(i).parent().parent().removeClass("selectOdd").addClass("oddHover").removeClass("highlight_row");
					}
				}
            }else if ($(tableId).parent().parent().hasClass("selectEven")) {
                $(tableId).parent().parent().removeClass("selectEven").addClass("evenHover");
				for(var i=0;i< $("#"+tablessss).find('tr').length;i++)
				{
					if($("#"+tablessss).find('tr').find('input[type=checkbox]').eq(i).attr('id')==tableId.id)
					{
						$("#"+tablessss).find('tr').find('input[type=checkbox]').eq(i).parent().parent().removeClass("selectEven").addClass("evenHover").removeClass("highlight_row");
					}
				}
            }
			
            hm_hideDelete(tablessss);   //for hide delete option
        }
}




/*********************************
	For maixmize the Table
********************************/

function maximize_wrapper(hm_cTable,tableId,tableRow){ 
	var tableId= hm_createModel(hm_cTable,tableId);								//Create modal for maximize table	
	hmm_StyleClassID(tableId);					//For enabling DataTable style featured 
	hmm_DataTableFeature(tableId,tableRow);			/*enable DataTable features (Parent Master Feature)*/
}

/* START Modal for POPUP */
function hm_createModel(hm_cTable,tableId){ 
	hm_cTable.indexOf('<tfoot>');
	hm_cTable.indexOf('</tfoot>');
	hm_cTable=hm_cTable.substring(hm_cTable,hm_cTable.indexOf('<tfoot>'),parseFloat(hm_cTable.indexOf('</tfoot>')+8));
	
	var myModal='<div class="clear_both"></div>'+
	'	<div class="maximize_modal fade hide" id="'+tableId+'_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
	'   <div class="modal-dialog">'+
	'   <div class="modal-content">'+  
	'   <div class="maximize_header">'+
	'    	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
	'		<h5 class="modal-title">Maximize '+tableId+'</h4>'+
	'	</div>'+
	'	<div class="maximize_body">'+
	'		<div class="container-fluid">'+
	'       <table id="'+tableId+'_cTable" class="display">'+
	'       </table>'+
	'       </div>'+
	'   </div>'+
	'	<div class="modal-footer">'+
	'    	<button type="button" id="close" class="btn btn-primary" data-dismiss="modal"> Ok </button>'+
	'	</div>'+
	'   </div>'+
	'	</div>'+
	'</div>'

	$('#'+tableId+'_wrapper').append(myModal);
	$('#'+tableId+'_wrapper').find('#'+tableId+'_modal').find('#'+tableId+'_cTable').append(hm_cTable);
	
	return (tableId+'_cTable');
}
/* END Modal for POPUP */


<!--For enabling DataTable style featured to fit into maximize Table -->
function hmm_StyleClassID(tableId){ 
	$('#'+tableId)							/*setup bootstrap style into default table*/
		.removeClass( 'display' )
		.addClass('table table-striped table-bordered table-hover');
	
	$("#"+tableId+" thead").addClass('dataTable_thread');	/*add dataTable_thread class into table thead*/
	
	$("#"+tableId+" thead").find("th:first-child").remove();
	$("#"+tableId+" tbody").find("td:first-child").remove();
	
	$("#"+tableId+" tbody").find("td:first-child")
		.addClass('dataTable_checkbox');					/*add dataTable_checkbox class into first tbody td*/
}

<!--Start Enabling DataTable Features -->
function hmm_DataTableFeature(tableId,tableRow){ 
	
	if( tableRow != null && tableRow!= '' && tableRow>=5 ){
		hm_noOfRow=tableRow;
	}else {
		hm_noOfRow=5;
	}
		/*****************************
		l - length changing input control
		f - filtering input
		t - The table!
		i - Table information summary
		p - pagination control
		r - processing display element
		C - toggle column display element
		T - TableTools display element
		******************************/
	var Ttable;                     //define variable for paren-table that have dataTable features (Parent Master Feature)
	Ttable = $('#'+tableId).dataTable(
		{
		"processing": true,		//Enable or disable the 'processing' indicator when table processing	
        //"scrollX": true,		//enable table body scrolling scrolling in horizontal direction 
       	//"scrollY": "202px",		//enable table body scrolling in the vertical direction
		"scrollCollapse": true,
        "autoWidth": false,		//Disable column autowidth features, when table have null record.
		'iDisplayLength': hm_noOfRow,	//define number of row display in tables
		"aLengthMenu": [ hm_noOfRow, 10, 25, 50],	//Change the options in the page length select list.
		
		"dom": 'f<"clear_both"> t<"clear"> pil ',	//Enable tableprocessing, toolbar, Togglecolumn, column reordering functionality Via Dom object
        "orderClasses": false,
        renderer: "bootstrap",
        "searching": true,	//enable the search bar
        destroy: true,	//Destroy existing table and recreate table with this feature
	});	
}
<!--End Enable DataTable Features -->



