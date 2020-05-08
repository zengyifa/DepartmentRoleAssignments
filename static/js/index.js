const inputElement = document.getElementById("file");
    inputElement.addEventListener("change", handleFile, false);
    function handleFile() {
      const file = this.files[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        var data = "";
        reader.onload = function (evt) {
          data = evt.target.result;
          document.getElementById("fileContents").innerHTML = readCsvIntoTable(data);
        }
        reader.onerror = function (evt) {
          document.getElementById("fileContents").innerHTML = "error reading file";
        }

      }
    }

    function readCsvIntoTable(data) {
      var lines = data.split("\n"),
        output = [],
        i;
      for (i = 0; i < lines.length; i++)
        output.push("<tr><td contenteditable='true'>"
          + lines[i].slice(0,-1).split(",").join("</td><td contenteditable='true'>")
          + "</td></tr>");
      output = "<table id=\"tableData\">" + output.join("") + "</table>";
      return output;
    }