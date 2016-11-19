/*
function SendRequest(MSG)
{
    // my json to pass to
    var objJSON = {
        "msg" : MSG
    };

    // convert to string in html request
    var strJSON = encodeURIComponent(JSON.stringify(objJSON));

    // setup a new ajax request , with method, json string, function to call on complete
    new Ajax.Request("ReceiveJSON.jsp",
    {
        method: "post",
        parameters: "strJSON=" + strJSON,
        onComplete: Respond
    });
}

// function to call when response
function Respond(REQ)
{
    // change some div's content into json value
    document.getElementById("ResponseDiv").innerHTML=REQ.responseText;
}
*/
$(document).ready(function() {

    $('#submitBtn').click(function(e){
        console.log('clicked submit');
        e.preventDefault();

        var jsonData;

        var locationArray = [];

        if( $('#north').prop('checked') == true ){
            locationArray.push('北');
        }
        if( $('#medium').prop('checked') == true ){
            locationArray.push('中');
        }
        if( $('#south').prop('checked') == true ){
            locationArray.push('南');
        }
        if( $('#other').prop('checked') == true ){
            locationArray.push('其他');
        }

        var typeArray = [];

        if( $('#typeA').prop('checked') == true ){
            typeArray.push('前端');
        }
        if( $('#typeB').prop('checked') == true ){
            typeArray.push('後端');
        }
        if( $('#typeC').prop('checked') == true ){
            typeArray.push('研討會');
        }
        if( $('#typeD').prop('checked') == true ){
            typeArray.push('定期聚');
        }

        jsonData = {
            url: 'http://nctucs.tw:3001/api/search',
            type: 'POST',
            dataType: 'json',
            data: {
                keyword: $('#eventKeyword').val(),
                host: $('#hostKeyword').val(),
                location: locationArray,
                type: typeArray,
                date: {
                    start: $('#minTime').val(),
                    end: $('#maxTime').val()
                },
                fee: {
                    lower: $('#minFee').val(),
                    upper: $('#maxFee').val()
                },
                number_of_people: {
                    lower: $('#minPeople').val(),
                    upper: $('#maxPeople').val()
                }
            }
        };

        $.ajax(jsonData)
        .done(function(data) {
            console.log( "success" );
            console.log(data);
        })
        .fail(function(data) {
            console.log( "error" );
            console.log(data);
        })
        .always(function(data) {
            console.log( "complete" );
            console.log(data);
            console.log(jsonData);
        });
    });

});
