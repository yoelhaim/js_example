function fund_m_op(str)
{
	str = str.split('?')
	let res= str.join('?').split('=')
	if (parseInt(str[0]) + parseInt(str[1]) == parseInt(res[1]))
		return('+')
	if ( parseInt(str[0]) * parseInt(str[1]) == parseInt(res[1]))
		return('*')
	if (parseInt(str[0]) - parseInt(str[1]) == parseInt(res[1]))
		return('-')
	if (parseInt(str[0]) / parseInt(str[1]) == parseInt(res[1]))
		return('/')
	else
		return ("operation fail !")

}
console.log(fund_m_op("1?2=3"));
console.log(fund_m_op("1?2=2"));
console.log(fund_m_op("5?5=25"));
console.log(fund_m_op("100000?2=50000"));
console.log(fund_m_op("30?2=600"));