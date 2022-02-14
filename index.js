var i = 0;
let Data = [];
let imgUrl = "";

function handleFileSelect(event) {
  let files = event.target.files;
  
  // use first file from the list
  let f = files[0];

  if (!f.type.match('image.*')) {
    continue;
  }

  let reader = new FileReader();

  reader.onload = () => {
    imgUrl = reader.result;
  }

  localStorage.setItem("imgUrl", imgUrl);

}

function tosubmit() {
  if (localStorage.getItem("Data")) {
    Data = eval(localStorage.getItem("Data"));
  }

  if(localStorage.getItem("imgUrl")) {
    imgUrl = eval(localStorage.getItem("imgUrl"));
  }

  i = Data.length;

  const currObject = {
    id: i,
    imgUrl: imgUrl,
    productName: document.getElementById("pname").value,
    unitMeasure: document.getElementById("unit").value,
    itemPrice: document.getElementById("price").value,
    prodDescription: document.getElementById("description").value,
  };

  Data[i] = currObject;

  localStorage.setItem("Data", JSON.stringify(Data));
}

function reassign() {
  var items = eval(localStorage.getItem("Data"));

  console.log(items[0].imgUrl);

  var table = document.getElementById("table");

  for (var i = 0; i < items.length; i++) {
    var row = table.insertRow();

    // <td><div class="w-10 h-10"><img src=${items[i].imgUrl} class="object-fit: cover" alt="product-image"/><div></td>

    row.innerHTML = `<tr>
    <th scope="row">${i}</th>
    <td>${items[i].productName}</td>
    <td>${items[i].prodDescription}</td>
    <td>${items[i].itemPrice}</td>
    <td>${items[i].unitMeasure}</td>
    <td><button class="btn btn-primary rounded-pill px-4 mx-4 shadow" onclick=edit(${items[i].id})>Edit</button></td>
    <td><button class="btn btn-primary rounded-pill px-4 mx-4 shadow" onclick=del(${items[i].id})>Delete</button></td>
  </tr>`;
  }
}

function edit(k) {
  var test = eval(localStorage.getItem("Data"));

  var tempData = test[k];

  localStorage.setItem("tempData", JSON.stringify(tempData));

  del(k);

  window.location.href = "index.html";
}

function homePage() {
  var tempData = JSON.parse(localStorage.getItem("tempData"));

  if (tempData !== null && tempData.productName != undefined) {
    document.getElementById("pname").value = tempData.productName;

    document.getElementById("unit").value = tempData.unitMeasure;

    document.getElementById("price").value = tempData.itemPrice;

    document.getElementById("description").value = tempData.prodDescription;

    localStorage.setItem("tempData", null);
  }
}

function del(k) {
  var Data = eval(localStorage.getItem("Data"));

  Data.splice(k, 1);
  localStorage.setItem("Data", JSON.stringify(Data));

  location.reload();
}
