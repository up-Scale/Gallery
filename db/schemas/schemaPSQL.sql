DROP DATABASE IF EXISTS upScale
CREATE DATABASE upScale

CREATE TABLE Products (
  `productName` varchar PRIMARY KEY
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