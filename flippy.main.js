// JavaScript Document

new WOW().init();

$(document).ready(function()
{	
	"use strict";
    $('#topLogin').on('submit', function(e)
    {	
        e.preventDefault();
        $('#submitToplogin').attr('disabled', ''); // disable upload button
        //show uploading message
        $("#output-top-login").html('<div class="notice notice-info"><i class="fa fa-spinner fa-spin"></i> Login you on.. Please wait..</div>');
		
        $(this).ajaxSubmit({
        target: '#output-top-login',
        success:  toploginSuccess //call function after success
        });
    });

});
 
function toploginSuccess()
{	
	"use strict";  
    $('#submitToplogin').removeAttr('disabled'); //enable submit button
   
}

