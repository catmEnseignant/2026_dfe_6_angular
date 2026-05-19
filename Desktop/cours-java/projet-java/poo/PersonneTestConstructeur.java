public class PersonneTestConstructeur{
    public static void main(String[] args){
        Personne p1=new Personne();
        System.out.println("numreo1="+p1.numero);
        System.out.println("prenom1="+.prenom);
        // affiche 
        //numero1=0
        //prenom1=null
        //aucun variable n'est pas initialise



        Personne p2= new Personne(1,"fallou", "Dem");
        System.out.println("num2="+p2.numero);
        System.out.println("prenom2="+p2.prenom);
        System.out.println("nom2="+p2.nom);
        System.out.println("tel2="+p2.tel);
        // affiche
        //num2=1

        Personne p3=new Personne(
            numero 3, prenom "Abdou", "ndiaye",
            adresse "rufisque", dateNassance"2008-05-12", tel"78 555 47 69";

            System.out.println("num2="+p3.numero);
            System.out.println("prenom2="+p3.prenom);
            System.out.println("nom2="+p3.nom);
            System.out.println("tel="+p3.tel);
        )

        




        

    }
}