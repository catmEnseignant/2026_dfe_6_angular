public class CompteBancaire {
    int numero;
    double solde;
    Personne proprietaire;
    Personne gestionnaire;

    double deposer(double montant){
        if(montant>0){
            this.solde += montant; //this.solde+montant;

        }else{
            System.out.println("le montant doit etre positif , le n'est pas modifie");

        }
        return solde;

    }
    void afficheCompte(){
        System.out.println("Compte n :"+numero);
        System.out.println("Solde : "+solde);
        System.out.println("Gere par: "+gestionnaire.prenom+" "+gestionnaire.nom);
    }

    double retirer(int montant) {
        if(montant>0 && montant <= this.solde){
            this.solde -=montant;
        }else{
            System.out.println("le montant a retirer doit etre positif et inferieur au montant initial");
        }
        return solde;
        
    }
    

   

    
} 