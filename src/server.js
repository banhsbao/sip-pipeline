var net = require('net');
var client = new net.Socket();
client.connect(6002, 'count.intelligentrfid.com.au', function () {
    console.log('Connected');

    console.log('Send: login');
    client.write('9300CNLoginUserID|COLoginPassword|CPLocation Institution ID|AY1AZE883F\r');

    /*console.log('Send: SC status');
    client.write('9900402.00AZFD6F\r');

    console.log('Send: patron status');
    client.write('2300020220505    145845AO|AA201234567801|AC|AD|AZF4B3\r');
*/
    console.log('Send: patron info');
    client.write('6300020220505    150105          AO|AA201234567801|AZF57F\r\n');
/*
    console.log('Send: item info');
    client.write('1720220505    150247AO|AB31232005291606|AZF6E7\r');

    console.log('Send: checkin');
    client.write('09N20220505    16021020220505    140238AP|AO|AB31232005291606|AC|AZF152\r');

    console.log('Send: checkout');
    client.write('11NN20220505    16042220220505    140235AO|AA201234567801|AB31232005291606|AC|AZEEB1\r\n');*/
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    // client.destroy(); // kill client after server's response
});

// paused mode
/*client.on('readable', function () {
    var data;
    while ((data = client.read())) {
        console.log(Buffer.from(data).toString());
    }
});*/
client.on('close', function () {
    console.log('Connection closed');
});
var n;
n = setTimeout(function () {
    client.destroy(); // kill client after server's response
}, 6000);
