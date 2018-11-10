DROP DATABASE IF EXISTS upScale
CREATE DATABASE upScale

CREATE TABLE Products (
  `id` INT NOT NULL PRIMARY KEY
  `productName` varchar
  `bannerImageUrl` varchar
  `productImageUrls` varchar
);



-- const productSchema = mongoose.Schema({
--   productName: {
--     type: String,
--     unique: true,
--     index: true
--   },
--   bannerImageUrl: String,
--   productImageUrls: String
-- }, { strict: true });