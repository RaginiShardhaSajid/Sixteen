   var q=[];
          var i=0;
      function hide(x){
          if(q[0]!= x){
            q[i] = x;
            if (i!= 0) {
              var p;
              p = document.getElementById(q[0]);
              p.style.display = 'none'
              q[0] = q[1];
              i = 1;
            }
            i = 1;
          }
        var p;
        p = document.getElementById(x);
        if (p.style.display == 'none') {
          p.style.display = 'block';
        }
        else
          p.style.display = 'none';
      }

      // preloader function here start 

      function fun(){
        var x;
        x = document.getElementsByClassName('Preloader')[0];
        x.style.display = "none";

      }

      // navbar color changes javascript code start here

   //    window.onscroll = function(){
   //      nab();
   //    }
   //    function nab(){
   //      if (document.body.scrollTop >200 || document.documentElement.scrollTop > 200) {
   //        document.getElementById('nab1').style.backgroundColor = 'white';
   //        document.getElementById('logo').style.color = 'black';
   //        for (var i=0;i<5;i++)
   //    {
   //      document.getElementsByClassName("nab2")[i].style.color="black";
   //    }
   //  }
   //  else{
   //    document.getElementById('nab1').style.backgroundColor = '';
   //    document.getElementById('logo').style.color = '';
   //    for(var i=0;i<5;i++){
   //      document.getElementsByClassName('nab2')[i].style.color = '';
   //    }
   //  }
   // }