#!/usr/bin/env node

var os = require('os');
var colors = require('colors');

var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (id) {
  var iface = ifaces[id];
  iface.forEach(function (conn) {
    if (conn.family === 'IPv4') {
      if (conn.internal) {
        console.log('Internal IP Addr: ' + colors.green(conn.address));
      } else {
        console.log('External IP Addr: ' + colors.yellow(conn.address));
      }
    }
  });
});

