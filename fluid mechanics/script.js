document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculate-discharge");

    const dischargePipe1 = document.getElementById("discharge-pipe1");
    const dischargePipe2 = document.getElementById("discharge-pipe2");

    calculateBtn.addEventListener("click", () => {
        // Pipe 1 inputs
        const h1_pipe1 = parseFloat(document.getElementById("h1_pipe1").value);
        const h2_pipe1 = parseFloat(document.getElementById("h2_pipe1").value);
        const t_pipe1 = parseFloat(document.getElementById("t_pipe1").value);

        // Pipe 2 inputs
        const h1_pipe2 = parseFloat(document.getElementById("h1_pipe2").value);
        const h2_pipe2 = parseFloat(document.getElementById("h2_pipe2").value);
        const t_pipe2 = parseFloat(document.getElementById("t_pipe2").value);
        console.log(h1_pipe1,h2_pipe1,t_pipe1);
        console.log(h1_pipe2,h2_pipe2,t_pipe2);
        // Function to calculate discharge
        const calculateDischarge = (h1, h2, t) => {
            if (!isNaN(h1) && !isNaN(h2) && !isNaN(t) && t > 0) {
                return 900 * (h2 - h1) / t; // Formula for discharge (Q)
            } else {
                return null; // Invalid values
            }
        };

        // Pipe 1 Calculation
        const Q1 = calculateDischarge(h1_pipe1, h2_pipe1, t_pipe1);
        if (Q1 !== null) {
            dischargePipe1.innerText = `Discharge for Pipe 1: ${Q1.toFixed(2)} cm³/s`;
            dischargePipe1.classList.remove("hidden");
        } else {
            dischargePipe1.innerText = "Invalid values for Pipe 1. Please check your inputs.";
            dischargePipe1.classList.remove("hidden");
        }

        // Pipe 2 Calculation
        const Q2 = calculateDischarge(h1_pipe2, h2_pipe2, t_pipe2);
        if (Q2 !== null) {
            dischargePipe2.innerText = `Discharge for Pipe 2: ${Q2.toFixed(2)} cm³/s`;
            dischargePipe2.classList.remove("hidden");
        } else {
            dischargePipe2.innerText = "Invalid values for Pipe 2. Please check your inputs.";
            dischargePipe2.classList.remove("hidden");
        }
    });
});











document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculate-btn");

    const result1 = document.getElementById("result1");
    const result2 = document.getElementById("result2");

    calculateBtn.addEventListener("click", () => {
        // Pipe 1 Inputs
        const h1_pipe1 = parseFloat(document.getElementById("h1_pipe11").value);
        const h2_pipe1 = parseFloat(document.getElementById("h2_pipe11").value);
        const dia_pipe1 = parseFloat(document.getElementById("dia_pipe1").value);
        const length_pipe1 = parseFloat(document.getElementById("length_pipe1").value) * 100; // Convert to cm
        const discharge_pipe1 = parseFloat(document.getElementById("discharge_pipe1").value);

        // Pipe 2 Inputs
        const h1_pipe2 = parseFloat(document.getElementById("h1_pipe22").value);
        const h2_pipe2 = parseFloat(document.getElementById("h2_pipe22").value);
        const dia_pipe2 = parseFloat(document.getElementById("dia_pipe2").value);
        const length_pipe2 = parseFloat(document.getElementById("length_pipe2").value) * 100; // Convert to cm
        const discharge_pipe2 = parseFloat(document.getElementById("discharge_pipe2").value);
        console.log(h1_pipe1,h2_pipe1,dia_pipe1,length_pipe1,discharge_pipe1);
        console.log(h1_pipe2,h2_pipe2,dia_pipe2,length_pipe2,discharge_pipe2);
        // Validation Function
        const validateInputs = (h1, h2, dia, length, discharge) => {
            return !isNaN(h1) && !isNaN(h2) && !isNaN(dia) && !isNaN(length) && !isNaN(discharge) &&
                   h1 > h2 && dia > 0 && length > 0 && discharge > 0;
        };

        // Friction Factor Calculation Function
        const calculateFrictionFactor = (h1, h2, dia, length, discharge) => {
            const pi = Math.PI;
            const g = 981; // cm/s²
            const R = h1 - h2;
            return (12.6 * R * pi * Math.pow(dia, 3) * g) / (2 * length * Math.pow(discharge, 2));
        };

        // Calculate and Display Results for Pipe 1
        if (validateInputs(h1_pipe1, h2_pipe1, dia_pipe1, length_pipe1, discharge_pipe1)) {
            const frictionFactor1 = calculateFrictionFactor(h1_pipe1, h2_pipe1, dia_pipe1, length_pipe1, discharge_pipe1);
            result1.innerText = `Pipe 1 Friction Factor (f): ${frictionFactor1.toFixed(6)}`;
            result1.classList.remove("hidden");
        } else {
            result1.innerText = "Invalid inputs for Pipe 1. Check values.";
            result1.classList.remove("hidden");
        }

        // Calculate and Display Results for Pipe 2
        if (validateInputs(h1_pipe2, h2_pipe2, dia_pipe2, length_pipe2, discharge_pipe2)) {
            const frictionFactor2 = calculateFrictionFactor(h1_pipe2, h2_pipe2, dia_pipe2, length_pipe2, discharge_pipe2);
            result2.innerText = `Pipe 2 Friction Factor (f): ${frictionFactor2.toFixed(6)}`;
            result2.classList.remove("hidden");
        } else {
            result2.innerText = "Invalid inputs for Pipe 2. Check values.";
            result2.classList.remove("hidden");
        }
    });
});



























