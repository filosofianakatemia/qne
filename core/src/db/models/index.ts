// ES6-style imports
import * as config from '../../../config/config.json';
import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';

// Import model specification from its own definition file.
// I'll explain how to define a model in Typescript in the next section.
import * as Action from './action';
import * as Organization from './organization';
import * as User from './user';
type Model = Sequelize.Model;
interface DbConnection {
  User: Model;
}
var db = {};

// I use the node-config package to manage the DB config you can choose
// to stick with the original version. And I removed environment variable
// support because I don't need it.
/*var dbConfig = config.get('database');
var sequelize = new Sequelize(
    dbConfig['database'],
    dbConfig['username'],
    dbConfig['password'],
    dbConfig
); */

var sequelize = new Sequelize('database_development', 'root', null, {
    dialect: 'sqlite',
    storage: './db.development.sqlite'
});

var basename  = path.basename(module.filename);
fs
.readdirSync(__dirname)
.filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
    db[model['name']] = model;
});

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;

export default <DbConnection>db;
