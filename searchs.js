javascript:
    void(s=prompt('Find text:',''));
    var A = s.split(',');
    var R = new Array();
    B= A.map(function(d,i){
        rn=Math.floor(Math.random()*1000);
        R.push({ no: 'z'+rn, name: d});
        d= '('+d+')';
        d= new RegExp(d,'gi');
        return d;
    });
    console.log(R);
    b = document.body.innerHTML;
    B.forEach(function(d,i){
        b=b.replace(d,'<span name='+R.no+' class='+R.no+' style=\'color:#000;background-color:yellow;font-weight:bold;\'>$1</span>');
    });

    void(document.body.innerHTML=b);
    R.forEach(function(d,i){
        alert('Found '+d.name.innerHTML+','+n.length+' matches.');
    });
    console.log(R);

    window.scrollTo(0,document.getElementsByName(R)[0].offsetTop);
