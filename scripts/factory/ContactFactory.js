app.factory('ContactFactory', [function () {
    console.log('in ContactFactory');

    var ContactFactory = {};

    ContactFactory.contacts = {
        'khalid.sookia@iknsa.com': {
            name: 'Khalid Sookia',
            email: 'khalid.sookia@iknsa.com',
            message: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tnc: false
        },
        'arsene.lupin@leblanc.com': {
            name: 'Arsène Lupin',
            email: 'arsene.lupin@leblanc.com',
            message: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tnc: true
        },
        'clark@superman.com': {
            name: 'Clark Kent',
            email: 'clark@superman.com',
            message: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            tnc: false
        },
    };

    ContactFactory.create = function(contact) {
        ContactFactory.contacts[contact.email] = contact;
    };

    return ContactFactory;
}])