javascript:
    void(s=prompt('Find text:',''));
    var A = s.split(',');

    B= A.map(function(d,i){
        d= '('+d+')';
        d= new RegExp(d,'gi');
        return d;
    });
    rn=Math.floor(Math.random()*100);
    rid='z'+rn;
    b = document.body.innerHTML;
    B.forEach(function(d,i){
        b=b.replace(d,'<span name='+rid+' class='+rid+' style=\'color:#000;background-color:yellow;font-weight:bold;\'>$1</span>');
    });


    void(document.body.innerHTML=b);
    alert('Found '+document.getElementsByName(rid).length+' matches.');

    window.scrollTo(0,document.getElementsByName(rid)[0].offsetTop);
