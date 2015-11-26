Session.setDefault('lazyloadLimit', 2);
Tracker.autorun(function () {
    Meteor.subscribe('lazyload-products', Session.get('lazyloadLimit'));
});


