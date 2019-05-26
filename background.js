  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
        /*Con estas condiciones me aseguro que solo se pueda activar el popup
          Si la pagina es youtube y tiene ese codigo CSS especifico de las listas de reporudccion.
        */

        /*Whit these conditions I make me sure that the popup can only  be activated
          If the page is youtube and it has that CSS code that's specific of the 'reporduction lists' ESL.
        */

        css:["ytd-playlist-panel-video-renderer"]
        
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });