function ORM() {
    let weight = document.querySelector("#weight");
    let reps = document.querySelector("#reps");
    let measure = document.querySelector("#measure");
    if (reps.value > 0 && weight.value > 0) {
        let resposta = document.querySelector("#resposta");
        const brzyckiMax = weight.value * (36 / (37 - reps.value));
        resposta.innerHTML = 
            "You're extimated one rep max is " + brzyckiMax.toFixed(1) + measure.value;
    }
    else {
        resposta.innerHTML = "Please give weight bigger than 0, and number of reps";
    }
}
  
