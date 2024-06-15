const service = require('./service');

exports.generateQr = async (req,res) =>{
    try{
    const {data} = req.body;
    console.log(data);
    const qrCodeText = service.formatData(data);
    const qrCodeBuffer = await service.qrCode(qrCodeText);
    res.setHeader('Content-Disposition','attachment; filename=qrcode.png');
    res.type('image/png').send(qrCodeBuffer);
    }catch(err){
        console.error('Intener Server Error',err);
        res.status(500).send({error :'Internal Server Error'});
    }
}