// Metamodel ProjetCal
//

ProjetCal=new Object();
// Class ProjetCal.Button
//

ProjetCal.Button.instances = new Array();
ProjetCal.Button = function () { ProjetCal.Button.instances.push(this); }; 
ProjetCal.Button.prototype = { 
  contenu : "",
};

// Class ProjetCal.Label
//

ProjetCal.Label.instances = new Array();
ProjetCal.Label = function () { ProjetCal.Label.instances.push(this); }; 
ProjetCal.Label.prototype = { 
  contenu : "",
};

// Class ProjetCal.TextField
//

ProjetCal.TextField.instances = new Array();
ProjetCal.TextField = function () { ProjetCal.TextField.instances.push(this); }; 
ProjetCal.TextField.prototype = { 
};

// Class ProjetCal.Page
//

ProjetCal.Page.instances = new Array();
ProjetCal.Page = function () { ProjetCal.Page.instances.push(this); }; 
ProjetCal.Page.prototype = { 
};

// Class ProjetCal.Table
//

ProjetCal.Table.instances = new Array();
ProjetCal.Table = function () { ProjetCal.Table.instances.push(this); }; 
ProjetCal.Table.prototype = { 
};

// Class ProjetCal.Attribut
//

ProjetCal.Attribut.instances = new Array();
ProjetCal.Attribut = function () { ProjetCal.Attribut.instances.push(this); }; 
ProjetCal.Attribut.prototype = { 
};

// Class ProjetCal.BDD
//

ProjetCal.BDD.instances = new Array();
ProjetCal.BDD = function () { ProjetCal.BDD.instances.push(this); }; 
ProjetCal.BDD.prototype = { 
};

// Class ProjetCal.Layout
//

ProjetCal.Layout.instances = new Array();
ProjetCal.Layout = function () { ProjetCal.Layout.instances.push(this); }; 
ProjetCal.Layout.prototype = { 
  orientation : 0,
 };

bouton = new ProjetCal.Button();
Romain = new ProjetCal.Label();
duTexte = new ProjetCal.TextField();
Home = new ProjetCal.Page();
Inscription = new ProjetCal.Page();
ListingProduit = new ProjetCal.Page();
Login = new ProjetCal.Page();
User = new ProjetCal.Table();
login = new ProjetCal.Attribut();
mdp = new ProjetCal.Attribut();
Client = new ProjetCal.BDD();
Horizontal = new ProjetCal.Layout();
bouton.contenu = "";
Romain.contenu = "";
Horizontal.orientation = 0;
