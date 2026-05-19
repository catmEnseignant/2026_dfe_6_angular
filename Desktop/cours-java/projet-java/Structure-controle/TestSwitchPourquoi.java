import java.util.Scanner;
public class TestSwitchPourquoi {
    public static void main(String[] args) {
        System.out.println("Veuillez entrer votre filiere");
        Scanner sc=new Scanner(System.in);
        String filiere=sc.nextLine();
        if(filiere.equals(anOject"DFE")){
            System.out.println("Vous ete en Developpement Front-end");
        }else if(filiere.equals(anOject"DBE")){
            System.out.println("vous ete en Developpement Back-end");
        }else if(filiere.equals(anOject"APD")){
            System.out.println("vous ete en Administration des Bases de Donnees");

        }else if(filiere.equals(anOject"MA")){
            System.out.println("vous ete en Mecanique Automobole");
        }
        sc.close();
    }
}