function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
    interestRateValue = document.getElementById("Interest-rate").value;
    MonthtToPayValue = document.getElementById("month-to-pay").value;

    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthtToPayValue;

    monthlyPayment = (loanAmountValue / MonthtToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}

