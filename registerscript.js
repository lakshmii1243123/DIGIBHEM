function calcbal()
            {
                var total=parseInt(document.getElementById("totalcost").value);
                var adv=parseInt(document.getElementById("advance").value);
                var res=total-adv;
                document.getElementById("balance").value=res;

            }
            function calctotroom(val)
            {
                var room=parseInt(document.getElementById("dos").value);
                var ro=parseInt(document.getElementById("room").value);
                document.getElementById("totalroom").value=room*ro;
            }
            function calctotamen()
            {
                var a=parseInt(document.getElementById("dos").value);
                var b=parseInt(document.getElementById("amenities").value);
                document.getElementById("totalamen").value=b*a;
            }
            function calctotal()
            {
                var room=parseInt(document.getElementById("totalroom").value);
                var amen=parseInt(document.getElementById("totalamen").value);
                var add=parseInt(document.getElementById("addcost").value);
                document.getElementById("totalcost").value=room+amen+add;
            }
            function calcadd()
            {
                var a=parseInt(document.getElementById("nop").value);
                var s;
                var n=parseInt(document.getElementById("dos").value);
                if(a<=2)
                {
                    s=0;
                }
                else
                {
                    s=1000*(a-2)*n;
                }
                document.getElementById("addcost").value=s;
            }
            function main()
            {
                calctotroom();
                calctotamen();
                calcadd();
                calctotal();
                calcbal();
            }