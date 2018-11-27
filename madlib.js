
function madlib()
{
    /* for (var i=0; i<10; i++)
    {
        words.push(document.getElementById('i'));
    }
    */
    var words = [];
    words.push(document.getElementById('input1').value);
    words.push(document.getElementById('input2').value);
    words.push(document.getElementById('input3').value);
    words.push(document.getElementById('input4').value);
    words.push(document.getElementById('input5').value);
    words.push(document.getElementById('input6').value);
    words.push(document.getElementById('input7').value);
    words.push(document.getElementById('input8').value);
    words.push(document.getElementById('input9').value);
    words.push(document.getElementById('input10').value);
    words.push(document.getElementById('input11').value);
    words.push(document.getElementById('input12').value);
    words.push(document.getElementById('input13').value);

    document.getElementById('title').innerHTML = "VACATION (story from madlibs.com)";
    document.getElementById('story').innerHTML = "A vacation is when you take a trip to some " + words[0] + " place with your family. Usually you go to some place that is near a/an " + words[1] + " or up on a/an " + words[2] +
        ". A good vacation place is one where you can ride " + words[3] + " or play " + words[4] + " or go hunting for " + words[5] + ". I like to spend my time " + words[6] + " or " + words[7] +
        ". When parents go on a vacation, they spend their time eating three " + words[8] + " a day, and fathers play golf, and mothers sit around " + words[9] +
        ". Parents need vacations more than kids because parents are always very " + words[10] + " and because they have to work " + words[11] + " hours a every day all year making enough to pay for the vacation.";
}