function page1() {
    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");

    sec1.style.display = "block";
    sec2.style.display = "none";

    clear1();
}


function page2() {
    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");

    sec1.style.display = "none";
    sec2.style.display = "block";

    clear2();
}

function add(item1, item2) {
    var out = [];
    for (i = 0; i < item1.length; i++) {
        out[i] = item1[i] ^ item2[i];
    }
    out = out.join('');
    return out;
}

// Example-1

var a = "00001";
var b = "00100";
var c = "00010";
var d = "01000";
var e = "10000";

function check1() {

    var cl1 = document.getElementById("m1").value;
    const obs1 = document.getElementById("observations1");

    var bitcheck1 = 0;

    for (i = 0; i < cl1.length; i++) {
        if (cl1[i] == 0 || cl1[i] == 1) {
            bitcheck1++;
        }
    }


    if (cl1 == "") {
        obs1.innerHTML = "Enter the coset leader."
        obs1.style.color = "black";
    }

    else if (cl1.length != 5) {
        obs1.innerHTML = "The coset leader must be of length 5."
        obs1.style.color = "black";
    }

    else if (bitcheck1 != 5) {
        obs1.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs1.style.color = "black";
    }

    else if (cl1 == a || cl1 == b || cl1 == c || cl1 == d || cl1 == e) {
        obs1.innerHTML = "<b>Correct Answer!!!</b>";
        obs1.style.color = "green";

        document.getElementById("t11").innerHTML = add(cl1, "10101");
        document.getElementById("t12").innerHTML = add(cl1, "11000");
        document.getElementById("t13").innerHTML = add(cl1, "00111");
        document.getElementById("t14").innerHTML = add(cl1, "01101");
        document.getElementById("t15").innerHTML = add(cl1, "10010");
        document.getElementById("t16").innerHTML = add(cl1, "01010");
        document.getElementById("t17").innerHTML = add(cl1, "11111");

        document.getElementById("m1").setAttribute("disabled", true);
        document.getElementById("m2").removeAttribute("disabled");

        document.getElementById("sub1").setAttribute("disabled", true);
        document.getElementById("sub2").removeAttribute("disabled");
    }

    else {
        document.getElementById("t11").innerHTML = "";
        document.getElementById("t12").innerHTML = "";
        document.getElementById("t13").innerHTML = "";
        document.getElementById("t14").innerHTML = "";
        document.getElementById("t15").innerHTML = "";
        document.getElementById("t16").innerHTML = "";
        document.getElementById("t17").innerHTML = "";
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs1.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }
    }

}

function check2() {

    var cl1 = document.getElementById("m1").value;
    var cl2 = document.getElementById("m2").value;
    const obs1 = document.getElementById("observations1");

    var bitcheck2 = 0;

    for (i = 0; i < cl2.length; i++) {
        if (cl2[i] == 0 || cl2[i] == 1) {
            bitcheck2++;
        }
    }


    if (cl2 == "") {
        obs1.innerHTML = "Enter the coset leader."
        obs1.style.color = "black";
    }

    else if (cl2.length != 5) {
        obs1.innerHTML = "The coset leader must be of length 5."
        obs1.style.color = "black";
    }

    else if (bitcheck2 != 5) {
        obs1.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs1.style.color = "black";
    }

    else if ((cl1 == a && (cl2 == b || cl2 == c || cl2 == d || cl2 == e))
        || (cl1 == b && (cl2 == a || cl2 == c || cl2 == d || cl2 == e))
        || ((cl1 == c || cl1 == d || cl1 == e) && (cl2 == a || cl2 == b))) {
        
        obs1.style.color = "green";
        if (obs1.innerHTML == "<b>Correct Answer!!!</b>") {
            obs1.innerHTML = "<b>Correct Again!!!</b>";
        }
        else {
            obs1.innerHTML = "<b>Correct Answer!!!</b>";
        }

        document.getElementById("t21").innerHTML = add(cl2, "10101");
        document.getElementById("t22").innerHTML = add(cl2, "11000");
        document.getElementById("t23").innerHTML = add(cl2, "00111");
        document.getElementById("t24").innerHTML = add(cl2, "01101");
        document.getElementById("t25").innerHTML = add(cl2, "10010");
        document.getElementById("t26").innerHTML = add(cl2, "01010");
        document.getElementById("t27").innerHTML = add(cl2, "11111");

        document.getElementById("m2").setAttribute("disabled", true);
        document.getElementById("m3").removeAttribute("disabled");

        document.getElementById("sub2").setAttribute("disabled", true);
        document.getElementById("sub3").removeAttribute("disabled");
    }

    else {
        document.getElementById("t21").innerHTML = "";
        document.getElementById("t22").innerHTML = "";
        document.getElementById("t23").innerHTML = "";
        document.getElementById("t24").innerHTML = "";
        document.getElementById("t25").innerHTML = "";
        document.getElementById("t26").innerHTML = "";
        document.getElementById("t27").innerHTML = "";
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs1.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }
    }
}

