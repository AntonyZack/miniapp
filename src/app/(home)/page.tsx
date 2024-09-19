'use client'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Loading from '../../components/pages/home/Loading';
import Home from '../../components/pages/home/Home';



export default function Page() {
    const [showComponent, setShowComponent] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className='mx-auto w-full max-w-lg py-8'>
            {
                loading ? <Loading /> : <Home />
            }

        </main>
    );
}
