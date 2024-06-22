'use client'
import QRCode from "react-qr-code";
import Image from 'next/image';
import copySvg from './copy.svg';

function copyText(entryId: string) {
    navigator.clipboard.writeText(entryId);
    console.log('Text copied');
}

export default function setId() {

   
    const userId = '312623714965';
    return <div className='p-10'>
        <h1 className='text-center mb-8' >My QR-code </h1>
        <div className='mb-10'>
            <QRCode
                size={256}
                className='h-auto max-w-full w-full'
                value={userId}
                viewBox={`0 0 256 256`}
            />
        </div>
        <div className='flex mb-8'>
            <p className='pr-2'>My ID is:</p>
            <button
                className='flex items-center gap-1 hover:underline focus:opacity-75 active:ring'
                onClick={
                    () => copyText(userId)}>
                {userId}
                <Image
                    alt="copy icon"
                    src={copySvg}
                />
            </button>
        </div>
    </div>;
}