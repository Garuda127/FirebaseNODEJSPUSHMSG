var FCM = require("fcm-node");
var serverKey =
  "AAAATwtJOQg:APA91bHzuSfqaRKDbuHGoBdgjYAoOiGPJyyXg8QhPzLBLPlCmQPz5x1SYvf3UQoGYTcIJd8iOyk-bEzhw8FkGH847aTfxbrKjncsPc59DwPBRfd9jEguL5iwwCqnoW6Gsi_d2W38ldt7"; // * Llave del servidor
//! ESTA ES LA LLAVES DE FIREBASE UNICA
var fcm = new FCM(serverKey);

var message = {
  //! ESTE ID ES UNICO PARA CADA USUARIO
  to: "ernL9IxyTAS2ls7CxgWR8b:APA91bFBvxdH2_HjlR7LD6fpmaaqSQNE4FBF77bW2Gf5XaM-52cySbYEYzhDRhldBvgsyQNvBMdbBIxMXXTkT15XQB-9tHVG8I8RsWzE_thuIhdRob7jK7Wp6PMUkUJOud8H8Wiql_c2", // * ID DEL DISPOSITIVO UNICO
  notification: {
    title: "Notificacion de prueba NodeJS",
    body: "Este mensaje de prueba se mando desde NODEJS",
    sound: "default",
  },

  data: {
    // * Puede ser cualquier dato que se desee enviar al dispositivo desde el servidor a traves de la notificacion push de firebase cloud messaging (FCM)
    title: "ok cdfsdsdfsd",
    body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}',
  },
};

fcm.send(message, function (err, response) {
  if (err) {
    console.log("Algo ha salido mal!" + err);
    console.log("Responde:! " + response);
  } else {
    // showToast("Enviado correctamente con respuesta");
    console.log("Enviado correctamente con respuesta: ", response);
  }
});
