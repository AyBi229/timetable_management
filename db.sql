insert into users(id, cin, first_name, last_name, photo, birthday, email, `password`) values(null, 'aaa000', 'Aya', 'Birouti', null, '2004-09-02', 'biroutiaya@gmail.com', 'aybiisamazing@123');
update users
set password = 'AyBiisamazing@123'
where id = 1;