/**
 * Geolocation & Notifications API
 */

// ----
// Notifications
// ----

// TODO: Write function that checks Notification API permissions
const hasPermisson = async () => {
  const permission = await Notification.requestPermission();
  return permission === "granted";
};
// TODO: Write a function that will show a notification

// get the notification button
const notificationButton = document.getElementById("showNotification");
notificationButton.addEventListener("click", () => {
  // TODO: Show notification right here!
});

// ----
// Geolocation
// ----

// TODO: Write function that will catch error codes
// TIP: check documentation of MDN to see what kind of error codes there are

// TODO: Write a function that will get your location

// TODO: get location and append to the DOM
