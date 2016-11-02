function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest('http://int.dpool.sina.com.cn/iplookup/iplookup.php', function(ip){
    document.getElementById('ip_div').innerText = ip;
});