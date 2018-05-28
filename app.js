window.onload = () => {
  const btn = document.getElementById("btn");
  const demo = document.getElementById("demo");

  // Funcion suma
  add = (n1,n2) => {
    return n1 + n2
  };
  
  //Funcion multiplicacion
  multiply = (n3, n4) => {
    return n3 * n4;
  };

  // Argumentos de la funcion
  const func1 = add (9824,777);
  const result = multiply (36325, func1);
  
  // Funcionalidad boton
  btn.addEventListener("click", function(){
    demo.innerHTML = result
  });
};
