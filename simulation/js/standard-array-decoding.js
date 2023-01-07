var rand = [];
function getNumber() {

    const form1 = document.getElementById("form1");
    const obs = document.getElementById("observations");

    form1.reset();
    obs.innerHTML = "";

    for (var i = 0; i < 6; i++) {
        rand[i] = Math.floor(Math.random() * 2);
    }

    const bitstream = document.getElementById("bitstream");
    bitstream.innerHTML = "<b>" + rand[0] + rand[1] + rand[2] + rand[3] + rand[4] + rand[5] + "</b>";

    return false;
}

function check() {
    const cl = document.getElementById("m1").value;
    const dv = document.getElementById("m2").value;
    const obs = document.getElementById("observations");


    const conc = cl + dv;
    var bitcheck = 0;

    for (i = 0; i < conc.length; i++) {
        if (conc[i] == 0 || conc[i] == 1) {
            bitcheck++;
        }
    }

    if (cl == "" || dv == "") {
        obs.innerHTML = "Enter all the fields."
        obs.style.color = "black";
    }

    else if (cl.length != 6 || dv.length != 6) {
        obs.innerHTML = "The entered value must be of length 6."
        obs.style.color = "black";
    }

    else if (bitcheck != 12) {
        obs.innerHTML = "The elements entered must be either 0 or 1."
        obs.style.color = "black";
    }

    else {
        verify();
    }
}




function verify() {

    const cl = document.getElementById("m1").value;
    const dv = document.getElementById("m2").value;
    const obs = document.getElementById("observations");
    var expectedcl = "";
    var given = rand.join('');

    if (given == "000000" || given == "100110" || given == "010101" || given == "001011" ||
        given == "111000" || given == "011110" || given == "101101" || given == "110011") {

        expectedcl = "000000";
    }

    else if (given == "100000" || given == "000110" || given == "110101" || given == "101011" ||
        given == "011000" || given == "111110" || given == "001101" || given == "010011") {

        expectedcl = "100000";
    }

    else if (given == "010000" || given == "110110" || given == "000101" || given == "011011" ||
        given == "101000" || given == "001110" || given == "111101" || given == "100011") {

        expectedcl = "010000";
    }

    else if (given == "001000" || given == "101110" || given == "011101" || given == "000011" ||
        given == "110000" || given == "010110" || given == "100101" || given == "111011") {

        expectedcl = "001000";
    }

    else if (given == "000100" || given == "100010" || given == "010001" || given == "001111" ||
        given == "111100" || given == "011010" || given == "101001" || given == "110111") {

        expectedcl = "000100";
    }

    else if (given == "000010" || given == "100100" || given == "010111" || given == "001001" ||
        given == "111010" || given == "011100" || given == "101111" || given == "110001") {

        expectedcl = "000010";
    }

    else if (given == "000001" || given == "100111" || given == "010100" || given == "001010" ||
        given == "111001" || given == "011111" || given == "101100" || given == "110010") {

        expectedcl = "000001";
    }

    else if (given == "100001" || given == "000111" || given == "110100" || given == "101010" ||
        given == "011001" || given == "111111" || given == "001100" || given == "010010") {

        expectedcl = "100001";
    }


    // console.log(expectedcl);

    if ((cl == expectedcl) && (dv == add(given, expectedcl))) {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        obs.style.color = "red";
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
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