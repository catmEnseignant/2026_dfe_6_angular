public class TestInterface{

    public static void main(String[] args) {
        Personne p1=newnPersonne();
        p1.id=1;
        p1.prenom="coumba";
        p1.nom="Diouf";
        p1.saitNager=true;
        p1.nage();
        
        Apprenent apprenant=new Apprenant();
        apprenant.id=2;
        apprenant.nom="ndiaye";
        apprenant.prenom="Astou";
        apprenant.filiere="DFE";
        apprenant.promo=6;


        apprenant.marche();
        apprenant.nage();
        apprenant.court

        Poisson poisson=new Poisson();
        Poisson.nom="titi";
        Poisson.nage;

        // piosson.court(); ceci ne fonctionnne pas car la class poisson n'a pas l'interface Marcheur





    }
}