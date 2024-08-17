

codigo_encritar = {
   a:"t",b:"z",c:"9",
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
    t:"a",z:"b",9:"c",
    w: "d",p: "e",g: "f",
    u: "g",q: "h",r: "i",
    n: "j",s: "k",x: "l",
    a: "m",4: "n",5: "o",
    e: "p",7: "q",8: "r",
    c: "s",0: "t",1: "u",
    h: "v",3: "w",j: "w",
    f: "y",6: "z",2: " "
 }



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


        zona_printer = document.querySelector(".result_text_printer"); 
        zona_printer.innerHTML = texto;  

        
        copiar = zona_printer

        // boton = document.querySelector(".hola")
        // boton_copiar = document.createElement("input")
        // boton_copiar.setAttribute("class", "copiar")
        // boton_copiar.setAttribute("value", "Copiar")
        // boton.appendChild(boton_copiar);
        // document.querySelector(".input_text_zone_text").value = "";

    }



function saludo (type){

    console.log(type)

    zona_texto_textarea = document.querySelector(".input_text_zone_text")
    n_texto= zona_texto_textarea.value.toLowerCase()
    const container = document.querySelector(".hola")

    if (zona_texto_textarea.value == "") {
        
        container.classList.remove('step-1')
        container.classList.remove('step-result')

        container.classList.add('step-fail')
        // img_espera = document.querySelector(".hola")
        // nodoImg = document.createElement("img")
        // nodoImg.setAttribute("src", "1.png")
        // img_espera.appendChild(nodoImg);
        // node = document.querySelector(".result_text_printer");
        // node.parentNode.removeChild(node);

        // document.querySelector(".input_text_zone_text").value = "";

        return;

    }
    
    if (type == "encriptar"){
        encriptar(n_texto);
        container.classList.remove('step-1')
        container.classList.remove('step-fail')
        container.classList.add('step-result')

    }else if (type == "desencriptar")
    {
        desencriptar(n_texto);
        container.classList.remove('step-1')
        container.classList.remove('step-fail')
        container.classList.add('step-result')
    }

}



const copyContent = async () => {

    let text = document.querySelector('.result_text_printer').innerHTML;

  try {
    await navigator.clipboard.writeText(text);
    console.log(text);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}