function check3() {

    var cl3 = document.getElementById("m3").value;
    const obs1 = document.getElementById("observations1");

    var bitcheck3 = 0;

    for (i = 0; i < cl3.length; i++) {
        if (cl3[i] == 0 || cl3[i] == 1) {
            bitcheck3++;
        }
    }


    if (cl3 == "") {
        obs1.innerHTML = "Enter the coset leader."
        obs1.style.color = "black";
    }

    else if (cl3.length != 5) {
        obs1.innerHTML = "The coset leader must be of length 5."
        obs1.style.color = "black";
    }

    else if (bitcheck3 != 5) {
        obs1.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs1.style.color = "black";
    }

    else {
        verify1();
    }
}

function verify1() {
    var cl1 = document.getElementById("m1").value;
    var cl2 = document.getElementById("m2").value;
    var cl3 = document.getElementById("m3").value;
    const obs1 = document.getElementById("observations1");

    cl1 = parseInt(cl1, 2);
    cl2 = parseInt(cl2, 2);
    cl3 = parseInt(cl3, 2);

    const countArray1 = new Array(17).fill(0);

    countArray1[cl1] = 1;
    countArray1[cl2] = 1;
    countArray1[cl3] = 1;

    flag1 = countArray1[1] * countArray1[4] * (countArray1[2] + countArray1[8] + countArray1[16]);

    if (flag1 == 1) {
        obs1.innerHTML = "<b>Correct Answer!!!</b> <br> You have successfully constructed the Standard Array Table";
        obs1.style.color = "green";

        const cosetleader3 = document.getElementById("m3").value;
        document.getElementById("t31").innerHTML = add(cosetleader3, "10101");
        document.getElementById("t32").innerHTML = add(cosetleader3, "11000");
        document.getElementById("t33").innerHTML = add(cosetleader3, "00111");
        document.getElementById("t34").innerHTML = add(cosetleader3, "01101");
        document.getElementById("t35").innerHTML = add(cosetleader3, "10010");
        document.getElementById("t36").innerHTML = add(cosetleader3, "01010");
        document.getElementById("t37").innerHTML = add(cosetleader3, "11111");
    }

    else {
        document.getElementById("t31").innerHTML = "";
        document.getElementById("t32").innerHTML = "";
        document.getElementById("t33").innerHTML = "";
        document.getElementById("t34").innerHTML = "";
        document.getElementById("t35").innerHTML = "";
        document.getElementById("t36").innerHTML = "";
        document.getElementById("t37").innerHTML = "";

        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs1.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }
    }
}

function clear1() {
    const obs1 = document.getElementById("observations1");
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

    obs1.innerHTML = "";
    form1.reset();
    form2.reset();
    form3.reset();

    document.getElementById("m1").removeAttribute("disabled");
    document.getElementById("m2").setAttribute("disabled", true);
    document.getElementById("m3").setAttribute("disabled", true);

    document.getElementById("sub1").removeAttribute("disabled");
    document.getElementById("sub2").setAttribute("disabled", true);
    document.getElementById("sub3").setAttribute("disabled", true);

    document.getElementById("t11").innerHTML = "";
    document.getElementById("t12").innerHTML = "";
    document.getElementById("t13").innerHTML = "";
    document.getElementById("t14").innerHTML = "";
    document.getElementById("t15").innerHTML = "";
    document.getElementById("t16").innerHTML = "";
    document.getElementById("t17").innerHTML = "";

    document.getElementById("t21").innerHTML = "";
    document.getElementById("t22").innerHTML = "";
    document.getElementById("t23").innerHTML = "";
    document.getElementById("t24").innerHTML = "";
    document.getElementById("t25").innerHTML = "";
    document.getElementById("t26").innerHTML = "";
    document.getElementById("t27").innerHTML = "";

    document.getElementById("t31").innerHTML = "";
    document.getElementById("t32").innerHTML = "";
    document.getElementById("t33").innerHTML = "";
    document.getElementById("t34").innerHTML = "";
    document.getElementById("t35").innerHTML = "";
    document.getElementById("t36").innerHTML = "";
    document.getElementById("t37").innerHTML = "";
}

