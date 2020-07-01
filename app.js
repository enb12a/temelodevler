//Google Maps Ayarları
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBCDigtmlRpwqrnvRXRIyWdnY8Z1XiCwx0&callback=initMap';
script.defer = true;
script.async = true;
var map;
    function initMap() {  
        map = new google.maps.Map(document.getElementById("maps"), {
            center: { lat: 38.721204, lng: 35.488907},
            zoom: 15
        });
 
    //addmarker
    // var marker1 = new google.maps.Marker({
    //   position: {lat: 38.721204, lng: 35.488907},
    //   title: "Kale"
    // });
    //     marker1.setMap(map)
   
 }

document.head.appendChild(script);
//1.Temel Ödev
const aEnlem1 = document.getElementById("bir-tem-a-enlem");
const aBoylam1 = document.getElementById("bir-tem-a-boylam");
const abUz1 = document.getElementById("bir-tem-ab-uzunluk");
const abAçıklık1 = document.getElementById("bir-tem-ab-açıklık");
const btnHesapla1 = document.getElementById("bir-tem-hesapla-buton");
const bEnlem1 = document.getElementById("bir-tem-b-enlem");
const bBoylam1 = document.getElementById("bir-tem-b-boylam");
const girdi = document.getElementsByClassName("girdi");
//2.Temel Ödev
const aEnlem2 = document.getElementById("iki-tem-a-enlem");
const aBoylam2 = document.getElementById("iki-tem-a-boylam");
const bEnlem2 = document.getElementById("iki-tem-b-enlem");
const bBoylam2 = document.getElementById("iki-tem-b-boylam");
const abUz2 = document.getElementById("iki-tem-ab-uzunluk");
const abAçıklık2 = document.getElementById("iki-tem-ab-açıklık");
const btnHesapla2 = document.getElementById("iki-tem-hesapla-buton");
//3.Temel Ödev 
const abAçıklık3 = document.getElementById("üç-tem-ab-açıklık");
const beta3 = document.getElementById("üç-tem-beta");
const btnHesapla3 = document.getElementById("üç-tem-hesapla-buton");
const bcAçılık3 = document.getElementById("üç-tem-bc-açıklık");
//4.Temel Ödev
const aEnlem4 = document.getElementById("dört-tem-a-enlem");
const aBoylam4 = document.getElementById("dört-tem-a-boylam");
const bEnlem4 = document.getElementById("dört-tem-b-enlem");
const bBoylam4 = document.getElementById("dört-tem-b-boylam");
const cEnlem4 = document.getElementById("dört-tem-c-enlem");
const cBoylam4 = document.getElementById("dört-tem-c-boylam");
const btnHesapla4 = document.getElementById("dört-tem-hesapla-buton");
const beta4 = document.getElementById("dört-tem-beta");



