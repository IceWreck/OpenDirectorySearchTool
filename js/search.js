function search() {
    var searchTerm = document.getElementById("searchTerm").value ;
    var website = 'https://www.google.com/search?q=';
    var inURL = ' -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)';
    var videoFormats = ' +(wmv|mpg|avi|mp4|mkv|mov)';
    var audioFormats = ' (ac3|flac|m4a|mp3|ogg|wav|wma)';
    var imageFormats = ' (bmp|gif|jpg|png|psd|tif|tiff)';
    var archiveFormats = ' +(.rar|.tar|.7z|.zip|.si)';
    var bookFormats = ' (pdf|epub|mob)';
    var inText = 'intext:"' + searchTerm + '"';
    
    if(document.getElementById("o1").checked){
        link = website + inText + ' intitle:"index.of"' + inURL; 
    }
    else if(document.getElementById("o2").checked){
        link = website + inText + ' intitle:"index.of"' + videoFormats + inURL; 
    }
    else if(document.getElementById("o3").checked){
        link = website + inText + ' intitle:"index.of"' + audioFormats + inURL; 
    }
    else if(document.getElementById("o4").checked){
        link = website + inText + ' intitle:"index.of"' + bookFormats + inURL; 
    }
    else if(document.getElementById("o5").checked){
        link = website + inText + ' intitle:"index.of"' + imageFormats + inURL; 
    }
    else if(document.getElementById("o6").checked){
        link = website + 'intitle:"' + searchTerm + '"' + archiveFormats + inURL; 
    }


    window.open(link,'_blank');

    
}

