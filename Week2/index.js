var array=[];
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
        if(fizzBuzz(number))
        {
            console.log("Fizz Buzz");
        }
        else
        if(buzz(number))
        {
            console.log("Buzz");
        }
        else
        if(fizz(number))
        {
            console.log("Fizz");
        }
        else
        {
            console.log(number);
        }
    }
}
function fizzBuzz(number)
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
function buzz(number)
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
function fizz(number)
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