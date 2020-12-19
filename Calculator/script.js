const lis = document.querySelectorAll("ul li");

        lis.forEach((num) => {
            num.addEventListener('mousedown', function(event) {
                const value = num.innerText.trim();
                const result = document.querySelector(".result");
                const resultText = result.innerText.trim();

                if(resultText == "0" || resultText == "undefined" || resultText == "Infinity") {
                    result.innerText = "";
                }

                if(value == "=") {
                    let solution = eval(resultText);
                    result.innerText = solution;
                    return true;

                }

                if(value == "AC") {
                    result.innerText = "0";
                    return true;
                }

                if(value == "DEL") {
                    result.innerText = result.innerText.slice(0, -1);
                    return true;
                     
                }

                result.append(value);
            });
        });