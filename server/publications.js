Meteor.publish('lazyload-products', function(){
    return Products.find({}, {
        limit: 2
    });
});


