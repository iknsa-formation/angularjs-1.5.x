var friends = angular.module('friends', []);

friends.factory('FriendsFactory', [function () {
    console.log('in FriendsFactory');

    var FriendsFactory = {};

    FriendsFactory.friends = {
        'khalid': {
            name: 'Khalid Sookia',
            email: 'khalid.sookia@iknsa.com',
            message: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tnc: false
        },
        'arsene': {
            name: 'Arsène Lupin',
            email: 'arsene.lupin@leblanc.com',
            message: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tnc: true
        },
        'clark': {
            name: 'Clark Kent',
            email: 'clark@superman.com',
            message: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tnc: false
        },
    };

    FriendsFactory.add = function(friend) {
        // console.log(friend);
        var friends = FriendsFactory.list();
        friends[Object.keys(friend)[0]] = friend[Object.keys(friend)[0]];
    };

    FriendsFactory.list = function() {
        var friends = FriendsFactory.friends;

        return friends;
    }

    return FriendsFactory;
}])