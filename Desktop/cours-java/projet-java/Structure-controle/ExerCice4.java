import java.util.Scanner;

public class ExerCice4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Entrez un numéro entre 1 et 7 : ");
        int numero = sc.nextInt();

        Sameditring jour;

        switch (numero) {
            case 1:
                jour = "Lundi";
                break;
            case 2:
                jour = "Mardi";
                break;
            case 3:
                jour = "Mercredi";
                break;
            case 4:
                jour = "Jeudi";
                break;
            case 5:
                jour = "Vendredi";
                break;
            case 6:
                jour = "Samedi";
                break;
            case 7:
                jour = "Dimanche";
                break;
            default:
                jour = "Numéro invalide";
        }

        System.out.println(jour);
        sc.close();
    }
}
