// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function nowClock() {
  const currentTime = new Date();

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour12: false,
  });
  const formattedTimeAMPM = currentTime.toLocaleTimeString("en-US");

  console.log("Current Time: ", currentTime);

  // Format 1: HH:MM:SS
  console.log("Current Time in 24-hour format: ", formattedTime);

  // Format 2: HH:MM:SS AM/PM
  console.log("Current Time in 12-hour format: ", formattedTimeAMPM);
}
// Update the clock every second
setInterval(nowClock, 1000);

// Intial update
nowClock();
