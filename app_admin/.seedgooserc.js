module.exports = {
  modelBaseDirectory: 'app_admin/models',
  // modelBaseDirectory: 'app_admin',
  models: ['*.json','!db.js'],
  data: 'data',
  db: 'mongodb://localhost:27017/travlr'
};
