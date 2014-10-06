var metamodel=root.DB;
var model=Shell.selectModel(metamodel);
var factory=model.__DatabaseObjects;
var databases=factory.__contents;
for (var index in databases) 
{ 
	print("database : "+databases[index].__name);
	var tables = databases[index].tables;
	for (var i_table in tables) 
	{ 
		print (" table : "+tables[i_table].__name);
	}
}
