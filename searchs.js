javascript:
    void(s=prompt('Find text:',''));
    var A = s.split(',');

    A.map(funcrion(d,i){
        d= '('+d+')';
        return new RegExp(d,'gi');
    });
    rn=Math.floor(Math.random()*100);
    rid='z'+rn;
    b = document.body.innerHTML;
    A.forEach(function(d,i){
        b=b.replace(x,'<span name='+rid+' class='+rid+' style=\'color:#000;background-color:yellow;font-weight:bold;\'>$1</span>');
        console.log(x);
    });


    void(document.body.innerHTML=b);
    alert('Found '+document.getElementsByName(rid).length+' matches.');

    window.scrollTo(0,document.getElementsByName(rid)[0].offsetTop
    );
