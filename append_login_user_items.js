window.onload = function () {
    // 通用解决方案
    console.log("loading inject.js");
    // 在 Manifest V3 中，content_scripts 中的脚本无法直接调用 chrome.scripting.executeScript API，因为 chrome.scripting 只能在 Service Worker（或后台脚本）中使用。要在 content_scripts 中实现动态插入其他 JavaScript 文件的效果，可以通过消息传递的方式让 content_scripts 向后台脚本请求加载动态脚本。
    chrome.runtime.sendMessage({ action: "injectScript", scriptFile: "inject.js" }, (response) => {
        if (chrome.runtime.lastError) {
            console.error("Message sending failed:", chrome.runtime.lastError);
        } else {
            console.log("Message sent successfully:", response);
        }
    });

    // 下面的代码在Chrome浏览器生效，但是在edge浏览器报CSP错误
    // const script = document.createElement('script');
    // script.setAttribute('type', 'text/javaScript');
    
    // // IE
    // if (script.readyState) {
    //     script.onreadystatechange = function () {
    //         if (script.readyState == 'loaded' || script.readyState == 'complete') {
    //             script.onreadystatechange = null;
    //             console.log("IE")
    //         }
    //     };
    // } else {
    //     //其他浏览器
    //     script.onload = function () {
    //         console.log("其它浏览器")
    //     };
    // }

    // script.src = chrome.runtime.getURL('inject.js');
    // document.head.appendChild(script);
}

