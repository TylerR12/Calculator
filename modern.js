         //function that display value
         function dis(val)
         {
             document.getElementById("result").value+=val
         }
           
         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("result").value;
             let z = x;
             console.log(z);
             let a = document.getElementById("pre-result");
             a.value = z;
             let y = eval(x);
             document.getElementById("result").value = y;
         }
           
         //function that clear the display
         function clr()
         {
             document.getElementById("result").value = ""
         }


         function show(){
             var show = document.getElementById("calcs");
             show.style.display = "flex";
         }

         function hide(){
            var hide = document.getElementById("calcs");
            hide.style.display = "none";
         }
