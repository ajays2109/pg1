const qr = require('qr-image');
function generateQRCode(text, filepath) {
  const qrImage = qr.image(text, { type: 'png' });
  qrImage.pipe(require('fs').createWriteStream(filepath));
}

const upiLink = 'upi://pay?pa=ajaycse@paytm&pn=Ajay&am=500&cu=INR';
const qrCodePath = './qrcode.png';
generateQRCode(upiLink, qrCodePath);