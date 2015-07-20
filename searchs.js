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
    b = document.body.innerHTML;
    B.forEach(function(d,i){
        b=b.replace(d,'<span name='+R[i].no+' class='+R[i].no+' style=\'color:#000;background-color:yellow;font-weight:bold;\'>$1</span>');
    });

    void(document.body.innerHTML=b);
    R.forEach(function(d,i){
        n = document.getElementsByName(d.no);
        alert('Found '+d.name+','+n.length+' matches.');
    });

    window.scrollTo(0,document.getElementsByName(R[0]['no']).offsetTop);
