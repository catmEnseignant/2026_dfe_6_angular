class Gestionnaire {
    private String prenom;
    private String nom;
    private String tel;
    private Boutique boutique;

    
    public Gestionnaire(String prenom, String nom, String tel, Boutique boutique) {
        this.prenom = prenom;
        this.nom = nom;
        this.tel = tel;
        this.boutique = boutique;
    }

    
    public void afficherComptabilite() {
        System.out.println("=== Comptabilité du soir ===");
        System.out.println("Boutique : " + boutique);
        System.out.println("Solde OM : " + boutique.getSoldeOm() + " FCFA");
        System.out.println("Solde Wave : " + boutique.getSoldeWave() + " FCFA");
    }
}