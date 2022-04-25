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
        let kuva = "";

          // For loop joka hakee muuttujaan "tiedot" ensin Teatterin ID:n ja sitten muut tiedot
        for (var i=0; i < x.length; i++){
        tiedot += "<div id='tiedot' class=T" +
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
        
          // PÄIVÄMÄÄRÄ JA AIKA


          
        


        }


              

 
       


          // Lisätään muotoilut luokille 1056,1050,1058,1034,1047,1038,1043
        function addCSS1056() {

          const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
          addCSS(`
            #tiedot.T1056{ }
            #tiedot.T1050{ display:none; }
            #tiedot.T1058{ display:none; }
            #tiedot.T1034{ display:none; }
            #tiedot.T1047{ display:none; }
            #tiedot.T1038{ display:none; }
            #tiedot.T1043{ display:none; }
            `)

          }
          function addCSS1050() {
            const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
            addCSS(`
              #tiedot.T1056{ display:none; }
              #tiedot.T1050{  }
              #tiedot.T1058{ display:none; }
              #tiedot.T1034{ display:none; }
              #tiedot.T1047{ display:none; }
              #tiedot.T1038{ display:none; }
              #tiedot.T1043{ display:none; }
              `)
            }
            function addCSS1058() {
              const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
              addCSS(`
                #tiedot.T1056{ display:none; }
                #tiedot.T1050{ display:none; }
                #tiedot.T1058{  }
                #tiedot.T1034{ display:none; }
                #tiedot.T1047{ display:none; }
                #tiedot.T1038{ display:none; }
                #tiedot.T1043{ display:none; }
                `)
              }
              function addCSS1034() {
                const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
                addCSS(`
                  #tiedot.T1056{ display:none; }
                  #tiedot.T1050{ display:none; }
                  #tiedot.T1058{ display:none; }
                  #tiedot.T1034{  }
                  #tiedot.T1047{ display:none; }
                  #tiedot.T1038{ display:none; }
                  #tiedot.T1043{ display:none; }
                  `)
                }        
                function addCSS1047() {
                  const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
                  addCSS(`
                    #tiedot.T1056{ display:none; }
                    #tiedot.T1050{ display:none; }
                    #tiedot.T1058{ display:none; }
                    #tiedot.T1034{ display:none; }
                    #tiedot.T1047{ }
                    #tiedot.T1038{ display:none; }
                    #tiedot.T1043{ display:none; }
                    `)
                  }     
                  function addCSS1038() {
                    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
                    addCSS(`
                      #tiedot.T1056{ display:none; }
                      #tiedot.T1050{ display:none; }
                      #tiedot.T1058{ display:none; }
                      #tiedot.T1034{ display:none; }
                      #tiedot.T1047{ display:none; }
                      #tiedot.T1038{  }
                      #tiedot.T1043{ display:none; }
                      `)
                    }
                    function addCSS1043() {
                      const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
                      addCSS(`
                        #tiedot.T1056{ display:none; }
                        #tiedot.T1050{ display:none; }
                        #tiedot.T1058{ display:none; }
                        #tiedot.T1034{ display:none; }
                        #tiedot.T1047{ display:none; }
                        #tiedot.T1038{ display:none; }
                        #tiedot.T1043{  }
                        `)
                      }    


          function TeatterinValinta() {
            var input;
            input = document.getElementById("teatteri").value; //Dropdown valikon numero muuttujaan
            input2 = parseInt(input);
           
            switch(input2) {
              case 1056:
                  var clear = document.getElementsByTagName("style")[0]; // Haetaan aikaisempi style tagi
                  clear.remove(); // Poistetaan style tagi
                  addCSS1056(); // Lisää uudeen style tagin
                break;
              case 1050:
                var clear = document.getElementsByTagName("style")[0];
                clear.remove();
                addCSS1050();
                break;
              case 1058:
                var clear = document.getElementsByTagName("style")[0];
                clear.remove();
                addCSS1058();
                break;
              case 1034:
                var clear = document.getElementsByTagName("style")[0];
                clear.remove();
                addCSS1034();
                break;
              case 1047:
                var clear = document.getElementsByTagName("style")[0];
                clear.remove();
                addCSS1047();
                break;
              case 1038:
                var clear = document.getElementsByTagName("style")[0];
                clear.remove();
                addCSS1038();
                break;
              case 1043:
                var clear = document.getElementsByTagName("style")[0];
                clear.remove();
                addCSS1043();
                break;

            }    
          }

        




            // Ladataan XML sivun käynnistyessä
          function aloitus() { loadDoc() }

          window.onload = aloitus();

        
