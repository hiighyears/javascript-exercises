const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  return a.reduce((tot,curr)=>tot + curr,0);};

const multiply = function(a) {
  return a.reduce((tot,curr)=>tot * curr);
};

const power = function(a,b) {
  let tot = 1;
  for(let i=0;i<b;i++){
 tot*=a;
  }
	return tot;
};

const factorial = function(a) {
  if (a==0 || a==1){
    return 1;}
  else{
  let tot=1;
  for(let i=1;i<=a;i++){
    tot*=i;} 
    return tot;}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
