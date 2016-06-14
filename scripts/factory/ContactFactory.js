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
        var contacts = ContactFactory.list();
        contacts[contact.email] = contact;
        localStorage.setItem('contacts', JSON.stringify(contacts));
    };

    ContactFactory.list = function() {
        var savedContacts = localStorage.getItem('contacts');
        var contacts = (savedContacts !== null) ? JSON.parse(savedContacts) : ContactFactory.contacts;
        console.log(contacts);
        localStorage.setItem('contacts', JSON.stringify(contacts));

        return contacts;
    }

    ContactFactory.update = function(contact) {
        var contacts = ContactFactory.list();
        contacts[contact.email] = contact;
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    ContactFactory.delete = function(contactMail) {
        var contacts = ContactFactory.list();
        delete contacts[contactMail];
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    ContactFactory.get = function(contactMail) {
        var contacts = ContactFactory.list();
        return contacts[contactMail];
    }

    return ContactFactory;
}])