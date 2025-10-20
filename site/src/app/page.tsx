import FormaPagamento from "@/components/FormaPagamento";
import Footer from "@/templates/Footer";
import Header from "@/templates/Header"
import Main from "@/templates/Main";



export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      
      <Main/>
      <FormaPagamento/>
      {/* <Footer/> */}
    </div>
  );
}
