class AppController {
  static getHomePage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
};

export default AppController;