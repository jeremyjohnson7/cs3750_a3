CREATE TABLE users(
   user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(64) NOT NULL
);

CREATE TABLE items(
   item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   user_id INT NOT NULL,
   item_desc VARCHAR(255) NOT NULL,
   CONSTRAINT FK_items_user_id FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

ALTER TABLE items
ADD CONSTRAINT AK_items_user_id_item_desc UNIQUE KEY (user_id, item_desc);

INSERT INTO users(username, password)
VALUES('jason', '55069226363d1819a92da0a06bab02a4a6050440b71bc54dbdae6c789cc3c2f8');

INSERT INTO items(user_id, item_desc)
VALUES((SELECT user_id FROM users WHERE username = 'jason'), 'Pizza');

SELECT * 
FROM users u
JOIN items i ON u.user_id = i.user_id;

