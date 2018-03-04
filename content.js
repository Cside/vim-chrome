(function(){
    id = "hdjdnhkfaojfjglhkddjjbhekdkkhalk"
    // TODO: wait DOMContentLoaded
    // TOO: connect のほうがパフォーマンスいいのかも


    // TODO
    keymage('g g', () => { console.log('gg') });
    keymage('shift-g', () => { console.log('G') });

    keymage('j', () => {
        console.log('j')
        scrollBy(0, 100) ;
    });
    keymage('k', () => { console.log('G') });

    keymage('ctrl-u', () => { console.log('C-u') });
    keymage('ctrl-d', () => { console.log('C-d') });

    // DONE! :D
    keymage('ctrl-h', () => {
        chrome.runtime.sendMessage(id, {key: "C-h"})
    });
    keymage('ctrl-l', () => {
        chrome.runtime.sendMessage(id, {key: "C-l"})
    });

})()