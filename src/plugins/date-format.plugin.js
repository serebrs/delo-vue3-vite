export default {
  install: (app) => {
    app.config.globalProperties.$formatDateToRu = (date) => {
      return new Date(date).toLocaleDateString("ru-RU"); //.split(".").reverse().join("-");
    };
    app.config.globalProperties.$formatDateToIso = (date) => {
      return new Date(date).toISOString().slice(0, 10);
    };
  },
};
