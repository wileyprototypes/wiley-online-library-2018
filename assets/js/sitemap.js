function genSiteMap() {
    $(document).ready(function(){
        $.get('/sitemap.xml', function(d){
            $(d).find('loc').each(function(){
                var $page = $(this);
                var sitemapElement = document.getElementById("sitemap");
                var linkUrl = $page.text(),
                    removeDomain = linkUrl.replace('https://wol.bss.design/',''),
                    removeType = removeDomain.replace('.html',''),
                    primaryNode = removeType.substring(0, removeType.indexOf("/")),
                    primaryNodeElement = document.getElementById(primaryNode),
                    linkText = removeType;
                // create link node
                var linkDiv = document.createElement("div");
                var linkElement = document.createElement("a");
                var linkString = document.createTextNode(linkText);
                linkElement.href=linkUrl
                linkElement.appendChild(linkString);
                linkDiv.appendChild(linkElement);
                
                // check if the primary node has a container and heading
                // if it exists, append the link to the container else create the container and heading and then add the link
                if (primaryNodeElement) {
                    // append link
                    primaryNodeElement.appendChild(linkDiv);
                } else {
                    // create section container
                    var linkSection = document.createElement("div");
                    linkSection.id = primaryNode;
                    linkSection.classList.add("mb-3");
                    sitemapElement.appendChild(linkSection);
                    // creating section heading
                    var headingElement = document.createElement("h3");
                    var headingText = document.createTextNode(primaryNode);
                    headingElement.appendChild(headingText);
                    // append heading
                    linkSection.appendChild(headingElement);
                    // append link
                    linkSection.appendChild(linkDiv);
                }
            });
        });
    });    
}