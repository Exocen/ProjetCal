var metamodel=root.DB;
var model=Shell.selectModel(metamodel);
var factory=model.__DatabaseObjects;
var databases=factory.__contents;

var fichier = createContent();

for (var index in databases) 
{ 
	fichier.addLine("CREATE DATABASE "+databases[index].__name+";");
	var tables = databases[index].tables;
	for (var i_table in tables) 
	{ 
		fichier.addLine("CREATE TABLE "+tables[i_table].__name+";");
	}
}

//ar dir=chooseFileForSave("txt");
fichier.writeInFile("./tmp/truc.txt");
print("Done");
