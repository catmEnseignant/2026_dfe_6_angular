class Personne{
    int id;
    String prenom;
    String nom;
    String adresse;
    String tel;


    Personne(int id, String prenom, Stringnom){
        System.out.printlnO("appel du constructeur sans arguments");
        this.adresse="Diamniadio";
        this.tel="33 45 67 35";
    }
    
    Personne(int id,String prenom, String nom){
        this();//appel du Constructeur sans argument
        // donc l'adresse sers Diamniadio et le tel 33 45 67 35
        System.out.println("appel du constructeur '"+id"', '"+prenom+"', '"+nom+"'");
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
    }

   


    Personne(int id, String prenom, String nom ,String adresse, String tel){
        this(id,prenom,nom);//appel le constructeur qui a comme argument in int , String,String;String
        //dunc c'est equivalent a ecrire les 3 lignes commentes suivants
        //this.id=id;
        //this.nom=nom;
        //this.prenom=prenom;
        System.out.println("appel du Constucteur id, prenom,nom adresse tel");
        this.adresse=adresse;
        this.tel=tel;
    }
}