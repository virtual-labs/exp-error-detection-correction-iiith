function page1() {
    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs1 = document.getElementById("observations1");
    const form1 = document.getElementById("form1");

    sec1.style.display = "block";
    sec2.style.display = "none";
    obs1.innerHTML = "";
    form1.reset();
}


function page2() {
    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs2 = document.getElementById("observations2");
    const form2 = document.getElementById("form2");

    sec1.style.display = "none";
    sec2.style.display = "block";
    obs2.innerHTML = "";
    form2.reset();
}

function check1() {
    const cl1 = document.getElementById("m1").value;
    const cl2 = document.getElementById("m2").value;
    const cl3 = document.getElementById("m3").value;
    const obs1 = document.getElementById("observations1");

    const cl_conc = cl1 + cl2 + cl3;
    var bitcheck1 = 0;

    for (i = 0; i < cl_conc.length; i++) {
        if (cl_conc[i] == 0 || cl_conc[i] == 1) {
            bitcheck1++;
        }
    }


    if (cl1 == "" || cl2 == "" || cl3 == "") {
        obs1.innerHTML = "Enter all the coset leaders."
        obs1.style.color = "black";
    }

    else if (cl1.length != 5 || cl2.length != 5 || cl3.length != 5) {
        obs1.innerHTML = "The coset leader must be of length 5."
        obs1.style.color = "black";
    }

    else if (bitcheck1 != 15) {
        obs1.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs1.style.color = "black";
    }

    else {
        verify1();
    }

}

