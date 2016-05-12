module.exports={
  database:'mongodb://root:123456@ds013931.mlab.com:13931/ecommerce_vn',
  port:3000,
  secretKey:"AnhTuan",

  facebook:{
    clientID: process.env.FACEBOOK_ID || '850119425131594',
    clientSecret: process.env.FACEBOOK_SECRET ||'7b884aad0716ba11df881f3136e65b00',
    profileFields:['emails','displayName'],
    callbackURL:'http://localhost:3000/auth/facebook/callback'
  }

}
