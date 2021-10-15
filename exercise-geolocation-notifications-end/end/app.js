/**
 * Geolocation & Notifications API
 */

// ----
// Notifications
// ----

const hasPermisson = async () => {
  const permission = await Notification.requestPermission();
  return permission === 'granted';
};

const showNotification = async ({ title, body, icon }) => {
  // check if we have notification permission
  const hasPermission = await hasPermisson();

  // if we have no permission, ask for permission
  if (!hasPermission) {
    Notification.requestPermission();
    showNotification();
  } else {
    /* eslint-disable no-unused-vars */
    const notification = new Notification(title, { body, icon });
  }
};

// get the notification button
const notificationButton = document.getElementById('showNotification');
notificationButton.addEventListener('click', () => {
  showNotification({ title: 'Web Api Examples', body: 'I show you a demo notification!', icon: './images/anon-logo.png' });
});

// ----
// Geolocation
// ----

const getErrorByCode = (errorCode) => {
  const errorArray = [
    "User didn't allow the location tracking.",
    "Device can't get data.",
    'Location tracking timed out.',
  ];
  return errorArray[errorCode - 1];
};

const getLocation = () => new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({ lat: position.coords.latitude, lon: position.coords.longitude });
      },
      (error) => {
        reject(new Error(getErrorByCode(error.code)));
      },
    );
  } else reject(new Error('No location was found.'));
});

// add location and append to our DOM
getLocation().then((myLocation) => {
  // get latitude and longitude
  const latitude = document.getElementById('latitude');
  const longitude = document.getElementById('longitude');
  latitude.innerHTML = `My latitude is ${myLocation.lat}`;
  longitude.innerHTML = `My longitude is ${myLocation.lon}`;
});