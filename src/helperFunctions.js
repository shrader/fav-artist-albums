/**
 * date comes in format "2012-01-01T08:00:00Z" (year-month-day-Time)
 * split on "T or , or space"
 * convert to month-day-year and return
 */

function formatDate(dateString) {
  const regex = /(T|,| )+/;
  const formattedDateArr = dateString.split(regex);
  const [year, month, day] = formattedDateArr[0].split('-');
  return `${month}-${day}-${year}`;
}

export default formatDate;
