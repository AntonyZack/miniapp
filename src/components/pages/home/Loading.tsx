'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import loading from '@/../public/assets/icons/loading.svg';
import whale from '@/../public/assets/icons/whale-text.svg';


function Loading() {
    return (
        <div className="min-h-screen flex flex-col gap-4  items-center">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, ease: "linear" }}            >
                <Image width={300} src={loading} alt="loading" />
            </motion.div>
            <Image src={whale} width={150} alt='whale text' />
        </div>
    );
}

export default Loading;
