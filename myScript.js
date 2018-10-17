function temperatureBug()
{
    var temp = Number(document.project1.input1.value);
    if (temp >= 130)
    {
        document.getElementById('weather').src="image/world.jpg";
        return "What planet are you living on";
    }
    if (temp >= 100)
    {
        document.getElementById('weather').src="image/hotsummer.jpg";
        return "Very Very Hot Summer";
    }
    else if (temp >= 80)
    {
        document.getElementById('weather').src="image/summer.jpg";
        return "Summer";
    }
    else if (temp >= 70)
    {
        document.getElementById('weather').src="image/spring.jpg";
        return "Spring";
    }
    else if (temp >= 50)
    {
        document.getElementById('weather').src="image/fall.jpg";
        return "Fall";
    }
    else if (temp >= 0)
    {
        document.getElementById('weather').src="image/winter.jpeg";
        return "Winter";
    }
    else if (temp >= (-10))
    {
        document.getElementById('weather').src="image/coldwinter.jpg";
        return "Very Very Cold Winter";
    }
    else if (temp < (-10))
    {
        document.getElementById('weather').src="image/world.jpg";
        return "What planet are you living on";
    }
}
/* Home Project 2: Calorie Counter
Create a function called CalorieCounter that does the following:
    Input a String for an activity (provide a list of acceptable responses like in ‘HelloWorld’
Each activity should burn a different amount of calories
Input a number for ‘time’ spent on activity IN MINUTES
Output the calories burned
Example input:  activity: bowling 		 time in minutes: 60
Example output:  You burned 250 calories.
    Example input activity: walking		time in minutes: 25
Example output:  You burned 180 calories
I should be able to type any number of minutes and calculate # of calories
*/

function calorieCounter()
{

    var activity = document.project2.activity.value;
    activity = activity.toLowerCase();
    var time = Number(document.project2.input1.value);
    if (activity == 'bowling')
    {
        return 4 * time;
    }
    else if (activity == 'swimming')
    {
        return 8 * time;
    }
    else if (activity == 'running')
    {
        return 7 * time;
    }
    else if (activity == 'tennis')
    {
        return 6 * time;
    }
    else if (activity == 'jumping rope')
    {
        return 10 * time;
    }
    else if (activity == 'basketball')
    {
        return 9 * time;
    }
}


function assignGrade()
{
    var score = Number(document.project3.input1.value);
        if (score >= 98)
        {
            return "A+";
        }
        else if (score >= 93)
        {
            return "A";
        }
        else if (score >= 90)
        {
            return "A-";
        }
        else if (score >= 88)
        {
            return "B+";
        }
        else if (score >= 83)
        {
            return "B";
        }
        else if (score >= 80)
        {
            return "B-";
        }
        else if (score >= 78)
        {
            return "C+";
        }
        else if (score >= 73)
        {
            return "C";
        }
        else if (score >= 70)
        {
            return "C-";
        }
        else if (score >= 68)
        {
            return "D+";
        }
        else if (score >= 63)
        {
            return "D";
        }
        else if (score >= 60)
        {
            return "D-";
        }
        else if (score >= 58)
        {
            return "F+";
        }
        else if (score >= 53)
        {
            return "F";
        }
        else if (score >= 50)
        {
            return "F-";
        }
        else
        {
            return "Worse than an F-"
        }
}
function dropDown()
{
    var activity = document.getElementById('myList').value;
    if (activity == "bowling")
    {
        return "bowling";
    }
    else if (activity == "running")
    {
        return "running";
    }
    else if (activity == "swimming")
    {
        return "swimming";
    }
    else if (activity == "basketball")
    {
        return "basketball";
    }
    else if (activity == "jumping rope")
    {
        return "jumping rope";
    }
}

/*

if (num%base >= base)
{
return alert()
}

 */