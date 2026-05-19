public class TestPersonne{
    public static void main(String[] args){
        // cree un objet seck de type personne
        Personne p1=new Personne();
        p1.numero=1;
        p1.prenom="Sanou";
        p1.nom="seck";
        p1.dateNassance="2006-4-4";
        p1.adresse="Diamniadio";
        p1.tel="78 555 47 69";

        String presentation="Apprenent "+p1.prenom+" "+p1.nom+ " numero "+p1.numero+" habite "+p1.adresse;
        System.out.println(presentation);
        


    }
}