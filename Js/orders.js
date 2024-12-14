let allmeals = [{
    img: "assets/delicious-burgers-with-bright-lights.jpg",
    name: "BaconCheeseBurger",
    Id: "001",
    Dis: "classic cheeseburger and add delicious crunchy",
    price: 1999
},
{
    img: "assets/high-angle-burgers-with-fries-sauce-beer-with-copy-space.jpg",
    name: "Turkey Burger",
    Id: "002",
    Dis: "The turkey sandwich inspired the turkey burger",
    price: 899
},
{
    img: "assets/front-view-yummy-french-fries-with-cheeseburgers-dark-background-snack-dish-fast-food-sandwich-toast-burgers-dinner.jpg",
    name: "Lamb Burger",
    Id: "003",
    Dis: "For those who love lamb meat",
    price: 2199
},
{
    img: "assets/view-delicious-burgers-with-buns-cheese (1).jpg",
    name: "Beef burger",
    Id: "004",
    Dis: "Classic burger with juicy beef patties",
    price: 1330
},
{
    img: "assets/side-view-chicken-burgers-with-french-fries-ketchup-mayonnaise-board.jpg",
    name: "Veggie Burger",
    Id: "005",
    Dis: "veggie burger made with plant-based ingredients",
    price: 650
},
{
    img: "assets/view-delicious-burgers-with-buns-cheese.jpg",
    name: "Chicken Burger",
    Id: "006",
    Dis: "Chicken burgers are made with ground chicken meat",
    price: 1250
},
{
    img: "assets/front-view-burgers-stand.jpg",
    name: "chile cheeseburger",
    Id: "007",
    Dis: "is a Mexican variation of a classic burger",
    price: 1550
},
{
    img: "assets/front-view-burger-fries-plate.jpg",
    name: "Onion burger",
    Id: "008",
    Dis: "onion burger with smashing onions into a beef patty",
    price: 980
},
{
    img: "assets/delicious-hot-dogs-arrangement.jpg",
    name: "Hot dogs",
    Id: "009",
    Dis: "is a Mexican variation of a classic burger",
    price: 1250
},
{
    img: "assets/high-angle-tasty-hot-dogs-plate.jpg",
    name: "Jmbo Hot dog",
    Id: "010",
    Dis: "is a Mexican variation of a classic burger",
    price: 1550
},
{
    img: "assets/crispy-french-fries-with-ketchup-mayonnaise.jpg",
    name: "Fries",
    Id: "011",
    Dis: "French fries are served hot, either soft or crispy",
    price: 650
},
{
    img: "assets/french-fries-portion-ai-generated-image.jpg",
    name: "Jambo Fries",
    Id: "012",
    Dis: "French fries are served hot, either soft or crispy",
    price: 950
},
{
    img: "assets/2321138.jpg",
    name: "Pepsi",
    Id: "013",
    Dis: "Pepsi is a carbonated soft drink with a cola flavor",
    price: 250
},
{
    img: "assets/pexels-karolina-grabowska-4389675.jpg",
    name: "Coke",
    Id: "013",
    Dis: "Coke, is a cola soft drink manufactured by the Coca-Cola Company",
    price: 250
},
{
    img: "assets/istockphoto-458735615-612x612.jpg",
    name: "Red Bull",
    Id: "800",
    Dis: "Red Bull is a brand of energy drinks ",
    price: 700
}]

let totalAmount =0;
let changeAmount =0;

let body = `<div class="row">
                <nav>

                    <input type="checkbox" id="check">
            
                    <label for="check" class="checkbtn">
                        <i class="fas fa-bars"></i>
                    </label>
            
                    <label class="logo">Mos Burgers</label>
            
                    
                </nav>
            </div>`;
allmeals.forEach(element => {
    body += `<div class="card">
                <div class="card-img"><img src="${element.img}" style="height: 100px;" class="card-img-sc" alt=""></div>
                <div class="card-info">
                    <p class="text-title">${element.name}</p>
                    <p class="text-body">${element.Dis}</p>
                </div>
                <div class="card-footer">
                    <span class="text-title">Rs. ${element.price}</span>
                    <div class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20" onclick="add('${element.Id}')">
                            <path
                                d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z">
                            </path>
                            <path
                                d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z">
                            </path>
                            <path
                                d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>`

});

