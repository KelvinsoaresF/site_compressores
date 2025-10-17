'use client';
import { motion } from 'framer-motion';


export default function Contato() {

    const sendContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
        const formData = {
            nome: form.nome.value,
            email: form.email.value,
            duvida: form.duvida.value
        }

        try {
            const res = await fetch("/api/contato", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const result = await res.json();
            if (result.success) {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            } else {
                alert("Erro: " + (result.error || "Não foi possível enviar."));
            }
        } catch (error) {
            console.error(error);
            alert("Erro inesperado. Tente novamente.");
        }
    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-black min-h-screen p-10 gap-8">

            {/* Formulário com animação */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-3xl bg-white p-12 rounded-lg shadow-2xl"
            >
                <h1 className="text-3xl font-bold text-center text-black mb-8">Fale Conosco</h1>

                <form onSubmit={sendContact} className="flex flex-col gap-6">
                    {['nome', 'email'].map((id) => (
                        <div key={id} className="flex flex-col">
                            <label htmlFor={id} className="text-base font-semibold text-gray-700 capitalize">
                                {id}
                            </label>
                            <input
                                type={id === 'email' ? 'email' : 'text'}
                                id={id}
                                name={id}
                                className="p-3 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-200"
                                placeholder={`Digite seu ${id}`}
                                required
                            />
                        </div>
                    ))}
                    <div className="flex flex-col">
                        <label htmlFor="duvida" className="text-base font-semibold text-gray-700">Sua dúvida</label>
                        <textarea
                            id="duvida"
                            name='duvida'
                            rows={6}
                            className="p-3 border text-black border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-200"
                            placeholder="Escreva sua dúvida aqui..."
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors text-lg font-medium"
                    >
                        Enviar
                    </motion.button>
                </form>
            </motion.div>

            {/* Informações com animação */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-md bg-white p-10 rounded-lg shadow-2xl flex flex-col gap-6 text-center"
            >
                <h2 className="text-2xl font-bold text-black">Informações da Empresa</h2>

                {[
                    { title: 'Atendimento ao Cliente', content: '(18) 98148-9410' },
                    { title: 'Endereço', content: 'Av Geraldo Liessi, 611 - 2° Distrito Industrial Birigui - SP' },
                    { title: 'Email', content: 'atendimento@compressoresbrasil.com' },
                    { title: 'Horário de Atendimento', content: 'Seg a Sex: 7:30h - 17:40h' }
                ].map(({ title, content }, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
                    >
                        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                        <p className="text-black whitespace-pre-line">{content}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
