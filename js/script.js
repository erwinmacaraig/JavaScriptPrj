const products = [
    {
        "id": "1",
        "img": "img/1.jpg",
        "name": "Desktop Power 1",
        "price": "434.00"
    },
    {
        "id": "2",
        "img": "img/2.jpg",
        "name": "Laptop X",
        "price": "1299.34"
    },
    {
        "id": "3",
        "img": "img/3.jpg",
        "name": "Desktop FE",
        "price": "499.00"
    },
    {
        "id": "4",
        "img": "img/1.jpg",
        "name": "Desktop Power 1",
        "price": "434.00"
    },
    {
        "id": "5",
        "img": "img/2.jpg",
        "name": "Laptop XPower",
        "price": "1299.34"
    },
    {
        "id": "6",
        "img": "img/3.jpg",
        "name": "Desktop GeForce",
        "price": "499.00"
    },
    {
        "id": "7",
        "img": "img/1.jpg",
        "name": "Desktop Power 1",
        "price": "434.00"
    },
    {
        "id": "8",
        "img": "img/2.jpg",
        "name": "Laptop X",
        "price": "1299.34"
    }
]
window.onload = function () {
    let items = [];
    let cartItems = [];    
    getItems();
    init();

    function init() {        
        if (sessionStorage.cart) {
            cartItems = JSON.parse(sessionStorage.getItem('cart')).items;
        } else {
            sessionStorage.setItem('cart', JSON.stringify({ items: [] }));
        }
        updateCartIndicator();
    }

    function getItems() {        
        items = [...products];
        createItems(products);
        bindEvents();
    }

    function createItems(data) {                
        let itemList = document.querySelector('#items-list');
        itemList.innerHTML = '';
        let item = '';
        for (var i = 0; i < data.length; i++) {            
            item += '<div class="col-sm-6 col-md-4">';
            item += '<div class="thumbnail">';
            item +=
                '<img src="' + data[i].img + '" alt="' + data[i].name + '" />';
            item += '<div class="caption">';
            item +=
                '<h3>' +
                data[i].name +
                '<span class="label label-default">$' +
                data[i].price +
                '</span></h3>';
            item +=
                '<p><button data-item-id="' +
                data[i].id +
                '" class="btn btn-primary add-to-cart" role="button">Add To Cart</button></p>';
            item += '</div></div></div>';
        }
        itemList.innerHTML = item;
    }

    function bindEvents() {
        document.querySelectorAll('.add-to-cart').forEach(function (el) { 
            el.addEventListener('click', function (event) { 
                const id = event.target.dataset.itemId;
                console.log('id = ' + id);
                const button = this;
                button.innerHTML = 'Adding...';
                button.setAttribute('disabled', true);
                    setTimeout(function() {
                        button.innerHTML = 'Add to Cart';                        
                        button.removeAttribute('disabled');
                        addItem(id);
                        updateCartIndicator();
                }, 1000);
            });
        });
    }

    function addItem(id) {        
        let itemObj = items.filter(function (item) {
            return item.id === id;
        })[0];
        let itemInCart = cartItems.filter(function (item) {
            console.log(item);
            return item.item.id === id;
        })[0];
        if (itemInCart) {
            itemInCart.amount++;
        } else {
            cartItems.push({ item: itemObj, amount: 1 });
        }        
        sessionStorage.setItem('cart', JSON.stringify({ items: cartItems }));
    }

    function updateCartIndicator() {
        let itemsTotal = 0;
        for (let i = 0; i < cartItems.length; i++) {
            itemsTotal += cartItems[i].amount;
        }
        document.getElementById('cart-items-num').innerHTML = itemsTotal;
    }
};