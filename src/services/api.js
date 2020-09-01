// network delay simulator
const apiDelay = 2000;

export function apiGet(file) {
  // this function simulate get from api
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: file
      });
    }, apiDelay);
  });
}
