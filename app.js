codigo_encritar = {
   a:"t",b:"z",g:"m",
   d: "w",e: "p",f: "9",
   g: "u",h: "q",i: "r",
   j: "n",k: "s",l: "x",
   m: "a",n: "4",o: "5",
   p: "e",q: "7",r: "8",
   s: "c",t: "0",u: "1",
   v: "h",w: "3",x: "j",
   y: "f",z: "6"," ": "2"
}


codigo_desencritar = {
    t:"a",z:"b",m:"g",
    w: "d",p: "e",9: "f",
    u: "g",q: "h",r: "i",
    
    n: "j",s: "k",x: "l",
    a: "m",4: "n",5: "o",
    e: "p",7: "q",8: "r",
    c: "s",0: "t",1: "u",
    h: "v",3: "w",j: "w",
    f: "y",6: "z",2: " "
 }



zona_texto_textarea = document.querySelector(".zona_texto_textarea");  // adquiere el objeto de .zona_printer q "DIV" donde se pinta la informacion ya encriptada
zona_printer = document.querySelector(".zona_printer");  // adquiere el objeto de .zona_printer q "DIV" donde se pinta la informacion ya encriptada


function encriptar ()
    {
        n_dato = Array.from(zona_texto_textarea.value).map(
        function(value)
        {
        return codigo_encritar[value]
        })

        zona_printer.innerHTML = n_dato.join("");  
    }

    
function des_encriptar ()
    {
        n_dato = Array.from(zona_texto_textarea.value).map(
        function(value)
        {
        return codigo_desencritar[value]
        })

        zona_printer.innerHTML = n_dato.join("");  
    }



