// $.colorbox({href: "chrome-extension://daajdhdihbofnleppfioipmaldajbcaj/tabs.html"});
// $(document).keydown(function (e) {
//     console.log(e.which + " or Shift was pressed");
// });
$(document).bind('keydown', 'ctrl+shift+z', function(){
	$.colorbox({href: "chrome-extension://daajdhdihbofnleppfioipmaldajbcaj/tabs.html"});
});