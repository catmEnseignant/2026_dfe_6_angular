public class TestConstructeur{
    public static void main(String[] args){
        Personne p=new Personne(1, "Abdou" , "Diop");
        //equivalente a
        // Personne p=new personne ();
        //p.numero=1;
        //p.prenom="Abdou";
        //p.nom="Diop";
        p.adresse="Diamniadio";
        p.presentation();
    }
}