public class TestHeritage {
    public static void main(String[] args) {
        // creation de personne
        Personne p1=new Personne();
        p1.id=1;
        p1.prenom="Babacar";
        p1.nom="Diop";
        p1.affiche();


        //creation Enseignant
        Enseignant e1=new Enseignant();
        // dans la Enseignantb il ya pas de variable prenom,mais puisque la class Enseignant
        //herite de personne elle aura les variables id , prenom et nom
        e1.id=2;
        e1.prenom="sanou";
        e1.nom="seck";
        e1.matiere="PHP";
        System.out.println("affichen e1");
        // la methode est recherche dans la class Enseignant si elle n existe pas la bas
        //elle est alors cherchee dans personne
        e1.affiche();


        Appernant al=new Apprenent();
        a1.id=3;
        a1.prenom="seynabou";
        a1.nom="nbemgue";
        a1.promo=6;
        a1.filiere="DFE";
        System.out.println("Affiche a1");
        a1.affiche();// affiche de personne sera executee car Apprenent n'a pas de methide affiche
        System.out.println("aaffiche promo");
        a1.affichepromo();
    }
}