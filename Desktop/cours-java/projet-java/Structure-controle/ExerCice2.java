import java.util.Scanner;

public class ExerCice2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Entrez une note entre 0 et 20 : ");
        double note = sc.nextDouble();

        if (note >= 0 && note <= 9) {
            System.out.println("Insuffisant");
        } else if (note >= 10 && note <= 13) {
            System.out.println("Passable");
        } else if (note >= 14 && note <= 16) {
            System.out.println("Bien");
        } else if (note >= 17 && note <= 20) {
            System.out.println("Très bien");
        } else {
            System.out.println("Note invalide");
        }
        sc.close();
    }
}
