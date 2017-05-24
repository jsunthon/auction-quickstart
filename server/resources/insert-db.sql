USE auction_quickstart;

# Default user
INSERT INTO users (username, password, firstName, lastName, email)
VALUES ('darkserith', 'theman123', 'James', 'Sunthonlap', 'jsunthon@gmail.com'),
  ('lightserith', 'theman', 'Flow', 'Milo', 'darkserith@gmail.com');

# Default products
INSERT INTO products (title, price, rating, description, categories)
VALUES ('First Product', 24.99, 4.3, 'ASDADAJ HIYA!', 'electronics, hardware'),
  ('Second Product', 64.99, 3.5,
   'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'books'),
  ('Third Product', 74.99, 3.5, 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   'electronics'),
  ('Fourth Product', 84.99, 3.5,
   'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'hardware'),
  ('Fifth Product', 94.99, 3.5, 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   'electronics, hardware');

# # Default reviews
INSERT INTO reviews (rating, comment, productId, userId)
VALUES (4.3, 'This product was so awesome!', 3, 1);

INSERT INTO reviews (rating, comment, productId, userId)
VALUES (4.3, 'This product was not so awesome!', 4, 2);

select * from users;

# select * from products;

# select * from reviews;