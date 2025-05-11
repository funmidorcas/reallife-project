


document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("top");
    const subTotal = document.querySelector(".rowww");
    const Total = document.getElementById("total");
    const reset = document.querySelector(".delete");
    const submit = document.querySelector(".complete-butt");  
    const tax = document.getElementById("tax");
    const delivery = document.getElementById("delivery")

    let cartCount = 0;
    let subTotalAmount = 0;

    const exchangeRates = {
        usd: 1,    
        ngn: 1600, 
        ced: 16,   
    };

    let currentCurrency = 'usd'; 

    const currencySelect = document.getElementById('unit');
    currencySelect.addEventListener('change', function () {
        currentCurrency = this.value;
        updateCurrency();
    });

    const items = document.querySelectorAll(".item");

    items.forEach(function (item) {
        const minus = item.querySelector(".minus");
        const added = item.querySelector(".plus");
        const counting = item.querySelector(".result");
        const note = item.parentElement.querySelector(".tag");
        const itemPrice = parseFloat(item.getAttribute("data-price"));
        let count = 0;

        added.addEventListener("click", function () {
            count += 1;
            cartCount += 1;
            subTotalAmount += itemPrice;

            counting.textContent = count;
            cartIcon.textContent = cartCount;
            if (note) note.textContent = formatPrice(count * itemPrice);
            updateCurrency();
        });

        minus.addEventListener("click", function () {
            if (count > 0) {
                count -= 1;
                cartCount -= 1;
                subTotalAmount -= itemPrice;

                counting.textContent = count;
                cartIcon.textContent = cartCount;
                if (note) note.textContent = formatPrice(count * itemPrice);
                updateCurrency();
            }
        });
    });

    // submit.addEventListener("click", function () {
    //     if (cartCount === 0) {
    //         alert("Your cart is empty!");
    //         return;
    //     }


    //     alert("Order Submitted!");
    //     const sub = formatPrice(subTotalAmount);
    //     const tot = formatPrice(subTotalAmount + 6); 

    //     console.log("Subtotal: " + sub);
    //     console.log("Total: " + tot);

    //     cartCount = 0;
    //     subTotalAmount = 0;

    //     items.forEach(function (item) {
    //         const counting = item.querySelector(".result");
    //         const note = item.querySelector(".tot");
    //         counting.textContent = 0;
    //         if (note) note.textContent = formatPrice(0);
    //     });

    //     cartIcon.textContent = cartCount;
    //     subTotal.textContent = "Subtotal: " + formatPrice(subTotalAmount);
    //     Total.textContent = "Total: " + formatPrice(subTotalAmount + 6);
    //     window.location.href = "orderconfirm.html";

    // });



    submit.addEventListener("click", function () {
        if (cartCount === 0) {
            alert("Your cart is empty!");
            return;
        }
    
        const taxAmount = subTotalAmount * 0.05;
        const deliveryAmount = subTotalAmount * 0.10;
        const totalAmount = subTotalAmount + taxAmount + deliveryAmount;
    
        const orderItems = [];
    
        items.forEach(function (item) {
            const name = item.getAttribute("data-name");
            const price = parseFloat(item.getAttribute("data-price"));
            const count = parseInt(item.querySelector(".result").textContent);
    
            if (count > 0) {
                orderItems.push({
                    name: name,
                    price: price,
                    quantity: count,
                    total: count * price
                });
            }
        });
    
        const orderData = {
            subtotal: subTotalAmount,
            tax: taxAmount,
            delivery: deliveryAmount,
            total: totalAmount,
            currency: currentCurrency,
            items: orderItems
        };
    
        localStorage.setItem("orderInfo", JSON.stringify(orderData));
    
        window.location.href = "orderconfirm.html";
    });

    reset.addEventListener("click", function () {
        cartCount = 0;
        subTotalAmount = 0;

        items.forEach(function (item) {
            const counting = item.querySelector(".result");
            const note = item.querySelector(".tot");
            counting.textContent = 0;
            if (note) note.textContent = formatPrice(0);
        });

        cartIcon.textContent = cartCount;
        subTotal.textContent = "Subtotal: " + formatPrice(subTotalAmount);
        Total.textContent = "Total: " + formatPrice(subTotalAmount + 6);
    });

    function formatPrice(amount) {
        if (currentCurrency === 'usd') {
            return "$" + amount.toFixed(2);
        } else if (currentCurrency === 'ngn') {
            return "₦" + (amount * exchangeRates.ngn).toFixed(2);
        } else if (currentCurrency === 'ced') {
            return "C" + (amount * exchangeRates.ced).toFixed(2);
        }
    }

    function updateCurrency() {
        const taxAmount = subTotalAmount * 0.05;
        const deliveryAmount = subTotalAmount * 0.10;
        const totalAmount = subTotalAmount + taxAmount + deliveryAmount;
    
        subTotal.textContent = formatPrice(subTotalAmount);
        tax.textContent = formatPrice(taxAmount);
        delivery.textContent = formatPrice(deliveryAmount);
        Total.textContent = "Total: " + formatPrice(totalAmount);
    }
    const addToCart = document.querySelectorAll(".green-button");
    let clickCount = 0;

    addToCart.forEach(function (btn) {
        btn.addEventListener("click", function () {
            clickCount++;
            alert("Added to Cart!");
            console.log("Total add to cart clicks: " + clickCount);
        });
    });
});