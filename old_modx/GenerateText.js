var metamodel=root.DB;
var model=Shell.selectModel(metamodel);
var factory=model.__DatabaseObjects;
var databases=factory.__contents;

var fichier = createContent();

for (var index in databases) 
{ 
	fichier.addLine("database : "+databases[index].__name);
	var tables = databases[index].tables;
	fichier.addLine("tables : {");
	for (var i_table in tables) 
	{ 
		fichier.addLine("	"+tables[i_table].__name);
	}
	fichier.addLine("}");
}

var dir=chooseFileForSave("txt");
fichier.writeInFile(dir);
print("Done");