import java.util.Scanner;

public class TestFor2 {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("Ce programme permet de faire la table de multiplication des nombres paire");
        System.out.print("Entrer le nombre :");
        int n=sc.nextInt();
        for(int i=1; i<=10; i=i+2){
            int res=n*i;
            System.out.println(n+"x"+i+"="+res);
        }
        sc.close();
    }
}