const { Contacts } = require('../models');

module.exports = {
    async createContact({ body }, res) {
        const contact = await Contacts.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
          }
    }
}