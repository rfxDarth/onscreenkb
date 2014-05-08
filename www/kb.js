/**
 * Created by Drath on 08.05.14.
 */
var osk = {
    layout: "en",
    layouts: {
        en: {
            0: {
                0: {text: "Esc", keyCode: 0},
                1: {text: "F1", keyCode: 0},
                2: {text: "F2", keyCode: 0},
                3: {text: "F3", keyCode: 0},
                4: {text: "F4", keyCode: 0},
                5: {text: "F5", keyCode: 0},
                6: {text: "F6", keyCode: 0},
                7: {text: "F7", keyCode: 0},
                8: {text: "F8", keyCode: 0},
                9: {text: "F9", keyCode: 0},
                10: {text: "F10", keyCode: 0},
                11: {text: "F11", keyCode: 0},
                12: {text: "F12", keyCode: 0}
            },
            1: {
                0: {text: "`", keyCode: 0, stext: "~", skeyCode: 0},
                1: {text: "1", keyCode: 0, stext: "!", skeyCode: 0},
                2: {text: "2", keyCode: 0, stext: "\"", skeyCode: 0},
                3: {text: "3", keyCode: 0, stext: "№", skeyCode: 0},
                4: {text: "4", keyCode: 0, stext: ";", skeyCode: 0},
                5: {text: "5", keyCode: 0, stext: "%", skeyCode: 0},
                6: {text: "6", keyCode: 0, stext: ":", skeyCode: 0},
                7: {text: "7", keyCode: 0, stext: "?", skeyCode: 0},
                8: {text: "8", keyCode: 0, stext: "*", skeyCode: 0},
                9: {text: "9", keyCode: 0, stext: "(", skeyCode: 0},
                10: {text: "9", keyCode: 0, stext: ")", skeyCode: 0},
                11: {text: "-", keyCode: 0, stext: "_", skeyCode: 0},
                12: {text: "=", keyCode: 0, stext: "+", skeyCode: 0}
            },
            2: {
                0: {text: "Tab", keyCode: 0},
                1: {text: "q", keyCode: 0, stext: "Q", skeyCode: 0},
                2: {text: "w", keyCode: 0, stext: "W", skeyCode: 0},
                3: {text: "e", keyCode: 0, stext: "E", skeyCode: 0},
                4: {text: "r", keyCode: 0, stext: "R", skeyCode: 0},
                5: {text: "t", keyCode: 0, stext: "T", skeyCode: 0},
                6: {text: "y", keyCode: 0, stext: "Y", skeyCode: 0},
                7: {text: "u", keyCode: 0, stext: "U", skeyCode: 0},
                8: {text: "i", keyCode: 0, stext: "I", skeyCode: 0},
                9: {text: "o", keyCode: 0, stext: "O", skeyCode: 0},
                10: {text: "p", keyCode: 0, stext: "P", skeyCode: 0},
                11: {text: "[", keyCode: 0, stext: "{", skeyCode: 0},
                12: {text: "]", keyCode: 0, stext: "}", skeyCode: 0}
            },
            3: {
                0: {text: "Caps", keyCode: 0},
                1: {text: "a", keyCode: 0, stext: "A", skeyCode: 0},
                2: {text: "s", keyCode: 0, stext: "S", skeyCode: 0},
                3: {text: "d", keyCode: 0, stext: "D", skeyCode: 0},
                4: {text: "f", keyCode: 0, stext: "F", skeyCode: 0},
                5: {text: "g", keyCode: 0, stext: "G", skeyCode: 0},
                6: {text: "h", keyCode: 0, stext: "H", skeyCode: 0},
                7: {text: "j", keyCode: 0, stext: "J", skeyCode: 0},
                8: {text: "k", keyCode: 0, stext: "K", skeyCode: 0},
                9: {text: "l", keyCode: 0, stext: "L", skeyCode: 0},
                10: {text: ";", keyCode: 0, stext: ":", skeyCode: 0},
                11: {text: "'", keyCode: 0, stext: "\"", skeyCode: 0},
                12: {text: "\\", keyCode: 0, stext: "|", skeyCode: 0}
            },
            4: {
                0: {text: "Shift", keyCode: 0},
                1: {text: "z", keyCode: 0, stext: "A", skeyCode: 0},
                2: {text: "x", keyCode: 0, stext: "S", skeyCode: 0},
                3: {text: "c", keyCode: 0, stext: "D", skeyCode: 0},
                4: {text: "v", keyCode: 0, stext: "F", skeyCode: 0},
                5: {text: "b", keyCode: 0, stext: "G", skeyCode: 0},
                6: {text: "n", keyCode: 0, stext: "H", skeyCode: 0},
                7: {text: "m", keyCode: 0, stext: "J", skeyCode: 0},
                8: {text: ",", keyCode: 0, stext: "K", skeyCode: 0},
                9: {text: ".", keyCode: 0, stext: "L", skeyCode: 0},
                10: {text: "/", keyCode: 0, stext: ":", skeyCode: 0},
                11: {text: "Shift", keyCode: 0}
            },
            5: {
                0: {text: "Ctrl", keyCode: 0},
                1: {text: "Win", keyCode: 0},
                2: {text: "Alt", keyCode: 0},
                3: {text: "&nbsp;", keyCode: 0},
                4: {text: "Alt", keyCode: 0},
                5: {text: "Win", keyCode: 0},
                6: {text: "rkc", keyCode: 0},
                7: {text: "Ctrl", keyCode: 0}
            }
        }
    }
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
        buttons[i].addEventListener("click", keyclick, false);
    }
}
function keyclick() {
    var btn = this;
    alert(osk.layouts[osk.layout][btn.parentNode.getAttribute("row")][btn.getAttribute("col")].text);
//    alert(btn.parentNode.getAttribute("row"));
//    alert(btn.getAttribute("col"));
}