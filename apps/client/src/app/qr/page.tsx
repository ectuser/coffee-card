'use-client'

import QRCode from "react-qr-code";

export default function Id() {
    const UserId = '12345';
    return <div className='m-10'>
        <h1 className='text-center mb-8' >My QR-code </h1>
        <div>
            <QRCode
                size={256}
                className='h-auto max-w-full w-full'
                value={UserId}
                viewBox={`0 0 256 256`}
            />
        </div>
    </div>;    
}