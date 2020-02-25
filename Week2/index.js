var arr=[];
function isInsertNumber() 
{
    for(var i=0;i<=100;i++)
    {
        arr.push(i);
    }
    console.log(arr);
}
function acceptContent()
{
    for(var i=0;i<=arr.length;i++)
    {
        console.log(arr[i]);
    }
}
function checkArray()
{
    for(let num of arr)
    {
        if(fizzBuzz(num))
        {
            console.log("Fizz Buzz");
        }
        else
        if(buzz(num))
        {
            console.log("Buzz");
        }
        else
        if(fizz(num))
        {
            console.log("Fizz");
        }
        else
        {
            console.log(num);
        }
    }
}
function fizzBuzz(num)
{
    if(num%3==0&&num%5==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function buzz(num)
{
    if(num%5==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function fizz(num)
{
    if(num%3==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}