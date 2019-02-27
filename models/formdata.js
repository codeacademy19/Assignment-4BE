

module.exports = (sequelize, DataTypes) => {
  const FormData = sequelize.define('FormData', {
    FormName: DataTypes.STRING,
    Attributes: DataTypes.JSONB,
  }, {});
  FormData.generate = (FormName, Attributes) => FormData.findOrCreate({
    where: {
      FormName, Attributes,
    },
  }).spread((formResult, created) => {
    if (created) {
      return 'created successfully';
    }

    return 'Already exists';
  });
  FormData.getResponsesOfForm = FormName => FormData.findAll({ where: { FormName } });
  return FormData;
};
