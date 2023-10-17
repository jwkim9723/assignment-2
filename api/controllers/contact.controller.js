const _ = require('lodash');
const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Function to select fields allowed to be set by users
function contactFilter(obj) {
    return _.pick(obj, ['name']);
}

// Create contact
exports.create = ('/', (req, res) => {
    Contacts.create(contactFilter(req.body))
        .then(contact => {res.json(contact);})
        .catch(err => {res.status(500).send({message: err.message || "Some error occurred."});});
});

// Get all contacts
exports.findAll = ('/', (req, res) => {
    Contacts.findAll()
        .then(data => {res.send(data);})
        .catch(err => {res.status(500).send({message: err.message || "Some error occurred."});});
});

// Get one contact by id
exports.findOne = ('/:contactId', (req, res) => {
    Contacts.findByPk(req.params.contactId)
        .then(contact => res.json(contact))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Update one contact by id
exports.update = ('/:contactId', (req, res) => {
    Contacts.findByPk(req.parans.contactId)
        .then(contact => contact.update(contactFilter(req.body)))
        .then(contact => res.json(contact))
        .catch(err => res.status(500).json( { error: err.message }));
});

// Delete one contact by id
exports.delete = ('/:contactID', (req, res) => {
    Contacts.destroy({ where: { id: req.params.contactId }})
        .then(() => res.json())
        .catch(err => res.status(500).json( { error: err.message }));
});
