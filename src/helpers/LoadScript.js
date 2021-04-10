export const addLinkScript = (src, callback) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

export const removeLinkScript = (filename) => {
    var tags = document.getElementsByTagName('script');
    for (var i = tags.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
        if (tags[i] && tags[i].getAttribute('src') !== null && tags[i].getAttribute('src').indexOf(filename) !== -1)
            tags[i].parentNode.removeChild(tags[i]); //remove element by calling parentNode.removeChild()
    }
}