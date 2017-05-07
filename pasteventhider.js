//use class names to hide elements
	//e.g. add class 'may52017' to an element to hide that element once May 5th, 2017 is in the past
	//useful for hiding events or event containers once empty
	//class names use this format: mondyyyy (e.g. may12017 for May 1, 2017) or monddyyyy (e.g. may102017 for May 10th 2017)

//set var today to today's date & time
var today = new Date();

//get year
var thisYear = today.getFullYear();	//correct year number -> yyyy

//get month orig 0-11, so +1 == 1-12
var thisMonth = today.getMonth() + 1; //correct month number - m or mm

//get day 1-31
var thisDay = today.getDate();	//correct day number - d or dd

//build array of month names, added 0 to match real month number to human number stating at 1 for jan
var months = [0, 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

//year loop
for (var y=0;y<=2;y++){ //loops forward two years - y<=2

	var tempYear = thisYear + y;
	
	//month loop
	for (var m=1; m<=12;m++) { 
		
		//day loop
		for (var d=1; d<=31;d++){ 
			
			eval('var ' + months[m] + d + tempYear + ' = new Date(\'' + tempYear + '-' + m + '-' + d + ' 23:59:00\'\)\;');
			eval('if(today > ' + months[m] + d + tempYear + '\)\{ \$\(\'.' + months[m] + d + tempYear + '\'\).hide\(\)\;\}')
			
		}
	}
}	