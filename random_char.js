function rand( max)
{
	let c = "abcdefghijkmnopqrstuvxywz";
	let s=[];
	for(let i = 0; i <= max; i++)
		s.push(c[Math.floor(Math.random() * 26)]);
	return (s.join(''));
}
console.log(rand(10))
