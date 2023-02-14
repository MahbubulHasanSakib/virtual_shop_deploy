const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    
   /* cloud_name:process.env.CLOUDINARY_CLOUD, 
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET */
    cloud_name:"dpdq2a9fu", 
    api_key:"368988812529854", 
    api_secret:"saUUDqYBjMTJmODc16rqokHXBsU"
  });

  module.exports= cloudinary;