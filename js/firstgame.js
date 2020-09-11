$(function(){
    $("#right").click(function(){
        $("#car").animate({"left": "14vw"}, 200)
    })

    $("#left").click(function(){
        $("#car").animate({"left": "20px"}, 200)
    })

    $("#startBtn").click(function(){
        $("#player").css({"opacity": "1"}, 600);
        $("#start").css({"display": "none",})

    })

    $("#playerBtn").click(function(){   
        if($("#playerName").val() != ""){
            let allUser = ($("#roadUser1"), $("#roadUser2"), $("#roadUser3"), $("#roadUser4"), $("#roadUser5"), $("#roadUser6"), $("#roadUser7"), $("#roadUser7"));

            setInterval(roadRun, 0)

            function roadRun(){
                $("#roadUser8").animate({"top": "1550vh"}, 20000);
                $("#roadUser8").animate({"top": "-200vh"}, 0);
                
                $("#roadUser7").animate({"top": "1350vh"}, 20000);
                $("#roadUser7").animate({"top": "-300vh"}, 0);
                
                $("#roadUser6").animate({"top": "1150vh"}, 20000);
                $("#roadUser6").animate({"top": "-400vh"}, 0);
                
                $("#roadUser5").animate({"top": "950vh"}, 20000);
                $("#roadUser5").animate({"top": "-500vh"}, 0);
                
                $("#roadUser4").animate({"top": "750vh"}, 20000);
                $("#roadUser4").animate({"top": "-600vh"}, 0);
                
                $("#roadUser3").animate({"top": "550vh"}, 20000);
                $("#roadUser3").animate({"top": "-700vh"}, 0);
                
                $("#roadUser2").animate({"top": "350vh"}, 20000);
                $("#roadUser2").animate({"top": "-800vh"}, 0);
                
                $("#roadUser1").animate({"top": "150vh"}, 20000);
                $("#roadUser1").animate({"top": "-900vh"}, 0);

            }

            let timing8 = $("#timing8");
            let startTime8 = 1;
            setInterval(interval8, 3600)
            function interval8(){
                timing8.innerHTML = startTime8;
                startTime8++;
                if($("#car").css("left") == "20px"){
                    $("#body").css({"display": "none"})
                    $("#gameOver").css({"opacity": "1",})
                }
            }
            // clearInterval(setInterval(interval8, 3600));

            let timing7 = $("#timing7");
            let startTime7 = 1;
            setInterval(interval7, 5200)
            function interval7(){
                timing7.innerHTML = startTime7;
                startTime7++;
                if($("#car").css("left") != "20px"){
                    $("#body").css({"display": "none"})
                    $("#gameOver").css({"opacity": "1",})
                }
            }
            // clearInterval(setInterval(interval7, 5200));

            let timing6 = $("#timing6");
            let startTime6 = 1;
            setInterval(interval6, 6500)
            function interval6(){
                timing6.innerHTML = startTime6;
                startTime6++;
                if($("#car").css("left") == "20px"){
                    $("#body").css({"display": "none"})
                    $("#gameOver").css({"opacity": "1",})
                }
            }
            // clearInterval(setInterval(interval6, 6500));

            let timing5 = $("#timing5");
            let startTime5 = 1;
            setInterval(interval5, 8000)
            function interval5(){
                timing5.innerHTML = startTime5;
                startTime5++;
                if($("#car").css("left") != "20px"){
                    $("#body").css({"display": "none"})
                    $("#gameOver").css({"opacity": "1",})
                }
            }
            // clearInterval(setInterval(interval5, 8000));

            let timing4 = $("#timing4");
            let startTime4 = 1;
            setInterval(interval4, 9600)
            function interval4(){
                timing4.innerHTML = startTime4;
                startTime4++;
                if($("#car").css("left") != "20px"){
                    $("#body").css({"display": "none"})
                    $("#gameOver").css({"opacity": "1",})
                }
            }
            // clearInterval(setInterval(interval4, 9600));

            let timing3 = $("#timing3");
            let startTime3 = 1;
            setInterval(interval3, 11400)
            function interval3(){
                timing3.innerHTML = startTime3;
                startTime3++;
                if($("#car").css("left") == "20px"){
                    $("#body").css({"display": "none"})
                    $("#gameOver").css({"opacity": "1",})
                }
            }
            // clearInterval(setInterval(interval3, 11400));

            let timing2 = $("#timing2");
            let startTime2 = 1;
            setInterval(interval2, 13200)
            function interval2(){
                timing2.innerHTML = startTime2;
                startTime2++;
                if($("#car").css("left") == "20px"){
                    $("#body").css({"display": "none"})
                    $("#gameOver").css({"opacity": "1",})
                }
            }
            // clearInterval(setInterval(interval2, 13200));

            let timing1 = $("#timing1");
            let startTime1 = 1;
            setInterval(interval1, 20000)
            function interval1(){
                timing1.innerHTML = startTime1;
                startTime1++;
                if($("#car").css("left") != "20px"){
                    $("#body").css({"display": "none"})
                    $("#gameOver").css({"opacity": "1",})
                }
            }
            // clearInterval(setInterval(interval1, 15000));
    
            $("#body").css({"opacity": "1"}, 600);
            $("#player").css("display", "none");
            $("#nameInput").text($("#playerName").val())
            $("#car").css({"top": "-65vh"})

            
        }else{
            $("#body").css({"opacity": "0"}, 600);
            $("#player").css("display", "block");
            $("#car").css({"bottom": "20px"})
            $("#nameInput").text("");
            $("#info").css({"text-align": "center", "font-weight": "bold", "color": "red", "font-family": "sans-serif", "font-style": "italic"}, 200)
            $("#info").text("Please Insert a name!") 
        }    
    })

    // function roadRun(){
    //     $("#roadUsers").animate({"margin-top": "200vh"}, 20000)
    //     $("#roadUsers").animate({"margin-top": "-3500vh"}, 0);

    //     let user2 = Math.floor((Math.random() * 3) + 2);
    //     let user3 = Math.floor((Math.random() * 5) + 4);
    //     let user4 = Math.floor((Math.random() * 8) + 7);
    //     let user5 = Math.floor((Math.random() * 11) + 10);
    //     let user6 = Math.floor((Math.random() * 14) + 13);
    //     let user7 = Math.floor((Math.random() * 18) + 16);
    //     let user8 = Math.floor((Math.random() * 21) + 20);
    
    //     $("#roadUser1").css({"left":"200px"});
    //     $("#roadUser2").css({"top": + user2 +"00vh", "left": "20px"});
    //     $("#roadUser3").css({"top": + user3 +"00vh", "left": "20px"});
    //     $("#roadUser4").css({"top": + user4 +"00vh", "left": "200px"});
    //     $("#roadUser5").css({"top": + user5 +"00vh", "left": "200px"});
    //     $("#roadUser6").css({"top": + user6 +"00vh", "left": "20px"});
    //     $("#roadUser7").css({"top": + user7 +"00vh", "left": "20px"});
    //     $("#roadUser8").css({"top": + user8 +"00vh", "left":"200px"});

       

    // }

    
    
})