let birthMonth = prompt('What month were you born? (NUMBERS ONLY ex: January-1, February-2...) ')
let birthYear = prompt('What year were you born?')
const secsInMonth = 60*60*24*30 // 60 seconds in minute, 60 minutes in hour, 24 hours in day, 30 days in month
let currentYear = new Date().getFullYear()
let currentMonth = (new Date().getMonth()) + 1
let monthsAlive = (12 * (currentYear - birthYear)) + currentMonth - birthMonth
let ageInSecs = monthsAlive * secsInMonth
document.write(` You have been alive for approximately <strong>${ageInSecs}</strong> seconds`)

//does not account for null input
// not stylized