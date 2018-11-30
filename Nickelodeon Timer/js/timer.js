
var timer = new Timer();
var breakSound = new Audio('consequence.mp3');

timer.start({precision: 'seconds', startValues: {seconds: 0}, target: {seconds: 28800}});

$('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());

timer.addEventListener('secondsUpdated', function (e) 
{
    $('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());
    if( "00:00:00" <= timer.getTimeValues().toString() && timer.getTimeValues().toString() < "00:20:00" || "00:25:00" < timer.getTimeValues().toString() && timer.getTimeValues().toString() < "00:45:00")
    {
        $('#startValuesAndTargetExample .progress_bar').html($('#startValuesAndTargetExample .progress_bar').html() + '.');
    }
   
    //console.log (timer.getTimeValues().toString());

    if ( "00:20:00" <= timer.getTimeValues().toString() && timer.getTimeValues().toString() <= "00:25:00" || "00:45:00" <= timer.getTimeValues().toString() && timer.getTimeValues().toString() <= "00:50:00")
    {
        $('#startValuesAndTargetExample .progress_bar').html('Break Time!');       
        breakSound.play();
    }

    if (timer.getTimeValues().toString() == "00:01:00" || timer.getTimeValues().toString() == "00:02:00" || timer.getTimeValues().toString() == "00:03:00" || timer.getTimeValues().toString() == "00:04:00" || timer.getTimeValues().toString() == "00:05:00" || timer.getTimeValues().toString() == "00:06:00" || timer.getTimeValues().toString() == "00:07:00" || timer.getTimeValues().toString() == "00:08:00" || timer.getTimeValues().toString() == "00:09:00" || timer.getTimeValues().toString() == "00:10:00"|| timer.getTimeValues().toString() == "00:11:00"|| timer.getTimeValues().toString() == "00:12:00"|| timer.getTimeValues().toString() == "00:13:00"|| timer.getTimeValues().toString() == "00:14:00"|| timer.getTimeValues().toString() == "00:15:00"|| timer.getTimeValues().toString() == "00:16:00"|| timer.getTimeValues().toString() == "00:17:00"|| timer.getTimeValues().toString() == "00:18:00"|| timer.getTimeValues().toString() == "00:19:00"|| timer.getTimeValues().toString() == "00:20:00")
    {

        $('#startValuesAndTargetExample .progress_bar').html('');       
    }
});

timer.addEventListener('targetAchieved', function (e) 
{
    $('#startValuesAndTargetExample .progress_bar').html('GO TO BED');
});
