describe('FriendsFactory', function() {
    var $rootScope, FriendsFactory;

    beforeEach(function() {
        module('friends');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            FriendsFactory = $injector.get('FriendsFactory');
        });
    });

    describe('add friend', function() {
        it('should increment the number of friends', function() {
            var friends = FriendsFactory.list();
            
            // Case sensitive
            expect(typeof friends).toEqual('object');

            expect(friends.khalid.name).toEqual('Khalid Sookia');

            FriendsFactory.add({
                'alfred': {
                    name: 'Alfred Hitchcock',
                    email: 'alfred@hitchcock.com',
                    message: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    tnc: true
                }
            })

            expect(friends.alfred.name).toEqual('Alfred Hitchcock');

            expect(Object.keys(FriendsFactory.list()).length).toEqual(4);

        });
    });

    describe('initialize', function() {
        it('should return > 0', function () {
            expect(Object.keys(FriendsFactory.list()).length > 0).toBeTruthy();
        });

        it('should be equal to 3', function () {
            expect(Object.keys(FriendsFactory.list()).length).toEqual(3);
        });
    });
});