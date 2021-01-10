// Метод setInterval()
const logger = (time) => {
  console.log(`Лог каждые ${time}ms - ${Date.now()}`);
};

// setInterval(logger, 3000, 3000);

//Очитска интервала с clearInterval()
let subscriptionCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
  if (subscriptionCounter === 3 || hasSubscribed) {
    console.log("Останавливаем интервал");
    clearInterval(intervalId);
    return;
  }

  console.log("Subscribe, please!");
  //   hasSubscribed = true;
  subscriptionCounter += 1;
}, 1000);