eventListener();
function eventListener(){
    btnHesapla1.addEventListener("click",degergelsin1);//1.temel ödev butonu
    btnHesapla2.addEventListener("click",degergelsin2);//2.temel ödev butonu
    btnHesapla3.addEventListener("click",degergelsin3);//3.temel ödev butonu
    btnHesapla4.addEventListener("click",degergelsin4);//4.temel ödev butonu
    
}
function degergelsin1(e){
        const aenlemdeğeri1 =Number(aEnlem1.value.trim());
        const aboylamdeğeri1 =Number(aBoylam1.value.trim());
        const abuzunlukdeğeri1 = Number(abUz1.value.trim());
        const abaçıklıkdeğeri1 = Number(abAçıklık1.value.trim());
        const benlemdeğeri1 = Number(aenlemdeğeri1+(Math.sin(abaçıklıkdeğeri1)*abuzunlukdeğeri1));



            if(bBoylam1.value || bEnlem1.value == NaN)
            {alert("Lütfen Geçerli bir değer girin");
                window.location.reload();}
                
            else{
                const b = Number(benlemdeğeri1);
                bEnlem1.value=parseFloat(b).toFixed(4);       
                const bboylamdeğeri = Number(aboylamdeğeri1+(Math.sin(abaçıklıkdeğeri1)*abuzunlukdeğeri1));
                const a = Number(bboylamdeğeri);
                bBoylam1.value=parseFloat(a).toFixed(4);
                }



            const longtd = bBoylam1.value;
            const latit = bEnlem1.value;
            addmarkerLngLtd1(longtd,latit,aenlemdeğeri1,aboylamdeğeri1);
                // addmarkerlatit(latit);
            console.log(aenlemdeğeri1,aboylamdeğeri1);
               e.preventDefault();
}
function addmarkerLngLtd1(longtd,latit,aenlemdeğeri1,aboylamdeğeri1){
    // console.log(typeof(longtd));
    // //addmarker
    // var marker = new google.maps.Marker({
    //     position: {lat: 38.721204, lng: 35.488907},
    //     title: "Kale"
    //   });
    //       marker.setMap(map)
    var marker3 = new google.maps.Marker({
        position:{lat: parseFloat(aenlemdeğeri1), lng: parseFloat(aboylamdeğeri1) },
        title:  "A Noktası",
        icon: "ason.png",
        zoom: 15,
                  
    });
    marker3.setMap(map);

    var marker2 = new google.maps.Marker({
        position:{lat: parseFloat(latit), lng: parseFloat(longtd) },
        title:  "B Noktası",
        icon: "bson.png"
    
    });
    marker2.setMap(map);
    
    var pathBetween = new google.maps.Polyline({
        path: [marker3.position,marker2.position],
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
  
      pathBetween.setMap(map);
      map.setCenter(marker2.position);
    
}


function degergelsin2(e){
    
    const aenlemdeğeri2 = parseFloat(aEnlem2.value.trim());
    const aboylamdeğeri2 = parseFloat(aBoylam2.value.trim());
    const bboylamdeğer2 = parseFloat(bBoylam2.value.trim());
    const benlemdeğeri2= parseFloat(bEnlem2.value.trim());
    const deltaenlem2 = benlemdeğeri2-aenlemdeğeri2;
    const deltaboylam2 = bboylamdeğer2-aboylamdeğeri2;
    

    const uzunlukhesapla =Math.sqrt((deltaenlem2*deltaenlem2)+(deltaboylam2*deltaboylam2));
    // console.log(uzunlukhesapla);
    // console.log(typeof(uzunlukhesapla));
    abUz2.value=uzunlukhesapla.toFixed(2);
  
    const aci = ((200/Math.PI)*(Math.atan(deltaboylam2/deltaenlem2))).toFixed(4);
    let aci2 =parseFloat(aci);
  
    if(deltaboylam2 > 0 && deltaenlem2 > 0 ){
        aci2 = aci2;
    }
    else if(deltaboylam2>0 && deltaenlem2 <0 ){
        aci2  =aci2 + 200;
    }
    else if (deltaboylam2 < 0 && deltaenlem2 < 0){
       
        aci2 = aci2 +200;
    }
    else if(deltaboylam2 < 0 && deltaenlem2 >0 )
    {
        aci2 =  aci2 + 400;
    }
    else if (deltaenlem2 >= 0 && deltaboylam2 == 0 ){
        aci2 = 0;
    }
    else if(deltaenlem2 == 0 && deltaboylam2 > 0){
        aci2 = 100;

    }
    else if (deltaenlem2 < 0 && deltaboylam2 == 0){
        aci2 = 200;
    }
    else if (deltaenlem2 == 0 && deltaboylam2 < 0){
        aci2 = 300 ;
    }

    else{
        alert("HATA!")
        window.location.reload();
    }
    abAçıklık2.value=aci2;
    

    e.preventDefault();
}
function degergelsin3(e){

    let abaçıklıkdeğeri3 =parseFloat(abAçıklık3.value.trim());
    let betadeğeri3 = parseFloat(beta3.value.trim());
    let bcaçıklıkdeğeri3 = abaçıklıkdeğeri3 + betadeğeri3 ;
    

    if(0<=bcaçıklıkdeğeri3 && bcaçıklıkdeğeri3 < 200 ){
        bcaçıklıkdeğeri3 = (bcaçıklıkdeğeri3+200);
        console.log("selam"+ (bcaçıklıkdeğeri3+200) )
    }
    else if ( 200 <= bcaçıklıkdeğeri3 && bcaçıklıkdeğeri3 <400 ){
        bcaçıklıkdeğeri3 = bcaçıklıkdeğeri3-200;
    }
    else if (400 <= bcaçıklıkdeğeri3 && bcaçıklıkdeğeri3 < 600){
        bcaçıklıkdeğeri3 = bcaçıklıkdeğeri3-200;
    }
    else if (600<= bcaçıklıkdeğeri3 && bcaçıklıkdeğeri3< 800){
        bcaçıklıkdeğeri3 = bcaçıklıkdeğeri3-600;
    }
    else{
        alert("HATA!")
        window.location.reload();
    }
    bcAçılık3.value=bcaçıklıkdeğeri3.toFixed(4);
    
    e.preventDefault();
}
function degergelsin4(e){
    const aenlemdeğeri4 = parseFloat(aEnlem4.value.trim());
    const aboylamdeğeri4 = parseFloat(aBoylam4.value.trim());
    const benlemdeğeri4 = parseFloat(bEnlem4.value.trim());
    const bboylamdeğeri4 = parseFloat(bBoylam4.value.trim());
    const cenlemdeğeri4 = parseFloat(cEnlem4.value.trim());
    const cboylamdeğeri4 = parseFloat(cBoylam4.value.trim());
    //BC açıklık hesabı
    const bcdeltaenlem4 = cenlemdeğeri4-benlemdeğeri4;
    const bcdeltaboylam4 = cboylamdeğeri4-bboylamdeğeri4;
    const bcaçıklıkdeğeri4 =((200/Math.PI)*(Math.atan(bcdeltaboylam4/bcdeltaenlem4))).toFixed(4);
    console.log("bcboylam.  "+bcdeltaboylam4+"bcenlem.  "+bcdeltaenlem4)
    let aci4 = parseFloat(bcaçıklıkdeğeri4);
    if(bcdeltaboylam4 > 0 && bcdeltaenlem4 > 0 ){
        aci4 = aci4;
    }
    else if(bcdeltaboylam4>0 && bcdeltaenlem4 <0 ){
        aci4  =aci4 + 200;
    }
    else if (bcdeltaboylam4 < 0 && bcdeltaenlem4 < 0){
       
        aci4 = aci4 +200;
    }
    else if(bcdeltaboylam4 < 0 && bcdeltaenlem4 >0 )
    {
        aci4 =  aci4 + 400;
    }
    else if (bcdeltaenlem4 >= 0 && bcdeltaboylam4 == 0 ){
        aci4 = 0;
    }
    else if(bcdeltaenlem4 == 0 && bcdeltaboylam4 > 0){
        aci4 = 100;

    }
    else if (bcdeltaenlem4 < 0 && bcdeltaboylam4 == 0){
        aci4 = 200;
    }
    else if (bcdeltaenlem4 == 0 && bcdeltaboylam4 < 0){
        aci4 = 300 ;
    }

    else{
        alert("HATA!")
        window.location.reload();
    }
    let aci4v2 = aci4;
     console.log("bc..."+aci4v2);


    //BA açıklık hesabı
    const badeltaenlem4 = aenlemdeğeri4-benlemdeğeri4;
    const badeltaboylam4 = aboylamdeğeri4-bboylamdeğeri4;
    let baaçıklıkdeğeri4 =((200/Math.PI)*(Math.atan(badeltaboylam4/badeltaenlem4))).toFixed(4);
    let aci5 = parseFloat(baaçıklıkdeğeri4);
    if(badeltaboylam4 > 0 && badeltaenlem4 > 0 ){
        aci5 = aci5;
    }
    else if(badeltaboylam4 >0 && badeltaenlem4 <0 ){
        aci5  =aci5 + 200;
    }
    else if (badeltaboylam4 < 0 && badeltaenlem4 < 0){
       
        aci5 = aci5 +200;
    }
    else if(badeltaboylam4 < 0 && badeltaenlem4 >0 )
    {
        aci5 =  aci5 + 400 ;
    }
    else if (badeltaenlem4 >= 0 && badeltaboylam4 == 0 ){
        aci5 = 0;
    }
    else if(badeltaenlem4 == 0 && badeltaboylam4 > 0){
        aci5 = 100;

    }
    else if (badeltaenlem4 < 0 && badeltaboylam4 == 0){
        aci5 = 200;
    }
    else if (badeltaenlem4 == 0 && badeltaboylam4 < 0){
        aci5 = 300 ;
    }

    else{
        alert("HATA!")
        window.location.reload();
    }
    const aci5v2 = aci5;
    console.log("ba..."+aci5v2);


    if(benlemdeğeri4 < aenlemdeğeri4 && bboylamdeğeri4 < aboylamdeğeri4 && bboylamdeğeri4 < cboylamdeğeri4 && benlemdeğeri4 < cenlemdeğeri4){
        beta4.value = aci4v2-aci5v2;
    }
    else{
        beta4.value = 400-(aci5v2-aci4v2);
    }
   
     console.log("betaa:  "+beta4.value);
     console.log(aci4v2+"   "+ aci5v2);

    
    addmarkerLngLtd4(aenlemdeğeri4,aboylamdeğeri4,benlemdeğeri4,bboylamdeğeri4,cenlemdeğeri4,cboylamdeğeri4);
    e.preventDefault();
   

}
function addmarkerLngLtd4(aenlemdeğeri4,aboylamdeğeri4,benlemdeğeri4,bboylamdeğeri4,cenlemdeğeri4,cboylamdeğeri4){
    var marker6 = new google.maps.Marker({
        position:{lat: parseFloat(aenlemdeğeri4), lng: parseFloat(aboylamdeğeri4) },
        title:  "A Noktası",
        icon: "ason.png",
        zoom: 15,
                  
    });
    marker6.setMap(map);

    var marker7 = new google.maps.Marker({
        position:{lat: parseFloat(benlemdeğeri4), lng: parseFloat(bboylamdeğeri4) },
        title:  "B Noktası",
        icon: "bson.png",
        zoom: 15,
                  
    });
    marker7.setMap(map);

    var marker8 = new google.maps.Marker({
        position:{lat: parseFloat(cenlemdeğeri4), lng: parseFloat(cboylamdeğeri4) },
        title:  "C Noktası",
        icon: "cson.png",
        zoom: 15,
                  
    });
    marker8.setMap(map);

    var pathBetween2 = new google.maps.Polyline({
        path: [marker6.position,marker7.position,marker8.position],
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
  
      pathBetween2.setMap(map);
      map.setCenter(marker6.position);

     


}


