function convertHTML(str) {
    var charsHtml = ['&amp;', '&lt;', '&gt;', '&quot;', "&apos;"];

    var regex = [/&/g, /</g, />/g, /"/g, /'/g];

    str = str.replace(regex[0], charsHtml[0]).replace(regex[1], charsHtml[1]).replace(regex[2], charsHtml[2]).replace(regex[3], charsHtml[3]).replace(regex[4], charsHtml[4])

    return str;
}

//time 2 mins

convertHTML("Dolce & Gabbana");