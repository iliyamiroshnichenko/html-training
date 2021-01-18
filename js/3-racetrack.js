const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = (horse) => {
  return new Promise((resolve) => {
    const time = getRandom(1000, 2500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};

// run(horses[0]).then((result) => {
//   console.log(result);
// });

console.log(
  `%c Заезд начался, ставки не принимаются`,
  "color: brown; font-size: 16px;"
);
const promises = horses.map(run);
// console.log(promises);

Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c 🎉 Победил ${horse}, финишировав за ${time} времени`,
    "color: green; font-size: 16px;"
  );
});

Promise.all(promises)
  .then((results) => {
    console.log(
      "%c 📝 Заезд окончен, принимаются ставки.",
      "color: blue; font-size: 16px;"
    );
    console.table(results);
  })
  .catch(console.log);
