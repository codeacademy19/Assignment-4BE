

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('FormData', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    FormName: {
      type: Sequelize.STRING,
    },
    Attributes: {
      type: Sequelize.JSONB,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('FormData'),
};
