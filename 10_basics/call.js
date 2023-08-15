function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)//ye apna cureent execu. context uper wale function me pass krwata hai..
    //niche wale ka this uper  ke fnc me gaya..,agar this use nahi karoge neeche toh sirf called print hoga username ka value uper nahi jaayega
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
//note : functionn ke ander se agar dusra func call krwana h toh .call ka istemaal kare phir vishwaas kare///