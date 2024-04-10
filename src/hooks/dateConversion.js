function dateConversion(date) {
  let cleanedDate = date.replace(/\[UTC\]$/, "");
  let utcDate = new Date(cleanedDate);
  if (isNaN(utcDate)) {
    console.error("Invalid Date:", date);
    return "Invalid Date";
  }
  let sgTimeString = utcDate.toLocaleString("en-US", {
    timeZone: "Asia/Singapore",
  });
  return sgTimeString.split(",")[0];
}

export default dateConversion;
