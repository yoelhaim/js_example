const middleStr = (str)=>{

	var len =str.length ;
	if (len % 2 == 0)
		return ("no middle :" +str);
	return (str[parseInt(len/2)]);
}

console.log(middleStr("helo"));
console.log(middleStr("12345"));
console.log(middleStr("thank you"));
console.log(middleStr("crazy"));
console.log(middleStr("javascript"));
console.log(middleStr("my name"));
console.log(middleStr("hello world"));
console.log(middleStr("kiwalo"));
