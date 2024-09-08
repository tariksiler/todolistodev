
document.querySelector("#liveToastBtn").onclick = function() { 
    let item = document.querySelector("#task").value;
    if( item === "") {
        alert("Lütfen Bir DEğer Giriniz");
        return;
    }
    console.log(item)
    let ulDOM = document.querySelector("ul#list")
    let liDOM = document.createElement("li")
    liDOM.innerHTML = (`${item}`)
    ulDOM.append(liDOM)
}

