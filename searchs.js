javascript:
    void(s=prompt('Find text:',''));

    s='('+s+')';x=new RegExp(s,'gi');
    rn=Math.floor(Math.random()*100);
    rid='z'+rn;
    b = document.body.innerHTML;
    b=b.replace(x,'
        <span name='+rid+' id='+rid+' style=\'color:#000;
        background-color:yellow;
        font-weight:bold;\'>$1</span>');

    void(document.body.innerHTML=b);
    alert(
        'Found '+document.getElementsByName(rid).length' matches.');
        window.scrollTo(0,document.getElementsByName(rid)[0].offsetTop
    );
