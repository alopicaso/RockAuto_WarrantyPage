/*
 Copyright 2015 RockAuto, LLC
*/
var template_minmainheight,template_footer_interval;$(document).ready(function(){template_minmainheight=$("#temp_main").height();template_initialunstickfooter();template_resize();$(window).on("resize",template_resize);template_footer_interval=setInterval(function(){template_resize()},100);template_positioncomodo()});
function template_positioncomodo(){var a=$("#ra_trust_logo_div"),b=$("#comodo_final_position");a.detach();b.append(a);$("#tl_popupSC4").css("z-index","20");b.show();a.show();setInterval(function(){document.getElementById("tl_popupSC4")&&$("#tl_popupSC4").css("z-index","20")},250);setInterval(function(){document.getElementById("tl_popupSC4")&&document.getElementById("ra_trust_logo_div")&&"fixed"!==$("#temp_bottom_wrapper").css("position")&&($("#tl_popupSC4").css("top",$("#ra_trust_logo_div").offset().top-
250),$("#tl_popupSC4").css("left",$("#ra_trust_logo_div").offset().left-300))},100)}function template_managecomodopopup(){setInterval(function(){document.getElementById("tl_popupSC4")&&$("#tl_popupSC4").css("z-index","20")},250);setInterval(function(){document.getElementById("tl_popupSC4")&&document.getElementById("ra_trust_logo_div")&&$("#tl_popupSC4").css("top",$("#ra_trust_logo_div").offset().top-250)},100)}function template_InitializeComodo(){}
function template_initialunstickfooter(){var a=$("#temp_bottom_wrapper");a.detach();a.css("position","");a.css("bottom","");$("#temp_notfooter").after(a)}function template_absolutefooter(){var a=$("#temp_bottom_wrapper");a.css("position","absolute");a.css("bottom","0")}function template_fixfooter(){var a=$("#temp_bottom_wrapper");a.css("position","fixed");a.css("bottom","0")}function template_unfixfooter(){var a=$("#temp_bottom_wrapper");a.css("position","");a.css("bottom","")}
function template_resize(){var a=$(window).height();$("#temp_notfooter").height()+$("#temp_bottom_wrapper").height()>a?template_unfixfooter():template_fixfooter()}function GetDisplayHeight(a,b){var c=0;if("none"!=a.css("display")||b)c=a.outerHeight(!0);return c};