// For example-2

var ans1 = "000001";
var ans2 = "000010";
var ans3 = "000100";
var ans4 = "001000";
var ans5 = "010000";
var ans6 = "100000";
var ans7 = "100100";
var ans8 = "010010";
var ans9 = "001001";

function confirm1() {
    var coset1 = document.getElementById("r1").value;
    const obs2 = document.getElementById("observations2");

    var bitflag1 = 0;

    for (var i = 0; i < coset1.length; i++) {
        if (coset1[i] == 0 || coset1[i] == 1) {
            bitflag1++;
        }
    }


    if (coset1 == "") {
        obs2.innerHTML = "Enter the coset leader."
        obs2.style.color = "black";
    }

    else if (coset1.length != 6) {
        obs2.innerHTML = "The coset leader must be of length 6."
        obs2.style.color = "black";
    }

    else if (bitflag1 != 6) {
        obs2.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs2.style.color = "black";
    }

    else if (coset1 == ans1 || coset1 == ans2 || coset1 == ans3
        || coset1 == ans4 || coset1 == ans5 || coset1 == ans6) {

        obs2.style.color = "green";
        if (obs2.innerHTML == "<b>Correct Answer!!!</b>") {
            obs2.innerHTML = "<b>Correct Again!!!</b>";
        }
        else {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
        }

        document.getElementById("mat11").innerHTML = add(coset1, "011100");
        document.getElementById("mat12").innerHTML = add(coset1, "101010");
        document.getElementById("mat13").innerHTML = add(coset1, "110001");
        document.getElementById("mat14").innerHTML = add(coset1, "110110");
        document.getElementById("mat15").innerHTML = add(coset1, "101101");
        document.getElementById("mat16").innerHTML = add(coset1, "011011");
        document.getElementById("mat17").innerHTML = add(coset1, "000111");

        document.getElementById("r1").setAttribute("disabled", true);
        document.getElementById("r2").removeAttribute("disabled");

        document.getElementById("submit1").setAttribute("disabled", true);
        document.getElementById("submit2").removeAttribute("disabled");

    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }

        document.getElementById("mat11").innerHTML = "";
        document.getElementById("mat12").innerHTML = "";
        document.getElementById("mat13").innerHTML = "";
        document.getElementById("mat14").innerHTML = "";
        document.getElementById("mat15").innerHTML = "";
        document.getElementById("mat16").innerHTML = "";
        document.getElementById("mat17").innerHTML = "";
    }

}

