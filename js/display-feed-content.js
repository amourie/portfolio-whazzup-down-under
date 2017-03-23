    var content = document.getElementById('content');

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200)
        {
            var data = JSON.parse(xhr.responseText);
            if(data.status == 'ok'){

                var output = '<h1>'+data.feed.title+'</h1>';

                for(var i=0;i<data.items.length;++i){
                      output+= '<div class="item-container col-lg-4"><h2><a href="' + data.items[i].link + '" target="_blank">"' + data.items[i].title + '</h2>';
                      output+= '<img src="' + data.items[i].enclosure.link + '" />';
                      output += '</a><p>' + data.items[i].description + '<p></div>';

                }//for


                content.innerHTML = output;

            }//if
            else {
              var output = '<p>'+ "Apologies - we could not retrieve any content" +'</p>';
            }
        }//if
    };
    xhr.open('GET','https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/46800/rss.xml',true);
    //  xhr.open('GET','https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/46182/rss.xml',true);
    xhr.send();

    //print copyright date in footer
    $('#footer-date').text("Copyright " + new Date().getFullYear());
