insert into users(id, cin, first_name, last_name, photo, birthday, email, password) values(null, 'aaa000', 'Aya', 'Birouti', null, '2004-09-02', 'biroutiaya@gmail.com', '$2y$12$gLB6fUo8HSBS0IRAM8skBO/EbTNlMjnM7bnjdIAu2gDwBMV89i0ea');
update users
set password = '$2y$12$gLB6fUo8HSBS0IRAM8skBO/EbTNlMjnM7bnjdIAu2gDwBMV89i0ea'
where id = 1;