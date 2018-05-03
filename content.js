(function() {
    id = "acpdfkdeaapcineokjcampnicmjldnpc"
    scrollOffset = 100

    keymage('ctrl-b', () => {
        scrollBy(0, -window.innerHeight)
    })
    keymage('ctrl-f', () => {
        scrollBy(0, window.innerHeight)
    })

    keymage('ctrl-u', () => {
        scrollBy(0, -window.innerHeight / 2)
    })
    keymage('ctrl-d', () => {
        scrollBy(0, window.innerHeight / 2)
    })

    keymage('g g', () => {
        scrollTo(0, 0)
    })
    keymage('shift-g', () => {
        scrollTo(0, 999999)
    })

    keymage('j', () => {
        scrollBy(0, scrollOffset)
    })
    keymage('k', () => {
        scrollBy(0, -scrollOffset)
    })

    keymage('ctrl-h', () => {
        chrome.runtime.sendMessage(id, {
            key: "C-h"
        })
    })
    keymage('ctrl-l', () => {
        chrome.runtime.sendMessage(id, {
            key: "C-l"
        })
    })

    keymage('s s', () => {
        document.querySelector('.hatena-star-add-button').click()
    })

})()