// 获取所有链接的 DOM 元素
document.getElementById('link_cce_1').addEventListener('click', function (e) {
    e.preventDefault();  // 阻止默认行为
    openLinkInCurrentTab('https://console.huaweicloud.com/cce2.0/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/cce/cluster/list');
});

document.getElementById('link_log_2').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/lts/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/cts/manager/groups');
});

document.getElementById('link_obs_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/console/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/obs/manager/buckets');
});

document.getElementById('link_pipeline_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/devcloud/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/pipeline/list');
});

document.getElementById('link_das_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/das/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/das/dba/insList');
});

document.getElementById('link_TaurusDB_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/gaussdbformysql/?region=cn-southwest-2#/gaussdbformysql/management/list');
});

document.getElementById('link_elb_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/vpc/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/elb/list');
});

document.getElementById('link_dms_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/dms/?engine=all&agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/queue/manager/instances');
});

document.getElementById('link_jiankong_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/ces/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/monitor/overview');
});

document.getElementById('link_redis_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/dcs/?agencyId=a8c78f07ef944ed4a58ac614eb5ada27&region=cn-southwest-2&locale=zh-cn#/dcs/manager/cacheList');
});

document.getElementById('link_esc_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/ecm/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn#/ecs/manager/vmList');
});

document.getElementById('link_waf_1').addEventListener('click', function (e) {
    e.preventDefault();
    openLinkInCurrentTab('https://console.huaweicloud.com/waf/?agencyId=c5f19fdf96e541f881a48d29dfc288b5&region=cn-southwest-2&locale=zh-cn&enterprise_project_id=0#/waf/dashboard/security');
});

// 使用 chrome.tabs.update 在当前标签页打开链接
function openLinkInCurrentTab(url) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0];
        chrome.tabs.update(currentTab.id, { url: url }, function () {
            // 在更新标签页后关闭弹窗
            window.close();
        });
    });
}
