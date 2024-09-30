// function anybaseaddition(base,num1,num2){
//     let ans=0;
//     let c=0;
//     let pow=1;
//     while(num1>0||num2>2||c>0){
//         let num1ld=num1%10;
//         let num2ld=num2%10;
//         num1=Math.floor(num1/10);
//         num2=Math.floor(num2/10);
//         let d=num1ld+num2ld+c;
//         c=Math.floor(d/base);
//         d=d%base;
//         ans+=d*pow;
//         pow=pow*10;
//     }
//     return ans;

// }
// let sum=anybaseaddition(8,67,43);
// console.log(sum);


//-----------------------------------------------------------------------------------
//    function anybasetosubtraction(base,num1,num2){
//     let ans=0;
//     let c=0;
//     let pow=1;
//     while(num2>0){
//         let num1ld=num1%10;
//         let num2ld=num2%10;
//         num1=Math.floor(num1/10);
//         num2=Math.floor(num2/10);
//         let d=1;
    
//         if(num1ld>=num2ld){
           
//             d=num1ld-num2ld-c;
//         }else{
//             c=1;
//             d=num1ld+base-num2ld
//         }
//         ans-=-d*pow;
//         pow=pow*10
//     }
//     return ans;
//    }
//     let sub=anybasetosubtraction(8,646,366)
//     console.log(sub);
    
let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0
}