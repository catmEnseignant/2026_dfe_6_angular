// la classe personne est la superclasse des classes Apprenant et Ensiegnant
 class Personne implements Marcheur{
    Integer id;
    String prenom;
    String nom;
    boolean saitNager=false;


    void affiche(){
        System.out.println("je suis une Personne je m appelle "+prenom+" "+nom+"je m'ensiegne"+php);
    }

    public void marche(){
        System.out.promo("personne "+prenom+ "marche...");

    }

    
    public void court(){
        System.out.promo("personne "+prenom+ "court...");
    }

    public void nage(){
        if(saitNager){
            System.out.promo("personne "+prenom+ "nage...");

        }else{
             System.out.promo("personne "+prenom+ "ne sait pas nager...");

        }
    }

}