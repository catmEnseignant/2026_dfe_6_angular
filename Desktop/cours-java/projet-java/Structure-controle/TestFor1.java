import java.util.Scanner;

public class TestFor1 {
    public static void main(String[] args) {
        // int i=0 est executer une seul fois lorsqu on attient la boucle
        //on test i<=10 si c vrai les instruction dans la boucle sont executees
        //apres execution des instructions le systeme execute l'instruction i++
        Scanner sc=new Scanner(System.in);
        System.out.println("Etrer un nombre");
        int n=sc.nextInt();
        for(int i=1; i<=10; i++){
            int res=i*n;
            System.out.println(n+"x"+i+"="+res);

        }
        System.out.println("Merci d avoir utilise notre programme");
        sc.close();

    }
}