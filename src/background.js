  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3a0860'}, function() {
      console.log('uWatch is running');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          
        css:["ytd-playlist-panel-video-renderer"]
        
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
