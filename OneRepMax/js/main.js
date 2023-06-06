function ORM() {
    let weight = document.querySelector("#weight");
    let reps = document.querySelector("#reps");
    let measure = document.querySelector("#measure");
    if (reps.value > 0 && weight.value > 0) {
        let resposta = document.querySelector("#resposta");
        const brzyckiMax = weight.value * (36 / (37 - reps.value));
        const epleyMax = weight.value * (1 + (0.0333 * reps.value));
        const lombardiMax = weight.value * (reps.value ** 0.1);
        const oconnerMax = weight.value * (1 + (0.025 * reps.value));
        resposta.innerHTML = 
            "You're extimated one rep max is </br> Brzycki: " + brzyckiMax.toFixed(1) + measure.value
            + "</br> Epley: " + epleyMax.toFixed(1) + measure.value
            + "</br> Lombardi: " + lombardiMax.toFixed(1) + measure.value
            + "</br> O'Conner: " + oconnerMax.toFixed(1) + measure.value;
    }
    else {
        resposta.innerHTML = "Please give weight bigger than 0, and number of reps";
    }
}
  