function check2() {
    const coset1 = document.getElementById("r1").value;
    const coset2 = document.getElementById("r2").value;
    const coset3 = document.getElementById("r3").value;
    const coset4 = document.getElementById("r4").value;
    const coset5 = document.getElementById("r5").value;
    const coset6 = document.getElementById("r6").value;
    const coset7 = document.getElementById("r7").value;
    const obs2 = document.getElementById("observations2");

    const coset_conc = coset1 + coset2 + coset3 + coset4 + coset5 + coset6 + coset7;
    var bitcheck2 = 0;

    for (i = 0; i < coset_conc.length; i++) {
        if (coset_conc[i] == 0 || coset_conc[i] == 1) {
            bitcheck2++;
        }
    }


    if (coset1 == "" || coset2 == "" || coset3 == "" || coset4 == "" || coset5 == "" || coset6 == "" || coset7 == "") {
        obs2.innerHTML = "Enter all the coset leaders."
        obs2.style.color = "black";
    }

    else if (coset1.length != 6 || coset2.length != 6 || coset3.length != 6 || coset4.length != 6 ||
        coset5.length != 6 || coset6.length != 6 || coset7.length != 6) {
        obs2.innerHTML = "The coset leader must be of length 6."
        obs2.style.color = "black";
    }

    else if (bitcheck2 != 42) {
        obs2.innerHTML = "The elements in the coset leader must be either 0 or 1."
        obs2.style.color = "black";
    }

    else {
        verify2();
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

    // console.log(countArray1);

    flag1 = countArray1[1] * countArray1[4] * (countArray1[2] + countArray1[8] + countArray1[16]);

    if (flag1 == 1) {
        obs1.innerHTML = "<b>Correct Answer!!!</b>";
        obs1.style.color = "green";
        fill1();
    }

    else {
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

        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }
}

function verify2() {
    var coset1 = document.getElementById("r1").value;
    var coset2 = document.getElementById("r2").value;
    var coset3 = document.getElementById("r3").value;
    var coset4 = document.getElementById("r4").value;
    var coset5 = document.getElementById("r5").value;
    var coset6 = document.getElementById("r6").value;
    var coset7 = document.getElementById("r7").value;
    var obs2 = document.getElementById("observations2");

    coset1 = parseInt(coset1, 2);
    coset2 = parseInt(coset2, 2);
    coset3 = parseInt(coset3, 2);
    coset4 = parseInt(coset4, 2);
    coset5 = parseInt(coset5, 2);
    coset6 = parseInt(coset6, 2);
    coset7 = parseInt(coset7, 2);

    const countArray2 = new Array(41).fill(0);

    countArray2[coset1] = 1;
    countArray2[coset2] = 1;
    countArray2[coset3] = 1;
    countArray2[coset4] = 1;
    countArray2[coset5] = 1;
    countArray2[coset6] = 1;
    countArray2[coset7] = 1;

    // console.log(countArray2);

    flag2 = countArray2[1] * countArray2[2] * countArray2[4] * countArray2[8] * countArray2[16] * countArray2[32] *
        (countArray2[9] + countArray2[18] + countArray2[36]);

    if (flag2 == 1) {
        obs2.innerHTML = "<b>Correct Answer!!!</b>";
        obs2.style.color = "green";
        fill2();
    }

    else {
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

        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }
}

function fill1() {
    const cl1 = document.getElementById("m1").value;
    const cl2 = document.getElementById("m2").value;
    const cl3 = document.getElementById("m3").value;

    document.getElementById("t11").innerHTML = add(cl1, "10101");
    document.getElementById("t12").innerHTML = add(cl1, "11000");
    document.getElementById("t13").innerHTML = add(cl1, "00111");
    document.getElementById("t14").innerHTML = add(cl1, "01101");
    document.getElementById("t15").innerHTML = add(cl1, "10010");
    document.getElementById("t16").innerHTML = add(cl1, "01010");
    document.getElementById("t17").innerHTML = add(cl1, "11111");

    document.getElementById("t21").innerHTML = add(cl2, "10101");
    document.getElementById("t22").innerHTML = add(cl2, "11000");
    document.getElementById("t23").innerHTML = add(cl2, "00111");
    document.getElementById("t24").innerHTML = add(cl2, "01101");
    document.getElementById("t25").innerHTML = add(cl2, "10010");
    document.getElementById("t26").innerHTML = add(cl2, "01010");
    document.getElementById("t27").innerHTML = add(cl2, "11111");

    document.getElementById("t31").innerHTML = add(cl3, "10101");
    document.getElementById("t32").innerHTML = add(cl3, "11000");
    document.getElementById("t33").innerHTML = add(cl3, "00111");
    document.getElementById("t34").innerHTML = add(cl3, "01101");
    document.getElementById("t35").innerHTML = add(cl3, "10010");
    document.getElementById("t36").innerHTML = add(cl3, "01010");
    document.getElementById("t37").innerHTML = add(cl3, "11111");

}

function fill2() {
    const coset1 = document.getElementById("r1").value;
    const coset2 = document.getElementById("r2").value;
    const coset3 = document.getElementById("r3").value;
    const coset4 = document.getElementById("r4").value;
    const coset5 = document.getElementById("r5").value;
    const coset6 = document.getElementById("r6").value;
    const coset7 = document.getElementById("r7").value;

    document.getElementById("mat11").innerHTML = add(coset1, "011100");
    document.getElementById("mat12").innerHTML = add(coset1, "101010");
    document.getElementById("mat13").innerHTML = add(coset1, "110001");
    document.getElementById("mat14").innerHTML = add(coset1, "110110");
    document.getElementById("mat15").innerHTML = add(coset1, "101101");
    document.getElementById("mat16").innerHTML = add(coset1, "011011");
    document.getElementById("mat17").innerHTML = add(coset1, "000111");

    document.getElementById("mat21").innerHTML = add(coset2, "011100");
    document.getElementById("mat22").innerHTML = add(coset2, "101010");
    document.getElementById("mat23").innerHTML = add(coset2, "110001");
    document.getElementById("mat24").innerHTML = add(coset2, "110110");
    document.getElementById("mat25").innerHTML = add(coset2, "101101");
    document.getElementById("mat26").innerHTML = add(coset2, "011011");
    document.getElementById("mat27").innerHTML = add(coset2, "000111");

    document.getElementById("mat31").innerHTML = add(coset3, "011100");
    document.getElementById("mat32").innerHTML = add(coset3, "101010");
    document.getElementById("mat33").innerHTML = add(coset3, "110001");
    document.getElementById("mat34").innerHTML = add(coset3, "110110");
    document.getElementById("mat35").innerHTML = add(coset3, "101101");
    document.getElementById("mat36").innerHTML = add(coset3, "011011");
    document.getElementById("mat37").innerHTML = add(coset3, "000111");

    document.getElementById("mat41").innerHTML = add(coset4, "011100");
    document.getElementById("mat42").innerHTML = add(coset4, "101010");
    document.getElementById("mat43").innerHTML = add(coset4, "110001");
    document.getElementById("mat44").innerHTML = add(coset4, "110110");
    document.getElementById("mat45").innerHTML = add(coset4, "101101");
    document.getElementById("mat46").innerHTML = add(coset4, "011011");
    document.getElementById("mat47").innerHTML = add(coset4, "000111");

    document.getElementById("mat51").innerHTML = add(coset5, "011100");
    document.getElementById("mat52").innerHTML = add(coset5, "101010");
    document.getElementById("mat53").innerHTML = add(coset5, "110001");
    document.getElementById("mat54").innerHTML = add(coset5, "110110");
    document.getElementById("mat55").innerHTML = add(coset5, "101101");
    document.getElementById("mat56").innerHTML = add(coset5, "011011");
    document.getElementById("mat57").innerHTML = add(coset5, "000111");

    document.getElementById("mat61").innerHTML = add(coset6, "011100");
    document.getElementById("mat62").innerHTML = add(coset6, "101010");
    document.getElementById("mat63").innerHTML = add(coset6, "110001");
    document.getElementById("mat64").innerHTML = add(coset6, "110110");
    document.getElementById("mat65").innerHTML = add(coset6, "101101");
    document.getElementById("mat66").innerHTML = add(coset6, "011011");
    document.getElementById("mat67").innerHTML = add(coset6, "000111");

    document.getElementById("mat71").innerHTML = add(coset7, "011100");
    document.getElementById("mat72").innerHTML = add(coset7, "101010");
    document.getElementById("mat73").innerHTML = add(coset7, "110001");
    document.getElementById("mat74").innerHTML = add(coset7, "110110");
    document.getElementById("mat75").innerHTML = add(coset7, "101101");
    document.getElementById("mat76").innerHTML = add(coset7, "011011");
    document.getElementById("mat77").innerHTML = add(coset7, "000111");

}

function add(item1, item2) {
    var out = [];
    for (i = 0; i < item1.length; i++) {
        out[i] = item1[i] ^ item2[i];
    }
    out = out.join('');
    return out
} 