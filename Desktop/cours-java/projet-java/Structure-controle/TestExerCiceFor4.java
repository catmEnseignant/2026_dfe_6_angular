import java.util.Scanner;

public class TestExerCiceFor4{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Entrez le premier nombre : ");
        double a = sc.nextDouble();

        System.out.print("Entrez le second nombre : ");
        double b = sc.nextDouble();

        System.out.print("Entrez un opérateur (+, -, *, /) : ");
        char operateur = sc.next().charAt(0);

        double resultat;

        switch (operateur) {
            case '+':
                resultat = a + b;
                System.out.println("Résultat : " + resultat);
                break;
            case '-':
                resultat = a - b;
                System.out.println("Résultat : " + resultat);
                break;
            case '*':
                resultat = a * b;
                System.out.println("Résultat : " + resultat);
                break;
            case '/':
                if (b != 0) {
                    resultat = a / b;
                    System.out.println("Résultat : " + resultat);
                } else {
                    System.out.println("Erreur : division par zéro !");
                }
                break;
            default:
                System.out.println("Opérateur invalide !");
        }

        sc.close();
    }
}
