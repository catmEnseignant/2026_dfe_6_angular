public class MainElectronique {
    public static void main(String[] args) {
        Produit p1 = new Produit(1, "Savon", 500);
        Produit p2 = new ProduitAlimentaire(2, "Lait", 1200, "2025-11-30");
        Produit p3 = new ProduitElectronique(3, "Ordinateur", 350000, 12);

        Produit[] produits = { p1, p2, p3 };

        for (Produit p : produits) {
            p.afficherInfos(); // Polymorphisme en action
            
        }
    }
}
