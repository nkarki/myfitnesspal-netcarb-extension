function logURL(response) {
    console.log(response);
}

function listener(details) {
    console.log("listener active, request id:"+details.requestId);
    filter = browser.webRequest.filterResponseData(details.requestId);
    decoder = new TextDecoder("utf-8");
    encoder = new TextEncoder();

    filter.ondata = function(event) {
        console.log("receiving data");
        // console.log(event.data);
        str = decoder.decode(event.data, {
            stream: true
        });
        // Just change any instance of Example in the HTTP response
        // to WebExtension Example.
        // str = str.replace(/Example/g, 'WebExtension Example');
        // filter.write(encoder.encode(str));
        console.log(str);
        filter.disconnect();
    };
    console.log(filter);
    //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
    listener, {
        urls: ["https://api.myfitnesspal.com/v2/foods*"]
        // ,types: ["main_frame"]
    }
    ,["blocking"]
);