module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "test",
      user: "postgres",
      password: "root"
    },
    pool: {
      max: 10,
      min: 2
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "test",
      user: "postgres",
      password: "root"
    },
    pool: {
      max: 10,
      min: 2
    }
  }
};
