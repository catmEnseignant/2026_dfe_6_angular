import java.util.Scanner;
public class TestIfV2 {
    public static void main(String[] args) {
        int nombre=7;
        System.out.println("Devinez nombre comprus entre le nombre  0 et 9");
        Scanner sc=new Scanner(System.in);
        int nbreDivine=sc.nextInt();
        if(nbreDivine==nombre){
            System.out.println("Bravo! vous avez trouve le nombre");

        }else{
            if(nbreDivine<nombre){
                System.out.println("Desole votre nombre est inferieur");

            }else{
                System.out.println("votre nombre est superieur");
            }
        }
        sc.close();
    }
}