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
        for(let i=1;i<=arr.length;i++)
        {
            if(arr[i]%3==0&&arr[i]%5==0)
            {
                console.log("FizzBuzz");
            }
            else
                if(arr[i]%5==0)
                {
                    console.log("Buzz");
                }
                else
                    if(arr[i]%3==0)
                    {
                       console.log("Fizz");
                    }
                    else
                    {
                        console.log(arr[i]);
                    }
        }
    return true;
}

