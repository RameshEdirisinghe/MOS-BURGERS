function login(){
    const adminUsername = "admin";
    const adminPassword = "admin1234";

    const cashierUsername = "cashier";
    const cashiePassword = "cashier1234";

    let inputusername = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;

    if (inputusername==adminUsername && adminPassword==inputPassword) {
        window.location.assign("home-Admin.html");
    }
    else if(cashierUsername==inputusername && cashiePassword==inputPassword){
        window.location.assign("home-Admin.html");
    }
}
