import java.util.Scanner;

public class TestExerCiceFor3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Entrez un nombre : ");
        int nombre = sc.nextInt();

        int i = 1;
        do {
            System.out.println(nombre + " x " + i + " = " + (nombre * i));
            i++;
        } while (i <= 10);

        sc.close();
    }
}
