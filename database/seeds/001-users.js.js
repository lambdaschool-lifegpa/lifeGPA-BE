const bcrypt = require('bcryptjs')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'ant305',
          password: bcrypt.hashSync('1234', 10),
          fullName: 'Anthony Johnson',
          email: 'ant305@gmail.com',
          userImgUrl:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
          username: 'test-1',
          password:
          bcrypt.hashSync('1234', 10),
          fullName: 'Rowan Atkinson',
          email: 'mrbean@gmail.com',
          userImgUrl:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
          username: 'bond',
          password:
          bcrypt.hashSync('1234', 10),
          fullName: 'James Bond',
          email: '007@gmail.com',
          userImgUrl:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
      ]);
    });
};
