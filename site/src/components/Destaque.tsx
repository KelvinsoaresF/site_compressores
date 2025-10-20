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
            className="
                relative
                space-x-4
                w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[100%]
                max-w-[900px]
                h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]
                bg-blue-500
                border border-blue-500
                rounded-xl
                overflow-hidden
                shadow-lg
                p-1 sm:p-2 md:p-4
                transition-all duration-300
                mx-auto
            "
        >
            <Image
                src={image || ""}
                alt="Produto em destaque"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 60vw"
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                priority
            />
        </motion.div>
    );
}


