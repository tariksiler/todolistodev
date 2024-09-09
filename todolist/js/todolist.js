document.querySelector("#liveToastBtn").onclick = function newElement() { 
  let item = document.querySelector("#task").value;

  if( item === "") {
      alert("Lütfen Bir Değer Giriniz");
      return;}
  let ulDOM = document.querySelector("ul#list")
  let liDOM = document.createElement("li")
  localStorage.setItem("item", item)
  liDOM.innerHTML = (`${localStorage.getItem("item")}`)
  ulDOM.append(liDOM)

  const myList = document.querySelector("ul");
  let newList = document.querySelectorAll("li");

  newList.forEach((item) => {
    addCloseButton(item);
  });

  function addCloseButton(item) {
    item.onclick = () => {
      item.classList.toggle("checked");
    };

    const span = document.createElement("span");
    span.textContent = "\u00D7";
    span.className = "close";
    item.appendChild(span);
    span.onclick = () => {
      item.style.display = "none";
    };
  }
}