const env = {
  database: 'customer_data',
  username: 'mysqluser',
  password: 'mysqldatabase',
  host: 'mysqldb.cekdfczubt3l.us-east-2.rds.amazonaws.com',
  port: '3306',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;
