const users=[];
const element={};
const fnameInput=document.querySelector('[name="fname"]');
const lnameInput=document.querySelector('[name="lname"]');
const bdateInput=document.querySelector('[name="bdate"]');
function addUser()
{
    const fname=fnameInput?fnameInput.value:'';
    element.fname=fname;
    users.push(element.fname);
    const lname=lnameInput?lnameInput.value:'';
    element.lname=lname;
    users.push(element.lname);
    const bdate=bdateInput?bdateInput.value:'';
    element.bdate=bdate;
    users.push(element.bdate);
    console.log(users);
    
}
