let allMeals = [{
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
    const itemDescriptionInput = document.getElementById('item-dis');
    const itemImageInput = document.getElementById('item-image');
    const itemList = document.getElementById('item-list');
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');

    let isEditing = false;
    let editIndex = null;

  
    function renderItems(items) {
        itemList.innerHTML = ''; 

        items.forEach((item, index) => {
            
            const card = document.createElement('div');
            card.classList.add('card');

  
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="item-image">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p>Rs. ${item.price}.00</p>
                <div class="button-group">
                    <button class="update-btn" data-index="${index}">Update</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;


            itemList.appendChild(card);
        });
    }


    function resetForm() {
        itemForm.reset();
        isEditing = false;
        editIndex = null;
        itemForm.querySelector('button').textContent = 'Add Item';
    }

 
    function generateId() {
        return `ID_${Date.now()}`;
    }

 
    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = itemNameInput.value.trim();
        const price = parseFloat(itemPriceInput.value.trim());
        const description = itemDescriptionInput.value.trim();
        const imageFile = itemImageInput.files[0];

        if (name === '' || isNaN(price) || price <= 0 || ( !isEditing && !imageFile)) {
            alert("Please enter valid data.");
            return;
        }

       
        function processItem(imgSrc) {
            if (isEditing) {

                allMeals[editIndex].name = name;
                allMeals[editIndex].price = price;
                allMeals[editIndex].description = description;
                if (imgSrc) {
                    allMeals[editIndex].img = imgSrc;
                }
            } else {

                const newItem = {
                    img: imgSrc,
                    name: name,
                    id: generateId(),
                    description: description,
                    price: price
                };
                allMeals.push(newItem);
            }
            renderItems(allMeals);
            resetForm();
        }


        if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = function() {
                processItem(reader.result);
            };
            reader.readAsDataURL(imageFile);
        } else {
            processItem(null);
        }
    });


    itemList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            deleteItem(index);
        }

        if (e.target.classList.contains('update-btn')) {
            const index = e.target.getAttribute('data-index');
            editItem(index);
        }
    });


    function deleteItem(index) {
        if (confirm("Are you sure you want to delete this item?")) {
            allMeals.splice(index, 1);
            renderItems(allMeals);
            if (isEditing && editIndex == index) {
                resetForm();
            }
        }
    }


    function editItem(index) {
        const item = allMeals[index];
        itemNameInput.value = item.name;
        itemPriceInput.value = item.price;
        itemDescriptionInput.value = item.description;
   

        isEditing = true;
        editIndex = index;
        itemForm.querySelector('button').textContent = 'Update Item';
    }


    searchBtn.addEventListener('click', function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredItems = allMeals.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );
        renderItems(filteredItems);
    });

    renderItems(allMeals);
});


