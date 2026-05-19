public class TestFor3 {
    public static void main(String[] args){
        System.out.println("Les arguments donnees au programme sont");
        for(String argument: args){
            System.out.println(argument);

        }

        // C'est equivalent a
        System.out.println("Les arguments donnees au programme sont");
        for(int i=0; i<args.length;i++){
            String argument=args[i];
            System.out.println(argument);
        }
    }
}