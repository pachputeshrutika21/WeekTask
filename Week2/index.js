const arr=[];
function isInsertNumber() 
{
    for(let i=0;i<=100;i++)
    {
        arr.push(i);
    }
console.log(arr);
}
function isAccept()
{
    isInsertNumber();
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}