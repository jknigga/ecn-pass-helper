// ==UserScript==
// @name         ECN PASS helper - for animals
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://engineering.purdue.edu/PASS/ptAddSlots*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('body').append('<div style="position:absolute; top:20px; left:20px; background:#fff; padding:20px;"><button id="time1">9am - 11am</button><br/><button id="time3">8:30am - 10:30am</button><br/><button id="time2">1:30pm - 3:30pm</button><br/><br/><button id="saveit">Save!</button></div>');

    function doit() {
        document.getElementById("select-one").checked = true;
        $('.toggle-me').hide();
        $('#submit_multiple').val('false');
        toggleLabels();
        TP.loadTimePickers();
        $('#location').val('AHF 1155');
        $('#max_attendees').val('5');
    }

    $('#time1').click(function(){
        doit();
        $('#TimePicker-2').val('9:00am');
        $('#TimePicker-3').val('11:00am');
    });
    $('#time2').click(function(){
        doit();
        $('#TimePicker-2').val('1:30pm');
        $('#TimePicker-3').val('3:30pm');
    });
    $('#time3').click(function(){
        doit();
        $('#TimePicker-2').val('8:30am');
        $('#TimePicker-3').val('10:30am');
    });
    $('#saveit').click(function(){
        $('input[name="submit"]').click();
    });

})();