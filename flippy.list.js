// JavaScript Document
new WOW().init();

jQuery(document).ready(function() {
  "use strict";	
  jQuery("time.timeago").timeago();
});


$(window).load(function(){
	"use strict";
    $('.content-expand').hide();
    $('.div-expand').on('click', function(e) {
		e.preventDefault();
        var contentcontainerid= getContentid($(this).attr('id'));
        
        $('#' + contentcontainerid).slideToggle('slow');
        
        function getContentid(expandcommandid) {
            var arrayattr= expandcommandid.split('-');
            return 'content-expand-' + arrayattr[arrayattr.length -1];
        }
    });
});


$(function() {
	"use strict";	
$(".btn-vote").click(function()
{
var id = $(this).data("id");
var name = $(this).data("name");
var dataString = 'id='+ id + '&list_id=' + list_id ;
var parent = $(this);

if (name=='up')
{
$(this).fadeIn(200).html;
$.ajax({
type: "POST",
url: "vote_up.php",
data: dataString,
cache: false,
dataType:'json',
   success:function(json){
       parent.parent().find(".v-up").html(json.msgup),
       parent.parent().parent().find(".v-down").html(json.msgdown),
	   parent.parent().parent().parent().find(".txt-score").html(json.msgscore);
    }
});
}
else
{
$(this).fadeIn(200).html;
$.ajax({
type: "POST",
url: "vote_down.php",
data: dataString,
cache: false,

dataType:'json',
   success:function(json){
       parent.parent().find(".v-down").html(json.msgdown),
	   parent.parent().parent().find(".v-up").html(json.msgup);
	   parent.parent().parent().parent().find(".txt-score").html(json.msgscore);
    }
});
}
return false;
});
});

$('body').on('hidden.bs.modal', '.modal', function () {
  "use strict";	
  $(this).removeData('bs.modal');
});

$("#prviewWindow").on('hidden.bs.modal', function () {
   "use strict";	
   $("#prviewWindow iframe").attr("src", $("#prviewWindow iframe").attr("src"));
});

function popup(e){ "use strict"; var t=700;var n=400;var r=(screen.width-t)/2;var i=(screen.height-n)/2;var s="width="+t+", height="+n;s+=", top="+i+", left="+r;s+=", directories=no";s+=", location=no";s+=", menubar=no";s+=", resizable=no";s+=", scrollbars=no";s+=", status=no";s+=", toolbar=no";newwin=window.open(e,"windowname5",s);if(window.focus){newwin.focus()}return false}