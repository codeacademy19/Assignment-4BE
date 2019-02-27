

module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    FormName: DataTypes.STRING,
    Attributes: DataTypes.STRING,
  }, {});
  Form.generate = (FormName, Attributes) => Form.findOrCreate({
    where: {
      FormName, Attributes,
    },
  }).spread((formResult, created) => {
    if (created) {
      return 'created successfully';
    }

    return 'Already exists';
  });
  Form.getAttributesOfForm = FormName => Form.findAll({ where: { FormName } });
  Form.getAllForms = () => Form.findAll();
  return Form;
};
