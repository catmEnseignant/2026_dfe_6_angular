public class Apprenant extends Personne{
    String filiere;
    int promp;
    Apprenant(){
        // constructeur de la classs sans argument est toujours appele
        this.filiere="DFE";
        this.promo=6;
    }
}








body {
    font-family: Arial, sans-serif;
    background-color: #f0f3f7;
    text-align: center;
    margin: 20px;
}

form {
    background-color: #3e12dc;
    padding: 20px;
    display: inline-block;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
}

input, button {
    padding: 10px;
    margin: 5px;
    width: 250px;
}

table {
    margin: 20px auto;
    border-collapse: collapse;
    width: 90%;
}

th, td {
    padding: 10px;
    border: 1px solid #999;
}

a.btn {
    background-color: #4CAF50;
    color: white;
    padding: 8px 12px;
    text-decoration: none;
    border-radius: 5px;
    background-color: #3e12dc;
}

a.btn-logout {
    background-color: #d9534f;
    color: white;
    padding: 43px 45px;
    text-decoration: none;
    border-radius: 5px;
}


.login-contrainer{
    background-color: #ffffff;
    padding: 40px 50px;
    border-radius: 15px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0,1);
    text-align: center;
    width: 350px;

}

h2{
    margin-bottom: 25px;
    font-size: 22;
    color: #1e293b;

}

input[type="emali"],
input[type="password"]{
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 20px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    transition: all 0.3s ease;


}
input[type="email"]:focus,
input[type="password"]:focus{
    border-color: #2563eb;
    box-shadow: 0 0 5px rgba(37, 99, 235, 0.3);

}
button{
    width: 100%;
    padding: 12px;
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease, transforme 0.2s ease;

}

button:hover{
    background-color: #1d4ed8;
    transform: translateY(-2px);
}

.error-message{
    color: #dc2626;
    font-size: 14px;
    margin-top: 10px;
    font-weight: ;
}



