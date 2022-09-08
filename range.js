const range = (min, max)=>{
	if (min > max)
		return false;
	for(min ; min < max; min++)
		console.log(min);
}
console.log("--- ex : 1 ---")
range(1, 10)
console.log("--- ex : 2 ---")
range(-9, 18)
console.log("--- ex : 3 ---")
range(50, 100)
console.log("--- ex : 4 ---")
range(16, 17)
console.log("--- ex : 5 ---")
range(0, 0)