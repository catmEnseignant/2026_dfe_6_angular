import java.util.Scanner;

public class TestExerCiceFor1 {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("Entrer un nombre d'utilisateur et affiche la table de multiplication de ce nombre");
        System.out.print("Entrer le nombre :");
        int n=sc.nextInt();
        for(int i=1; i<=12; i=i+2){
            int res=n*i;
            System.out.println(n+"x"+i+"="+res);
        }
        sc.close();
    }
}