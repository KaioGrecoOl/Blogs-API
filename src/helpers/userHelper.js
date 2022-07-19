const { User } = require('../database/models/index');

const bodyValidation = {

   displayNameValidation: (displayName) => {
    if (displayName.length < 8) { 
      return { status: 400, 
        message: '"displayName" length must be at least 8 characters long' };
      }
    },
    
     passwordValidation: (password) => {
      if (password.length < 6) {
        return { status: 400,
          message: '"password" length must be at least 6 characters long' };
        }
      },
      
       emailValidation: async (email) => {
        const checkIfEmailValid = /\S+@\S+\.\S+/;
        
        if (!checkIfEmailValid
          .test(email)) { 
          return { status: 400, message: '"email" must be a valid email' };
        }
        
        const emailRegistered = await User.findOne({
          where: { email },
        });
        
        if (emailRegistered) return { status: 409, message: 'User already registered' };
      },
    };
      
module.exports = {
  bodyValidation,
};
