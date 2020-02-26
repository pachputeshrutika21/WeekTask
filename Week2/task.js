const users=[];
function addUser()
{
    
    const fname=document.querySelector('[name="fname"]');
    const lname=document.querySelector('[name="lname"]');
    const bdate=document.querySelector('[name="bdate"]');
    users.push({
        fname:fname.value,
        lname:lname.value,
        bdate:bdate.value,
    })
   console.table(users);
    

}




