import AboutInfoCard from "@/components/AboutInfoCard";

export default function AboutPage() {
    return (
        <main className="flex-1 page-common-styles items-center">
            <AboutInfoCard title="Quem somos?">
                <a
                    href="https://www.instagram.com/alfacidada?igsh=aHJvcXdmZWIzNmNm&utm_source=qr"
                    target="_blank"
                >
                    Alfabetização Financeira
                </a>
                <a
                    href="https://www.instagram.com/geefs2025?igsh=ZXczZ3o2cDdpenIy&utm_source=qr"
                    target="_blank"
                >
                    Grupo De Estudos Econômicas e Financeiros Sustentáveis
                </a>
                <a
                    href="https://www.instagram.com/administracao.fecisc?igsh=MXcza3E5NnNhcWdmYg=="
                    target="_blank"
                >
                    Administração / FECISC
                </a>
            </AboutInfoCard>
            <AboutInfoCard title="Equipe">
                <p>NICOLY LIONEL MOREIRA VIEIRA</p>
                <p>MARIA ROCHELLE ABREU DOS SANTOS</p>
                <p>MARIA CARMEM RODRIGUES DA SILVA</p>
                <p>NARCISO HENRIQUE ALVES MAGALHAES</p>
            </AboutInfoCard>
            <AboutInfoCard title="Contato"></AboutInfoCard>
            <AboutInfoCard title="Localização">
                <p>
                    Av. Dr. Aramis Paiva, 460 - Centro, Canindé - CE, 62700-000
                </p>
            </AboutInfoCard>
        </main>
    );
}
