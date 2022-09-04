function rand( max)
{
	let c = "abcdefghijkmnopqrstuvxywz";// char a to z
	let s=[]; // array 
	for(let i = 0; i < max; i++) // for loop max
		s.push(c[Math.floor(Math.random() * 26)]); // push random index 0 to 25
	return (s.join('')); // return result
}
console.log(rand(10))// printf result 
console.log(rand(5))// printf result 
console.log(rand(2))// printf result 
console.log(rand(50))// printf result 
