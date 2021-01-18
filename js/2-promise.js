const fetchUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        const user = { name: userName, age: 32, posts: 41 };
        resolve(user);
      }
      const error = "Произошла ошибка :(";
      reject(error);
    }, 1000);
  });
};

// fetchUser("Mango").then(onFetchUserSuccess).catch(onFetchUserError);

function onFetchUserSuccess(user) {
  console.log(user);
}

function onFetchUserError(error) {
  console.log(`%c${error}`, "color: red; font-size: 16px;");
}

const fetchToDo = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
    res.json()
  );
};

fetchToDo(2)
  .then((todo) => console.log(todo))
  .catch(console.log);

const makepromise = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};
// makepromise(4000).then(console.log);
// makepromise(2000).then(console.log);
// makepromise(1000).then(console.log);
// makepromise(5000).then(console.log);
