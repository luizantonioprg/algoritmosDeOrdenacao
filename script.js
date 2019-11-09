            var minhaArray=[];
            var contador=0;

                    $('#input-excel').change(function(e){
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(e.target.files[0]);
                            reader.onload = function(e) {
                                    var data = new Uint8Array(reader.result);
                                    var wb = XLSX.read(data,{type:'array'});
                                    var htmlstr = XLSX.write(wb,{sheet:"Plan1", type:'binary',bookType:'html'});
                                    $('#wrapper')[0].innerHTML += htmlstr;
                                    $('#botao').css('display','inline');
                                    $('#download').css('display','none');

                            }
                    });


                    document.getElementById("botao").onclick=function(){
                        document.getElementsByTagName("table")[0].setAttribute("id","tableid");
                        var table=document.getElementById("tableid");


                            $('#tableid tr').each(function(){
                                $(this).find('td').each(function(){
                                       var result= parseInt( $(this).html());
                                         minhaArray.push(result);

                                })
                            $("#botao").css('display','none');
                            $('#button-a').css('display','inline');
  

                            })


            // INSERTION SORT

                        function insertion_Sort(minhaArray)
                        { 
                          var t0 = performance.now();
                          var counter = 0;

                          for (var i = 1; i < minhaArray.length; i++) 
                          {
                            if (minhaArray[i] < minhaArray[0]) 
                            {
                              //move current element to the first position
                              minhaArray.unshift(minhaArray.splice(i,1)[0]);
                            } 
                            else if (minhaArray[i] > minhaArray[i-1]) 
                            {
                              //leave current element where it is
                              continue;
                            } 
                            else {
                              //find where element should go
                              for (var j = 1; j < i; j++) {
                                if (minhaArray[i] > minhaArray[j-1] && minhaArray[i] < minhaArray[j]) 
                                {
                                  //move element
                                  minhaArray.splice(j,0,minhaArray.splice(i,1)[0]);
                                }
                              }
                            }
                          }



                        for (i = 0; i < 1000; i++) { 
                            counter ++;
                        }
                        var t1 = performance.now();
                        var res2 = ((t1 - t0));
                        document.getElementById("tempoIns").innerHTML=res2;
 
                          return minhaArray;
                        }



            // BUBBLE SORT
                        function bubbleSort(minhaArray) {
                            var t0 = performance.now();
                            var counter = 0;
                            var swapped;
                                do {
                                    swapped = false;
                                    for (var i=0; i < minhaArray.length-1; i++) {
                                        if (minhaArray[i] > minhaArray[i+1]) {
                                            var temp = minhaArray[i];
                                            minhaArray[i] = minhaArray[i+1];
                                            minhaArray[i+1] = temp;
                                            swapped = true;
                                        }
                                    }
                                } while (swapped);


                        for (i = 0; i < 1000; i++) { 
                            counter ++;
                        }
                        var t1 = performance.now();
                        var res=((t1 - t0));
                        document.getElementById("tempoBub").innerHTML=res;
                            
                        }            

                        bubbleSort(minhaArray);
                        //document.getElementById("arrayBub").innerHTML=minhaArray;
                
                        var insResp = (insertion_Sort(minhaArray));
                       // document.getElementById("arrayIns").innerHTML=insResp;


                    var wb = XLSX.utils.book_new();
                    wb.Props = {
                            Title: "SheetJS Tutorial",
                            Subject: "Test",
                            Author: "User",
                            CreatedDate: new Date(2019,11,07)
                    };

                    wb.SheetNames.push("Test Sheet");
                    var ws_data = [minhaArray];
                    var ws = XLSX.utils.aoa_to_sheet(ws_data);
                    wb.Sheets["Test Sheet"] = ws;
                    var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
                    function s2ab(s) {

                            var buf = new ArrayBuffer(s.length);
                            var view = new Uint8Array(buf);
                            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                            return buf;


                    }
                    

                    $("#button-a").click(function(){
                            saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
                        console.log(minhaArray);
                    });
                }

function velocidade(){

    if(contador%2==0){
        document.getElementById("vel").style.backgroundColor="orange";
    }else{
        document.getElementById("vel").style.backgroundColor="white";
    }

    contador++;

}
function mostrarVelocidade(){
    document.getElementById("vel").style.display="none";
    document.getElementById("filho2").style.display="flex";
}
setInterval(velocidade,900);

            //https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php

 