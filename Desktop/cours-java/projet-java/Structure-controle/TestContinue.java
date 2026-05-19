import java.util.Scanner;

public class TestContinue {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        String text="Entere un nombre pour le diviser par les nombres compris entre -5 et 5";
        System.out.println(text);
        int n=sc.nextInt();
        for(double i=-5; i<=5 ; i++){
            if(i==0){
                System.out.println("on ignore la valeur i=0 car on ne peut pas diviser par zero");
                // aller a l'iteration suivante en ignorant le restes des instruction de la boucle
                continue;
            }
            double res=n/i;
            System.out.println(n+"/"+i+"="+res);
        }
        sc.close();
    }
}