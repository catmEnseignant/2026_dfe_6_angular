public class TestExerCiceFor2 {
    public static void main(String[] args) {
        System.out.println("Entrer un nombre d'utilisateur et affiche la table de multiplication de ce nombre");
        System.out.print("Entrer le nombre :");
        int n=7;
        int i=1;
        int result;
        while(i>0 && i<11){
            result=n*i;
            System.out.println(n+"x"+i+"="+result);
            i++;
        }
         System.out.println("Merci d avoir utilise notre programme");
    }
}   