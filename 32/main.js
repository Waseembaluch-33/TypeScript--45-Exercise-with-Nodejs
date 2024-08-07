let current_user = ["waseem", "Ali", "Wahab", "Bilal", "Mossa"];
let new_user = ["Salal", "Wahab", "Hasnain", "Waseem", "Babar"];
new_user.forEach(new_one_user => {
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
export {};
