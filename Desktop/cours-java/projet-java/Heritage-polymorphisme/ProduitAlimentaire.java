public class ProduitAlimentaire extends Produit {
    private String dateExpiration;

    public ProduitAlimentaire(int id, String nom, double prix, String dateExpiration) {
        super(id, nom, prix);
        this.dateExpiration = dateExpiration;
    }

    // Redéfinition de la méthode afficherInfos()
   
    public void afficherInfos() {
        System.out.println("Produit : " + nom);
        System.out.println("Prix : " + prix + " FCFA");
        System.out.println("Date d'expiration : " + dateExpiration);
    }
}
