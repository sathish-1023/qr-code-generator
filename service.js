const qrcode = require('qrcode');

exports.formatData =(data) =>{
    const qrCodeText =`Items id : ${data.id} items Price : ${data.price}`;
    return qrCodeText;
};

exports.qrCode =(qrCodeText) =>{
    const options ={
        errorCorrectionLevel:'M',
        type : 'image/png',
        margin :1
    }
    const qrCodeBuffer = qrcode.toBuffer(qrCodeText,options);
    return qrCodeBuffer;
};