 
        const exchangeRates = {
            AZN: 1.70, 
            TRY: 12.50,
            RUB: 90.00,
            USD: 1.20,
            EUR: 1.10
        };

        function convertCurrency() {
            const amount = parseFloat(document.getElementById("amount").value);
            const fromCurrency = document.getElementById("from").value;
            const toCurrency = document.getElementById("to").value;

            if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
                const result = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
                document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
            } else {
                document.getElementById("result").innerText = "Geçerli bir valyuta seçin.";
            }
        }