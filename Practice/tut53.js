// console.log("hello");
let a= new Array(27,5,1,6,44,52,4);
function find_max(a)
{
    let maxi=-1;
    for(let i=0;i<a.length ;i++)
    {
    if(a[i]>maxi)
    {
        maxi=a[i];
        

    }
}
return maxi;
}

console.log(find_max(a));