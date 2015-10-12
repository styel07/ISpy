
Markers = new Mongo.Collection('markers');
// Marker fields: _id, lat, lng, img, userId, username

ImageData = new Mongo.Collection('imageData');
// ImageData fields: _id, markerId, userId, username, comment, upvotes