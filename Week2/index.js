const array=[];
let dualDivisibleNumbers=[];
function isInsertNumber() 
{
    for(let i=0;i<=100;i++)
    {
        if(i%3==0 && i%5==0)
        {
            dualDivisibleNumbers.push(i);
        }
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
        // if(number%3==0 && number%5==0)
        // {
        //     dualDivisibleNumbers.push(number);
        // }
    }   
}
function fizzBuzzCheck(number)
{
    if(number%3==0 && number%5==0)
    {
        return true;
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