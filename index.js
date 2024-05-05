$(document).ready(function(){

    $('#fbtn').hide();
    $('#fight').hide();

    $('#roll1').click(function(){
        $(this).hide(1000);
    });

    $('#roll2').click(function(){
        $(this).hide(1000);
        $('#fbtn').show(1000);
    });

    $('#fbtn').click(function(){
        $(this).hide();
        $('#fight').show();
    })

    $('#pa').click(function(){
        $('#fight').hide();
        $('#roll1,#roll2').show(1000);
        document.querySelector('#fightvid').setAttribute("src","..");
    })
    



});



var num1,num2;
function roll1(){

    num1=Math.floor(Math.random()*6)+1;
    var image1="dice"+num1+".png";
    document.querySelector('#dice1').setAttribute("src",image1);
}

function roll2(){

   num2 = Math.floor(Math.random()*6)+1;
    var image2="dice"+num2+".png";
    document.querySelector('#dice2').setAttribute("src",image2);
}

function fightvid(){

    if(num1==num2){
        switch (num1) {
            case 2:
                document.querySelector('#fightvid').setAttribute("src","Ff11.mp4");
                break;
            case 3:
                document.querySelector('#fightvid').setAttribute("src","Ff33.mp4");
                break;
            case 4:
                document.querySelector('#fightvid').setAttribute("src","Ff44.mp4");
                break;
            case 5:
                document.querySelector('#fightvid').setAttribute("src","Ff55.mp4");
                break;
            case 6:
                document.querySelector('#fightvid').setAttribute("src","Ff66.mp4");
                break;  
        }

    }
    else if(num1>num2){
        switch (num1) {
            case 2:
                document.querySelector('#fightvid').setAttribute("src","Ffy2.mp4");
                break;
            case 3:
                document.querySelector('#fightvid').setAttribute("src","Ffy3.mp4");
                break;
            case 4:
                document.querySelector('#fightvid').setAttribute("src","Ffy4.mp4");
                break;
            case 5:
                document.querySelector('#fightvid').setAttribute("src","Ffy5.mp4");
                break;
            case 6:
                document.querySelector('#fightvid').setAttribute("src","Ffy6.mp4");
                break;  
        }

    }
    else if(num1<num2){
        switch (num2) {
            case 2:
                document.querySelector('#fightvid').setAttribute("src","Ffr2.mp4");
                break;
            case 3:
                document.querySelector('#fightvid').setAttribute("src","Ffr3.mp4");
                break;
            case 4:
                document.querySelector('#fightvid').setAttribute("src","Ffr4.mp4");
                break;
            case 5:
                document.querySelector('#fightvid').setAttribute("src","Ffr5.mp4");
                break;
            case 6:
                document.querySelector('#fightvid').setAttribute("src","Ffr6.mp4");
                break;  
        }
    }
}

