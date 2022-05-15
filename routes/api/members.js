const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Get All Members
router.get('/', (inRequest, inResponse) => {
  inResponse.json(members);
});

// Get Single Member
router.get('/:id', (inRequest, inResponse) => {
  const memberExists = members.some(item => item.id === parseInt(inRequest.params.id));

  if (memberExists) {
    inResponse.json(members.filter(item => item.id === parseInt(inRequest.params.id)));
  } else {
    inResponse.status(400).json({ msg: 'Member not found' });
  }
});

// Create Member
router.post('/', (inRequest, inResponse) => {
  const newMember = {
    id: uuid.v4(),
    name: inRequest.body.name,
    email: inRequest.body.email,
    status: 'active'
  }

  if(!newMember.name || !newMember.email) {
    return inResponse.status(400).json({ msg: 'Please include a name and an email' });
  }

  members.push(newMember);

  inResponse.json(members);

});

module.exports = router;