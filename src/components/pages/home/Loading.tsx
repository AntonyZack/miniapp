'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import loading from '@/../public/assets/icons/loading.svg';

function Loading() {
    return (
        <div className="min-h-screen flex justify-center items-start">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "linear" }}
            >
                <Image width={300} src={loading} alt="loading" />
            </motion.div>
        </div>
    );
}

export default Loading;
