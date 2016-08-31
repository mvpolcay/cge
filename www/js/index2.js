
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },



    onDeviceReady: function() {
        app.LoginView();
        
        //navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },

    LoginView: function() {
        $.get('/login.html',function (data) {
            $('.login').html(data);
            $(".screenForm-btn").on("click",function(){
                var lodata={
                    username:$("input[name=userName]").val(),
                    password:$("input[name=password]").val()
                };
                $.ajax({
                    type:"POST",
                    url:"..//http://localhost:57094/api/Login/loginresult",
                    datatype:"JSON",
                    data:lodata,
                    crossDomain: true,
                    success:function(resdata){
                        console.log(resdata);
                    }
                });
                /*$.post("http://localhost:57094/api/Login/loginresult",lodata,function(resdata){
                    alert(resdata);
                });*/

            });
        });
    }
    /*onSuccess:function(position) {
        var element = document.querySelector('.position');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    }
    onError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }*/
};

app.initialize();