function validar() {

    let nome = document.getElementById("username").value;
    let email = document.getElementById("email").value;


    if(nome == ""){
        alert("Preecha o campo nome!");
    }else if(email == ""){
        alert("Preencha o campo email!");
    }
}

