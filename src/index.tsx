import { Platform, ViewStyle } from 'react-native';
import React, { useEffect, useRef } from 'react';
import BBBN_SystemBroadcastPicker from './native-components/BBBN_SystemBroadcastPicker';
import { WebView } from 'react-native-webview';
import { handleWebviewMessage } from './webview/message-handler';
import * as onScreenShareLocalIceCandidate from './events/onScreenShareLocalIceCandidate';
import * as onScreenShareSignalingStateChange from './events/onScreenShareSignalingStateChange';

type BigbluebuttonMobileSdkProps = {
  url: string;
  style: ViewStyle;
  onError?: any;
  onSuccess?: any;
};

const renderPlatformSpecificComponents = () =>
  Platform.select({
    ios: <BBBN_SystemBroadcastPicker />,
    android: null,
  });

export const BigbluebuttonMobile = ({
  url,
  style,
  onError,
  onSuccess,
}: BigbluebuttonMobileSdkProps) => {
  const webViewRef = useRef(null);

  useEffect(() => {
    onScreenShareLocalIceCandidate.setupListener(webViewRef);
    onScreenShareSignalingStateChange.setupListener(webViewRef);
  }, [webViewRef]);

  return (
    <>
      {renderPlatformSpecificComponents()}
      {
        <WebView
          ref={webViewRef}
          source={{ uri: url }}
          style={{ ...style }}
          onMessage={(msg) => handleWebviewMessage(webViewRef, msg)}
          applicationNameForUserAgent="BBBMobile"
          onLoadEnd={(content: any) => {
            /*in case of success, the property code is not defined*/
            if (typeof content.nativeEvent.code !== 'undefined') {
              onError(content);
            } else {
              onSuccess(content);
            }
          }}
        />
      }
    </>
  );
};
