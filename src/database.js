const Sequelize = require('sequelize');

const database = new Sequelize('all4sport', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

    define: {timestamps: false},

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const db = {};

db.Sequelize = Sequelize;
db.database = database;

db.produits = require('../src/models/produit.model.js')(database, Sequelize);
db.photos = require('../src/models/photo.model.js')(database, Sequelize);
db.etageres = require('../src/models/etagere.model.js')(database, Sequelize);
db.modules = require('../src/models/module.model.js')(database, Sequelize);
db.rangees = require('../src/models/rangee.model.js')(database, Sequelize);
db.sections = require('../src/models/section.model.js')(database, Sequelize);
db.stocks = require('../src/models/stock.model.js')(database, Sequelize);
db.batiments = require('../src/models/batiment.model.js')(database, Sequelize);
db.users = require('../src/models/user.model.js')(database, Sequelize);
db.fournisseurs = require('../src/models/fournisseur.model.js')(database, Sequelize);
db.rayons = require('../src/models/rayon.model.js')(database, Sequelize);

//==================================
//==================================
//==================================

async function createAllKeys(db){
  db.database.query('ALTER TABLE all4sport.`modules` ADD INDEX `module_idx` (`fk_ba` ASC) VISIBLE; ', {}).then(() =>{
    db.database.query('ALTER TABLE `all4sport`.`modules` ADD CONSTRAINT `module` FOREIGN KEY (`fk_ba`) REFERENCES `all4sport`.`batiments` (`ba_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {})
  })
  db.database.query('ALTER TABLE `all4sport`.`rangees` ADD INDEX `rangee_idx` (`fk_ba` ASC, `fk_mo` ASC) VISIBLE; ', {}).then(() =>{
    db.database.query('ALTER TABLE `all4sport`.`rangees` ADD CONSTRAINT `rangee` FOREIGN KEY (`fk_mo` , `fk_ba`) REFERENCES `all4sport`.`modules` (`mo_id` , `fk_ba`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {})
  })
  db.database.query('ALTER TABLE `all4sport`.`sections` ADD INDEX `section_idx` (`fk_ba` ASC, `fk_mo` ASC, `fk_ra` ASC) VISIBLE; ', {}).then(() =>{
    db.database.query('ALTER TABLE `all4sport`.`sections` ADD CONSTRAINT `section` FOREIGN KEY (`fk_ba` , `fk_mo` , `fk_ra`) REFERENCES `all4sport`.`rangees` (`fk_ba` , `fk_mo` , `ra_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {})
  })
  db.database.query('ALTER TABLE `all4sport`.`etageres` ADD INDEX `etagere_idx` (`fk_ba` ASC, `fk_mo` ASC, `fk_ra` ASC, `fk_se` ASC) VISIBLE; ', {}).then(() =>{
    db.database.query('ALTER TABLE `all4sport`.`etageres` ADD CONSTRAINT `etagere` FOREIGN KEY (`fk_ba` , `fk_mo` , `fk_ra` , `fk_se`) REFERENCES `all4sport`.`sections` (`fk_ba` , `fk_mo` , `fk_ra` , `se_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {})
  })
  db.database.query('ALTER TABLE `all4sport`.`produits` ADD INDEX `produit_idx` (`fk_ba` ASC, `fk_mo` ASC, `fk_ra` ASC, `fk_se` ASC, `fk_et` ASC) VISIBLE; ', {}).then(() =>{
    db.database.query('ALTER TABLE `all4sport`.`produits` ADD CONSTRAINT `produit` FOREIGN KEY (`fk_ba` , `fk_mo` , `fk_ra` , `fk_se` , `fk_et`) REFERENCES `all4sport`.`etageres` (`fk_ba` , `fk_mo` , `fk_ra` , `fk_se` , `et_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {})
  })
  db.database.query('ALTER TABLE `all4sport`.`stocks` ADD INDEX `stock_idx` (`fk_ba` ASC, `fk_mo` ASC, `fk_ra` ASC, `fk_se` ASC, `fk_et` ASC, `fk_pr` ASC) VISIBLE; ', {}).then(() =>{
    db.database.query('ALTER TABLE `all4sport`.`stocks` ADD CONSTRAINT `stock` FOREIGN KEY (`fk_ba` , `fk_mo` , `fk_ra` , `fk_se` , `fk_et` , `fk_pr`) REFERENCES `all4sport`.`produits` (`fk_ba` , `fk_mo` , `fk_ra` , `fk_se` , `fk_et` , `pr_reference`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {})
  })
  db.database.query('ALTER TABLE `all4sport`.`produits` ADD CONSTRAINT `prfournisseur` FOREIGN KEY (`fk_fournisseur`) REFERENCES `all4sport`.`fournisseurs` (`fo_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {});
  db.database.query('ALTER TABLE `all4sport`.`produits` ADD CONSTRAINT `prrayon` FOREIGN KEY (`fk_rayon`) REFERENCES `all4sport`.`rayons` (`rayon_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {});
  db.database.query('ALTER TABLE `all4sport`.`photos` ADD CONSTRAINT `photopr` FOREIGN KEY (`fk_pr`) REFERENCES `all4sport`.`produits` (`pr_reference`) ON DELETE NO ACTION ON UPDATE NO ACTION;', {});
}

module.exports = {db, createAllKeys};