const notification = document.querySelectorAll(".notification");
const selectNotification = Array.from(notification).slice(0, 3);
const markAllBtn = document.getElementById("mark-all");
const notificationCounter = document.getElementById("notification-counter");
let counterNumber = 3;

function defaultNotifications() {
  selectNotification.forEach((selectNotification) => {
    selectNotification.classList.add("notification-active");
  });
}

defaultNotifications();

markAllBtn.addEventListener("click", () => {
  selectNotification.forEach((selectNotification) => {
    selectNotification.classList.remove("notification-active");
    counterZero();
  });
});

function counter() {
  selectNotification.forEach((selectNotification) => {
    selectNotification.addEventListener("click", () => {
      if (counterNumber > 0) {
        counterNumber--;
        notificationCounter.innerText = counterNumber;
        selectNotification.classList.remove("notification-active");
      }
    });
  });
}

counter();

function counterZero() {
  notificationCounter.innerText = counterNumber;
  counterNumber = 0;
}
