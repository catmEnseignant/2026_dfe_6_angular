public class TestPolyMorphisme2{
    public static void main(String[] args) {
        Negeur n1=new poisson();// on a cree une personne mais on le considere conne un nageur  
        Nageur n2=new Personne();
        Nageur n3=new Lion();

        n1.nage();
        n2.nage();
        n3.nage();
    }
