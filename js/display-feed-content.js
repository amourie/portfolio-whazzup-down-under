
printDate();
var arrFeedURLs = [
  'https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/46800/rss.xml',
'https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/51120/rss.xml'];

//displayFeedContent('https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/46800/rss.xml');
for (var item in arrFeedURLs)
{

var contentDiv = 'rs-feed'+ item;
console.log(contentDiv);
displayFeedContent(arrFeedURLs[item], contentDiv);
}


function displayFeedContent(rsstoJSON, contentDiv)
{
var displayDiv = document.getElementById(contentDiv);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200)
        {
            var data = JSON.parse(xhr.responseText);
            var numToDisplay = 9;
            if(data.status == 'ok'){

                var output = '<h1>'+data.feed.title+'</h1>';

                for(var i=0;i<numToDisplay;++i){
                      output += '<a href="' + data.items[i].link + '" target="_blank">';
                      output+= '<div class="item-container col-lg-4"><h2>' + data.items[i].title + '</h2>';
                      output+= '<img src="' + data.items[i].enclosure.link + '" />';
                      output += '</a><p>' + data.items[i].description + '<p></div>';
                      output += '</a>';

                }//for


                displayDiv.innerHTML = output;

            }//if
            else {
              var output = '<p>'+ "Apologies - we could not retrieve any content" +'</p>';
            }
        }//if
    };
    xhr.open('GET',rsstoJSON,true);
    //  xhr.open('GET','https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/46182/rss.xml',true);
    xhr.send();

}
function printDate()
{
    //print copyright date in footer
    $('#footer-date').text("Copyright " + new Date().getFullYear());
}
