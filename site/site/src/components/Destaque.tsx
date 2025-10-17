'use client';
import Image from "next/image";
import { motion } from "framer-motion";

type DestaqueProps = {
    image?: string;
};

export default function Destaque({ image }: DestaqueProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="relative p-2 bg-blue-500 w-full md:w-[900px] h-[300px] sm:w-[600px] md:h-[500px] md:p-4 border border-blue-500 rounded-xl overflow-hidden shadow-lg"
        >
            <Image
                src={image || ""}
                alt="Produto"
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
        </motion.div>
    );
}
