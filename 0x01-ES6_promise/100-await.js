import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto() || null;
  const user = await createUser() || null;

  const newObj = {
    photo,
    user,
  };
  return newObj;
}
