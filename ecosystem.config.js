module.exports = {
  apps: [{
  name: 'Klapoo_backend',
  script: './App.js',
  instances: 0,
  exec_mode: 'cluster',
  autorestart: true,
  }]
}