document.getElementById("card-box").innerHTML = body;







let burgers = [{
    img: "assets/delicious-burgers-with-bright-lights.jpg",
    name: "BaconCheeseBurger",
    Id: "001",
    Dis: "classic cheeseburger and add delicious crunchy",
    price: 1999
},
{
    img: "assets/high-angle-burgers-with-fries-sauce-beer-with-copy-space.jpg",
    name: "Turkey Burger",
    Id: "002",
    Dis: "The turkey sandwich inspired the turkey burger",
    price:899
},
{
    img: "assets/front-view-yummy-french-fries-with-cheeseburgers-dark-background-snack-dish-fast-food-sandwich-toast-burgers-dinner.jpg",
    name: "Lamb Burger",
    Id: "003",
    Dis: "For those who love lamb meat",
    price:2199
},
{
    img: "assets/view-delicious-burgers-with-buns-cheese (1).jpg",
    name: "Beef burger",
    Id: "004",
    Dis: "Classic burger with juicy beef patties",
    price: 1330
},
{
    img: "assets/side-view-chicken-burgers-with-french-fries-ketchup-mayonnaise-board.jpg",
    name: "Veggie Burger",
    Id: "005",
    Dis: "veggie burger made with plant-based ingredients",
    price:650
},
{
    img: "assets/view-delicious-burgers-with-buns-cheese.jpg",
    name: "Chicken Burger",
    Id: "006",
    Dis: "Chicken burgers are made with ground chicken meat",
    price:1250
},
{
    img: "assets/front-view-burgers-stand.jpg",
    name: "chile cheeseburger",
    Id: "007",
    Dis: "is a Mexican variation of a classic burger",
    price: 1550
},
{
    img: "assets/front-view-burger-fries-plate.jpg",
    name: "Onion burger",
    Id: "008",
    Dis: "onion burger with smashing onions into a beef patty",
    price: 980
}]

function burger() {
    console.log("click");
    let body = `<div class="row">
                <nav>

                    <input type="checkbox" id="check">
            
                    <label for="check" class="checkbtn">
                        <i class="fas fa-bars"></i>
                    </label>
            
                    <label class="logo">Mos Burgers</label>
            
                    
                </nav>
            </div>`;
    burgers.forEach(element => {
        body += `<div class="card">
                <div class="card-img"><img src="${element.img}" style="height: 100px;" class="card-img-sc" alt=""></div>
                <div class="card-info">
                    <p class="text-title">${element.name}</p>
                    <p class="text-body">${element.Dis}</p>
                </div>
                <div class="card-footer">
                    <span class="text-title">Rs. ${element.price}</span>
                    <div class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                            <path
                                d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z">
                            </path>
                            <path
                                d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z">
                            </path>
                            <path
                                d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>`

    });

    document.getElementById("card-box").innerHTML = body;

}

function add(mealId) {

    for (let i = 0; i < allmeals.length; i++) {
        if (allmeals[i].Id == mealId) {

            let itemFound = false;
            for (let j = 0; j < addcart.length; j++) {
                if (addcart[j].Id == mealId) {

                    addcart[j].qty++;
                    itemFound = true;
                    break;
                }
            }

            if (!itemFound) {

                addcart.push({
                    Id: allmeals[i].Id,
                    name: allmeals[i].name,
                    price: allmeals[i].price,
                    img: allmeals[i].img,
                    qty: 1
                });
            }
            updatecart();
            break;
        }
    }
}


