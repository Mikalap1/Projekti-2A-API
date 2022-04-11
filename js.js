// Javascript


function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {table(this);}
  xhttp.open("GET", "https://www.finnkino.fi/xml/TheatreAreas/");
  xhttp.send();
}
function table(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("TheatreArea");
    let table="<tr><th>Area</th><th>ID</th></tr>";
    for (let i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
      "</td></tr>";

  }
  document.getElementById("taulukko").innerHTML = table;
}
