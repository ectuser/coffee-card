import QRCode from "react-qr-code";

export default function Index({ params }: {
    params: {id: string}
}) {
    return <div className='m-10'>
        <h1 className='text-center mb-8' >My QR-code </h1>
        <div>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={params.id}
                viewBox={`0 0 256 256`}
            />
        </div>
    </div>;    
}