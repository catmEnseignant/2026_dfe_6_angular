public class Produit {
    protected int id;
    protected String nom;
    protected double prix;

    public Produit(int id, String nom, double prix) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
    }

    public void afficherInfos() {
        System.out.println("Produit : " + nom);
        System.out.println("Prix : " + prix + " FCFA");
    }
}