function confirm2() {
    var coset1 = document.getElementById("r1").value;
    var coset2 = document.getElementById("r2").value;
    const obs2 = document.getElementById("observations2");

    var bitflag2 = 0;

    for (var i = 0; i < coset2.length; i++) {
        if (coset2[i] == 0 || coset2[i] == 1) {
            bitflag2++;
        }
    }


    if (coset2 == "") {
        obs2.innerHTML = "Enter the coset leader."
        obs2.style.color = "black";
    }

    else if (coset2.length != 6) {
        obs2.innerHTML = "The coset leader must be of length 6."
        obs2.style.color = "black";
    }

    else if (bitflag2 != 6) {
        obs2.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs2.style.color = "black";
    }

    else if ((coset2 == ans1 || coset2 == ans2 || coset2 == ans3
        || coset2 == ans4 || coset2 == ans5 || coset2 == ans6) && (coset2 != coset1)) {

        obs2.style.color = "green";
        if (obs2.innerHTML == "<b>Correct Answer!!!</b>") {
            obs2.innerHTML = "<b>Correct Again!!!</b>";
        }
        else {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
        }

        document.getElementById("mat21").innerHTML = add(coset2, "011100");
        document.getElementById("mat22").innerHTML = add(coset2, "101010");
        document.getElementById("mat23").innerHTML = add(coset2, "110001");
        document.getElementById("mat24").innerHTML = add(coset2, "110110");
        document.getElementById("mat25").innerHTML = add(coset2, "101101");
        document.getElementById("mat26").innerHTML = add(coset2, "011011");
        document.getElementById("mat27").innerHTML = add(coset2, "000111");

        document.getElementById("r2").setAttribute("disabled", true);
        document.getElementById("r3").removeAttribute("disabled");

        document.getElementById("submit2").setAttribute("disabled", true);
        document.getElementById("submit3").removeAttribute("disabled");

    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }

        document.getElementById("mat21").innerHTML = "";
        document.getElementById("mat22").innerHTML = "";
        document.getElementById("mat23").innerHTML = "";
        document.getElementById("mat24").innerHTML = "";
        document.getElementById("mat25").innerHTML = "";
        document.getElementById("mat26").innerHTML = "";
        document.getElementById("mat27").innerHTML = "";
    }

}

function confirm3() {
    var coset1 = document.getElementById("r1").value;
    var coset2 = document.getElementById("r2").value;
    var coset3 = document.getElementById("r3").value;
    const obs2 = document.getElementById("observations2");

    var bitflag3 = 0;

    for (var i = 0; i < coset3.length; i++) {
        if (coset3[i] == 0 || coset3[i] == 1) {
            bitflag3++;
        }
    }


    if (coset3 == "") {
        obs2.innerHTML = "Enter the coset leader."
        obs2.style.color = "black";
    }

    else if (coset3.length != 6) {
        obs2.innerHTML = "The coset leader must be of length 6."
        obs2.style.color = "black";
    }

    else if (bitflag3 != 6) {
        obs2.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs2.style.color = "black";
    }

    else if ((coset3 == ans1 || coset3 == ans2 || coset3 == ans3
        || coset3 == ans4 || coset3 == ans5 || coset3 == ans6) && (coset3 != coset1 && coset3 != coset2)) {

        obs2.style.color = "green";
        if (obs2.innerHTML == "<b>Correct Answer!!!</b>") {
            obs2.innerHTML = "<b>Correct Again!!!</b>";
        }
        else {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
        }

        document.getElementById("mat31").innerHTML = add(coset3, "011100");
        document.getElementById("mat32").innerHTML = add(coset3, "101010");
        document.getElementById("mat33").innerHTML = add(coset3, "110001");
        document.getElementById("mat34").innerHTML = add(coset3, "110110");
        document.getElementById("mat35").innerHTML = add(coset3, "101101");
        document.getElementById("mat36").innerHTML = add(coset3, "011011");
        document.getElementById("mat37").innerHTML = add(coset3, "000111");

        document.getElementById("r3").setAttribute("disabled", true);
        document.getElementById("r4").removeAttribute("disabled");

        document.getElementById("submit3").setAttribute("disabled", true);
        document.getElementById("submit4").removeAttribute("disabled");

    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }

        document.getElementById("mat31").innerHTML = "";
        document.getElementById("mat32").innerHTML = "";
        document.getElementById("mat33").innerHTML = "";
        document.getElementById("mat34").innerHTML = "";
        document.getElementById("mat35").innerHTML = "";
        document.getElementById("mat36").innerHTML = "";
        document.getElementById("mat37").innerHTML = "";
    }
}

