const itemInput = document.getElementById("item-input");
const addToListBtn = document.getElementById("add-btn");
const shoppingList = document.getElementById("shopping-list");

addToListBtn.addEventListener("click", () => {
    const inputValue = itemInput.value.trim();
    if (!inputValue) return;

    const li = document.createElement("li");
    li.innerText = inputValue;

    const purchaseBtn = document.createElement("button");
    purchaseBtn.classList.add("purchase-btn", "item-btn");
    purchaseBtn.innerText = "Purchase";

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn", "item-btn");
    removeBtn.innerText = "Remove";

    li.append(purchaseBtn, removeBtn);
    shoppingList.append(li);

    itemInput.value = "";
    itemInput.focus();
});

shoppingList.addEventListener("click", (event) => {
    if (event.target.classList.contains("purchase-btn")) {
        const purchaseBtn = event.target;
        const li = purchaseBtn.closest("li");

        li.classList.toggle("purchased");

        if (li.classList.contains("purchased")) {
            purchaseBtn.innerText = "Undo";
        } else {
            purchaseBtn.innerText = "Purchase";
        }
    }

    if (event.target.classList.contains("remove-btn")) {
        const li = event.target.closest("li");
        li.remove();
    }
});