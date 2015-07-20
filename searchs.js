javascript:
    void(s=prompt('Find text:',''));
    var A = s.split(',');
    var R = [];
    B= A.map(function(d,i){
        d= '('+d+')';
        d= new RegExp(d,'gi');
        rn=Math.floor(Math.random()*100);
        R.push(rn);
        return d;
    });
    console.log(R);
    b = document.body.innerHTML;
    B.forEach(function(d,i){
        b=b.replace(d,'<span name=z'+R[i]+' class=z'+R[i]+' style=\'color:#000;background-color:yellow;font-weight:bold;\'>$1</span>');
    });

    void(document.body.innerHTML=b);
    alert('Found '+document.getElementsByName(rid).length+' matches.');

    window.scrollTo(0,document.getElementsByName(R)[0].offsetTop);
