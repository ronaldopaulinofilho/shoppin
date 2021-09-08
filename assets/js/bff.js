chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        urlSitesList: 'example.com'
    }, function () { });
});

var urlSitesList = 'example.com';

chrome.storage.sync.get(
    'urlSitesList'
    , function (result) {
        urlSitesList = result.urlSitesList;
    });


chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace === 'sync') {
        if (changes.urlSitesList) {
            urlSitesList = changes.urlSitesList.newValue;
        }
    }
});