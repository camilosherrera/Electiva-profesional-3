window.onload = function()
{
    var tria = function(esca)
    {
        
        var tr = [];
        var op = [];
        var cap = "111111111"; 
        for(var i = 1; i <= esca; i++)
        {
            op = [];
            var num = cap.substring(1, i+1); 
            var mt = (num*num)+"";
            for(var c = 0; c < mt.length; c++)
            {
                op.push(mt.charAt(c));
             if(esca == 9 && i == 9 && mt.charAt(c) == 8){
                    op.push(9);
                    op.push(8);
                }
            }
            tr.push(op);
        }
        return tr;
    };

    var cr = function()
    {
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
        (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    };

    var mos = (function mos(nivel)
    {
        var txt = "";
        var tr = tria(nivel);
        var colorCelda = "";
        nom_div("pascal").innerHTML = "";
        for(var i = 0; i < tr.length; i++)
        {
            txt += "<div align = 'center' class = 'nivel' style = 'padding-bottom: 10px;'>";
            for(var c = 0; c < tr[i].length; c++)
            {
                colorCelda =  "background-color:" + cr();
                txt += "<div style = 'display: inline-block; "+(colorCelda)+"' class = 'celda'"+"'>" + 
                            (tr[i][c]) + 
                        "</div>";
            }
            txt += "</div>";
        }
        nom_div("pascal").innerHTML = txt;
        return mos;
    })(2);

    nom_div("rango").addEventListener('change', function(event)
    {
        nom_div("txtrango").innerHTML = this.value;
        mos(Number(this.value));
    });

    function nom_div(div)
    {
        return document.getElementById(div);
    }
};