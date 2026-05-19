class Personne{
    // attribut ou proprietes
    int numero;

    // attribut ou proprietes
    String prenom;
    // attribut ou proprietes
    String nom;
    String adresse;
    String dateNassance;
    String tel;

  Personne(int num,String p, String n){
    this.numero=num;
    this.prenom=p;
    this.nom=n;

    Personne(){
        System.out.println("consrtucteur avec 3 arguments");
        // permert 
    // Personne p=mnew Personne ();

    }

    
  }


    void presentation(){
        String txt="je suis "+prenom+" "+nom+" j'habite "+adresse;
        System.out.println(txt);
    }


}

