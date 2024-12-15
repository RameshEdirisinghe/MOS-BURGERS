document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const nameInput = document.getElementById("customer-name");
    const phoneInput = document.getElementById("customer-phone");
    const dateInput = document.getElementById("register-date");
    const addCustomerBtn = document.getElementById("add-customer-btn");
    const customerTableBody = document.getElementById("customer-table").querySelector("tbody");

    // Data Storage
    let customers = [];
    let editIndex = null;

    // Function to render the customer table
    function renderTable() {
        customerTableBody.innerHTML = ""; // Clear the table before rendering

        customers.forEach((customer, index) => {
            const row = document.createElement("tr");

            // Populate row content
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.date}</td>
                <td class="btn-container">
                    <button class="btn-update" data-index="${index}">Update</button>
                    <button class="btn-delete" data-index="${index}">Delete</button>
                </td>
            `;

            customerTableBody.appendChild(row);
        });
    }

    // Function to reset the form
    function resetForm() {
        nameInput.value = "";
        phoneInput.value = "";
        dateInput.value = "";
        editIndex = null;
        addCustomerBtn.textContent = "Add Customer";
    }

    // Function to add or update a customer
    function handleAddOrUpdateCustomer() {
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const date = dateInput.value.trim();

        if (!name || !phone || !date) {
            alert("Please fill in all fields.");
            return;
        }

        if (editIndex !== null) {
            // Update existing customer
            customers[editIndex] = { name, phone, date };
        } else {
            // Add new customer
            customers.push({ name, phone, date });
        }

        resetForm();
        renderTable();
    }

    // Function to handle editing a customer
    function handleEditCustomer(index) {
        const customer = customers[index];

        nameInput.value = customer.name;
        phoneInput.value = customer.phone;
        dateInput.value = customer.date;

        editIndex = index;
        addCustomerBtn.textContent = "Update Customer";
    }

    // Function to handle deleting a customer
    function handleDeleteCustomer(index) {
        if (confirm("Are you sure you want to delete this customer?")) {
            customers.splice(index, 1);
            renderTable();
        }
    }

    // Add event listener for the Add/Update button
    addCustomerBtn.addEventListener("click", handleAddOrUpdateCustomer);

    // Event delegation for update and delete buttons
    customerTableBody.addEventListener("click", (event) => {
        const target = event.target;
        const index = parseInt(target.getAttribute("data-index"), 10);

        if (target.classList.contains("btn-update")) {
            handleEditCustomer(index);
        } else if (target.classList.contains("btn-delete")) {
            handleDeleteCustomer(index);
        }
    });

    // Initial rendering of the table
    renderTable();
});
