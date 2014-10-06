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
var metamodel=root.ProjetCal;
var model=Shell.selectModel(metamodel);
var factory=model.__PageObjects;
var pages=factory.__contents;
//var layouts=factory.__ButtonObjects;
//var path=factory.__contents;
//var dir=chooseFileForSave("html");
//var fichier=createContent();
 var layouts=model.__LayoutObjects.__contents;
for (var index2 in layouts){
		print("layouts = "+layouts[index2].__name);
		var pagesi = layouts[index2].layouts;
		for (var i_layouts in pagesi){
		print("knb");
		print("wut ? = "+pagesi[i_layouts].__name);
	} 
	}

for (var index in pages){
	
	print("Creation = "+pages[index].__name);
	var fichier = createContent();
	var body="";
	var layouts=pages[index].layouts;
	//print("thefuc ?"+layouts);
	for (var i_layouts in layouts){
		print("knb");
		print("wut ? = "+layouts[i_layouts].__name);
	} 
	fichier.addLine("<!DOCTYPE html><html><head><title>"+pages[index].__name+"</title></head><body>"+body+"</body></html>");
	
	fichier.writeInFile("./tmp/"+pages[index].__name+".html");
	
	}
	
print("Done");            
