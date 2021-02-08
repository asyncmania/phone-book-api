 module.exports = {
  development: {
    dialect: "sqlite",
    storage: "dbfiles/dev/dev.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: "dbfiles/test/test.sqlite"
  }
}

/* module.exports = {
  development: {
    username: "josiah",
    password: "josiah@1",
    database: "phone_dev_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "josiah",
    password: "josiah@1",
    database: "phone_test_db",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
 */