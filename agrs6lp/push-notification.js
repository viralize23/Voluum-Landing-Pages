    var s = document.createElement("script")
    s.src = "https://example.com/enot.min.js"
    s.onload = function (sdk) {
        sdk.startInstall(
            {
                "appId": "1005a5c666453db2dbd50d3b961c8e2",
                "loadSettings": true
            }
        )
    }
    document.head.append(s)
