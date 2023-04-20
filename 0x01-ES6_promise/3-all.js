import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((results) => {
    const { firstName } = results[1];
    const { lastName } = results[1];
    const { body } = results[0];
    console.log(body, firstName, lastName);
  }, () => {
    console.log('Signup system offline');
  });
}
