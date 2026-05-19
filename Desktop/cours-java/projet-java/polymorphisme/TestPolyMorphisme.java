public class TestPolyMorphisme{


    // le polymorphisme est le fait qu'un objet peut avoir plusieurs formes
    // exemple un apprenant peut prendre la forme de personne o de nager ,ou de marcheur

    public static void main(String[] args) {
        Appernant a= new Apprenant();
        a.id=1;
        a.prenom="codou";
        a.nom="Ndiaye";
        a.promo=6;
        a.filiere="DFE";

        // comme tout personne est un apprenant on p fair 
        //a et represent le meme objet

        Personne p=a;

        //p ne peut executer que les methode qui sont dans personne 
        p.affiche();

        // si on affiche la valeur d'une variable de a ca se repercute sur p
        //par ce que c'est  le meme objet
        p.prenom="Fatou";
        System.out.println("prenom de a apres changement de p est "+a+.prenom);
    }
}