// let a = 5, b = 9;
// console. log(a + b);
// console. log(a - b);
// console. log(a * b);
// console. log(a / b);
// let ism='Jahongir';
// let familya='Berdiyev';
// let yosh='21';
// console.log (ism);
// console.log (yosh);
// console.log (familya);
// let name ='Jahongir';
// let lastname='Berdiyev';
// console.log (name)
// let a= 5;
// let b=17;
// console.log (a+b);
// console.log (a*b);
// console.log (a*b);
// console.log (a+=10);
// let x='salom';
// console.log(x==2022);
// let y= "2000"
// console.log(y===2000);  
// //  == tengmi?
// let x="2000"
// console.log (x==2000);
// let z= 2001
// console.log(z!=2001);
// // !=tengemasmi?
// let w=10;
// console.log(w >15) ? "bu 10 dan kotta" : "bu 10 dan kichik";
// let ball;
// console.log(ball>50) ?"otsin" : "yiqilsin";
// var grade;
// var natija=(grade>50) ? "otsin" : "yiqilsin";
// console.log(natija);
// var grade=100;
// var natija=(grade>50) ? "otsin" : "yiqilsin";
// console.log(natija);
// var ism;
// //ism bu x  ismli odamga tegishli
// var natija=(ism=='Abdulloh') ?"bu talaba bizda mavjud" : "Bu talaba bizda mavjud emas";
// console.log(natija);
// var ball=4;
// var natija=(ball>3) ?"Talaba kursdan kursga otishga tavsiya etiladi" :"Talaba kursdan yiqidi";
// console.log(natija);
// var ball=76.5;
// var natija=(76.5<4) ?"xaydaldi" :"4 baxoga bitirdi";
// console.log(natija);
// var ielts=5;
// var natija=(ielts<9) ? "Talab Americaga oqishga qabul qilindi" :"oqishga qabul qilinmadi";
// console.log(natija);
// var ielts=6.5
// var natija=(ielts<9) ? "amercaga yollanma yutdi" :" yollama yuta olmadi";
// console.log(natija);
// let baxo=5;
// let  ielts=6.5;
// let natija= (baxo==5 && ielts>=6.5) ? "yollanma olsin" : "qolsin";
// console.log (natija);

// && va deganni 
// let grade=3;
// let ielts=7;
// let natija=(grade>=4 || ielts>=7) ? "yollanma olsin" : "qolisn";
// console.log (natija)
// // || yokki
// let isOpen=true;
// isOpen=!isOpen
// console.log(isOpen);

// let baxo=5;
// let ielts=;
// console.log(baxo==5 || baxo==4||ielts==6.5)? "Americaga ketsin" : "yiqilsin";

// let a=30;
// let b=20;
// let natija =((a-b)<5) ? "Salom" :((a-b)<10) ?"Assalomu alaykum" : ((a-b<20)) ? "hayr" : "hech biriga tushmadi";
// console.log (natija)

// Agarda baxo 4 yoki 5 bolsa 1 ga oshsin aks holatda 1 ga kamaysin
// let baxo=5;
// let ball=10;
// let natija=(baxo==4|| baxo==5)? ball++ : ball--;
// console.log(ball);
// agarda 2 ta soning kopaytmasi juft son bolsa "juft deb chiqsin" aks holatda "toq " deb;
// let a;
// let b;
// let result=((a*b)%2==0) ?"juft" : "toq";
// console.log (result);
// talaba ism Jahongir familyasi berdiyev yoshi 22 qiziqan fani Matematika yili 2001
// let talaba =[ "Jahongir", "Berdiyev", 22 , "Matetmatika", 2001,, "hamma narsa yozsa boladi", 1, 2, 3, 4, 5, 6, 7, 8 ];
// console.log (talaba[0]);
// Agarda malumotni ozgartirmoqci bolsak 
// talaba[3]="Ingliz tili";
// royhatning sanogni aniqlab beradi
// console.log (talaba.length-1);
// bu esa royhatning oxiridagi narsani aninqlab beradi
// console.log (talaba[talaba.length-3])
// alert(talaba)

/// massivning oxiriga element qoshish
// talaba.push("Salom")

//massivning oxiridagi elementni ochiradi
// talaba.pop()

// massivning boshidagi elementni ochiradi
// talaba.shift();

//massivning boshiga element qoshish
// talaba.unshift('salom')  

// alert(talaba)

// splice(nechinchiidan boshlab, nechta ochirilsin);

// talaba.splice(2, 3);

// bu yerda elementalr orasiga boshqa element qoshish
// talaba.splice(4, 0, "Salom", "Hohlagancha element qoshsa boladi");


// console.log(talaba);
// let topshiriq = [ 'hi', 'h', 'a', 'b', 'c', 'd', 'e', 'r', 'g', 'j'];

// topshiriq.push('hellow world');
// console.log(topshiriq)

// topshiriq.splice(0, 2);
// console.log(topshiriq);

// topshiriq.push('salom');
// topshiriq.unshift('hello');
// console.log(topshiriq);
// // masivdan 2 ta turli hil orinlardagi elementni ochiraiz
// topshiriq.splice(6, 2);
// topshiriq.splice(5, 1);
// console.log(topshiriq);


