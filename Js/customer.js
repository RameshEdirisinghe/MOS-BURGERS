document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("customer-name");
    const phoneInput = document.getElementById("customer-phone");
    const dateInput = document.getElementById("register-date");
    const addCustomerBtn = document.getElementById("add-customer-btn");
    const customerTable = document.getElementById("customer-table").querySelector("tbody");

    let customers = [];
    let editIndex = null;

    // Render the customer table
    function renderTable() {
        customerTable.innerHTML = "";

        customers.forEach((customer, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.date}</td>
                <td class="btn-container">
                    <button class="btn-update" onclick="editCustomer(${index})">Update</button>
                    <button class="btn-delete" onclick="deleteCustomer(${index})">Delete</button>
                </td>
            `;
            customerTable.appendChild(row);
        });
    }

    // Add a new customer
    addCustomerBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const date = dateInput.value.trim();

        if (!name || !phone || !date) {
            alert("Please fill in all fields.");
            return;
        }

        if (editIndex !== null) {
            // Update customer
            customers[editIndex] = { name, phone, date };
            editIndex = null;
            addCustomerBtn.textContent = "Add Customer";
        } else {
            // Add new customer
            customers.push({ name, phone, date });
        }

        nameInput.value = "";
        phoneInput.value = "";
        dateInput.value = "";
        renderTable();
    });

    // Edit a customer
    window.editCustomer = function (index) {
        const customer = customers[index];
        nameInput.value = customer.name;
        phoneInput.value = customer.phone;
        dateInput.value = customer.date;

        editIndex = index;
        addCustomerBtn.textContent = "Update Customer";
    };

    // Delete a customer
    window.deleteCustomer = function (index) {
        if (confirm("Are you sure you want to delete this customer?")) {
            customers.splice(index, 1);
            renderTable();
        }
    };

    // Initial rendering
    renderTable();
});
