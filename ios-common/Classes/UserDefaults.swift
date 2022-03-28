//
//  UserDefaults.swift
//
//  Created by Tiago Daniel Jacobs on 11/03/22.
//

extension UserDefaults {
    // Broadcaster -> UI APP
    @objc open dynamic var broadcastStarted: String {
        return string(forKey: BBBSharedData.SharedData.broadcastStarted) ?? ""
    }
    
    // Broadcaster -> UI APP
    @objc open dynamic var broadcastPaused: String {
        return string(forKey: BBBSharedData.SharedData.broadcastPaused) ?? ""
    }
    
    // Broadcaster -> UI APP
    @objc open dynamic var broadcastResumed: String {
        return string(forKey: BBBSharedData.SharedData.broadcastResumed) ?? ""
    }
    
    // Broadcaster -> UI APP
    @objc open dynamic var broadcastFinished: String {
        return string(forKey: BBBSharedData.SharedData.broadcastFinished) ?? ""
    }
    
    // UI APP -> Broadcaster
    @objc open dynamic var createScreenShareOffer: String {
        return string(forKey: BBBSharedData.SharedData.createScreenShareOffer) ?? ""
    }
    
    // Broadcaster -> UI APP
    @objc open dynamic var screenShareOfferCreated: String {
        return string(forKey: BBBSharedData.SharedData.createScreenShareOffer) ?? ""
    }
    
    // UI APP -> Broadcaster
    @objc open dynamic var setScreenShareRemoteSDP: String {
        return string(forKey: BBBSharedData.SharedData.setScreenShareRemoteSDP) ?? ""
    }
    
    // Broadcaster -> UI APP
    @objc open dynamic var setScreenShareRemoteSDPCompleted: String {
        return string(forKey: BBBSharedData.SharedData.setScreenShareRemoteSDPCompleted) ?? ""
    }
    
    // Broadcaster -> UI APP
    @objc open dynamic var onScreenShareLocalIceCandidate: String {
        return string(forKey: BBBSharedData.SharedData.onScreenShareLocalIceCandidate) ?? ""
    }
    
    // Broadcaster -> UI APP
    @objc open dynamic var onScreenShareSignalingStateChange: String {
        return string(forKey: BBBSharedData.SharedData.onScreenShareSignalingStateChange) ?? ""
    }

}
