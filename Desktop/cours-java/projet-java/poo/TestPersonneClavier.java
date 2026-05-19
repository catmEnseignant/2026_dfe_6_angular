import java.util.Scanner;

public class TestPersonneClavier {
    public static void main(String[] args){
        // cree un objet seck de type personne
        Personne p1=new Personne();
        Scanner sc=new Scanner(System.in);
        System.out.println("Entrer le numero");
        p1.numero=sc.nextInt();

        System.out.println("Entrer votre prenom");
        p1.prenom=sc.next();

        System.out.println("Entrer votre nom");
        p1.nom=sc.next();

        System.out.println("Entrer votre adresse");
        p1.adresse=sc.next();

        String presentation="Apprenent "+p1.prenom+" "+p1.nom+ " numero "+p1.numero+" habite "+p1.adresse;
        System.out.println(presentation);
        sc.close();



        

    }
}