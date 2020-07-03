javascript: (function() {
	const logicalColor = 'black';
	const typoColor = 'black';
	const userInteractionsColor = 'black';
	const migrationColor = 'black';
	const typeColor = 'black';
	const technicalWarning = 'red';
	
	const searchElements = [{
		pattern: "if.*\\(",
		color: logicalColor 
	},
	{
		pattern: "else.*\\(",
		color: logicalColor 
	},
	{
		pattern: "switch",
		color: logicalColor 
	},
	{
		pattern: "[]",
		color: typoColor 
	},
	{
		pattern: "const ",
		color: typoColor 
	},
	{
		pattern: "let ",
		color: typoColor 
	},
	{
		pattern: "private ",
		color: typoColor 
	},
	{
		pattern: "public ",
		color: typoColor 
	},
	{
		pattern: "protected ",
		color: typoColor 
	},
	{
		pattern: "any",
		color: typeColor 
	},
	{
		pattern: "instanceof",
		color: technicalWarning 
	},
	{
		pattern: "isObject",
		color: technicalWarning 
	},
	{
		pattern: "isString",
		color: technicalWarning 
	},
	{
		pattern: "Number\\(",
		color: technicalWarning 
	},
	{
		pattern: "[0]",
		color: technicalWarning 
	},
	{
		pattern: "app/module/form",
		color: technicalWarning 
	},
	{
		pattern: "Promise.resolve",
		color: technicalWarning 
	},
	{
		pattern: "setTimeout",
		color: technicalWarning 
	},
	{
		pattern: "timeout",
		color: technicalWarning 
	},
	{
		pattern: "\\.then",
		color: technicalWarning 
	},
	{
		pattern: ":.*boolean",
		color: technicalWarning 
	},
	{
		pattern: "click",
		color: userInteractionsColor 
	},
	{
		pattern: "submit",
		color: userInteractionsColor 
	},
	{
		pattern: "hover",
		color: userInteractionsColor 
	},
	{
		pattern: "focus",
		color: userInteractionsColor 
	},
	{
		pattern: "href",
		color: userInteractionsColor 
	},
	{
		pattern: "migration",
		color: migrationColor 
	},
	{
		pattern: "Migration",
		color: migrationColor 
	}];
	//blob-code blob-code-addition
	const toto = document.getElementsByClassName('blob-code-inner blob-code-marker');  
	for (const element of toto) {
		searchElements.forEach(search => {
			const match = element.innerText.match(new RegExp(search.pattern, 'gi')); 
			if (match) {          
				element.style['font-weight'] = 'bold';   
				element.style['color'] = search.color;
			} 
		}); 
	}
}());