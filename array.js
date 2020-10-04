
  var tab3=["element6","element7","element8","element9"];
  document.getElementById("demo2").innerHTML=tab3;

  var tab4=[15,5,14,18];
  function petit(tab4){
return tab4>=11;

  }
function myfonction(){
    var tab1=["element1","element2","element3"];
    var tab2=["element4","element5","element6"];
    
   
            document.getElementById("demo").innerHTML=tab1;
            document.getElementById("demo1").innerHTML=tab1.concat(tab2);
            document.getElementById("demo2").innerHTML=tab3.copyWithin(2,0);
            document.getElementById("demo3").innerHTML=tab1.length;
            document.getElementById("demo4").innerHTML=tab4.every(petit);
            document.getElementById("demo5").innerHTML=tab4.filter(petit);
            document.getElementById("demo6").innerHTML=tab4.find(petit);
            document.getElementById("demo7").innerHTML=tab4.findIndex(petit);
       
           
            
            
        
        }
        var tab8=["element4","element5","element6"];
        function myfonction1(){
          
          
          document.getElementById("demo8").innerHTML=tab8;
          tab8.pop();
        }
        function myfonction2(){
          
          
          document.getElementById("demo9").innerHTML=tab8;
          tab8.push("element11");
        }
        console.log("bonjour"+'\n'+tab4);
        var  myarr=Array.from("abvsvdhgsdhjsdjh");
        console.log(myarr);
        var tab5=["element4","element5","element6"];
        console.log(tab5.join("-"));
        var tab6=[15,5,14,18];
        var newtab=tab6.map(myfonctionn);
        function myfonctionn(num){

return   num*5;

        }
        console.log(newtab);
        var t=newtab.lastIndexOf(70);
        console.log(t);


        
       