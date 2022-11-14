{
const Student ={
    name:"Jonh",
    Marks:{
        Science:70,
        Math:75
    }
}
console.log(Student.Marks);
console.log(Student.Marks.Science);



}

{

const arr = [7,5,8,20,5,6,1,8]    //7,20,6,1
let result = []

for(let i=0;i<arr.length;i++)
{
    let flag = false

    for (let j=0;j<arr.length;j++){
        if (i !==j && arr[i]===arr[j]){
            flag=true
            break;
        }
    }

    if (!flag)result.push(arr[i])

}

console.log(result);

}

{
    const a =[]
}

