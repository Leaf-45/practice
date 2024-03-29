/*
 * The Ludicolo Test
 * This is a modified version of another popular test that checks if you can
 * "code your way out of a wet paper bag". Basically its really simple and
 * I'm assigning it to see if you understood this part's concepts.
 *
 * Instructions:
 * Write a script that counts up from 1 to 100, including both 1 and 100 one number at a time.
 * As you count up, log the current number to the console. However, if the current number
 * is divisible by 4, print "Ludi" to the console, if the current number is divisible
 * by 6, log "colo" to the console, and if the current number is divisible by 4 AND 6,
 * log "Ludicolo" to the console. If you log one of the above strings to the console
 * do not log the current number to the console.
 * 
 * Please turn this assignment in to me, I want to see how well you guys understood
 * the lesson, and I want to help you if your not doing well with it.
 *
 * HINT: Remember DRY (Don't Repeat Yourself).
 * HINT: Day 2 introduced a JavaScript math operator that can tell you if a number is divisible by another number.
 * 
 * When submitting fill this out (only discord tag is required):
 * Discord Tag: 
 * Pokemon Showdown Username: 
 * Twitch Username: 
 */
'use strict';


for (let x = 1; x <= 100; x++)  { 
    if (x % 4 === 0 && x % 6 === 0) {
        console.log('Ludicolo');
    } else if (x % 6 === 0) {
        console.log('colo');
    } else if (x % 4 === 0) {
        console.log("Ludi");
    } else {
        console.log(x);
    }
}