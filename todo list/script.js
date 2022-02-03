document.getElementById("company-name").innerHTML = "YupTechnology";
document.getElementById("filial-name").innerHTML = "Nizami";
let tbl = document.getElementById("tbl");
let inp = document.querySelectorAll("input");
let tr = document.querySelectorAll("tr");
let number = 1;
let adlar;
let vezifeler;
let maaslar;

function table() {
  let screen = `<thead>
             <tr>
               <th scope="col">№</th>
               <th scope="col">Ad</th>
               <th scope="col">Vəzifə</th>
               <th scope="col">Maaş</th>
             </tr>
           </thead>
           <tbody></tbody>`;

  return screen;
}
tbl.innerHTML = table();

document.addEventListener("DOMContentLoaded", localGetir);

tbl.addEventListener("click", (e) => {
  let vurulanE = e.target;
  console.log(e.target);
  let a;
  let b;
  let c;
  a = vurulanE.parentElement; // a span tag-ni ifade edir
  b = a.parentElement; // b buttonun durdugu td-dir
  c = b.parentElement; // c silmek istediyimiz setir yeni tr-dir

  if (vurulanE.className == "btn btn-danger btn-sm") {
    let d = c.children; // tr icindeki td-ler
    let adcontent = d[1].textContent;
    let vezcontent = d[2].textContent;
    let maascontent = d[3].textContent;
    if (confirm("Silmek istediyinize eminsinizmi?")) {
      c.remove();
      localSil(adcontent, vezcontent, maascontent);
    }
  }
});

function elaveEt() {
  if (inp[0].value == "" || inp[1].value == "" || inp[2].value == "") {
    alert("Zehmet olmasa asagidaki deyerleri daxil edin");
  } else {
    tableIn(inp[0].value, inp[1].value, inp[2].value);
    localYaz(inp[0].value, inp[1].value, inp[2].value);
  }
  for (let i = 0; i < inp.length; i++) {
    inp[i].value = "";
  }
}

function localYaz(ad, vezife, maas) {
  Storage();

  adlar.push(ad);
  vezifeler.push(vezife);
  maaslar.push(maas);

  localStorage.setItem("adlar", JSON.stringify(adlar));
  localStorage.setItem("vezifeler", JSON.stringify(vezifeler));
  localStorage.setItem("maaslar", JSON.stringify(maaslar));
}

function localGetir() {
  Storage();
   for(let i = 0; i<adlar.length;i++){
     tableIn(adlar[i], vezifeler[i], maaslar[i])
   }
}

function localSil(deletAd, deletVez, deletMaas) {
  Storage();

  let indexAd = adlar.indexOf(deletAd);
  adlar.splice(indexAd, 1);
  localStorage.setItem("adlar", JSON.stringify(adlar));

  let indexVez = vezifeler.indexOf(deletVez);
  vezifeler.splice(indexVez, 1);
  localStorage.setItem("vezifeler", JSON.stringify(vezifeler));

  let indexMaas = maaslar.indexOf(deletMaas);
  maaslar.splice(indexMaas, 1);
  localStorage.setItem("maaslar", JSON.stringify(maaslar));
}

function tableIn(ad, vezife, maas) {
  let tBody = document.querySelector("tbody");
  let yeniTr = document.createElement("tr");
  let yeniTd1 = document.createElement("td");
  let yeniTd2 = document.createElement("td");
  let yeniTd3 = document.createElement("td");
  let yeniTd4 = document.createElement("td");
  let yeniTd5 = document.createElement("td");
  let Span = document.createElement("span");
  let yeniBtn = document.createElement("button");
  yeniBtn.className = "btn btn-danger btn-sm";

  yeniTd1.textContent = number;
  yeniTd2.textContent = ad;
  yeniTd3.textContent = vezife;
  yeniTd4.textContent = maas;
  yeniBtn.textContent = "Sil";

  tBody.appendChild(yeniTr);
  yeniTr.appendChild(yeniTd1);
  yeniTr.appendChild(yeniTd2);
  yeniTr.appendChild(yeniTd3);
  yeniTr.appendChild(yeniTd4);
  yeniTr.appendChild(yeniTd5);
  yeniTd5.appendChild(Span);
  Span.appendChild(yeniBtn);
  number++;
}

function Storage() {
  if (
    (localStorage.getItem("adlar") === null) &
    (localStorage.getItem("vezifeler") === null) &
    (localStorage.getItem("maaslar") === null)
  ) {
    adlar = [];
    vezifeler = [];
    maaslar = [];
  } else {
    adlar = JSON.parse(localStorage.getItem("adlar"));
    vezifeler = JSON.parse(localStorage.getItem("vezifeler"));
    maaslar = JSON.parse(localStorage.getItem("maaslar"));
  }
}
