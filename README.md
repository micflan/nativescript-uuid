# NativeScript iOS UUID

This is a plugin for iOS that allows you to get a UUID (Universal Unique Identifier) for a device.
Inspired from http://stackoverflow.com/questions/21878560/how-to-preserve-identifierforvendor-in-ios-after-uninstalling-ios-app-on-device

## Installation
`tns plugin add nativescript-ios-uuid`

## Usage
```
var plugin = require("nativescript-ios-uuid");
var uuid = plugin.getUUID();
console.log("The device UUID is " + uuid);
```
