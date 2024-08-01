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



// adquiere el objeto de .zona_printer q "DIV" donde se pinta la informacion ya encriptada
 // adquiere el objeto de .zona_printer q "DIV" donde se pinta la informacion ya encriptada


function encriptar (texto)
    {

        debugger

        const  n_dato = Array.from(texto).map(
        function(value)
        {
        return codigo_encritar[value];
        })

        imprimir(n_dato.join(""))


    }

    
function desencriptar (texto)
    {
        const n_dato = Array.from(texto).map(
        function(value)
        {
        return codigo_desencritar[value];
        })

       imprimir(n_dato.join(""))

        
    }


    function imprimir (texto){

        zona_printer = document.querySelector(".zona_printer"); 
        zona_printer.innerHTML = texto;  

    }



function saludo (type){

    console.log(type)

    zona_texto_textarea = document.querySelector(".zona_texto_textarea")
    n_texto= zona_texto_textarea.value.toLowerCase()

    if (zona_texto_textarea.value == "") {
        imprimir("Ingresa texto porfavor")
        return;
    }
    
    if (type == "encriptar"){
        encriptar(n_texto);
    }else if (type == "desencriptar")
    {
        desencriptar(n_texto);
    }

}


