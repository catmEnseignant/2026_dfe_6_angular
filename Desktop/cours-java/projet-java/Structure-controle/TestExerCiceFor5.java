import java.util.Scanner;

public class TestExerCiceFor5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String continuer;

        do {
            System.out.print("Entrez le premier nombre : ");
            double nb1 = sc.nextDouble();

            System.out.print("Entrez le second nombre : ");
            double nb2 = sc.nextDouble();

            System.out.print("Entrez un opérateur (+, -, *, /) : ");
            char operateur = sc.next().charAt(0);

            double resultat = 0;
            boolean valide = true;

            switch (operateur) {
                case '+':
                    resultat = nb1 + nb2;
                    break;
                case '-':
                    resultat = nb1 - nb2;
                    break;
                case '*':
                    resultat = nb1 * nb2;
                    break;
                case '/':
                    if (nb2 != 0) {
                        resultat = nb1 / nb2;
                    } else {
                        System.out.println("Erreur : division par zéro !");
                        valide = false;
                    }
                    break;
                default:
                    System.out.println("Opérateur invalide !");
                    valide = false;
            }

            if (valide) {
                System.out.println("Résultat : " + resultat);
            }

            System.out.print("Voulez-vous faire une autre opération ? (oui|non) : ");
            continuer = sc.next();

        } while (continuer.equalsIgnoreCase("oui"));

        System.out.println("Merci d avoir utilisé notre programme !");
        sc.close();
    }
}
