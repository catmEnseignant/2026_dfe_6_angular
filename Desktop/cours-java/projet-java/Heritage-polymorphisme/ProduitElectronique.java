public class ProduitElectronique extends Produit {
     int garantie; 

    public ProduitElectronique(int id, String nom, double prix, int garantie) {
        super(id, nom, prix);
        this.garantie = garantie;

    }
    @Override
    public void afficherInfos() {
        System.out.println("Produit : " + nom);
        System.out.println("Prix : " + prix + " FCFA");
        System.out.println("Garantie : " + garantie + " mois");
    }
}
