export const baseUrl = (target, option) => {
  return !option
    ? `http://prac-app.vigilantioe.com:8081/render/?target=${target}&format=json`
    : `http://prac-app.vigilantioe.com:8081/render/?target=${target}&format=json` +
        option;
};