function confirm4() {
    var coset1 = document.getElementById("r1").value;
    var coset2 = document.getElementById("r2").value;
    var coset3 = document.getElementById("r3").value;
    var coset4 = document.getElementById("r4").value;
    const obs2 = document.getElementById("observations2");

    var bitflag4 = 0;

    for (var i = 0; i < coset4.length; i++) {
        if (coset4[i] == 0 || coset4[i] == 1) {
            bitflag4++;
        }
    }


    if (coset4 == "") {
        obs2.innerHTML = "Enter the coset leader."
        obs2.style.color = "black";
    }

    else if (coset4.length != 6) {
        obs2.innerHTML = "The coset leader must be of length 6."
        obs2.style.color = "black";
    }

    else if (bitflag4 != 6) {
        obs2.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs2.style.color = "black";
    }

    else if ((coset4 == ans1 || coset4 == ans2 || coset4 == ans3
        || coset4 == ans4 || coset4 == ans5 || coset4 == ans6) &&
        (coset4 != coset1 && coset4 != coset2 && coset4 != coset3)) {

        obs2.style.color = "green";
        if (obs2.innerHTML == "<b>Correct Answer!!!</b>") {
            obs2.innerHTML = "<b>Correct Again!!!</b>";
        }
        else {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
        }

        document.getElementById("mat41").innerHTML = add(coset4, "011100");
        document.getElementById("mat42").innerHTML = add(coset4, "101010");
        document.getElementById("mat43").innerHTML = add(coset4, "110001");
        document.getElementById("mat44").innerHTML = add(coset4, "110110");
        document.getElementById("mat45").innerHTML = add(coset4, "101101");
        document.getElementById("mat46").innerHTML = add(coset4, "011011");
        document.getElementById("mat47").innerHTML = add(coset4, "000111");

        document.getElementById("r4").setAttribute("disabled", true);
        document.getElementById("r5").removeAttribute("disabled");

        document.getElementById("submit4").setAttribute("disabled", true);
        document.getElementById("submit5").removeAttribute("disabled");

    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }

        document.getElementById("mat41").innerHTML = "";
        document.getElementById("mat42").innerHTML = "";
        document.getElementById("mat43").innerHTML = "";
        document.getElementById("mat44").innerHTML = "";
        document.getElementById("mat45").innerHTML = "";
        document.getElementById("mat46").innerHTML = "";
        document.getElementById("mat47").innerHTML = "";
    }

}

function confirm5() {
    var coset1 = document.getElementById("r1").value;
    var coset2 = document.getElementById("r2").value;
    var coset3 = document.getElementById("r3").value;
    var coset4 = document.getElementById("r4").value;
    var coset5 = document.getElementById("r5").value;
    const obs2 = document.getElementById("observations2");

    var bitflag5 = 0;

    for (var i = 0; i < coset5.length; i++) {
        if (coset5[i] == 0 || coset5[i] == 1) {
            bitflag5++;
        }
    }


    if (coset5 == "") {
        obs2.innerHTML = "Enter the coset leader."
        obs2.style.color = "black";
    }

    else if (coset5.length != 6) {
        obs2.innerHTML = "The coset leader must be of length 6."
        obs2.style.color = "black";
    }

    else if (bitflag5 != 6) {
        obs2.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs2.style.color = "black";
    }

    else if ((coset5 == ans1 || coset5 == ans2 || coset5 == ans3
        || coset5 == ans4 || coset5 == ans5 || coset5 == ans6) &&
        (coset5 != coset1 && coset5 != coset2 && coset5 != coset3 && coset5 != coset4)) {

        obs2.style.color = "green";
        if (obs2.innerHTML == "<b>Correct Answer!!!</b>") {
            obs2.innerHTML = "<b>Correct Again!!!</b>";
        }
        else {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
        }

        document.getElementById("mat51").innerHTML = add(coset5, "011100");
        document.getElementById("mat52").innerHTML = add(coset5, "101010");
        document.getElementById("mat53").innerHTML = add(coset5, "110001");
        document.getElementById("mat54").innerHTML = add(coset5, "110110");
        document.getElementById("mat55").innerHTML = add(coset5, "101101");
        document.getElementById("mat56").innerHTML = add(coset5, "011011");
        document.getElementById("mat57").innerHTML = add(coset5, "000111");

        document.getElementById("r5").setAttribute("disabled", true);
        document.getElementById("r6").removeAttribute("disabled");

        document.getElementById("submit5").setAttribute("disabled", true);
        document.getElementById("submit6").removeAttribute("disabled");
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }

        document.getElementById("mat51").innerHTML = "";
        document.getElementById("mat52").innerHTML = "";
        document.getElementById("mat53").innerHTML = "";
        document.getElementById("mat54").innerHTML = "";
        document.getElementById("mat55").innerHTML = "";
        document.getElementById("mat56").innerHTML = "";
        document.getElementById("mat57").innerHTML = "";
    }

}

