'use strict';

(function () {
    console.log('Hi');

    function Product(name, price, expirationDate) {
        this.productID = (function () {
            return Math.floor(Math.random() * 9e4) + 1e4;
        })();
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = expirationDate;

        this.getInfo = function () {
            return this.name[0] + this.name[name.length - 1] + this.productID + ", " + this.name + ", " + this.price;

        }
    }

    function ShoppingBag() {
        this.list = [];

        this.addProduct = function (product) {
            var now = new Date();
            if (product.expirationDate > now) {
                this.list.push(product);
            }
            else {
                console.log('Product dates is expired');
            }
        }
        this.averagePrice = function () {

            var i;
            var priceFin = 0;
            for (i = 0; i < this.list.length; i++) {
                priceFin += this.list[i].price;
            }
            priceFin = priceFin / this.list.length;
            return priceFin;
        }


        //TODO
        this.getMostExpensive = function () {
            var max;
            for (i = 0; i < this.list.length; i++) {
                max = Math.max(this.list[i].price);
            }
            return max;
        }


        this.calculateTotalPrice = function () {
            var priceFin = 0;
            for (i = 0; i < this.list.length; i++) {
                priceFin += this.list[i].price;
            }
            return priceFin;
        }
    }

    function PaymentCard(accountBalance, status, validity) {

        this.accountBalance = parseFloat(accountBalance.toFixed(2));
        this.status = status;
        this.validity = validity;
    }

    function chechoutAndBuy(shoppingBag, paymentCard) {
        var notEnough;
        var now = new Date;
        if (shoppingBag.calculateTotalPrice <= paymentCard.accountBalance && paymentCard.status == true && paymentCard.validity >= now) {
            console.log('Purchase is successful!');
        }
        else {
            notEnough = shoppingBag.calculateTotalPrice - paymentCard.accountBalance;
            console.log('Purchase is NOT successful! You need ' + notEnough + ' more');
        }
    }


    var shoppingBag = new ShoppingBag();
    var paymentCard = new PaymentCard(50.84552, true, new Date('2020-02-02'));
    var visnja = new Product("crvena", 12.84898989, new Date("2019, Nov, 01"));
    var banana = new Product('zuta', 15.53, new Date('2019-10-5'));
    var hleb = new Product('integralni', 5.234, new Date('2019-10-5'));
    shoppingBag.addProduct(visnja);
    shoppingBag.addProduct(banana);
    shoppingBag.addProduct(hleb);


    console.log(shoppingBag.averagePrice());
    console.log(shoppingBag.getMostExpensive());


}

)();


