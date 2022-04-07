const CustomFetch = ((time, task) => {
  let condition = true;
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
    if (condition) {
      resolve(task);
    } else {
      reject('error');
    }
  },time)})})

  export default CustomFetch