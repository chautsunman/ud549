describe("Address Book", function() {
    var addressBook;
    var contact;

    beforeEach(function() {
        addressBook = new AddressBook();
        contact = new Contact();
    });

    it("should be able to add a contact", function() {
        addressBook.addContact(contact);

        expect(addressBook.getContact(0)).toBe(contact);
    });

    it("should be able to delete a contact", function() {
        addressBook.addContact(contact);

        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});


describe("Async Address Book", function() {
    var addressBook = new AddressBook();

    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    it("should get initial contacts", function(done) {
        expect(addressBook.initialComplete).toBe(true);

        done();
    });
});
