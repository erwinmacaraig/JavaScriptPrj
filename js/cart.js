window.onload = function() {
    let cartItems = [];
    init();

    function init() {
        cartItems = JSON.parse(sessionStorage.getItem('cart')).items || [];
        loadItems(cartItems);
        bindEvents();
    }

    function loadItems(items) {        
        console.log(items);
        let pEl = document.getElementById('cart-items-list');
        pEl.innerHTML = '';
        var itemsTotal = 0;
        let item = '';
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            let itemTotal = items[i].item.price * items[i].amount;
            item += '<tr>';
            item += '<td>' + items[i].item.id + '</td>';
            item += '<td>' + items[i].item.name + '</td>';
            item += '<td>$' + items[i].item.price + '</td>';
            item += '<td>' + items[i].amount + '</td>';
            item += '<td>$' + itemTotal + '</td>';
            item +=
                '<td> <button data-item-id="' +
                items[i].item.id + '" class="btn btn-danger remove-item-btn">Remove</button></td>';
            item += '</tr>';            
            itemsTotal += itemTotal;
        }
        pEl.innerHTML = item;        
        document.getElementById('total').innerHTML = itemsTotal.toFixed(2);
    }

    function bindEvents() {
        document.querySelectorAll(".remove-item-btn").forEach(function (el) {
            el.addEventListener('click', function (event) {
                let id = event.target.dataset.itemId;
                console.log(id);
                removeItem(id);
            });
        });
    }

    function removeItem(id) {
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].item.id === id) {
                cartItems.splice(i, 1); // remove item from array
                sessionStorage.setItem(
                    'cart',
                    JSON.stringify({ items: cartItems })
                );
                init();
                break;
            }
        }
    }
};