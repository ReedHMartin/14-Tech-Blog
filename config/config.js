const Sequelize = require('sequelize');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001
    });

    const db = {};

// Define Sequelize instance and add it to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load and add the User, Post, and Comment models to the db object
db.User = require('../models/User')(sequelize, Sequelize);
db.Post = require('../models/Post')(sequelize, Sequelize);
db.Comment = require('../models/Comment')(sequelize, Sequelize);

// Define associations between models
db.User.hasMany(db.Post, {
  foreignKey: 'user_id'
});

db.Post.belongsTo(db.User, {
  foreignKey: 'user_id'
});

db.Post.hasMany(db.Comment, {
  foreignKey: 'post_id'
});

db.Comment.belongsTo(db.Post, {
  foreignKey: 'post_id'
});

db.User.hasMany(db.Comment, {
  foreignKey: 'user_id'
});

db.Comment.belongsTo(db.User, {
  foreignKey: 'user_id'
});

// Create a new SequelizeStore and add it to the sess object
const sess = {
  secret: process.env.SESSION_SECRET,
  store: new SequelizeStore({
    db: sequelize,
    table: 'Session'
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2, // expires in 2 hours
    httpOnly: true
  }
};


// Add SESSION_SECRET to the sess object
sess.secret = process.env.SESSION_SECRET;

module.exports = sequelize;
