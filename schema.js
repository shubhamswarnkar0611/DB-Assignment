const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "db_assignment",
  "root",
  "Shubham@123",
  { dialect: "mysql", host: "localhost" }
);

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desc: {
      type: Sequelize.TEXT,
    },
    SKU: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    modified_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
  },
  {
    tableName: "product",
    timestamps: false,
  }
);

const ProductCategory = sequelize.define(
  "ProductCategory",
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desc: {
      type: Sequelize.TEXT,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    modified_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
  },
  {
    tableName: "product_category",
    timestamps: false,
  }
);

const ProductInventory = sequelize.define(
  "ProductInventory",
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    modified_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW(),
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
  },
  {
    tableName: "product_inventory",
    timestamps: false,
  }
);

const Discount = sequelize.define(
  "Discount",
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desc: {
      type: Sequelize.TEXT,
    },
    discount_percent: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    modified_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW(),
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
  },
  {
    tableName: "discount",
    timestamps: false,
  }
);

// associations

ProductCategory.hasMany(Product);
Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });

ProductInventory.hasOne(Product);
Product.belongsTo(ProductInventory, { foreignKey: 'inventory_id' });

Discount.hasMany(Product)
Product.belongsTo(Discount, { foreignKey: 'discount_id' });




module.exports = {
  sequelize,
  Product,
  ProductCategory,
  ProductInventory,
  Discount,
};
