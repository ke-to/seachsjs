javascript:
    void(s=prompt('検索する語句を入力してください。\n※カンマ区切りで複数検索可能です。',''));
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
        if(b.indexOf(d)){
           b=b.replace(d,'<span name='+R[i].no+'  class='+R[i].no+' style=\'font-size:24px;color:#000;background-color:yellow;font-weight:bold;\'>$1</span>');           
        }
    });

    void(document.body.innerHTML=b);
    var T = '';
    R.forEach(function(d,i){
        n = document.getElementsByName(d.no);
        if(n==true){
           window.scrollTo(0,n[0].offsetTop);
        }
        T+= d.name+' : '+n.length+'\n';
    });
    alert('▼検索結果▼\n'+T);
    