// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "injectScript") {
        console.log("Message received in background:", message);

        // 执行所需操作，例如注入脚本
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            files: ["jquery.js", message.scriptFile]
        }).then(() => {
            console.log(`${message.scriptFile} injected successfully.`);
            sendResponse({ status: "success", message: `${message.scriptFile} injected` });
        }).catch(error => {
            console.error("Script injection failed:", error);
            sendResponse({ status: "error", message: error.message });
        });

        // 返回 true 表示将异步响应 sendResponse
        return true;
    }
});
