(function () {
    'use strict';

    class Item {
        constructor(item, total, quantity) {
            this.item = item;
            this.price = total / quantity;
            this.quantity = quantity;
        }
    }

    class Order {
        constructor(customer, address, items = []) {
            this.customer = customer;
            this.address = address;
            this.items = items;
        }
        get orderTotal() {
            let orderTotal = 0;
            for (let i = 0; i < this.items.length; i++) {
                orderTotal += (this.items[i].price * this.items[i].quantity);
            }
            return orderTotal;
        }

    }

    fetch(`quiz.json`)
        .then(r => r.json())
        .then(orders => {
            orders.forEach(order => {
                let items = [];
                for (let i = 0; i < order.items.length; i++) {
                    items.push(new Item(order.items[i].item, order.items[i].total, order.items[i].quantity));
                } let orderX = new Order(order.customer, order.address, items);
                const orderForm = $("#orders");
                $(`<div class='order' id="${order.customer}">Customer: ${order.customer}
        <div>Address: ${order.address}</div>
        <div>Total: ${orderX.orderTotal}</div><hr>Items:</br></br>
       </div>`)
                    .appendTo(orderForm);
                display(order.customer, items);
            });
        })
        .catch(error => console.log(error));

    function display(customer, array) {
        const thisOrder = $(`#${customer}`);
        array.forEach(item => {
            $(`<div class="item">Item: ${item.item}
        <div id="amnt">Quantity: ${item.quantity}</div>
        <span id="price">Price: $${item.price}</span>
       </div></br>`)
                .appendTo(thisOrder);
        });
    }


}());