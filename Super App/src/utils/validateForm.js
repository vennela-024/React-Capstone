const validateForm =(name, email, username, mobile)=>{

    let valid = true;
    let invalid = {
        name: false,
        email: false,
        username: false,
        mobile: false,
    };
    if(!name||!email||!username||!mobile){
        valid = false;
        invalid = {
            name: !name, 
            email: !email,
            username: !username,
            mobile: !mobile 
        }
    }

     const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
     const phoneRegEx = /^\d{10}$/;
     if(!emailRegEx.test(email) || !phoneRegEx.test(mobile)){
        invalid = {
            ...invalid,
            email: !emailRegEx.test(email),
            mobile: !phoneRegEx.test(mobile),
        };
        valid = false;
     }  
     console.log(valid);
     console.log(invalid);
     return {valid, invalid};
  }

  export default validateForm