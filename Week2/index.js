var array=[];
let dualDivisibleNumbers=[];
function isInsertNumber() 
{
    for(var i=0;i<=100;i++)
    {
        array.push(i);
    }
    console.log(array);
}
function acceptContent()
{
    for(var i=0;i<=array.length;i++)
    {
        console.log(array[i]);
    }
}
function checkArray()
{
    for(let number of array)
    {
        if(fizzBuzzCheck(number))
        {
           
            console.log("Fizz Buzz");
        }
        else
        if(buzzCheck(number))
        {
            console.log("Buzz");
        }
        else
        if(fizzCheck(number))
        {
            console.log("Fizz");
        }
        else
        {
            console.log(number);
        }  
    }   
}
function fizzBuzzCheck(number)
{
    if(number%3==0 && number%5==0)
    {
        let values=[true,dualDivisibleNumbers.push(number)]; 
        return values;
    }
    else
    {
        return false;
    }  
}
function buzzCheck(number)
{
    if(number%5==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function fizzCheck(number)
{
    if(number%3==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
