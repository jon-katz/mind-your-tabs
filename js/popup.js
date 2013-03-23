function getTabTitle(tab_id){
	"use strict";
	var title;
	chrome.tabs.get(tab_id, function(parent_tab){			
		title = parent_tab.title;
	});
	
	return deferred.promise();
}

chrome.tabs.query({}, function(tab_array) {	
	"use strict";	
	var list = '', tab, i, parent_tab_id, num_tabs;
	num_tabs = tab_array.length;
	for (i=0; i < num_tabs; i++)
	{		
		tab = tab_array[i];
		list += '<li>' + tab.title + ": " + tab.url + " parent: ";
		parent_tab_id = tab.openerTabId;
		if (parent_tab_id === undefined)
		{
			list += 'None';
		} 
		else
		{	
			// alert(parent_tab_id);
			list += getTabTitle(parent_tab_id);	
		}  
		
		list += '</li>';		
	}
	document.getElementById("tablist").innerHTML = list;
});
