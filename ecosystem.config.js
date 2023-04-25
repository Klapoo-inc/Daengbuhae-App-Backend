module.exports = {
  apps: [{
  name: 'Klapoo_backend',
  script: './App.js',
  instances: 1,
  exec_mode: 'cluster',
  autorestart: true,
  }]
}
