import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const data = await req.json()
    const { nome, email, duvida } = data

    if (!nome || !email || !duvida) {
        return NextResponse.json({ succcess: false, error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    const mailOptions = {
        from: `"Site - Compressores Brasil" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `Contato do site - ${nome}`,
        text: `Nome: ${nome}\nEmail: ${email}\n\nMensage: \n${duvida}`
    }

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: "Email enviado com sucesso!" }, { status: 200 });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json({ success: false, error: 'Erro ao enviar e-mail' }, { status: 500 });
    }
}