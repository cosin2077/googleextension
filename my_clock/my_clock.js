function my_clock(el){
    var today=new Date();
    var year=today.getFullYear();
    var month=today.getMonth();
    var day=today.getDate();
    var d=today.getDay();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    el.innerHTML ="今天是"+"："+"<br/>"+year+"年"+"<br/>"+month+"月"+day+"日"+"<br/>"+"星期"+day+"<br/>"+ h+":"+m+":"+s;
    setTimeout(function(){my_clock(el)}, 1000);
}

var clock_div = document.getElementById('clock_div');
my_clock(clock_div);