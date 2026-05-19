import java.util.Scanner;

public class Exercice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Entrez un nombre : ");
        double nombre = sc.nextDouble();

        if (nombre > 0) {
            System.out.println("Le nombre est positif");
        } else if (nombre < 0) {
            System.out.println("Le nombre est négatif");
        } else {
            System.out.println("Le nombre est nul");
        }
        sc.close();
    }
}
