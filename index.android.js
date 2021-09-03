var platform = require('@nativescript/core/platform');

function getUUID() {
  return platform && platform.Device ? platform.Device.uuid : "";
}

exports.getUUID = getUUID;
