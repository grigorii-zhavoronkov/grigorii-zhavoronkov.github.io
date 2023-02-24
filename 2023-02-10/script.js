document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        const result = document.getElementById("result");
        const xsltStylesheet = document.getElementById("xsl").textContent;
        const parser = new DOMParser();
        const xsltStylesheetNode = parser.parseFromString(xsltStylesheet, 'text/xml');

        const xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsltStylesheetNode);

        const xmlString = document.getElementById("xml").textContent;
        const xmlDocument = parser.parseFromString(xmlString, 'text/xml');

        const transformedString = new XMLSerializer().serializeToString(
            xsltProcessor.transformToDocument(xmlDocument),
        );

        result.innerHTML = transformedString;
    }
}