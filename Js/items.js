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


document.addEventListener("DOMContentLoaded", function() {
    const itemForm = document.getElementById('item-form');
    const itemNameInput = document.getElementById('item-name');
    const itemPriceInput = document.getElementById('item-price');
    const itemImageInput = document.getElementById('item-image');
    const itemList = document.getElementById('item-list');
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');


    function renderItems(itemsToDisplay) {
        itemList.innerHTML = '';
        itemsToDisplay.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>Rs. ${item.price}.00</p>
                <div>
                    <button class="update" onclick="editItem(${index})">Update</button>
                    <button class="delete" onclick="deleteItem(${index})">Delete</button>
                </div>
            `;
            itemList.appendChild(card);
        });
    }

    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
        const name = itemNameInput.value.trim();
        const price = parseFloat(itemPriceInput.value.trim());
        const imageFile = itemImageInput.files[0];
    
        if (name && !isNaN(price) && price > 0 && imageFile) {
            const reader = new FileReader();
    
            reader.onloadend = function() {
                const newItem = {
                    name: name,
                    price: price,
                    img: reader.result 
                };
                allmeals.push(newItem); 
                itemNameInput.value = '';
                itemPriceInput.value = '';
                itemImageInput.value = '';
                renderItems(allmeals); 
            };
    
            reader.readAsDataURL(imageFile); 
        } else {
            alert("Please enter valid data.");
        }
    });
    

    window.deleteItem = function(index) {
        allmeals.splice(index, 1);
        renderItems(allmeals); 
    }

    
    window.editItem = function(index) {
        const item = allmeals[index];
        itemNameInput.value = item.name;
        itemPriceInput.value = item.price;

        const submitButton = itemForm.querySelector('button');
        submitButton.textContent = 'Update Item';

        itemForm.onsubmit = function(e) {
            e.preventDefault();

            const updatedName = itemNameInput.value.trim();
            const updatedPrice = parseFloat(itemPriceInput.value.trim());

            if (updatedName && !isNaN(updatedPrice) && updatedPrice > 0) {
                burgerItems[index] = { name: updatedName, price: updatedPrice, image: item.image };
                itemNameInput.value = '';
                itemPriceInput.value = '';
                submitButton.textContent = 'Add Item'; 
                itemForm.onsubmit = addItem; 
                renderItems(allmeals); 
            } else {
                alert("Please enter valid data.");
            }
        };
    }


    searchBtn.addEventListener('click', function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredItems = burgerItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );
        renderItems(filteredItems); 
    });

    renderItems(allmeals);

    function addItem(e) {
        e.preventDefault();

        const name = itemNameInput.value.trim();
        const price = parseFloat(itemPriceInput.value.trim());
        const image = itemImageInput.files[0];

        if (name && !isNaN(price) && price > 0 && image) {
            const reader = new FileReader();

            reader.onloadend = function() {
                const newItem = { 
                    name: name,
                    price: price,
                    image: reader.result
                };
                allmeals.push(newItem);
                itemNameInput.value = '';
                itemPriceInput.value = '';
                itemImageInput.value = '';
                renderItems(burgerItems); 
            };

            reader.readAsDataURL(image);
        } else {
            alert("Please enter valid data.");
        }
    }
});

