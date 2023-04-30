  function submit()
{
    let firstname = document.getElementById("firstname").value;
    document.getElementById("value1").innerhtml="FirstName: "+ firstname;

    let lastname = document.getElementById("lastname").value;
    document.getElementById("value2").innerhtml="LastName: "+ lastname;
    
    let age= Number(document.getElementById("age").value);
    if(age>=20 && age<=60)
     {
        document.getElementById("value3").innerhtml= "Age: "+ age+ "The person is an adult";
     }
     else
    {
        document.getElementById("value3").innerhtml= "Age: "+ age+ "The person is not an adult and the correct age limit for adults is 20-60 years.";
    }

    let email=document.getElementById("value4").value;
    document.getElementById("value4").innerhtml="Email: "+ email;

    let message =document.getElementById("value5").value;
    document.getElementById("value5").innerhtml="Message: "+ message;

}