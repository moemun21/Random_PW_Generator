const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const sins = "!@#$%&*_-.";
      const char_sins =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*_-.";
      const char_nums =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const num_sins = "0123456789!@#$%&*_-.";
      const all =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*_-.0123456789";

      let checkbox1 = document.getElementById("chars");
      let checkbox2 = document.getElementById("signs");
      let checkbox3 = document.getElementById("nums");
      function validate() {
        if (checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
          return characters;
        } else if (
          checkbox1.checked &&
          checkbox2.checked &&
          !checkbox3.checked
        ) {
          return char_sins;
        } else if (
          checkbox1.checked &&
          checkbox2.checked &&
          checkbox3.checked
        ) {
          return all;
        } else if (
          !checkbox1.checked &&
          checkbox2.checked &&
          !checkbox3.checked
        ) {
          return sins;
        } else if (
          !checkbox1.checked &&
          !checkbox2.checked &&
          checkbox3.checked
        ) {
          return numbers;
        } else if (
          checkbox1.checked &&
          !checkbox2.checked &&
          checkbox3.checked
        ) {
          return char_nums;
        } else if (
          !checkbox1.checked &&
          checkbox2.checked &&
          checkbox3.checked
        ) {
          return num_sins;
        } else {
          alert("Please check atleast one box");
        }
      }

      function generatePass() {
        let result = "";
        let length = document.getElementById("rang").value;
        let x = validate();
        const charactersLength = x.length;

        for (let i = 0; i < length; i++) {
          result += x.charAt(Math.floor(Math.random() * charactersLength));
        }
        document.getElementById("pawo").innerHTML = result;
      }
      var btn = document.getElementById("mybtn");
      btn.addEventListener("click", generatePass);