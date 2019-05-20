exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'ant305',
          password:
            '$2a$10$YNk76GrgcFn6YJGQgmr1luICjYOdIz.Y3cErve1fG9YYRn6kCewFa',
          fullName: 'Anthony Johnson',
          email: 'anthonyjohnson_dev@icloud.com',
          userImgUrl:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
          username: 'cartier1',
          password:
            '$2a$10$YNk76GrgcFn6YJGQgmr1luICjYOdIz.Y3cErve1fG9YYRn6kCewFa',
          fullName: 'Cartier Doyle',
          email: 'cartier1121@gmail.com',
          userImgUrl:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
          username: 'liz1121',
          password:
            '$2a$10$YNk76GrgcFn6YJGQgmr1luICjYOdIz.Y3cErve1fG9YYRn6kCewFa',
          fullName: 'Elizabeth Johnson',
          email: 'lizdoyle1121@gmail.com',
          userImgUrl:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
      ]);
    });
};


