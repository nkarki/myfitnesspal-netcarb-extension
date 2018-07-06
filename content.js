chrome.storage.local.set({
    color: '#3aa757'
}, function () {
    console.log("The color is yellow.");
});

chrome.storage.local.get(['color'], function (result) {
    console.log(result.color);
});
console.log("yoooo");