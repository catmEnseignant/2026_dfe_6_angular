public class GestionnaireBoutique {
    public static void main(String[] args) {
        // Création de la boutique
        Boutique b1 = new Boutique("iSEP Shop", "Diamniadio", 5_000_000, 30_000_000);

        // Création de la gestionnaire
        Gestionnaire g1 = new Gestionnaire("Fatou", "Ndiaye", "770000000", b1);

        // Opérations sur le compte OM
        b1.depotOm(2_000_000);   
        b1.retraitOm(3_000);     
        b1.retraitOm(50_000);    

        // Opérations sur le compte Wave
        b1.retraitWave(200_000_000); 
        b1.retraitWave(4_000);   
        b1.depotWave(500);       

        // Affichage des soldes finaux
        System.out.println("=== Résultats du soir ===");
        System.out.println("Solde compte OM : " + b1.getSoldeOm() + " FCFA");
        System.out.println("Solde compte Wave : " + b1.getSoldeWave() + " FCFA");
    }
}
