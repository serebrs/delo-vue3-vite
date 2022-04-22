export default {
  install: (app) => {
    app.config.globalProperties.$formatDate = (date) => {
      return date.toLocaleDateString("ru-RU").split(".").reverse().join("-");
    };
  },
};
