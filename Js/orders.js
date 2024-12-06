let burgers = [{
    "img": "assets/delicious-burgers-with-bright-lights.jpg",
    "name": "BaconCheeseBurger",
    "Dis": "classic cheeseburger and add delicious crunchy",
    "price": "Rs. 1,999"
},
{
    "img": "assets/high-angle-burgers-with-fries-sauce-beer-with-copy-space.jpg",
    "name": "Turkey Burger",
    "Dis": "The turkey sandwich inspired the turkey burger",
    "price": "Rs. 899"
},
{
    "img": "assets/front-view-yummy-french-fries-with-cheeseburgers-dark-background-snack-dish-fast-food-sandwich-toast-burgers-dinner.jpg",
    "name": "Lamb Burger",
    "Dis": "For those who love lamb meat",
    "price": "Rs. 2,199"
},
{
    "img": "assets/view-delicious-burgers-with-buns-cheese (1).jpg",
    "name": "Beef burger",
    "Dis": "Classic burger with juicy beef patties",
    "price": "Rs. 1,330"
},
{
    "img": "assets/side-view-chicken-burgers-with-french-fries-ketchup-mayonnaise-board.jpg",
    "name": "Veggie Burger",
    "Dis": "veggie burger made with plant-based ingredients",
    "price": "Rs. 650"
},
{
    "img": "assets/view-delicious-burgers-with-buns-cheese.jpg",
    "name": "Chicken Burger",
    "Dis": "Chicken burgers are made with ground chicken meat",
    "price": "Rs. 1,250"
},
{
    "img": "assets/front-view-burgers-stand.jpg",
    "name": "chile cheeseburger",
    "Dis": "is a Mexican variation of a classic burger",
    "price": "Rs. 1,550"
},
{
    "img": "assets/big-tasty-burgers.jpg",
    "name": "Onion burger",
    "Dis": "onion burger with smashing onions into a beef patty",
    "price": "Rs. 980"
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
                    <span class="text-title">${element.price}</span>
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

    document.getElementById("card-box").innerHTML=body;

}