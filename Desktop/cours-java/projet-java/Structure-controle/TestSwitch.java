import java.utile.Scanner;
public class TestSwitch {
    public static void main(String[] args) {
        System.out.println("Veullez entre votre filiere");
        Scanner sc= new Scanner(System.in) ;
        String filiere=sc.nextLine();
        switch (filiere) {
            case "DFE":
                System.out.println("Votre departement est TIC");
                System.out.println("Votre filiere est Developpement Front-end");

                break;

            case "DBE":
                System.out.println("votre departement est TIC") ;
                System.out.println("Votre filiere est Developpement") ;

                break 
            case "APD":

                System.out.println("votre")   

        }

    }
}