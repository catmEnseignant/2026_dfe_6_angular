import java.util.Scanner;

public class TestWhile2 {
    public static void main(String[] args) {
       Scanner sc=new Scanner(System.in);
        boolean continuer=true;
        String prenom;
        String nom;
        while (continuer) {
            System.out.println("Entrer votre prenom:");
            prenom=sc.nextLine();
            System.out.println("Entrer votre nom");
            nom=sc.nextLine();
            System.out.println("Apprenent "+prenom+"  "+nom+" ajoute");

            System.out.println("voulez vous ajouter un autre apprenant[oui|nom]?");
            String reponse=sc.nextLine();
            //equals compare en respectant la casse oui different de Oui
            //equalsIgnoreCase compare sans respecter la casse oui=Oui
            if(reponse.equalsIgnoreCase("oui")){
                continuer=true;
            }else{
                continuer=false;
            }
            
        }
        System.out.println("Merci d avoir utilise notre programme");
        sc.close();
    }
}