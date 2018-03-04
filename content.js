(function(){
    id = "hdjdnhkfaojfjglhkddjjbhekdkkhalk"
    scrollOffset = 100

    keymage('ctrl-d', () => {
        scrollBy(0, window.innerHeight/2);
    });
    keymage('ctrl-u', () => {
        scrollBy(0, -window.innerHeight/2);
    });

    keymage('g g', () => {
        scrollTo(0, 0)
    });
    keymage('shift-g', () => {
        scrollTo(0, 999999)
    });

    keymage('j', () => {
        scrollBy(0, scrollOffset) ;
    });
    keymage('k', () => {
        scrollBy(0, -scrollOffset) ;
    });

    keymage('ctrl-h', () => {
        chrome.runtime.sendMessage(id, {key: "C-h"})
    });
    keymage('ctrl-l', () => {
        chrome.runtime.sendMessage(id, {key: "C-l"})
    });

})()