import java.util.Scanner;

public class ExerCice5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Entrez le nom d'un mois : ");
        String mois = sc.next().toLowerCase();

        switch (mois) {
            case "janvier":
            case "mars":
            case "mai":
            case "juillet"
            case "août":
            case "octobre":
            case "décembre":
                System.out.println("Ce mois a 31 jours");
                break;
            case "avril":
            case "juin":
            case "septembre":
            case "novembre":
                System.out.println("Ce mois a 30 jours");
                break;
            case "février":
                System.out.println("Ce mois a 28 ou 29 jours");
                break;
            default:
                System.out.println("Mois invalide");
        }

        sc.close();
    }
}
