/**
 * Created by okech on 11/20/15.
 */

Meteor.startup( function() {
    console.log('Server started');

    if(Products.find().count()===0){
        console.log('Adding dummy products');
        var dummyProducts = [
            {
                item: 'Aucma Tv 32" ',
                description : 'lorem ipsum borem sodum color sit amet',
                productId: '#34567',
                purchaseDate: '10-11-2015',
                quantity: '25',
                unitCost: 'Kes 20,900',
                image :'this image'

            },
            {
                item: 'DVD Aucma" ',
                description : 'lorem ipsum borem sodum color sit amet',
                productId: '#34569',
                purchaseDate: '10-11-2015',
                quantity: '25',
                unitCost: 'Kes 3,999',
                image :'this image'

            },
            {
                item: 'Shoes Nike" ',
                description : 'lorem ipsum borem sodum color sit amet',
                productId: '#34566',
                purchaseDate: '10-11-2015',
                quantity: '25',
                unitCost: 'Kes 20,900',
                image :'this image'

            }

        ];
        _.each(dummyProducts, function(post){
            Products.insert(post);
        });
    }
    if(Customers.find().count()===0){
        console.log('Adding dummy customers');
        var dummyCustomers = [
            {
                name: 'Mercy Akinyi',
                product: 'Sony Hi-Fi',
                quantity: '1',
                unitCost: 'Kes 45,000'
            },
            {
                name: 'Juliet Seka',
                product: 'Aucma Fridge',
                quantity: '1',
                unitCost: 'Kes 65,000'
            },
            {
                name: 'Amani Shaka',
                product: 'X-Box',
                quantity: '1',
                unitCost: 'Kes 105,000'
            }

        ];
        _.each(dummyCustomers, function(post) {
            Customers.insert(post);
        });
    }
    if(PurchaseOrders.find().count()===0){
        console.log('Adding Dummy Purchase Orders');
        var dummyPurchaseOrders = [
            {
                orderNo: '#12345',
                product: 'Dell laptop',
                orderDate: '10-11-2015',
                customer: 'Kevin Kelly',
                unitCost: 'Kes 62,000',
                quantity: '1'
            },
            {
                orderNo: '#23456',
                product: 'Samsung S4',
                orderDate: '19-11-2015',
                customer: 'Juliet Bahati',
                unitCost: 'Kes 32,000',
                quantity: '1'
            }
        ];
        _.each(dummyPurchaseOrders, function(post) {
            PurchaseOrders.insert(post);
        });
    }
    if(Sales.find().count()===0){
        console.log('Adding dummy sales');
        var dummySales  = [
            {
                product: 'Aucma 32" LED TV',
                quantity: '1',
                customer: 'Edward Okech',
                salesDate: '14-11-2015',
                saleAmount: 'Kes 20,900'
            },
            {
                product: 'Aucma Whoofer',
                quantity: '1',
                customer: 'Edward Okech',
                transactionDate: '14-11-2015',
                saleAmount: 'Kes 4,999'
            }

        ];

        _.each(dummySales, function(post){
            Sales.insert(post);
        });
    }
})
