function findMess(str)
{
	let c = "abcdefghijkmnopqrstuvxywz";// char a to z
	for(let i =0; str[i]; i++)
	{
		for(let j =0; c[j]; j++)
			{
				if (str[i] != c[j])
					return(c[i]);
				else
					i++;
			}
	}
	return (str);
}

console.log(findMess("abd"));