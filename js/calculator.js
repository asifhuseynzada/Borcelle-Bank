document
        .getElementById("calculate")
        .addEventListener("click", function () {
          const loanAmount = parseFloat(
            document.getElementById("loanAmount").value
          );
          const annualInterestRate = parseFloat(
            document.getElementById("annualInterestRate").value
          );
          const loanTerm = parseInt(document.getElementById("loanTerm").value);

          const monthlyInterestRate = annualInterestRate / 12 / 100;
          const monthlyPayment =
            (loanAmount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
          const totalPayment = monthlyPayment * loanTerm;

          const paymentTable = document.getElementById("paymentTable");
          paymentTable.innerHTML = "";

          for (let i = 1; i <= loanTerm; i++) {
            const row = document.createElement("tr");
            const monthCell = document.createElement("td");
            const monthlyPaymentCell = document.createElement("td");
            const totalPaymentCell = document.createElement("td");

            monthCell.textContent = i;
            monthlyPaymentCell.textContent = monthlyPayment.toFixed(2);
            totalPaymentCell.textContent = (monthlyPayment * i).toFixed(2);

            row.appendChild(monthCell);
            row.appendChild(monthlyPaymentCell);
            row.appendChild(totalPaymentCell);

            paymentTable.appendChild(row);
          }
        });