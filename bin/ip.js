#!/usr/bin/env node

var http = require('http');
var os = require('os');
var colors = require('colors');

http.request({
  host: 'ifconfig.me',
  path: '/ip',
}, function (res) {
  res.on('data', function (chunk) {
    console.log('External IP Addr: ' + colors.yellow(chunk));
  });
}).end();

var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (id) {
  var iface = ifaces[id];
  iface.forEach(function (conn) {
    if (conn.family === 'IPv4' && !conn.internal) {
      console.log('Internal IP Addr: ' + colors.green(conn.address));
    }
  });
});

