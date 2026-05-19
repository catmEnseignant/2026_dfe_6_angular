
class Boutique {
    private String nom;
    private String adresse;
    private double soldeOm;
    private double soldeWave;

    
    public Boutique(String nom, String adresse, double soldeOm, double soldeWave) {
        this.nom = nom;
        this.adresse = adresse;
        this.soldeOm = soldeOm;
        this.soldeWave = soldeWave;
    }

    // Méthodes pour OM
    public void depotOm(double montant) {
        if(montant>0){
            soldeOm += montant;
        }else{
            System.out.println("montant deposer invalide");
        }
    }
    

    public void retraitOm(double montant) {
        if(montant>0 && montant<=soldeOm){
            soldeOm -= montant;
        }else{
            System.out.println("montant ritirer invalide")
        }
        
    }

    // Méthodes pour Wave
    public void depotWave(double montant) {
        soldeWave += montant;
    }

    public void retraitWave(double montant) {
        soldeWave -= montant;
    }

    // Getters pour récupérer les soldes
    public double getSoldeOm() {
        return soldeOm;
    }

    public double getSoldeWave() {
        return soldeWave;
    }
}



