var device = require('platform');

function getUUID() {
  return device ? device.uuid : "";
}