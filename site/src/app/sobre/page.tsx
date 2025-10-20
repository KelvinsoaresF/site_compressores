'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import Slider from "@/components/Slider"
import Rounded from "@/components/Rounded"

export default function Sobre() {
    return (
        <div className="flex flex-col items-center justify-center bg-white text-black">
            {/* Slider */}
            {/* <Slider
                images={[
                    "/img/img1.jpg",
                    "/img/img2.jpg",
                    "/img/img3.jpg",
                ]}
            /> */}

            {/* Imagens em círculos */}
            <motion.div
                className="flex flex-wrap justify-center gap-8 sm:gap-10 py-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Rounded image="/destaques/img1.jpg" />
                <Rounded image="/img/compressores.jpg" />
                <Rounded image="/img/faixada.jpg" />
                <Rounded image="/img/empresa.jpg" />
            </motion.div>

            {/* Conteúdo Institucional */}
            <motion.div
                className="w-full max-w-screen-xl px-4 sm:px-10 py-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">Sobre nós</h1>

                <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                    No início de 2006, a empresa Compressores Brasil surgiu com um objetivo simples: ser referência em soluções para compressores de ar, iniciando sua atuação em Birigui/SP.
                    Em 2008, com a parceria com a Chicago Pneumatic, demos um salto de qualidade e expandimos nossos horizontes, mantendo firme nossa ética e valores.
                    Hoje somos uma empresa sólida, comprometida com o cliente e com o avanço tecnológico, oferecendo projetos, serviços e suporte completos, com foco em evitar paradas de produção e garantir alta performance.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold mt-12 mb-6">Nossa diversidade</h2>
                <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                    Vivemos uma era onde o empreendedorismo anda lado a lado com responsabilidade social e ambiental. A Compressores Brasil não apenas oferece oportunidades de emprego, mas também crescimento profissional aos colaboradores.
                    O que nos diferencia é o espírito coletivo: um conjunto de histórias, culturas e experiências que formam nossa identidade. Cada colaborador pode construir seu caminho — seja técnico, comercial ou gerencial — dentro da nossa política de crescimento interno.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                    Nosso modelo de negócios busca equilíbrio e expansão com base no nosso savoir-faire — nosso saber fazer — sustentado por:
                </p>

                <div className="flex flex-col items-center font-semibold text-xl sm:text-2xl gap-4 my-8">
                    <span>✅ Comprometimento</span>
                    <span>✅ Honestidade</span>
                    <span>✅ Ética</span>
                    <span>✅ Respeito</span>
                </div>

                <p className="text-lg sm:text-xl leading-relaxed mb-8 text-justify">
                    Esses valores guiam nossas ações, impulsionam a melhoria contínua dos processos e garantem qualidade e diferencial competitivo nos produtos e serviços.
                    Nossos colaboradores são nosso maior patrimônio — a força por trás da cultura vencedora da Compressores Brasil.
                    Desde 2021, temos uma filial em crescimento em Campo Grande/MS, superando expectativas e consolidando nossa presença nacional.
                </p>

                <div className="flex flex-col items-center font-semibold text-2xl sm:text-3xl mt-12 gap-4">
                    <p>Isso é Compressores Brasil.</p>
                    <p>A realização de uma família…</p>
                </div>

                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/img/logo-preto.png"
                        width={200}
                        height={200}
                        alt="Logo"
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}
