var tabs = [];
var tree = {};
jQuery(document).ready(function($){
  chrome.tabs.query({}, function(tab_array) { 
    "use strict"; 
    var list = '', tab, i, parent_tab_id, num_tabs;
    num_tabs = tab_array.length;
    for (i=0; i < num_tabs; i++){
      tab = tab_array[i];   
      // tabs[tab.openerTabId] = {tab_id: tab.id, parent_id: tab.openerTabId, favicon: tab.favIconUrl, name:tab.title, children: "" };
    	$("#tablist").append('<li><div>Tab Title:'+tab.title+'</div><div>Parent Tab ID:'+tab.openerTabId+'</div><img src="'+tab.favIconUrl+'" width="16" height="16" /></li>')
    }
  });

});
