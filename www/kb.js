/**
 * Created by Drath on 08.05.14.
 */
var osk = {
    layout: "en",
    layouts: {
        en: {
            0: {
                0: {text: "Esc", keyCode: 27},
                1: {text: "F1", keyCode: 112},
                2: {text: "F2", keyCode: 113},
                3: {text: "F3", keyCode: 114},
                4: {text: "F4", keyCode: 115},
                5: {text: "F5", keyCode: 116},
                6: {text: "F6", keyCode: 117},
                7: {text: "F7", keyCode: 118},
                8: {text: "F8", keyCode: 119},
                9: {text: "F9", keyCode: 120},
                10: {text: "F10", keyCode: 121},
                11: {text: "F11", keyCode: 122},
                12: {text: "F12", keyCode: 123}
            },
            1: {
                0: {text: "`", keyCode: 49, stext: "~"},
                1: {text: "1", keyCode: 50, stext: "!"},
                2: {text: "2", keyCode: 51, stext: "\""},
                3: {text: "3", keyCode: 52, stext: "№"},
                4: {text: "4", keyCode: 53, stext: ";"},
                5: {text: "5", keyCode: 54, stext: "%"},
                6: {text: "6", keyCode: 55, stext: ":"},
                7: {text: "7", keyCode: 56, stext: "?"},
                8: {text: "8", keyCode: 57, stext: "*"},
                9: {text: "9", keyCode: 58, stext: "("},
                10: {text: "0", keyCode: 48, stext: ")"},
                11: {text: "-", keyCode: 189, stext: "_"},
                12: {text: "=", keyCode: 187, stext: "+"},
                13: {text: "Backspace", keyCode: 8}
            },
            2: {
                0: {text: "Tab", keyCode: 9},
                1: {text: "q", keyCode: 81, stext: "Q"},
                2: {text: "w", keyCode: 87, stext: "W"},
                3: {text: "e", keyCode: 69, stext: "E"},
                4: {text: "r", keyCode: 82, stext: "R"},
                5: {text: "t", keyCode: 84, stext: "T"},
                6: {text: "y", keyCode: 89, stext: "Y"},
                7: {text: "u", keyCode: 85, stext: "U"},
                8: {text: "i", keyCode: 73, stext: "I"},
                9: {text: "o", keyCode: 79, stext: "O"},
                10: {text: "p", keyCode: 80, stext: "P"},
                11: {text: "[", keyCode: 219, stext: "{"},
                12: {text: "]", keyCode: 221, stext: "}"},
                13: {text: "Enter", keyCode: 13}
            },
            3: {
                0: {text: "Caps", keyCode: 20},
                1: {text: "a", keyCode: 65, stext: "A"},
                2: {text: "s", keyCode: 83, stext: "S"},
                3: {text: "d", keyCode: 68, stext: "D"},
                4: {text: "f", keyCode: 70, stext: "F"},
                5: {text: "g", keyCode: 71, stext: "G"},
                6: {text: "h", keyCode: 72, stext: "H"},
                7: {text: "j", keyCode: 74, stext: "J"},
                8: {text: "k", keyCode: 75, stext: "K"},
                9: {text: "l", keyCode: 76, stext: "L"},
                10: {text: ";", keyCode: 186, stext: ":"},
                11: {text: "'", keyCode: 222, stext: "\""},
                12: {text: "\\", keyCode: 220, stext: "|"}
            },
            4: {
                0: {text: "Shift", keyCode: 16},
                1: {text: "z", keyCode: 90, stext: "A"},
                2: {text: "x", keyCode: 88, stext: "S"},
                3: {text: "c", keyCode: 67, stext: "D"},
                4: {text: "v", keyCode: 86, stext: "F"},
                5: {text: "b", keyCode: 66, stext: "G"},
                6: {text: "n", keyCode: 78, stext: "H"},
                7: {text: "m", keyCode: 77, stext: "J"},
                8: {text: ",", keyCode: 188, stext: "K"},
                9: {text: ".", keyCode: 190, stext: "L"},
                10: {text: "/", keyCode: 191, stext: ":"},
                11: {text: "Shift", keyCode: 16}
            },
            5: {
                0: {text: "Ctrl", keyCode: 16},
                1: {text: "Win", keyCode: 91},
                2: {text: "Alt", keyCode: 18},
                3: {text: "&nbsp;", keyCode: 32},
                4: {text: "Alt", keyCode: 18},
                5: {text: "Win", keyCode: 92},
                6: {text: "rkc", keyCode: 93},
                7: {text: "Ctrl", keyCode: 16}
            }
        }
    },
    focus: null
};
function getkb() {
    var kb = document.createElement("div");
    var xhr = new XMLHttpRequest();
    xhr.open("get", "kb.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                kb.innerHTML = xhr.responseText;
                document.getElementsByTagName('body')[0].appendChild(kb);
                kbinit();
            }
        }
    };
    kb.style.position = "absolute";
    kb.style.right = "0px";
    xhr.send(null);
}
function kbinit() {
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        var btn=buttons[i];
        btn.innerHTML=osk.layouts[osk.layout][btn.parentNode.getAttribute("row")][btn.getAttribute("col")].text;
        btn.addEventListener("mouseover", keyhover, false);
        btn.addEventListener("click", keyclick, false);
    }
}
function keyclick() {
    var btn = this;
//    alert(osk.layouts[osk.layout][btn.parentNode.getAttribute("row")][btn.getAttribute("col")].text);
//    alert(btn.parentNode.getAttribute("row"));
//    alert(btn.getAttribute("col"));
    osk.focus.focus();
    osk.focus.innerHTML+=osk.layouts[osk.layout][btn.parentNode.getAttribute("row")][btn.getAttribute("col")].text;
}
function keyhover() {
    osk.focus=document.activeElement;
}