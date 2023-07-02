export function getMMYY(timestamp: number): string {
	const date = new Date(timestamp);
	// `getMonth` returns a zero-based month, so add 1 to get the correct month.
	let month = (date.getMonth() + 1).toString();
	let year = date.getFullYear().toString();
  
	// If the month is a single digit, add a leading zero.
	if (month.length === 1) {
	  month = '0' + month;
	}
	// Get the last two digits of the year.
	year = year.slice(-2);

	return month + '/' + year;
}