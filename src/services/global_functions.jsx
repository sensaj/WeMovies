export function convertMinutesToHours(minutes) {
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;
  return hours + " hours " + remainingMinutes + " minutes";
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
