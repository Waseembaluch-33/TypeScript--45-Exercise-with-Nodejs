//Array Of Current user
let current_user = ["waseem","Ali","Wahab","Bilal","Mossa"];

// Array Of New User
let new_user = ["Salal","Wahab","Hasnain","Waseem","Babar"];

// Loop Through new_User to Check for Username Avaibility
new_user.forEach(new_one_user =>{

    // making a condition for username already exist and save in our_condition variable
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    //print diffrent messages using if-else statement
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})