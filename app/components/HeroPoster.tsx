"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPoster() {
    return (
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-[#3D2817] shadow-2xl md:max-w-md">
            {/* Background Decoration - Gold Curves */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFC107]"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#FFC107]"
            />

            {/* "NEW" Badge */}
            <motion.div
                initial={{ x: -100, rotate: -45 }}
                animate={{ x: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                className="absolute left-4 top-4 z-10"
            >
                <div className="rounded-full bg-white px-4 py-1 text-xl font-black uppercase text-black shadow-lg transform -rotate-12">
                    New
                </div>
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-between p-8 text-center">

                {/* Logo Area (Simulated with Text/Icon) */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-4 mt-8 rounded-full bg-white p-4 shadow-xl"
                >
                    <div className="flex flex-col items-center justify-center">
                        <span className="font-serif text-2xl font-bold text-[#3D2817]">Sharo</span>
                        <span className="text-xs font-bold tracking-widest text-[#3D2817]">BAKERY</span>
                    </div>
                </motion.div>

                {/* Main Text */}
                <div className="space-y-2">
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-xl font-bold uppercase tracking-widest text-white/90"
                    >
                        Sharo Health
                    </motion.h3>
                    <motion.h2
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 1 }}
                        className="text-6xl font-black uppercase tracking-tighter text-white drop-shadow-md"
                    >
                        BREAD
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="mx-auto h-1 w-full bg-[#FFC107]"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="text-sm font-bold uppercase text-white"
                    >
                        Beats Constipation 100%
                    </motion.p>
                </div>

                {/* Product Image */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1.6 }}
                    className="relative mt-8 h-48 w-full rounded-lg shadow-xl overflow-hidden border-4 border-white/20"
                >
                    <Image
                        src="/images/health-bread-loaves.jpg"
                        alt="Sharo Health Bread Loaves"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </motion.div>

                {/* Wheat Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-4 right-4 text-[#FFC107]/20"
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C12 2 13 8 18 12C13 16 12 22 12 22C12 22 11 16 6 12C11 8 12 2 12 2Z" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}
