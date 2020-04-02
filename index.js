function add() {
  document.querySelector("#dodaj").setAttribute("src", "dodaje.png")
  let number = document.querySelector("#number").value;
  let date = document.querySelector("#date").value;

  if (number.length == 0) {
    alert("Nie podałeś temperatury")
    document.querySelector("#dodaj").setAttribute("src", "dodaj.png")
  }
  else if (date.length == 0) {
    alert("Nie podałeś daty")
    document.querySelector("#dodaj").setAttribute("src", "dodaj.png")
  }
  else {

    let newLine = document.createElement("tr");
    table.appendChild(newLine);

    let newCell = document.createElement("td")
    newCell.innerHTML = date;
    newLine.appendChild(newCell);

    let newCell2 = document.createElement("td")
    newCell2.innerHTML = number + "&#186C";
    newCell2.className = "temp";
    newLine.appendChild(newCell2);

    let newCell3 = document.createElement("td")
    newLine.appendChild(newCell3);
    let btn = document.createElement("img");
    btn.setAttribute("src", "usun.png");
    newCell3.className = "btntd";
    btn.className = "btn"
    btn.innerHTML = "usun";
    btn.onclick = function deleteRow() {//to nie działa jest to usuwanie pojedyńczych wierszy z tabelki za pomocą przycisku
      var i = this.parentNode.parentNode.rowIndex;//to nie działa
      document.getElementById("table").deleteRow(i);//to nie działa
      liczenie();
    }
    newCell3.appendChild(btn);

    liczenie();

    function liczenie() {//to nie działa ↓↓↓↓ 
      var table = document.getElementById("table"), maxwynik = Number.MIN_VALUE, minwynik = Number.MAX_VALUE, swynik = 0;

      //Maksymalna
      if (parseInt(table.rows[1].cells[1].innerHTML) < 1) {
        maxwynik = parseInt(table.rows[1].cells[1].innerHTML);
        for (var i = 1; i < table.rows.length; i++) {
          if (parseInt(table.rows[i].cells[1].innerHTML) > maxwynik) {
            maxwynik = parseInt(table.rows[i].cells[1].innerHTML);
          }
        }
      } else {
        for (var i = 1; i < table.rows.length; i++) {
          if (parseInt(table.rows[i].cells[1].innerHTML) > maxwynik) {
            maxwynik = parseInt(table.rows[i].cells[1].innerHTML);
          }
        }
      }
      document.querySelector("#maxwynik").innerHTML = maxwynik + "&#186C";

      //Minimalna
      for (var i = 1; i < table.rows.length; i++) {
        if (parseInt(table.rows[i].cells[1].innerHTML) < minwynik) {
          minwynik = parseInt(table.rows[i].cells[1].innerHTML);
        }
      }
      document.querySelector("#minwynik").innerHTML = minwynik + "&#186C";

      //Średnia
      for (var i = 1; i < table.rows.length; i++) {
        swynik = swynik + parseInt(table.rows[i].cells[1].innerHTML);
      }
      swynik = swynik / (table.rows.length - 1);
      swynik = Math.round(swynik * 100) / 100
      document.querySelector("#swynik").innerHTML = swynik + "&#186C";
    }
  }
}
function changeimg() {//to działa
  document.querySelector("#dodaj").setAttribute("src", "dodaj.png")
}
