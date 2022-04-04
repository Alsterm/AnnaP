function hideDiv(){
    $('#les9_ex1').hide();
}
function showDiv(){
    $('#les9_ex1').show();
}

$(document).ready(function(){
    $("#showHideContent").click(function () {
        if ($("#content").is(":hidden")) {
            $("#content").show("slow");
        } else {
            $("#content").hide("slow");
        }
        return false;
    });
});




  

  
//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Input is incorrect!";
        return false;}}
    

        //Collect and output all the data
function outputData() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var dest = document.getElementById("dest").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;
    var quantity = document.getElementById("quantity").value;
    var paymethod = document.getElementById("paymethod").value;

    if (first != "" && last != "" && dest != "" && phone != "" && date != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Hello, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order below: </p>";
        document.getElementById("summary").innerHTML += "<p>Phone number: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Destination: " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Date and Time: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Number of people: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Payment Method: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>We are glad that You use our company's services :)</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}

{


  var speed = 90;

    /* Эта цифра указывает задержку перехода к
     другой строке в миллисекундах. Чем больше
     цифра, тем дольше будет отображаться строка
     до перехода к другой строке */
    var pause = 1000;

    var timerID = null;
    var wireRunning = false;
    var cc = [];

    /* Ниже впишите то, что будет печататься в
     окошечке. Как это делать, вы видите. */

    cc[0] = "Лабораторная работа от 23.03.22";
    cc[1] = "Автор- Пузанова Анна";
    cc[2] = "Группа-ЭУ-393604";
    cc[3] = "Желаем всем хорошего дня!";
    cc[4] = "За окном хорошая погода";
    cc[5] = "На этом пока все";
    

    var currentMessage = 0;
    var offset = 0;
    function stopWire() { if (wireRunning)
        clearTimeout(timerID);
        wireRunning = false
    }
    function startWire() {
        stopWire();
        showWire() }
    function showWire() {
        var text = cc[currentMessage];
        if (offset < text.length) { if (text.charAt(offset) == " ")
            offset++;
            var partialMessage = text.substring(0, offset + 1);
            document.wireForm.wireField.value = partialMessage;
            offset++;
            timerID = setTimeout("showWire()", speed);
            wireRunning = true }
        else {
            offset = 0;
            currentMessage++;
            if (currentMessage == cc.length)
                currentMessage = 0;
            timerID = setTimeout("showWire()", pause);
            wireRunning = true
        }
    }
}
 