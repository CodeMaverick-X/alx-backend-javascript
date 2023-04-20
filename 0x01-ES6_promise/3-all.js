import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();

  const arr = [promise1, promise2];
  return  Promise.all(arr).then((results) => {
    const { firstName } = results[0];
    const { lastName } = results[0];
    const { body } = results[1];
    console.log(body, firstName, lastName);
  });
}
