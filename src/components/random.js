function dateFunc() {
    let date = document.getElementById("date1").value;
    date = date.replace(/-/g, "");
    var year = parseInt(date.slice(0, 4));
    var month = parseInt(date.slice(4, 6));
    var day = parseInt(date.slice(6, 8));
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    function randomDate() {
        if (month == 1) {
            randomMonth = Math.floor((Math.random() * 3) + 10);
            randomDay = Math.floor((Math.random() * 28) + 1);
            return `${randomDay} ${months[randomMonth - 1]} ${year - 1}`;
        }
        else {
            while (true) {
                randomMonth = Math.floor((Math.random() * month) + 1);
                randomDay = Math.floor((Math.random() * 28) + 1);
                if ((randomMonth < month && randomMonth > month - 3) || (randomMonth == month && randomDay < day)) {
                    return `${randomDay} ${months[randomMonth - 1]} ${year}`;
                }
            }

        }
    }
    localStorage.setItem("date", year + "-" + month.toString().padStart(2, 0) + "-" + day.toString().padStart(2, 0))
    $("#dateResult").text(`${randomDate()} TO ${day} ${months[month - 1]} ${year}`);
}
const rvg = () => {
    let rvgObj = {}
    while (true) {
        rvgObj.psi1 = Math.random() * (8 - 5) + 5;
        rvgObj.psi1 = rvgObj.psi1.toFixed(2);
        rvgObj.psi2 = Math.random() * (12.5 - 10) + 10;
        rvgObj.psi2 = rvgObj.psi2.toFixed(2);
        if (rvgObj.psi2 - rvgObj.psi1 > 3.5 && rvgObj.psi2 - rvgObj.psi1 < 5) {
            break;
        }
    }
    rvgObj.egt1 = 0;
    rvgObj.egt2 = 0;
    rvgObj.egt3 = Math.floor(Math.random() * (17 - 10) + 10);
    rvgObj.egt4 = Math.floor(Math.random() * (50 - 30) + 30);
    rvgObj.egt5 = Math.floor(Math.random() * (120 - 70) + 70);
    return rvgObj;
}
export default { rvg }