function twoToTen()
{
    num = Number(document.project3.num1.value);
    base = 2; //base or 'num' to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to a STRING, then counts the number of characters in the string
    //in this case, length of '1101' is 4

    while(numLength > 0)
    {
        var denominator = Math.pow(10, (numLength-1)); //gets denominator of a fraction
        //for 1001, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        // above means 1001/1000 = 1.... 101/100 = 1.... 01/10 = 0.... 1/1 = 1....
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
        //currentDigit*2^3 ... currentDigit*2^2.... currentDigit*2^2.... etc
        num = num%denominator; //reduces num for the next iteration
        // 1101 -> 101 - > 01 -> 1
        numLength--; //decreases the numLength value by 1... otherwise will loop infinitely.
    }
    return tenNum;
}

function tenToTwo()
{
    num = Number(document.project3.num2.value); //number to convert
    base = 2; //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5 = 2... % returns remainder
        //setup num for the next iteration of the loop.
        num = Math.floor(num/base);
    }
    return smallNum;
}
function smallToTen(num, base) //convert a small-base number to base-10
{
    num = Number(document.project4.num.value);
    base = Number(document.project4.base1.value); //base or 'num' to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to a STRING, then counts the number of characters in the string
    //in this case, length of '1101' is 4

    while(numLength > 0)
    {
        var denominator = Math.pow(10, (numLength-1)); //gets denominator of a fraction
        //for 1001, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        // above means 1001/1000 = 1.... 101/100 = 1.... 01/10 = 0.... 1/1 = 1....
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
        //currentDigit*2^3 ... currentDigit*2^2.... currentDigit*2^2.... etc
        num = num%denominator; //reduces num for the next iteration
        // 1101 -> 101 - > 01 -> 1
        numLength--; //decreases the numLength value by 1... otherwise will loop infinitely.
    }
    return tenNum;
}

function tenToSmall(num, base) // convert a base-10 number to a smaller base
{
    //this function is expecting a number (num) in base 10
    //it will convert the number (num) to value of 'base'
    num = tenNum; //number to convert
    base = Number(document.project4.base2.value); //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5 = 2... % returns remainder
        //setup num for the next iteration of the loop.
        num = Math.floor(num/base);
    }
    return smallNum;
}


function xToY()
{
    var num = smallToTen();
    var base = Number(document.project4.base2.value);
    return tenToSmall(num, base);
}
