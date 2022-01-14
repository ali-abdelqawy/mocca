export const getCurrent = () => {
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hour = date.getHours();

  let year = date.getFullYear();
  let month = date.getMonth(); // beware: January = 0; February = 1, etc.
  let day = date.getDate();
};
