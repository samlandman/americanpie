module.exports = (old_time) => {
  inputDate = new Date(old_time)
  timeAgo = Math.floor(((new Date() - inputDate)/1000))
  console.log(timeAgo)
  console.log(inputDate)
  console.log(`A Long Long Time Ago`);
  return timeAgo;
}