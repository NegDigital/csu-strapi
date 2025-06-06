module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USER', 'username'),
      password: env('DATABASE_PWD', 'password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
