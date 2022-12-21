function weightInChickens() {
    let weightInKg = prompt("Enter the weight in kilograms:");
    let weightInChickens = weightInKg / 0.5;
    let resultParagraph = document.getElementById("result");

    resultParagraph.innerText = "Weight in chickens: "+ weightInChickens;
}
