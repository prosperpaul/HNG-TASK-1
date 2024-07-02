// document.addEventListener("DOMContentLoaded", function () {
//   // Function to set current UTC time
//   function setCurrentTime() {
//     const currentTimeElement = document.querySelector(
//       '[data-testid="currentTimeUTC"]'
//     );
//     const currentTime = new Date().toUTCString();
//     currentTimeElement.textContent = `Current Time (UTC): ${currentTime}`;
//   }

//   // Function to set current day of the week
//   function setCurrentDay() {
//     const days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     const currentDayElement = document.querySelector(
//       '[data-testid="currentDay"]'
//     );
//     const currentDayIndex = new Date().getDay();
//     const currentDay = days[currentDayIndex];
//     currentDayElement.textContent = `Current Day: ${currentDay}`;
//   }

//   // Function to set Slack Display Name and Email
//   function setSlackInfo() {
//     document.querySelector('[data-testid="slackDisplayName"]').textContent =
//       "Prosperity";
//     document.querySelector('[data-testid="slackEmail"]').textContent =
//       "amakapaul4cbn@gmail.com";
//   }

//   // Ensure links open in a new tab
//   function setLinkTargets() {
//     document
//       .querySelector('[data-testid="hngLink"]')
//       .setAttribute("target", "_blank");
//     document
//       .querySelector('[data-testid="keywordLink"]')
//       .setAttribute("target", "_blank");
//     document
//       .querySelector('[data-testid="scrapeanywebLink"]')
//       .setAttribute("target", "_blank");
//   }

//   // Initialize all functions
//   setCurrentTime();
//   setCurrentDay();
//   setSlackInfo();
//   setLinkTargets();

//   // Update time every second
//   setInterval(setCurrentTime, 1000);
// });

document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  const updateDateTime = () => {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    currentTimeUTC.textContent = now.toUTCString().split(" ")[4]; // Get time in HH:MM:SS format
    currentDay.textContent = days[now.getUTCDay()]; // Get day of the week
  };

  updateDateTime();
  setInterval(updateDateTime, 1000); // Update every second
});
