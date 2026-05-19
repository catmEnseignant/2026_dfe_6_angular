import java.util.Scanner;

public class TestBreak1 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        String text="Entere un nombre pour le diviser par les nombres compris entre -5 et 5";
        System.out.println(text);
        int n=sc.nextInt();
        for(double i=-5; i<=5 ; i++){
            if(i==0){
                System.out.println("Arret de labouche car on ne peut pas diviser par zero");
                // sortir de la boucle for
                break;
            }
            double res=i/n;
            System.out.println(n+"/"+i+"="+res);
        }
    }
}