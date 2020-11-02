
function ocult1() {
    if (document.getElementById("n1").style.display === "") {
        document.getElementById("n2").style.display = "block";
        document.getElementById("n1").style.display = "none";
    } else {
        document.getElementById("n1").style.display = "none";
    }
}


var n=1
function continua() {
    switch(n + 1){
        case 2:
            n2.style.display = "block";
            n1.style.display = "none";
            n3.style.display = "none";
            n4.style.display = "none";
            n++;
        break;
        case 3:
            n3.style.display = "block";
            n1.style.display = "none";
            n2.style.display = "none";
            n4.style.display = "none";
            n++;
        break;
        case 4:
            n4.style.display = "block";
            n1.style.display = "none";
            n2.style.display = "none";
            n3.style.display = "none";
            n++;
        break;
    }
}

function retrocede() {
    switch(n - 1){
        case 1:
            n1.style.display = "block";
            n2.style.display = "none";
            n3.style.display = "none";
            n4.style.display = "none";
            n--;
        break;
        case 2:
            n2.style.display = "block";
            n1.style.display = "none";
            n3.style.display = "none";
            n4.style.display = "none";
            n--;
        break;
        case 3:
            n3.style.display = "block";
            n1.style.display = "none";
            n2.style.display = "none";
            n4.style.display = "none";
            n--;
        break;
        case 4:
            n4.style.display = "block";
            n1.style.display = "none";
            n2.style.display = "none";
            n3.style.display = "none";
            n--;
        break;
    }
}

function valid(URL){
    for(i=0;i<URL.length;i++){
        if(URL[i].checkvalidity()){
            URL[i].classlist.remove("Errores");
            document.getElementById('continue').disabled = false;
        }else{
            URL[i].className = '' + URL1[i].className + 'Errores';
            document.getElementById('continue').disabled = true;
        }
    }
}

var save = '';
function saveurl(){
    save=URL.value;
    valid(document.getElementById('URL1'));
}

var data;
const json=document.createElement('AlgoGuarda');
json.id = json;

function formuEnvio(){
    event.preventDefault();
    data = FormanJson();
    json.textContent = data;
    enviodatos();
    document.getElementById('continue').disabled = false;
}

function FormanJson(){
    let data = new FormData(Document.getElementById('formulario'));
    let data_json = JSON.stringify(Object.FromEntries(data),null,2);
    return data_json;
}

function enviodatos(){
    let data=FormanJson();
    data=JSON.parse(data);
    let title = Object.title(data);
    let text=document.createElement('text');
    text.id = 'text';
    for(let i=0;i<title.length;i++){
        let aux = title[i];
        text.appendChild(document.createTextNode(aux + '='+data[aux] + '\n'));

    }
    n3.appendChild(text);
}

function OcultaBoton(){
    if(!(n > 1)){
        document.getElementById('returnbutton').className ='botones stash' 
    }else{
        document.getElementById('returnbutton').className ='botones show'
    }
}

