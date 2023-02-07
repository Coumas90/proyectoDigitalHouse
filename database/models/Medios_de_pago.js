module.exports = (sequelize, dataTypes) =>{
    const alias = "MedioDePago";
    const cols =
    {
        id_payment_method: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_payment_method: {
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'payment_methods',
        timestamps: false,
    };
    const PaymentMethod = sequelize.define(alias,cols,config);
    
    PaymentMethod.associate =  (models) => {
        PaymentMethod.hasMany(models.Compra,{
            as:"Compra",
            foreignkey: "id_payment_method"
        })
    }
    return PaymentMethod;
}

