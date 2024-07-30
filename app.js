
p_m_uno = document.querySelector(".zona_printer");  // adquiere el objeto de .zona_printer

// function encriptar(){
//    alert("Hola como estas");

 //   info = document.querySelector(".zona_texto_textarea").value

    //alert(info.replaceAll("a", "@"),("l","h"));


 //   einfo = btoa(info);


//    alert(einfo);

//    dinfo =atob(einfo);

 //   alert(dinfo);


// }

function metodo_uno(){
    m_uno = document.querySelector(".zona_texto_textarea").value;  // Valor que ingresa la persona
    e_m_uno =btoa(m_uno);                                          // se transforma en encriptado btoa o atob

    p_m_uno.innerHTML = e_m_uno;                                    //Reemplzaen valor que tiene . zona_printer x el de e_m_uno

}


function metodo_dos(){

    m_uno = document.querySelector(".zona_texto_textarea").value;
    e_m_uno =btoa(m_uno); 

    p_m_uno.innerHTML = e_m_uno;

}