function confirm6() {
    var coset1 = document.getElementById("r1").value;
    var coset2 = document.getElementById("r2").value;
    var coset3 = document.getElementById("r3").value;
    var coset4 = document.getElementById("r4").value;
    var coset5 = document.getElementById("r5").value;
    var coset6 = document.getElementById("r6").value;
    const obs2 = document.getElementById("observations2");

    var bitflag6 = 0;

    for (var i = 0; i < coset6.length; i++) {
        if (coset6[i] == 0 || coset6[i] == 1) {
            bitflag6++;
        }
    }


    if (coset6 == "") {
        obs2.innerHTML = "Enter the coset leader."
        obs2.style.color = "black";
    }

    else if (coset6.length != 6) {
        obs2.innerHTML = "The coset leader must be of length 6."
        obs2.style.color = "black";
    }

    else if (bitflag6 != 6) {
        obs2.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs2.style.color = "black";
    }

    else if ((coset6 == ans1 || coset6 == ans2 || coset6 == ans3
        || coset6 == ans4 || coset6 == ans5 || coset6 == ans6) &&
        (coset6 != coset1 && coset6 != coset2 && coset6 != coset3 && coset6 != coset4 && coset6 != coset5)) {

        obs2.style.color = "green";
        if (obs2.innerHTML == "<b>Correct Answer!!!</b>") {
            obs2.innerHTML = "<b>Correct Again!!!</b>";
        }
        else {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
        }

        document.getElementById("mat61").innerHTML = add(coset6, "011100");
        document.getElementById("mat62").innerHTML = add(coset6, "101010");
        document.getElementById("mat63").innerHTML = add(coset6, "110001");
        document.getElementById("mat64").innerHTML = add(coset6, "110110");
        document.getElementById("mat65").innerHTML = add(coset6, "101101");
        document.getElementById("mat66").innerHTML = add(coset6, "011011");
        document.getElementById("mat67").innerHTML = add(coset6, "000111");


        document.getElementById("r6").setAttribute("disabled", true);
        document.getElementById("r7").removeAttribute("disabled");

        document.getElementById("submit6").setAttribute("disabled", true);
        document.getElementById("submit7").removeAttribute("disabled");
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }

        document.getElementById("mat61").innerHTML = "";
        document.getElementById("mat62").innerHTML = "";
        document.getElementById("mat63").innerHTML = "";
        document.getElementById("mat64").innerHTML = "";
        document.getElementById("mat65").innerHTML = "";
        document.getElementById("mat66").innerHTML = "";
        document.getElementById("mat67").innerHTML = "";
    }

}

function confirm7() {
    var coset7 = document.getElementById("r7").value;
    const obs2 = document.getElementById("observations2");

    var bitflag7 = 0;

    for (var i = 0; i < coset7.length; i++) {
        if (coset7[i] == 0 || coset7[i] == 1) {
            bitflag7++;
        }
    }

    if (coset7 == "") {
        obs2.innerHTML = "Enter the coset leader."
        obs2.style.color = "black";
    }

    else if (coset7.length != 6) {
        obs2.innerHTML = "The coset leader must be of length 6."
        obs2.style.color = "black";
    }

    else if (bitflag7 != 6) {
        obs2.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs2.style.color = "black";
    }

    else if (coset7 == ans7 || coset7 == ans8 || coset7 == ans9) {
        obs2.innerHTML = "<b>Correct Answer!!!</b> <br> You have successfully constructed the Standard Array Table";
        obs2.style.color = "green";

        document.getElementById("mat71").innerHTML = add(coset7, "011100");
        document.getElementById("mat72").innerHTML = add(coset7, "101010");
        document.getElementById("mat73").innerHTML = add(coset7, "110001");
        document.getElementById("mat74").innerHTML = add(coset7, "110110");
        document.getElementById("mat75").innerHTML = add(coset7, "101101");
        document.getElementById("mat76").innerHTML = add(coset7, "011011");
        document.getElementById("mat77").innerHTML = add(coset7, "000111");

    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }

        document.getElementById("mat71").innerHTML = "";
        document.getElementById("mat72").innerHTML = "";
        document.getElementById("mat73").innerHTML = "";
        document.getElementById("mat74").innerHTML = "";
        document.getElementById("mat75").innerHTML = "";
        document.getElementById("mat76").innerHTML = "";
        document.getElementById("mat77").innerHTML = "";
    }
}

