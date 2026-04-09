import Logo from "./Logo";
import projectsLogo from "@/assets/projects-logo.webp";

export default function Presentation() {
    return (
        <article className="flex flex-col gap-8 col-span-2 px-4">
            <div className="flex flex-col gap-4 text-bg">
                <p>
                    A iniciativa parte da necessidade de dar visibilidade
                    pública às ações extensionistas do docente do Curso de
                    Administração, promovendo transparência, acesso à informação
                    pela comunidade local e regional, e criando um repositório
                    digital permanente de memória acadêmica e social das
                    atividades desenvolvidas.
                </p>
                <p>
                    A extensão universitária, enquanto pilar indissociável do
                    tripé ensino-pesquisa-extensão, demanda não apenas a
                    realização de ações junto à comunidade, mas também a
                    produção de registros e a comunicação transparente dos
                    resultados alcançados. No contexto da FECISC/UECE em
                    Canindé, as ações extensionistas têm crescido em número e
                    impacto, tornando urgente a criação de um canal digital
                    oficial e permanente de comunicação e documentação.
                </p>
                <p>
                    A criação deste espaço virtual se justifica, portanto, por
                    diversas razões complementares:
                </p>
                <ul className="list-disc list-inside pl-4">
                    <li>
                        Atender à demanda por transparência e prestação de
                        contas das ações financiadas e desenvolvidas no âmbito
                        da universidade pública;
                    </li>
                    <li>
                        Ampliar o alcance das atividades extensionistas para
                        além do espaço físico da instituição, alcançando
                        comunidades rurais, parceiros institucionais e
                        interessados em todo o Brasil;
                    </li>
                    <li>
                        Favorecer a articulação entre projetos, evitando
                        sobreposições e potencializando sinergias entre as
                        diferentes ações;
                    </li>
                    <li>
                        Contribuir com o cumprimento da política de
                        curricularização da extensão, exigida pelas diretrizes
                        do MEC, que determina que pelo menos 10% da carga
                        horária dos cursos seja destinada a atividades
                        extensionistas;
                    </li>
                    <li>
                        Valorizar o trabalho dos bolsistas, voluntários e
                        parceiros, conferindo reconhecimento público às suas
                        contribuições.
                    </li>
                </ul>
                <p>
                    Diante do exposto, o site se constitui como ferramenta
                    estratégica para a consolidação da extensão universitária
                    dos docentes do curso de Administração da FECISC/UECE em
                    Canindé, funcionando como vitrine institucional, repositório
                    de memória e canal de comunicação com a sociedade.
                </p>
                <p>
                    O site está inserido no contexto das ações extensionistas
                    município de Canindé localizado na mesorregião do Sertão
                    Cearense, a aproximadamente 110 km de Fortaleza. Canindé é
                    reconhecida como um dos maiores polos de turismo religioso
                    do Brasil, recebendo milhares de romeiros anualmente, o que
                    confere à cidade um perfil socioeconômico peculiar e
                    demandas específicas no campo da gestão, do empreendedorismo
                    e do desenvolvimento local.
                </p>
                <p>
                    Nesse cenário, o Curso de Administração da FECISC/UECE tem
                    desempenhado papel fundamental na formação de profissionais
                    comprometidos com a realidade local, desenvolvendo projetos
                    e cursos de extensão que dialogam diretamente com as
                    necessidades da comunidade canindeense e regional. As ações
                    abrangem temáticas como gestão de negócios,
                    empreendedorismo, finanças pessoais, capacitação
                    profissional, inclusão digital, entre outras.
                </p>
            </div>
            <Logo
                width={500}
                height={500}
                img={projectsLogo}
                priority={false}
            />
        </article>
    );
}
