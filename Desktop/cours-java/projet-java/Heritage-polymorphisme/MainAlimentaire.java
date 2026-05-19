public class MainAlimentaire {
    public static void main(String[] args) {
        ProduitAlimentaire riz = new ProduitAlimentaire(1, "Riz", 2500, "2025-12-01");
        ProduitElectronique tv = new ProduitElectronique(2, "Téléviseur", 150000, 24);

        // Tableau de produits
        Produit[] produits = { riz, tv };

        for (Produit p : produits) {
            p.afficherInfos();
           j
        }
    }
}