function clear2() {
    const obs2 = document.getElementById("observations2");
    const form4 = document.getElementById("form4");
    const form5 = document.getElementById("form5");
    const form6 = document.getElementById("form6");
    const form7 = document.getElementById("form7");
    const form8 = document.getElementById("form8");
    const form9 = document.getElementById("form9");
    const form10 = document.getElementById("form10");

    obs2.innerHTML = "";
    form4.reset();
    form5.reset();
    form6.reset();
    form7.reset();
    form8.reset();
    form9.reset();
    form10.reset();

    document.getElementById("r1").removeAttribute("disabled");
    document.getElementById("r2").setAttribute("disabled", true);
    document.getElementById("r3").setAttribute("disabled", true);
    document.getElementById("r4").setAttribute("disabled", true);
    document.getElementById("r5").setAttribute("disabled", true);
    document.getElementById("r6").setAttribute("disabled", true);
    document.getElementById("r7").setAttribute("disabled", true);

    document.getElementById("submit1").removeAttribute("disabled");
    document.getElementById("submit2").setAttribute("disabled", true);
    document.getElementById("submit3").setAttribute("disabled", true);
    document.getElementById("submit4").setAttribute("disabled", true);
    document.getElementById("submit5").setAttribute("disabled", true);
    document.getElementById("submit6").setAttribute("disabled", true);
    document.getElementById("submit7").setAttribute("disabled", true);

    document.getElementById("mat11").innerHTML = "";
    document.getElementById("mat12").innerHTML = "";
    document.getElementById("mat13").innerHTML = "";
    document.getElementById("mat14").innerHTML = "";
    document.getElementById("mat15").innerHTML = "";
    document.getElementById("mat16").innerHTML = "";
    document.getElementById("mat17").innerHTML = "";

    document.getElementById("mat21").innerHTML = "";
    document.getElementById("mat22").innerHTML = "";
    document.getElementById("mat23").innerHTML = "";
    document.getElementById("mat24").innerHTML = "";
    document.getElementById("mat25").innerHTML = "";
    document.getElementById("mat26").innerHTML = "";
    document.getElementById("mat27").innerHTML = "";

    document.getElementById("mat31").innerHTML = "";
    document.getElementById("mat32").innerHTML = "";
    document.getElementById("mat33").innerHTML = "";
    document.getElementById("mat34").innerHTML = "";
    document.getElementById("mat35").innerHTML = "";
    document.getElementById("mat36").innerHTML = "";
    document.getElementById("mat37").innerHTML = "";

    document.getElementById("mat41").innerHTML = "";
    document.getElementById("mat42").innerHTML = "";
    document.getElementById("mat43").innerHTML = "";
    document.getElementById("mat44").innerHTML = "";
    document.getElementById("mat45").innerHTML = "";
    document.getElementById("mat46").innerHTML = "";
    document.getElementById("mat47").innerHTML = "";
    
    document.getElementById("mat51").innerHTML = "";
    document.getElementById("mat52").innerHTML = "";
    document.getElementById("mat53").innerHTML = "";
    document.getElementById("mat54").innerHTML = "";
    document.getElementById("mat55").innerHTML = "";
    document.getElementById("mat56").innerHTML = "";
    document.getElementById("mat57").innerHTML = "";

    document.getElementById("mat61").innerHTML = "";
    document.getElementById("mat62").innerHTML = "";
    document.getElementById("mat63").innerHTML = "";
    document.getElementById("mat64").innerHTML = "";
    document.getElementById("mat65").innerHTML = "";
    document.getElementById("mat66").innerHTML = "";
    document.getElementById("mat67").innerHTML = "";

    document.getElementById("mat71").innerHTML = "";
    document.getElementById("mat72").innerHTML = "";
    document.getElementById("mat73").innerHTML = "";
    document.getElementById("mat74").innerHTML = "";
    document.getElementById("mat75").innerHTML = "";
    document.getElementById("mat76").innerHTML = "";
    document.getElementById("mat77").innerHTML = "";
}





