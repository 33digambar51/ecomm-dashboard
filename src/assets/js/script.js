// Custom script for this project

// Import Jquery
import $ from 'jquery';

$(document).ready(function () {
	$("#head-nav ul li a").click(function () {
		//alert("Hello jQ");
		$("#head-nav ul li a").removeClass("active");
		$(this).addClass("active");
	});
});

// Below script fro Header search
$(document).ready(function(){
	$("#hide-show").click(function(){
	  //alert("Clicked here");
	  /*$(".s-box").toggle();*/
	  $(".search-box").animate({
		width: 'toggle',
		right:'0px',
		transition:'all 0.8s ease'
		/*transition:'width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000)'*/
	  });
	});
  });

// Admin Area
$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
	  //alert("Hello");  
	  $('#sidebar').toggleClass('actives');
	  //$('#sidebar .sidebar-header').css({"display": "block"});
	  $('#sidebar .sidebar-header').toggleClass("intros");
	  $("#sidebar .nav-list a span").toggleClass("intro");
	});
});

// Alert message 
$(document).ready(function(){
	$(".delbd").click(function(){
		alert("Hello")
	  $('.alert').addClass('show');
	});
  });




