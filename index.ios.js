function getUUID() {
    var appName = NSBundle.mainBundle().infoDictionary.objectForKey(kCFBundleNameKey);
    var strApplicationUUID = SSKeychain.passwordForService(appName, "incoding");
    if (!strApplicationUUID){
        strApplicationUUID = UIDevice.currentDevice().identifierForVendor.UUIDString;
        SSKeychain().setPassword(strApplicationUUID, appName, "incoding");
    }

    return strApplicationUUID;
}
exports.getUUID = getUUID;
