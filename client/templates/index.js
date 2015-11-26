

Template.index.helpers({
    products: function() {
        return Products.find({});
    }
});
Template.index.events({
    'click button.lazyload': function(e, template){
        var currentLimit = Session.get('lazyloadLimit');
        Session.set('lazyloadLimit', currentLimit + 1);
    }
});
