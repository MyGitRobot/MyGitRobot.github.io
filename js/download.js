// download file directly

var downloadLinks = document.getElementsByClassName("download");

for (var i = 0; i < downloadLinks.length; i++){
    downloadLinks[i].addEventListener("click", function(event) {
        event.preventDefault();

        var url = this.href;
        var fileName = getFilenameFromUrl(url);

        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                var blobUrl = window.URL.createObjectURL(blob);
                var link = document.createElement("a");
                link.href = blobUrl;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(blobUrl);
            });
    });
}

function getFilenameFromUrl(url) {
    var pathname = new URL(url).pathname;
    return pathname.split('/').pop();
}