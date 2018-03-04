chrome.extension.onMessage.addListener((req, sender, cb) => {
    tab = sender.tab
    winId = tab.windowId

    switch (req.key) {
        case "C-h":
        case "C-l":
            i = tab.index

            chrome.tabs.getAllInWindow(winId, tabs => {
                maxI = tabs.length
                if (req.key === "C-h") {
                    nextI = i - 1
                    if (nextI < 0) nextI = maxI
                } else {
                    nextI = i + 1
                    if (nextI > maxI) nextI = 0
                }
                chrome.tabs.update(tabs[nextI].id, {active: true})
            })
            break
        default:
            throw new Error(`Unknow key. ${req.key}`)
            break
    }
}) ;
