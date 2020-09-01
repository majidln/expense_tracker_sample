// network delay simulator
const apiDelay = 2000;

// this function simulate get from api
export function apiGet(file) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: file
      });
    }, apiDelay);
  });
}

// this function simulate post from api
export function apiPost(params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: params
      });
    }, apiDelay);
  });
}
