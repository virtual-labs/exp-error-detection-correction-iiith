var rand = [];
function getNumber() {

    const form1 = document.getElementById("form1");
    const obs = document.getElementById("observations");

    form1.reset();
    obs.innerHTML = "";

    for (var i = 0; i < 7; i++) {
        rand[i] = Math.floor(Math.random() * 2);
    }

    const bitstream = document.getElementById("bitstream");
    bitstream.innerHTML = "<b>" + rand[0] + rand[1] + rand[2] + rand[3] + rand[4] + rand[5] + rand[6] + "</b>";

    return false;
}

function check() {
    const syn = document.getElementById("m1").value;
    const dv = document.getElementById("m2").value;
    const obs = document.getElementById("observations");


    const conc = syn + dv;
    var bitcheck = 0;

    for (i = 0; i < conc.length; i++) {
        if (conc[i] == 0 || conc[i] == 1) {
            bitcheck++;
        }
    }

    if (syn == "" || dv == "") {
        obs.innerHTML = "Enter all the fields."
        obs.style.color = "black";
    }

    else if (syn.length != 3) {
        obs.innerHTML = "The entered syndrome must be of length 3."
        obs.style.color = "black";
    }

    else if (dv.length != 7) {
        obs.innerHTML = "The entered codeword must be of length 7."
        obs.style.color = "black";
    }

    else if (bitcheck != 10) {
        obs.innerHTML = "The elements entered must be either 0 or 1."
        obs.style.color = "black";
    }

    else {
        verify();
    }
}



function verify() {

    const syn = document.getElementById("m1").value;
    const dv = document.getElementById("m2").value;
    const obs = document.getElementById("observations");
    var expectedsyn = [];

    expectedsyn[0] = (rand[0] + rand[3] + rand[5] + rand[6]) % 2;
    expectedsyn[1] = (rand[1] + rand[3] + rand[4] + rand[5]) % 2;
    expectedsyn[2] = (rand[2] + rand[4] + rand[5] + rand[6]) % 2;

    expectedsyn = expectedsyn.join('');

    var expecteddv="";

    if(expectedsyn=="100") {
        expecteddv="1000000";
    }

    else if(expectedsyn=="010") {
        expecteddv="0100000";
    }

    else if(expectedsyn=="001") {
        expecteddv="0010000";
    }

    else if(expectedsyn=="110") {
        expecteddv="0001000";
    }

    else if(expectedsyn=="011") {
        expecteddv="0000100";
    }

    else if(expectedsyn=="111") {
        expecteddv="0000010";
    }

    else if(expectedsyn=="101") {
        expecteddv="0000001";
    }

    var given = rand.join('');
    
    console.log(expectedsyn);
    console.log(expecteddv);
    console.log(add(given, expecteddv));

    if ((syn == expectedsyn) && (dv == add(given, expecteddv))) {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        obs.style.color = "red";
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            alert("Wrong Again :(")
        }
        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            alert("Wrong Answer :(")
        }
    }


}

function add(item1, item2) {
    var out = [];
    for (i = 0; i < item1.length; i++) {
        out[i] = item1[i] ^ item2[i];
    }
    out = out.join('');
    return out
} 