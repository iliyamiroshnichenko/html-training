// Метод setTimeout

const log = () => {
  console.log("Лог при вызове колбека произойдет через 3 секунды");
};

// Асинхронность кода
// console.log("before");
// setTimeout(log, 3000);
// console.log("after");

// Очистка таймаута clearTimeout()
const logger = (time) => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;

console.log(shouldCancelTimer);
if (shouldCancelTimer) {
  clearTimeout(timerId);
}
