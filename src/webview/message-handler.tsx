import type { MutableRefObject } from 'react';
import type { WebView, WebViewMessageEvent } from 'react-native-webview';
import { handleMethodCall } from './method-call-handler';

function observePromiseResult(
  webViewRef: MutableRefObject<WebView>,
  sequence: number,
  prom: Promise<any>
) {
  prom
    .then((result: any) => {
      console.log(`Promise ${sequence} resolved!`, result);
      webViewRef.current.injectJavaScript(
        `window.nativeMethodCallResult(${sequence}, true ${
          result ? ',' + JSON.stringify(result) : ''
        });`
      );
    })
    .catch((exception: any) => {
      console.error(`Promise ${sequence} failed!`, exception);
      webViewRef.current.injectJavaScript(
        `window.nativeMethodCallResult(${sequence}, false ${
          exception ? ',' + JSON.stringify(exception) : ''
        });`
      );
    });
}

export function handleWebviewMessage(
  webViewRef: MutableRefObject<any>,
  event: WebViewMessageEvent
) {
  const stringData = event?.nativeEvent?.data;

  const data = JSON.parse(stringData);
  if (data?.method && data?.sequence) {
    const promise = handleMethodCall(data.method, data.arguments);
    observePromiseResult(webViewRef, data.sequence, promise);
  } else {
    console.log(`Ignoring unknown message: $stringData`);
  }
}

export default { handleWebviewMessage };
