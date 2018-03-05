chrome.extension.onMessage.addListener((req, sender, cb) => {
    tab = sender.tab
    winId = tab.windowId

    switch (req.key) {
        case "C-h":
        case "C-l":
            chrome.tabs.getAllInWindow(winId, tabs => {
                maxI = tabs.length - 1
                nextI = tab.index

                while (true) {
                    if (req.key === "C-h") {
                        nextI--
                        if (nextI < 0) nextI = maxI
                    } else {
                        nextI++
                        if (nextI > maxI) nextI = 0
                    }
                    nextTab = tabs[nextI]
                    if (/^chrome/.test(nextTab.url)) {
                        continue
                    }
                    break
                }
                chrome.tabs.update(nextTab.id, {active: true})
            })
            break
        default:
            throw new Error(`Unknow key. ${req.key}`)
            break
    }
}) ;
