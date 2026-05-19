public class CompteBancaireTest1{
    public static void main(String[] args) {
        Personne sanou=new Personne(1, "sanou", "seck") ;
        Personne client1= new Personne(2, "seynabou", "bengue");
        Personne client2= new Personne(3, "mbaye", "ndiaye");



        CompteBancaire compte1=new CompteBancaire();
        compte1.numero=123456789;
        compte1.gestionnaire=sanou;
        compte1.proprietaire=client1;
        compte1.solde=200000.0;


        CompteBancaire compte2=new CompteBancaire();
        compte2.numero=123456789;
        compte2.gestionnaire=seynabou;
        compte2.proprietaire=client2;
        compte2.solde=1400000.0;
        System.out.println("######## affiche les 2 compte #######");
        compte1.afficheCompte();
        //"aller a la ligne"
        System.out.println();
        compte1.deposer( 50000.0);
        System.out.println("######## apres depot 50000 affiche les 2 compte #######");
        compte1.afficheCompte();
        System.out.println();
        compte2.afficheCompte();

        System.out.println("Ap:ree retrait");
        int montant=10000;
        compte2.retirer(montant);
        client2.afficheCompte();


    
    }
}