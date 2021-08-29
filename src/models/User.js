const { Model, DataTypes } = require("sequelize");

// const User = () => {
//   init(sequelize);
//   Model.init(
//     {
//       cargo: DataTypes.STRING,
//       cpf: DataTypes.NUMBER,
//       nome: DataTypes.STRING,
//       uf_nascimento: DataTypes.STRING,
//       salario: DataTypes.NUMBER,
//       status: DataTypes.STRING,
//     },
//     {
//       sequelize,
//     }
//   );
// };

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        cargo: DataTypes.STRING,
        cpf: DataTypes.STRING,
        nome: DataTypes.STRING,
        uf_nascimento: DataTypes.STRING,
        salario: DataTypes.STRING,
        status: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = User;
