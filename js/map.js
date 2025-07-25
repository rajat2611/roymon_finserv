document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const data = {
        "INAN": { name: "Andaman and Nicobar Islands", marketPotential: "1,43,000" },
        "INAP": { name: "Andhra Pradesh", marketPotential: "85,65,000" },
        "INAR": { name: "Arunachal Pradesh", marketPotential: "3,15,000" },
        "INAS": { name: "Assam", marketPotential: "52,00,000" },
        "INBR": { name: "Bihar", marketPotential: "86,75,000" },
        "INCH": { name: "Chandigarh", marketPotential: "10,25,000" },
        "INCT": { name: "Chhattisgarh", marketPotential: "42,50,000" },
        "INDD": { name: "Dadra and Nagar Haveli and Daman and Diu", marketPotential: "3,42,000" },
        "INDL": { name: "Delhi", marketPotential: "33,50,000" },
        "INGA": { name: "Goa", marketPotential: "9,05,000" },
        "INGJ": { name: "Gujarat", marketPotential: "1,00,75,000" },
        "INHR": { name: "Haryana", marketPotential: "42,25,000" },
        "INHP": { name: "Himachal Pradesh", marketPotential: "6,88,000" },
        "INJK": { name: "Jammu and Kashmir", marketPotential: "20,48,000" },
        "INJH": { name: "Jharkhand", marketPotential: "55,50,000" },
        "INKA": { name: "Karnataka", marketPotential: "1,02,00,000" },
        "INKL": { name: "Kerala", marketPotential: "55,65,000" },
        "INLA": { name: "Ladakh", marketPotential: "2,30,000" },
        "INLD": { name: "Lakshadweep", marketPotential: "14,500" },
        "INMP": { name: "Madhya Pradesh", marketPotential: "90,78,000" },
        "INMH": { name: "Maharashtra", marketPotential: "1,87,29,000" },
        "INMN": { name: "Manipur", marketPotential: "7,75,000" },
        "INML": { name: "Meghalaya", marketPotential: "5,95,000" },
        "INMZ": { name: "Mizoram", marketPotential: "5,71,000" },
        "INNL": { name: "Nagaland", marketPotential: "5,70,000" },
        "INOR": { name: "Odisha", marketPotential: "69,95,000" },
        "INPY": { name: "Puducherry", marketPotential: "8,52,000" },
        "INPB": { name: "Punjab", marketPotential: "46,25,000" },
        "INRJ": { name: "Rajasthan", marketPotential: "1,14,25,000" },
        "INSK": { name: "Sikkim", marketPotential: "1,52,000" },
        "INTN": { name: "Tamil Nadu", marketPotential: "1,20,25,000" },
        "INTG": { name: "Telangana", marketPotential: "58,50,000" },
        "INTR": { name: "Tripura", marketPotential: "9,61,000" },
        "INUP": { name: "Uttar Pradesh", marketPotential: "1,66,50,000" },
        "INUT": { name: "Uttarakhand", marketPotential: "30,50,000" },
        "INWB": { name: "West Bengal", marketPotential: "1,14,10,000" },
    };

    const states = document.querySelectorAll("svg path");

    states.forEach(state => {
        state.addEventListener("click", function() {
            console.log("Clicked on state:", this.id);
             // Reset all states to default color
             states.forEach(s => {
                s.setAttribute("fill", "#d1dbdd");
                s.style.fill = "#d1dbdd";  // Ensure both methods are used
            });

            // Set the clicked state to green
            this.setAttribute("fill", "#00ff00");
            this.style.fill = "#00ff00";  // Ensure both methods are used

            
            // Verify if the fill style has been changed
            console.log("New fill color:", this.style.fill);
            
            const stateId = this.id;
            const stateData = data[stateId];

            if (stateData) {
                document.getElementById("state-name").textContent = stateData.name;
                document.getElementById("market-potential").textContent = `Market Potential: ${stateData.marketPotential}`;
                document.getElementById("info-box").style.display = "block";
            }
        });
    });
});
