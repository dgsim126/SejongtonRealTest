const { Sequelize } = require('sequelize');

const db = {}
const sequelize = new Sequelize('sejongton', 'user', '1234', {
  host: 'db',
  port: 3308,
  dialect: 'mariadb', // MariaDB 사용
  logging: false // 쿼리 로깅 비활성화
});

// db 객체에 각 모델 및 Sequelize 설정 추가
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;