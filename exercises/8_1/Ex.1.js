
const fat = (n) => {
  let fat = 1
for (let i = 1; i < n ; i++){
  fat = fat * (i+1)
}
return fat
}

console.log(fat(5))