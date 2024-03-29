/*
root is root element 
root.m1 allows access to Metamodel named m1 
root.m1.c1 allows access to class c1 of metamodel m1 
root.m1.__models allows access to models of metamodel m1 
root.m1.__models.mod1 allows access to model mod1 instance of metamodel m1 
root.m1.__models.__contents is array of models of metamodel m1 
root.m1.__models.addModel(modelName) adds a model of type m1 
root.m1.__models.mod1.__c1Objects allows access to factory to create element of class c1 in model mod1 
root.m1.__models.mod1.__c1Objects.o1 allows access to element named o1 of class c1 in model mod1 
root.m1.__models.mod1.__c1Objects.addObject(name) adds an model element of type c1 in modele mod1 

var v=expr allows to create a variable v which is equal to result of expr 
v.__description gives a description of v 
v.__contents gives contents of v (an array ?) 
v.__name gives name of v (an array ?) 
v.__prototype gives prototype of v (an array ?) 
v.__properties gives properties of v (an array ?) 
v.__type gives type of v 
v.__remove remove object (only with m1 objects) 
(if v is an enumeration) v.toString, v.toInt to get respectively string, integer value 
(if v is an enumeration) v==value works with value as an integer or a string
v.pty=a for element of model => set pty of v to a 
v.pty__add=a for element of model => add a to pty of v 
v.pty__remove=a for element of model => remove a from pty of v 

print(expr) displays expr on standard output 

Files.saveContentInFile(fileContent, fileName) saves a string (fileContent) in a file (fileName) 

Shell.selectElementInArray(title, arrayName, array) shows a dialog box to choose a element from an array 
Shell.instanceOf(m1element, class) returns true if the m1element is an instance of class (or its superclasses) 
Shell.selectPackage() shows a dialog box to choose a metamodel et returns selected package 
Shell.selectModel(package) same as previous but with model and needs a package as argument 
Shell.selectFactoryInModel(model) dialog to ask class and returns corresponding factory in model 
Shell.selectFactoryInModel(model) dialog to ask class and returns corresponding factory in model 
Shell.selectFactoryInModel(model) dialog to ask class and returns corresponding factory in model 
Shell.selectFactoryInModel(model) dialog to ask class and returns corresponding factory in model 
createContent() creates an object with write code facilities (indentation, block) :
    - writeInFile (file) : writes contents in a file (a filename or a file object)	
    - endLine() : add a end of line at current position	
    - indent() : increments the level of indentation for futur lines	
    - desindent() : decrements the level of indentation for futur lines	
    - startBlock () : starts a block with { and add indentation 
    - endBlock ()	: ends block with } and decrements indentation 
    - add(String text) : add text to content at current position	
    - addLine(String line) : add text to content at current position with a endLine() at the end of text	
    - addLine() 	: equivalent to endLine() 
    - static String surroundWithQuote(text) : static method to add quote before and after a text	
chooseDirectory(title) shows a dialog box asking for a directory, return a file-directory object 
askText(title, defaultText) shows a dialog box asking for a text 
addDirectory (parentDirectory,newDirectoryName) creates a subdirectory in parentDirectory with the name newDirectoryName 
addFileInDirectory (parentDirectory,newFileName) creates a file in parentDirectory and return it 
chooseFileForSave(extension) shows a dialog box asking for a file to save something, return a file object 
chooseFileForLoad(extension) shows a dialog box asking for a file to load something, return a file object 
currentPath() return a string containing the canonical path of current directory 
contentOfFile(file) return a string containing the content of the file passed in argument (file is an instance of java.io.File) 
contentOfFileWithName(fileName) return a string containing the content of the file passed in argument (file is a string) 
include(javascriptFileName) load content of javascript file indicated in argument and eval/interpret it
*/ 
// Sample code 
var metamodel=root.ProjetCAL;
var model=Shell.selectModel(metamodel);
var databases=model.__DATABASEObjects.__contents;

//var fichier = createContent();

for (var index in databases) 
{ 
	print("CREATE DATABASE "+databases[index].name+";");
	var tables = databases[index].table;
	for (var i_table in tables) 
	{ 
		print("CREATE TABLE "+tables[i_table].name+" {");
		var attributes = tables[i_table].attribute;
			for (var i_attribute in attributes) 
			{ 
				print("INSERT "+attributes[i_attribute].name);
			}
		print("}");
	}
}

//ar dir=chooseFileForSave("txt");
//fichier.writeInFile("./tmp/truc.txt");

 var pages=model.__PAGEObjects.__contents;
for (var i_pages in pages) 
			{ 
				print(pages[i_pages].name);
				var layouts = pages[i_pages].layout;
				//print(layouts.length);
			for (var i_layouts in layouts) 
			{ 
					print(layouts[i_layouts].__name);
					
					var widgets = layouts[i_layouts].widget;
					// var widgets=root.ProjetCAL.__models.SiteTest.__LAYOUTObjects.__contents;
					 
					//print(widgets.length);
						for (var i_widgets in widgets) {
							print(widgets[i_widgets].__description);
							
						}
				
			}
				
			}

print("Done");

	
