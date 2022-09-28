/*
Console & Colour
*/
//Changing Font Color In Node:
console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', 'I am cyan','i am blue');

//The native way :
console.log("\x1b[33m%s\x1b[0m" ,"I Am Using Yellow");
console.log("\x1b[44m%s\x1b[0m" ,"Background Color Is Blue");
console.log("%cThis is a green text", "color:green"); 

//Specifier	Output  -- 
// %s	 Formats the value as a string 
// %i or %d	 Formats the value as an integer 
// %f	 Formats the value as a floating point value 
// %o	 Formats the value as an expandable DOM element. As seen in the Elements panel  
// %O	 Formats the value as an expandable JavaScript object 
// %c	 Applies CSS style rules to the output string as specified by the second parameter 

// Colour Code In -
/*
	Reset = "\x1b[0m"	
	Bright = "\x1b[1m"	
	Dim = "\x1b[2m"	
	Underscore = "\x1b[4m"	
	Blink = "\x1b[5m"	
	Reverse = "\x1b[7m"	
	Hidden = "\x1b[8m"	

	FgBlack = "\x1b[30m"	
	FgRed = "\x1b[31m"	
	FgGreen = "\x1b[32m"	
	FgYellow = "\x1b[33m"	
	FgBlue = "\x1b[34m"	
	FgMagenta = "\x1b[35m"	
	FgCyan = "\x1b[36m"	
	FgWhite = "\x1b[37m"	

	BgBlack = "\x1b[40m"	
	BgRed = "\x1b[41m"	
	BgGreen = "\x1b[42m"	
	BgYellow = "\x1b[43m"	
	BgBlue = "\x1b[44m"	
	BgMagenta = "\x1b[45m"	
	BgCyan = "\x1b[46m"	
	BgWhite = "\x1b[47m"	
*/

// Using an npm package - By using colors package one can easily customize the styles in node console. 
//Unlike the native way, using colors is pretty simple and all you need to do is to write some human readable code. Below are the examples.

/*
Text Colors
	You can use 10 different text colors mentioned below.
	-black
	-red
	-green
	-yellow
	-blue
	-magenta
	-cyan
	-white
	-gray
	-grey
*/
		
	var colors = require('colors');

	console.log('i am black'.black);
	console.log('i am red'.red);
	console.log('i am green'.green);
	console.log('i am yellow'.yellow);
	
	console.log("\x1b[44m%s\x1b[0m" ,"Background Color Is Blue");
	console.log("\x1b[33m%s\x1b[0m" ,"I Am Using Yellow");
	console.log("%cThis is a green text", "color:green");
	
	//Style & Color in browser’s Console.log output
	console.log("Style & Color in browser’s Console.log output...");
	console.log("%cString1 %cString2","CSS For String1", "CSS For String2");
	console.log("%cThis is a %cConsole.log", "background:black ; color: white", "color: red; font-size:25px");
	console.log("%cThis Is Line One ", "font-size:30px");

	//line-height
	//Syntax line-height: 3
	console.log("%cThis Is Line One \n %c This Is Line Two \n %c This Is Line Three", "line-height: 0.8;", "line-height: 1.7;", "line-height: 3;")
