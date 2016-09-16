function getUUID() {
    var appName = NSBundle.mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
    var strApplicationUUID = SSKeychain.passwordForServiceAccount(appName, "incoding");
    if (!strApplicationUUID){
        strApplicationUUID = UIDevice.currentDevice.identifierForVendor.UUIDString;
        SSKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
    }

    return strApplicationUUID;
}
exports.getUUID = getUUID;
