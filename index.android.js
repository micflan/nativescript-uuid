var device = require('platform');

function getUUID() {
  return device ? device.uuid : "";
}

exports.getUUID = getUUID;