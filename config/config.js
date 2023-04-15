const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

    const db = {};

// Define Sequelize instance and add it to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load and add the User, Post, and Comment models to the db object
db.User = require('../models/User')(sequelize, Sequelize);
db.Post = require('../models/Post')(sequelize, Sequelize);
db.Comment = require('../models/Comment')(sequelize, Sequelize);

module.exports = sequelize;
