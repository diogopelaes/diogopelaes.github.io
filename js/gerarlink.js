let linkDownload = '';
function gerar(inputlink) {
    var link = inputlink.value.slice(inputlink.value.indexOf("/d/", 1)+3)
    if (link.includes('/')) {
        link = link.slice(0, link.indexOf('/'))
    }
    linkDownload = 'https://drive.google.com/uc?export=download&id='+link
    document.getElementById('link').innerHTML = linkDownload;
}

async function clipboardCopy() {
  await navigator.clipboard.writeText(linkDownload);
}