function updatecart(){
    console.log(addcart);
    
    let cardbody = "";
    let total = 0;
    addcart.forEach(meals => {
        total += meals.price * meals.qty;
        cardbody += `<div class="cartCard">
                        <svg class="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                            fill-opacity="1"
                          ></path>
                        </svg>
                      
                        <div class="icon-container">
                          <img src="${meals.img}"
                            class="icon"
                          >
                            <path
                              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                            ></path>
                          </img>
                        </div>
                        <div class="message-text-container">
                          <p class="message-text">${meals.name}</p>
                          <p class="sub-text">Rs.${meals.price}</p>
                          <p class="sub-text">${meals.qty}</p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 15 15"
                          stroke-width="0"
                          fill="none"
                          stroke="currentColor"
                          class="cross-icon"
                          onclick="removeOrder('${meals.Id}')">
                          <path
                            fill="currentColor"
                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>`
    })

    totalAmount=total;
    console.log(total);
    
    document.getElementById("cartBody").innerHTML=cardbody;
    document.getElementById("total-price-value").innerHTML = `Rs. ${total}`;

   
}

let addcart = [];

function calculateTotal() {
    const itemPrices = document.querySelectorAll('.cart-item-price'); // Adjust the selector to match your price elements
    let total = 0;
    itemPrices.forEach(item => {
        total += parseFloat(item.textContent.replace('Rs.', '').trim());
    });
    document.getElementById('total-price-value').textContent = `Rs. ${total}`;
    calculateChange(); // Update change if needed
}

function calculateChange() {
    const total = parseFloat(
        document.getElementById('total-price-value').textContent.replace('Rs.', '').trim()
    );
    const received = parseFloat(
        document.getElementById('received-amount-input').value || 0
    );
    const change = received - total;
    changeAmount = change;
    // Update the change amount dynamically
    document.getElementById('change-amount-value').textContent =
        change >= 0 ? `Rs. ${change}` : 'Rs. 0';
}

function printBill() {
    let items = addcart.map((element) =>  
        `<tr><td>${element.name || "Unknown Item"}</td><td class="ps-2">${element.qty || 0}</td></tr>` 
    ).join("");
    const received = parseFloat(
        document.getElementById('received-amount-input').value || 0
    );


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-primary"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "Order Placed..!",
        html: `
            <div style="text-align: left; font-family: Arial, sans-serif;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 1px solid #ddd;">
                            <th style="text-align: left; padding: 5px;">Item</th>
                            <th style="text-align: left; padding: 5px;">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${items || "<tr><td colspan='2'>No items added</td></tr>"}
                    </tbody>
                </table>
                <br>
                <p style="margin-top: 10px;"><strong>Total Amount:</strong> Rs. ${totalAmount.toFixed(2)}</p>
                <p style="margin-top: 10px;"><strong>Received amount:</strong> Rs. ${received.toFixed(2)}</p>
                <p><strong>Discount:</strong> 0%</p>
                <p><strong>Change Amount:</strong> Rs. ${changeAmount.toFixed(2)}</p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Print Bill",
        cancelButtonText: "Cancel",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.setFont("helvetica");

            // Header Section
            doc.setFontSize(18);
            doc.text("MOS BURGERS", 105, 20, null, null, "center");
            doc.setFontSize(12);
            doc.text("INVOICE", 105, 30, null, null, "center");

            // Customer Info
            let yPosition = 40;
            doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, yPosition);
            yPosition += 10;

            // Table Header
            doc.setFontSize(12);
            doc.text("Item", 10, yPosition);
            doc.text("Qty", 140, yPosition);
            yPosition += 10;

            // Table Body
            addcart.forEach((item) => {
                doc.text(item.name, 10, yPosition);
                doc.text(`${item.qty}`, 140, yPosition, null, null, "right");
                yPosition += 10;
            });

            // Total and Final Amount
            yPosition += 10;
            doc.text(`Total Amount: Rs. ${totalAmount.toFixed(2)}`, 10, yPosition);
            yPosition += 5;
            doc.text(`Received Amount: Rs. ${received.toFixed(2)}`, 10, yPosition);
            yPosition += 5;
            doc.text(`Change Amount: Rs. ${changeAmount.toFixed(2)}`, 10, yPosition);

            // Footer Message
            yPosition += 20;
            doc.setFontSize(10);
            doc.text("Thank you for your purchase!", 105, yPosition, null, null, "center");

            // Save PDF
            doc.save("Order_Bill.pdf");
        }
    });
}

function removeOrder(itemCode) {
    console.log(itemCode);
    
    addcart = addcart.filter(item => item.Id !== itemCode);
    updatecart();    
}

calculateTotal();
