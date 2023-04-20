import handleResponseFromAPI from "./2-then";


const promise = Promise.resolve();
let res = handleResponseFromAPI(promise);

console.log(res);
