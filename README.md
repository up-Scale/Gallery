# dd-Gallery
## by Ben Mangold

# Dev Env
## $ npm install
## $ npm run server-dev
## $ npm run react-dev

# Seed Local MongoDB
## databse: deltaDrop
## collection: products
## $ npm run seed

# Prod Env - Deployed on EC2 with MLab
## http://ec2-54-209-75-211.compute-1.amazonaws.com/buy/flashlight
## Required: DB_PROVIDER must be available in production enviornment, pointing to prodcution db
### ex: ec2-instance$ export DB_PROVIDER=mongodb://<un>:<pw>@ds249583.mlab.com:49583/delta-drop