//   massivni filtrlab chiqish
// let ballar= [20, 50, 60, 79, 58, 34, 54, 199, 200, 101, 103, 209, 79, 69, 59];
// let talabalar = ballar.filter(function(ball){
//     return ball > 20
// })
// console.log(talabalar);
// let ballar=[ 11,21.22, 34, 35,67,30,25,19, 17];
// let grantlar=ballar.filter(function(ball){
//     return ball > 35
// });
// let kontarktlar=ballar.filter(function(b){
//     return b < 35 && b>20
// });
// let yiqilganlar=ballar.filter(function(r){
//     return r<20
// });
// console.log("Grantlar: [" + grantlar+"]") ? "Grand asosidatavsiya etildi" :  "kontrak asosida oqishga qabul qilindi";
// console.log("Kontraktlar:[" + kontarktlar +"]");
// console.log("yiqilganlar:[" +yiqilganlar+ "]");

// let a= [11, 10, 22,33,54,-66 ,37,82 ,91, 100,101,109, 107,  -20, -11, -22, 189,189,189];

// let ball=a.filter(function(b){
//     return b>10
// });
// console.log(ball);
// let ballar=a.filter(function(c){
//     return c<0
// });
// console.log(ballar);
// let  son=a.filter(function(d){
//     return d>=189
// }).length;
// console.log(son);
// let harf=a.filter(function(f){
//     return f>100
// })
// console.log(harf);

//soni yaxlitlash ozidan pastga qarab
// let a= 10.3313665
// console.log(a);
// let b=Math.floor(a);
// console.log(b);



//soni yaxlitlash ozidan tepaga qarab
// let c= 12.2111133
// console.log(a);
// let d=Math.ceil(a)
// console.log(d);


// //round bu x.5 gacha bolsa x ni korstadi x.5 dan boshlab y ni korsatadi
// let g=1.67987
// let h=Math.round(g)
// console.log(h);


//trunc bu manfiy yoki musbat bolsa ham butun qismini olaadi



// example


//fayl tipni aniqlash
// let a="2324";
// a=typeof(a);


//matinni songa otgazish
let x="356sm";
x= parseInt (x);


//sonti matinga otgazish
let c="22333333";
c=toString(c);
console.log(typeof(c));


let universitet=
{
  id:'jdhvasjdh',
  name:"PEdagogika universitet",
  year: 1975+"yil",
  
  teachers1:{
   name: "Toshpotat",
   fname:"Nazarov",
   lavozim:"Oqituvchi",
   maosh:500+"$",
   email:"nazarov@gmail.com",
   manzili:{
    city:"toshloq",
    street:"kdhasgdk",
    uy:73 +"uy",
    geo:{
        legh:432423.324,
        length:28736487236.32442
    }
    
   },
   number: +998942227751,
      


  },
  teachers1:{
    name: "Toshpotat",
    fname:"Nazarov",
    lavozim:"Oqituvchi",
    maosh:500+"$",
    email:"nazarov@gmail.com",
    manzili:{
     city:"toshloq",
     street:"kdhasgdk",
     uy:73 +"uy",
     geo:{
         legh:432423.324,
         length:28736487236.32442
     }
     
    },
    number: +998942227751,
       
 
 
   },
   teachers1:{
    name: "Toshpotat",
    fname:"Nazarov",
    lavozim:"Oqituvchi",
    maosh:500+"$",
    email:"nazarov@gmail.com",
    manzili:{
     city:"toshloq",
     street:'kdhasgdk',
     uy:73 +"uy",
     geo:{
         legh:432423.324,
         length:28736487236.32442
     }
     
    },
    number: +998942227751,
       
 
 
   },
   teachers1:{
    name: "Toshpotat",
    fname:"Nazarov",
    lavozim:"Oqituvchi",
    maosh:500+"$",
    email:"nazarov@gmail.com",
    manzili:{
     city:"toshloq",
     street:"kdhasgdk",
     uy:73 +"uy",
     geo:{
         legh:432423.324,
         length:28736487236.32442
     }
     
    },
    number: +998942227751,
       
 
 
   },
   teachers1:{
    name: "Toshpotat",
    fname:"Nazarov",
    lavozim:"Oqituvchi",
    maosh:500+"$",
    email:"nazarov@gmail.com",
    manzili:{
     city:"toshloq",
     street:"kdhasgdk",
     uy:73 +"uy",
     geo:{
         legh:432423.324,
         length:28736487236.32442
     }
     
    },
    number: +998942227751,
       
 
 
   },
   teachers1:{
    name: "Toshpotat",
    fname:"Nazarov",
    lavozim:"Oqituvchi",
    maosh:500+"$",
    email:"nazarov@gmail.com",
    manzili:{
     city:"toshloq",
     street:"kdhasgdk",
     uy:73 +"uy",
     geo:{
         legh:432423.324,
         length:28736487236.32442
     }
     
    },
    number: +998942227751,
       
 
 
   },
   teachers1:{
    name: "Toshpotat",
    fname:"Nazarov",
    lavozim:"Oqituvchi",
    maosh:500+"$",
    email:"nazarov@gmail.com",
    manzili:{
     city:"toshloq",
     street:"kdhasgdk",
     uy:73 +"uy",
     geo:{
         legh:432423.324,
         length:28736487236.32442
     }
     
    },
    number: +998942227751,
       
 
 
   },

  teachers2:{
    name: "Toshpotat",
    fname:"Nazarov",
    lavozim:"Oqituvchi",
    maosh:500+"$",
    email:"nazarov@gmail.com",
    manzili:{
     city:"toshloq",
     street:"kdhasgdk",
     uy:73 +"uy",
     geo:{
         legh:432423.324,
         length:28736487236.32442
     }
     
    },
    number: +998942227751,
       
 
 
   },
   Fakultetlar:{
    matematika:{
        name:"kasbdkasjb"
        
    },
}


}
console.log(universitet);



























