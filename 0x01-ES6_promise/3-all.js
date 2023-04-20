import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();

  const arr = [promise1, promise2];
  const promise3 = Promise.all(arr);

  promise3.then((results) => {
    const { firstName } = results[0];
    const { lastName } = results[0];
    const { body } = results[1];
    console.log(body, firstName, lastName);
  });

  return promise3;
}
