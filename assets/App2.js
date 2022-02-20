function fun()
    {
        var mac=document.getElementById("innerbar");
        var tex=document.getElementById("text");
        var width=1;
        var id=setInterval(ref,20);
        function ref()
        {
            if(width>=100)
            {
                clearInterval(id);
            }
            else
            {
                width++;
                mac.style.width=width+'%';
                tex.innerHTML=width+'%';
            }
        }
    }