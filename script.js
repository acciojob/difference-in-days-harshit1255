var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(date1);
const secondDate = new Date(dat2);

const diffDays = Math.round((firstDate - secondDate) / oneDay);
	if(diffDays<0)
		return -1;
	return diffDays;	
}

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
