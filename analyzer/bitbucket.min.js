javascript:(function(){
	const logicalColor = 'black';
	const typoColor = 'black';
	const userInteractionsColor = 'black';
	const migrationColor = 'black';
	const typeColor = 'black';
	const technicalWarning = 'red';
	
	const commonCss = {'font-weight' : 'bold'};

	$('.code-component:contains("if (")').css({'color': logicalColor, ...commonCss});
	$('.code-component:contains("if(")').css({'color': logicalColor, ...commonCss});
	$('.code-component:contains("else")').css({'color': logicalColor, ...commonCss});
	$('.code-component:contains("switch")').css({'color': logicalColor, ...commonCss});

	$('.code-component:contains("[]")').css({'color': typoColor, ...commonCss});
	$('.code-component:contains("const")').css({'color': typoColor, ...commonCss});
	$('.code-component:contains("let")').css({'color': typoColor, ...commonCss});
	$('.code-component:contains("private ")').css({'color': typoColor, ...commonCss});
	$('.code-component:contains("public ")').css({'color': typoColor, ...commonCss});
	
	$('.code-component:contains("any")').css({'color': typeColor, ...commonCss});
	
	$('.code-component:contains("instanceof")').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains("isObject")').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains("isString")').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains("[0]")').css({'color': technicalWarning, ...commonCss});
	$('[data-qa=pr-diff-file-styles]:contains("src/app/module/form") [data-qa=bk-file__header]').css({'color': technicalWarning, ...commonCss});
	$('[data-qa=pr-diff-file-styles]:contains("package.json") [data-qa=bk-file__header]').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains("Promise.resolve")').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains("setTimeout")').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains("timeout")').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains(".then")').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains(": boolean")').css({'color': technicalWarning, ...commonCss});
	$('.code-component:contains(":boolean")').css({'color': technicalWarning, ...commonCss});

	$('.code-component:contains("click")').css({'color': userInteractionsColor, ...commonCss});
	$('.code-component:contains("submit")').css({'color': userInteractionsColor, ...commonCss});
	$('.code-component:contains("hover")').css({'color': userInteractionsColor, ...commonCss});
	$('.code-component:contains("focus")').css({'color': userInteractionsColor, ...commonCss});
	
	$('.code-component:contains("migration")').css({'color': migrationColor, ...commonCss});
	$('.code-component:contains("Migration")').css({'color': migrationColor, ...commonCss});
}());