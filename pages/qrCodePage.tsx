import React from 'react';
import  QRCode from 'qrcode.react';

const QRCodePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <QRCode value="https://audhdities.vercel.app/" size={256} />
    </div>
  );
};

export default QRCodePage;  