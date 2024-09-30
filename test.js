//(ANSWER NO.1)entry loop:-A type of loop in which the condition is checked before the loop in computer programming.
//if the condition is false than the loop will not execute.
//example:-for loop and while
// nsp=3;
// nst=1;
// for(let row=1; row<=3; row++){
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write("");
//     }
//     for(st=1;st<=nst;st++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

//exit loop:-A type of loop in which the condition is checked after the execution of a loop.
//loop will execute atleast one time.
//example:-do while loop

//i=0;
// do{
//     console.log("garima")
//     i++;
// }while(i<10);


//(ANSWER NO.2)---------------------------------------------------------------
// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         if(i==j)
//             continue;
//         console.log(i+j);
        
//     }
// }

// i=1 i<=3 1<=3 true
// j=1 j<=3 1<3 true
// if(i===j)1===1 is true continue
// j=2
// if(i===j)1===2is false 
// i+j 1+2=3
// j=3
// if(i===j)1===3 is false 
// i+j 1+3=4
// j=3;j=<3 3<=3 false go outer loop
// outerloop=ram=i=2 i<=3 2<=3  true
// innerloop=ram=j=1 j<=3 1<3 true
// if(i===j) 2===1 is false
// i+j 2+1=3
// j=2 j<=3 2<=3 true
// if(i===j) 2===2 is true  continue 
// l2=j=3
// if(i===j) 2===3 is false
// i+j 2+3=5
// j=3;j=<3 3<=3 false go outer loop
// outerloop=i=3 i<=3 true
// innerloop=ram j=1 1<=3
// if(i===j) 3===1 is false 
// i+j 3+1=4
// j=2 2<=3 true
// if(i===j) 3===2 is false
// i+j 3+2=5
// j=3 
// if(i===j) 3===3 is true  continue 
// j=3;j=<3 3<=3 false go outer loop
// i=4 i<=3 4<=3 is false 
// 3
// 4
// 3
// 5
// 4
// 5

//(ANSWER NO.3)---------------------------------------------------------------
// let found=false;
// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         if(i*j>4){
//             found=true;
//             break;
//         }
//         console.log(i,j);
        
//     }
//     if(found)break;
// }
    /*
     found=false
i=1; i<=3 1<=3 true
innnerloop=ram=j=1; j<=3 1<=3 true
if(i*j>4) 1*1=1 1<4 true
(i,j) print(1,1);
j=2  2<=3 true
if(i*j>4) 1*2=2 2 true;
(i,j) print(1,2);
j=3  3<=3true
if(i*j>4) 1*3=3 3  true;
(i,j) print(1,3);
j=4 4<=3 false go outer loop,
i++ i=2 2<=3 true
j=1  1<=3true
if(i*j>4) 2*1=2 2  true;
(i,j) print(2,1);
j=2 2<=3true
if(i*j>4) 2*2=4 4 true ;
(i,j) print(2,2);
j=3  3<=3true
if(i*j>4) 2*3=6 6  FALSE;
found = true
(found) break statement 

(1,1)
(1,2)
(1,3)
(2,1)
(2,2)

}
//(ANSWER NO.4)-------------------------------------------------------------

let pattern ='';
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        pattern+='*';
    }
    pattern+='\n';
}
console.log(pattern);



//(ANSWER NO.5)----------------------------------------------------

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=5;k>=i;k--){
//         process.stdout.write("*")
//     }
//     console.log()

// }


//(ANSWER NO.6)-------------------------------------------------------------------

let k=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  k++
  
}

if(k==2)

console.log(j)
k=0
}

//(ANSWER NO.7)-----------------------------------------------------------------------
//anybase to anybase number system conversion ?
// function anybasetodecimal(num,base) {
//     let ans=0;
//     let pow=1;
//     while (num>0){
//         let rem=num%10;
//         num=Math.floor(num/10);
//         rem=rem*pow;
//         ans=ans+rem;
//         pow=pow*base;
//     }
//     return ans;
// }
// function decimaltoanybase(num,base) {
//     let ans=0;
//     let pow=1;
//     while (num>0){
//         let rem=num%base;
//         num=Math.floor(num/base);
//         rem=rem*pow;
//         ans=ans+rem;
//         pow=pow*10;
//     }
//     return ans;
// }
// function anybasetoanybase(num1,base1,base2) {
//     let number=anybasetodecimal(num1,base1);
//     let finalnumber=decimaltoanybase(number,base2)
//     console.log(finalnumber);
// }
// anybasetoanybase(530,7,8);

//(ANSWER NO.8)-------------------------------------------------------

// function anybbaseaddition(base,num1,num2,) {
//     let ans=0;
//     let c=0;
//     let pow=1;

//     while (num1>0 || num2>0 || c>0) {
//         let d1=num1%10;
//         num1=Math.floor(num1/10);
//         let d2=num2%10;
//         num2=Math.floor(num2/10);
//             let d=d1+d2+c;
//             n=d%base
//             carry=Math.floor(d/base);
//             ans+=n*pow;
//             pow*=10;

//     }
//     return ans;
// }
// let sum=anybbaseaddition(12,104,100);
// console.log(sum);
*/

