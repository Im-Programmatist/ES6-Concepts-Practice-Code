function showAge(age)
{
	return age;
}

showAge();// undefind 


//Default Argument
function showDefaultAge(age = 27)
{
	return age;
}

showDefaultAge();// result: 18


//object
const users = { name : 'chetan', age : 27, born : 'Kalgavhan'};
//destructuring
const { age, born, name } = users;
//NOW using Object properties 
//key may be anything
const defaultValue2 = { name_property : name, age_property : age, born_property : born }//or
const defaultValue1 = { name : name, age : age, born : born };  
//result { name : 'chetan', age : 27, born : 'Kalgavhan'} or { name_property : 'chetan', age_property : 27, born_property : 'Kalgavhan'}
const sortObject = { name, age, born};
//result { name : 'chetan', age : 27, born : 'Kalgavhan'}