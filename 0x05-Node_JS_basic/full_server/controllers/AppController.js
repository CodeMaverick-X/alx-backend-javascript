/* eslint class-methods-use-this: ["error",
{ "exceptMethods": ["getHomepage"] }] */
export default class AppController {
  getHomepage(request, resp) {
    resp.send('Hello Holberton School!');
  }
}
