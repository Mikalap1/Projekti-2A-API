// Javascript





    // Ladataan XML Schedule
    function loadDoc() {        
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {table(this);}
        xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/");
        xhttp.send();
      }

      // XML tiedot muuttujiin
      function table(xml) {
        const xmlDoc = xml.responseXML;
        var x = xmlDoc.getElementsByTagName("Show");
        let tiedot = "";

          // For loop joka hakee muuttujaan "tiedot" ensin Teatterin ID:n ja sitten muut tiedot
        for (var i=0; i < x.length; i++){
        tiedot += "<div id='tiedot' class=" + 
        // Haetaan TheatreID divin luokaksi ja lisätään tämä muuttujaan "tiedot"
        x[i].getElementsByTagName("TheatreID")[0].childNodes[0].nodeValue +
        "><img id='logo' style=float:left; src=" +
        x[i].getElementsByTagName("EventSmallImagePortrait")[0].childNodes[0].nodeValue + // Elokuvan kuva
          "></img><img style=float:right; src=" +
        x[i].getElementsByTagName("RatingImageUrl")[0].childNodes[0].nodeValue +
        "></img>" + "<p id='otsikko'>" +
        x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + // haetaan elokuvan titteli
        "<br><p>" +
        x[i].getElementsByTagName("TheatreAndAuditorium")[0].childNodes[0].nodeValue + // Teatteri ja sali
        "<br>" +
        x[i].getElementsByTagName("Genres")[0].childNodes[0].nodeValue +  // Genre
        "<br>" +
        x[i].getElementsByTagName("PresentationMethod")[0].childNodes[0].nodeValue +    // 2D/3D
        "</p><p id='aika'>"  +
        x[i].getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue +
        
        "</p></div>";
  
        }   //Printtaa tiedot muuttuja DIV elementtiin ID:
          document.getElementById("tiedot").innerHTML = tiedot;
        }


        function TeatterinValinta() {
          var input;
          input = document.getElementById("teatteri").value; //Dropdown valikon numero muuttujaan
          console.log(input); // Tulostetaan input
          }

        /* filter = input.value.toString();
            table = document.getElementById("tiedot");
            p = table.getElementsByTagName("p");
            for (i = 0; i < p.length; i++) {
              td = p[i].getElementsByTagName("p");
              console.log(td);
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue == td) {
                  table[i].style.display = "";
                } else {
                  table[i].style.display = "none";
              }}}
        }         */


      //  var printtaa = title[i].innerHTML;
    

      //  document.getElementById("print").innerHTML = printtaa;

        /* var i;
          const xmlDoc = xml.responseXML;
          const x = xmlDoc.getElementsByTagName("Show");
          for (let i = 0; i <x.length; i++) 
          x[i].getElementsByTagName("Title").innerHTML;
          console.log(x[i]);
          console.log(x);
        
                          /* KOEAJO x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue.innerHTML;    */

          /*
          const starttime = xmlDoc.getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue;

          let table="<tr><th>Kuva</th><th>Nimi</th><th>TheatreID</th><th>Show Starttime</th></tr>"; // TH style=display:none
            {
          for (let i = 0; i <x.length; i++) {
            table += "<tr><td>" +
            x[i].getElementsByTagName("EventSmallImagePortrait")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue +
            "</td><td>" +       //TD style=display:none
            x[i].getElementsByTagName("TheatreID")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue +
            "</td></tr>";
            
      
        }
        document.getElementById("taulukko").innerHTML = table;
      }}

     // Dropdown menun teatteri valitaan ja taulukko tulostaa valinnan
      function TeatterinValinta() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("teatteri");
        filter = input.value.toUpperCase();
          table = document.getElementById("taulukko");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
            }}} */

        
