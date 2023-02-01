import Head from "next/head";
import Button from "components/Button";
import styled from "styled-components";
import Timer from "components/Timer";
import { Arrow } from "components/ArrowDivider";
import VideoGrid from "components/Video";
import Footer from "components/Footer";
export default function Home() {
  const HeroSection = styled.section`
    background-image: url("/assets/backgrounds/HeroSectionImage.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    @media screen and (min-width: 1366px) {
      height: 675px;
    }
    @media screen and (min-width: 1440px) {
      height: 670px;
    }
    @media screen and (min-width: 1536px) and (max-width: 1920px) {
      height: 100vh;
    }
    @media screen and (min-width: 1920px) {
      height: 831px;
    }
  `;
  const Glass = styled.div`
    background-color: ${(props) =>
      props.background || "rgba(255, 255, 255, 0.25)"};
    backdrop-filter: blur(7.5px);
    padding: 1rem 1.5rem;
    border-radius: 12px;
    color: #fff;
    @media screen and (max-width: 450px) {
      margin: 0 auto;
    }
  `;
  const VerticalLine = styled.div`
    border-left: 1px solid #fff;
  `;
  const Section = styled.section`
    background-color: ${(props) => props.background || ""};
    background-image: url("${(props) => props.backgroundImage || ""}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: ${(props) => props.height || "100%"};
  `;
  const TextFrame = styled.div`
    background-color: ${(props) =>
      props.backgroundColor || "rgba(15, 56, 67, 0.25)"};
    padding: 1.5rem 1rem;
    backdrop-filter: blur(7.5px);
    border-radius: 12px;
    height: 100%;

    @media screen and (min-width: 1920px) {
      display: flex;
      flex-direction: column;
    }
  `;
  const IconFrame = styled(TextFrame)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 570px;
    img {
      margin-bottom: 0.5rem;
      width: 48px;
    }
    @media screen and (max-width: 1536px) {
      max-width: 350px;
      margin-bottom: 1.5rem;
      span {
        text-align: center;
      }
    }
  `;
  return (
    <>
      <Head>
        <title>Programa de Pós Graduação em Gestão de Saúde - INAED</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection className="px-4 py-4 md:px-20 md:py-6">
          <header>
            <div className="flex lg:justify-between items-center">
              <div>
                <img
                  src="/assets/logos/logo.svg"
                  alt="Logo"
                  className="hidden lg:block lg:w-40"
                />
              </div>
              <div>
                <img
                  src="/assets/logos/logo.svg"
                  alt="Logo Pós"
                  className="w-2/3"
                />
              </div>
              <div className="hidden md:contents">
                  <Button href="https://www.google.com" text="Quero me inscrever agora!" />
              </div>
            </div>
          </header>
          <div className=" mt-8 grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-4 md:gap-6">
            <div className="flex flex-col justify-center col-span-4 md:col-span-8 xl:col-span-5 125%:col-span-7">
              <h1 className="text-3xl 125%:text-3xl lg:text-4xl font-bold text-primaryGreen">
                Veja no que você precisa investir para ser um profissional de
                sucesso em um negócio de saúde
              </h1>
              <h3 className="text-2xl py-6 text-lightColor">
                (Spoiler: a resposta já está neste título)
              </h3>
              <Button
                href="https://google.com"
                text="Faça a sua inscrição agora mesmo!"
              />
              <Glass
                background="rgba(255, 255, 255, 0.25)"
                className=" flex font-bold justify-center"
              >
                <div className="flex items-center">
                  <img
                    src="/assets/svg/calendar.svg"
                    alt="icone-calendario"
                    className="mr-2"
                  />
                  <span>Inscrições até março</span>
                </div>
                <VerticalLine className="mx-2" />
                <div className="flex items-center">
                  <img
                    src="/assets/svg/student.svg"
                    alt="icone-aluno"
                    className="mr-2"
                  />
                  <span>Início previsto: 14/04/2023</span>
                </div>
              </Glass>
              <div className="col-span-6 mt-6">
                <Glass
                  background="rgba(33, 39, 56, 0.25)"
                  className="flex flex-col justify-center items-center"
                >
                  <Timer endDate="2023-04-14T23:59:59" />
                  <span className="hidden md:block md:mt-2 font-bold text-base">
                    Para você garantir a sua vaga. Não perca!
                  </span>
                </Glass>
              </div>
            </div>

            <div className="hidden 2xl:inline col-start-8 col-span-7 125%:col-start-9 ">
              <img
                src="/assets/images/doctor.png"
                alt="Imagem Doutor"
                className="h-fit object-cover" 
              />
            </div>
          </div>
        </HeroSection>
        <Arrow />
        <Section className="px-4 py-4 md:px-20 md:py-6">
          <div className="flex justify-center lg:py-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-darkColor py-6 lg:py-0">
              REFLITA UM POUCO
            </h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6">
            <div className="hidden lg:inline md:col-span-8 lg:col-span-5">
              <img src="/assets/images/carla.png" alt="Imagem Carla" />
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-7 lg:col-end-11 lg:mt-14">
              <p className="text-base leading-5  text-darkColor">
                Caro(a) profissional de saúde, Já se foi o tempo em que só se
                ter uma boa qualificação técnica era o suficiente para ter uma
                carreira sólida e tranquila. Obviamente, hoje, com a maior
                competitividade do mercado, é necessário que o profissional seja
                mais estratégico nas suas decisões de carreira. Você e a Dra.
                Carla, como bons profissionais que são, prezam por anos de muito
                estudo e dedicação na sua especialidade como ponto de partida.
              </p>

              <p className="text-base leading-5 text py-6 text-darkColor">
                Dra. Carla tem altíssima qualificação na sua especialidade.
                Desde o início da carreira, decidiu abrir sua própria clínica
                para exercer a profissão que ama. Pegou suas economias e de seu
                esposo para abrir o empreendimento. Como ela tem muitas
                aspirações para o futuro, também aceitou a oportunidade de
                trabalhar em um grande hospital.
              </p>
              <p className="text-base leading-5 py-6 text-darkColor">
                O nome da Dra. Carla é fictício, mas os fatos que irei narrar na
                sua trajetória provavelmente não parecerão mera coincidência pra
                você. Nesta história, ela é uma médica mas facilmente poderia
                ser uma cirurgiã dentista, uma enfermeira, uma fisioterapeuta ou
                uma terapeuta ocupacional. Após alguns anos de exercício da
                profissão ela começa a fazer algumas reflexões…
              </p>
            </div>
          </div>
        </Section>
        <Arrow />
        <Section background="#212738" className="px-4 py-4 md:px-20 md:py-6">
          <div className="flex justify-center lg:py-14">
            <h2 className="text-2xl lg:text-4xl font-bold text-lightColor">
              TEMPO É DINHEIRO OU DINHEIRO É TEMPO?
            </h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:mb-[72px]">
            <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-2 lg:col-end-6 lg:mt-[72px]">
              <p className="text-base leading-5 py-6 text-lightColor">
                Dra. Carla atende cuidadosamente seus pacientes na sua sala de
                consultório desde a hora da chegada até o final do expediente,
                com a convicção que seu trabalho está trazendo conforto e
                segurança para a família e tranquilidade financeira para reduzir
                o ritmo e curtir a vida no futuro.
              </p>

              <p className="text-base leading-5 text py-6 text-lightColor">
                Dra Carla tem tempo para todos os seus pacientes, mas para
                qualquer outra coisa, alega não ter tempo. Se ela não consegue
                se envolver como gostaria nos problemas domésticos, imagina se
                envolver com as questões administrativas da clínica, que fica à
                cargo da secretária.
              </p>
              <p className="text-base leading-5 py-6 text-lightColor">
                Certo dia, Dra Carla resolveu parar e analisar as contas da
                clínica. Percebeu que até então não tinha devolvido o
                investimento do marido, não tinha se pagado como investidora e,
                pior, por muitas vezes tirou dinheiro da sua atividade no
                hospital para fechar as contas da clínica, ou seja, estava
                pagando para trabalhar. Ela entendeu que tinha investido todo
                seu tempo para ganhar dinheiro, mas que nunca tinha dinheiro o
                suficiente para lhe proporcionar tempo de qualidade. 
              </p>
              <p className="text-base text-center font-bold leading-5 py-6 text-lightColor">
                Quanto tempo e esforço Dra Carla poderia ter poupado se tivesse
                gerenciado melhor seu negócio?
              </p>
            </div>
            <div className="hidden lg:inline md:col-span-8 lg:col-span-6 lg:col-start-7 mt-[72px]">
              <img src="/assets/images/tempodinheiro.png" alt="Imagem Carla" />
            </div>
          </div>
        </Section>

        <Section className="px-4 py-4 md:px-20 md:py-6">
          <div className="flex justify-center lg:py-10">
            <h2 className="text-2xl lg:text-3xl text-center font-bold text-darkColor">
              Não seria ótimo ter as rédeas do próprio negócio e da própria
              carreira?
            </h2>
          </div>
        </Section>
        <Arrow />
        <Section background="#212738" className="px-4 py-4 md:px-20 md:py-6">
          <div className="flex justify-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-lightColor mb-[24px] lg:mb-0 lg:mt-14">
              O PACIENTE MUDOU… E O MERCADO TAMBÉM
            </h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:my-[72px]">
            <div className="col-span-4 md:col-span-4 lg:col-span-6 lg:col-start-2 lg:col-end-6">
              <p className="text-lightColor leading-5">
                Dra Carla começou a perceber que sua intervenção com os seus
                pacientes tinha mudado… agora ela tinha dois pacientes: um
                virtual e outro presencial. Portanto, o hospital, antenado no
                que acontece no mercado, implantou a telemedicina, bem passou a
                usar amplamente novas tecnologias que pudessem aumentar a
                redução de custos e a eficiência da operação.
              </p>
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-6 lg:col-start-7 lg:col-end-12">
              <p className="text-lightColor leading-5">
                A exigência cada vez maior dos stakeholders e a competitividade
                do mercado da saúde traduziu-se em grandes movimentos de fusões
                e aquisições. Agora, se ela quisesse crescer na carreira dentro
                do hospital, teria que entender de liderança e gestão de alta
                performance, uma vez que o mercado já não permite gestores que
                atuam na base da “tentativa e erro”, tomando decisões imprecisas
                e de baixa assertividade.
              </p>
            </div>
          </div>
        </Section>
        <Arrow />
        <Section
          backgroundImage="./assets/backgrounds/white-bg.png"
          className="px-4 py-4 md:px-20 md:py-6"
        >
          <div className="flex justify-center mb-6 lg:my-[72px]">
            <h2 className="text-3xl lg:text-4xl font-bold text-darkColor">
              UM NOVO CAMINHO PELA FRENTE
            </h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-4 md:col-span-8 lg:col-span-6 125%:col-span-7 lg:col-start-2 lg:col-end-6 125%:col-start-2">
              <TextFrame className="2xl:">
                <p className="text-darkColor leading-5 mb-8">
                  Dra Carla enfim entendeu que não estava pronta para vencer os
                  principais desafios do mercado de saúde porque não tinha
                  competências em gestão. Era hora de tomar um outro rumo na
                  carreira e na vida! Era hora de investir em quem mais entendia
                  do seu negócio e do seu sonho: ela mesma!!!
                </p>
                <p className="text-darkColor leading-5 mb-8">
                  Assim como a Dra Carla, agora você tem a oportunidade de tomar
                  um novo caminho… uma jornada em busca de competências que
                  podem encurtar e muito a sua trajetória rumo ao sucesso e à
                  tranquilidade.
                </p>
                <p className="text-darkColor leading-5 mb-8">
                  É hora de você fazer a Pós-graduação em Gestão de Negócios de
                  Saúde da Fundação Dom Cabral!!! E o melhor, sem sair do
                  Maranhão!
                </p>
                <p className="text-darkColor leading-5">
                  Essa ideia pode até lhe deixar um pouco inseguro e
                  desconfortável, mas você não estará sozinho… você terá os
                  melhores para lhe orientar e caminhar ao seu lado!
                </p>
              </TextFrame>
            </div>
            <div className="hidden lg:inline lg:col-span-6 125%:col-span-5 125%:col-start-9 lg:col-start-8 lg:col-end-12">
              <img src="/assets/images/doctor-smiling.png" alt="Imagem doutor" />
            </div>
          </div>
        </Section>
        <Section background="#212738" className="px-4 py-4 md:px-20 md:py-6">
          <div className="flex justify-center py-8 lg:py-14">
            <h2 className="text-xl lg:text-3xl font-bold text-lightColor">
              Você está preparado para dar um próximo passo na sua carreira?
            </h2>
          </div>
        </Section>
        <Arrow />
        <Section
          backgroundImage="./assets/backgrounds/white-bg.png"
          className="px-4 py-4 md:px-20 md:py-6"
        >
          <div className="flex justify-center py-8 lg:py-14">
            <h2 className="text-3xl text-center  lg:text-4xl font-bold text-darkColor">
              PARA QUEM ESTA PÓS FAZ DIFERENÇA?
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly">
            <IconFrame>
              <img src="./assets/svg/doctor.svg" />
              <span className="text-base">
                Profissionais que atuam na área da saúde
              </span>
            </IconFrame>
            <IconFrame>
              <img src="./assets/svg/business.svg" />
              <span className="text-base">
                Representantes de Medicamentos e equipamentos para saúde
              </span>
            </IconFrame>
            <IconFrame>
              <img src="./assets/svg/lawyer.svg" />
              <span className="text-base">
                Gestores e profissionais hospitalares
              </span>
            </IconFrame>
          </div>
          <div className="flex justify-center py-6 lg:py-20">
            <h2 className="text-3xl text-center  lg:text-4xl font-bold text-darkColor">
              FAÇA PARTE E OBTENHA OS SEGUINTES RESULTADOS
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly">
            <IconFrame>
              <img src="./assets/svg/creativity.svg" />
              <span className="text-base text-center">
                Desenvolvimento da criatividade, flexibilidade, pensamento
                intuitivo, uso do pensamento divergente e diferentes formas de
                expressão
              </span>
            </IconFrame>
            <IconFrame>
              <img src="./assets/svg/relationship.svg" />
              <span className="text-base">
                Melhoria no relacionamento interpessoal e trabalho colaborativo
              </span>
            </IconFrame>
          </div>
        </Section>
        <Section
          backgroundImage="./assets/backgrounds/Infographic-bg.png"
          className="px-4 py-4 md:px-20 md:py-6"
        >
          <div className="flex justify-center py-8 lg:py-14">
            <h2 className="text-3xl text-center  lg:text-4xl font-bold text-lightColor">
              ESTRUTURA DO PROGRAMA
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center lg:hidden">
            <img src="./assets/images/Legend.png" className="mb-10" />
            <img src="./assets/images/Percurso.png" />
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <img src="./assets/images/Estrutura.png" />
          </div>
        </Section>
        <Arrow />
        <Section
          backgroundImage="./assets/backgrounds/white-bg.png"
          className="px-4 py-4 md:px-20 md:py-6"
        >
          <div className="flex justify-center py-8 lg:py-14">
            <h2 className="text-3xl text-center  lg:text-4xl font-bold text-darkColor">
              PROCESSO SELETIVO
            </h2>
          </div>
          <div className="grid grid-col-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-6 ">
              <img src="./assets/images/processoseletivo-img.png" />
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-8 lg:col-end-12 2xl:col-start-7 2xl:col-end-13 2xl:pb-20">
              <TextFrame>
                <h4 className="text-secondaryGreen font-bold text-2xl mb-6 lg:mb-8">
                  Etapas
                </h4>
                <div className="flex items-center mb-6">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">
                    Preenchimento da ficha de inscrição.
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">
                    Entrevista individual (via Zoom) para alinhar expectativas e
                    avaliar experiências profissionais e sobre carreira.
                  </span>
                </div>
                <div className="flex items-center mb-8">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">
                    Comprovação de graduação completa (diploma).
                  </span>
                </div>
                <h4 className="text-secondaryGreen font-bold text-2xl mb-6 lg:mb-8">
                  Documentos Necessários
                </h4>
                <div className="flex items-center mb-6">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">
                    Curriculum vitae atualizado.
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">
                    Cópia do histórico escolar (Graduação)
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">
                    Diploma de conclusão de curso superior, licenciatura plena
                    ou bacharelado, ou declaração de conclusão de curso
                    sequencial de formação específica (original e cópia, frente
                    e verso).
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">
                    Cópia do documento de identificação atual com foto.
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">Cópia do CPF.</span>
                </div>
                <div className="flex items-center mb-6">
                  <img src="./assets/svg/side-arrow.svg" className="mr-2" />
                  <span className="text-base">Foto 3x4 para o crachá.</span>
                </div>
              </TextFrame>
            </div>
          </div>
        </Section>
        <Arrow />
        <Section background="#212738" className="px-4 py-4 md:px-20 md:py-6">
          <div className="flex justify-center py-8 lg:py-14">
            <h2 className="text-3xl text-center  lg:text-4xl font-bold text-lightColor">
              OS GUIAS DA JORNADA
            </h2>
          </div>
          <div className="grid grid-col-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-2 lg:col-end-6 2xl:flex 2xl:flex-col 2xl:justify-center">
              <p className="text-base text-lightColor leading-5 mb-6 md:mb-8">
                Há 46 anos, a Fundação Dom Cabral se destaca em seu campo de
                atuação pela capacidade de empreender uma leitura detalhada das
                reais necessidades dos clientes.
              </p>
              <p className="text-base text-lightColor leading-5 mb-6 md:mb-8">
                É exatamente essa visão ampla e aprofundada que permite à FDC
                formular Soluções Educacionais adequadas a cada caso, promovendo
                melhores resultados e novas oportunidades de desenvolvimento
                para indivíduos e organizações.
              </p>
              <p className="text-base text-lightColor leading-5 mb-6 md:mb-8">
                Nossa filosofia respeita a identidade das organizações, a
                peculiaridade dos segmentos em que atuam e a dinâmica dos
                mercados.
              </p>
              <p className="text-base text-lightColor leading-5 mb-6 md:mb-8">
                Unindo teoria e prática, a FDC promove a capacitação de
                executivos, gestores públicos, empresários e organizações. A
                parceria com escolas internacionais e professores com larga
                experiência de mercado e rica vivência organizacional
                possibilita uma troca intensa e produtiva durante os Programas.
              </p>
              <p className="text-base text-lightColor leading-5 mb-6 md:mb-8">
                São Soluções Educacionais sustentadas por alianças estratégicas
                e acordos de cooperação com renomadas instituições nos Estados
                Unidos, na China, Índia, Rússia e em outros países da Europa e
                América Latina
              </p>
            </div>
            <div className="hidden lg:block col-span-6 col-start-8">
              <img src="./assets/images/guia-img.png" />
            </div>
          </div>
        </Section>
        <Arrow />
        <Section
          backgroundImage="./assets/backgrounds/white-bg.png"
          className="px-4 py-4 md:px-20 md:py-6"
        >
          <div className="flex justify-center py-8 lg:py-14">
            <h2 className="text-3xl text-center  lg:text-4xl font-bold text-darkColor">
              O QUE FALAM SOBRE NÓS?
            </h2>
          </div>
          <VideoGrid />
        </Section>
        <Section backgroundImage="./assets/backgrounds/Infographic-bg.png">
          <div className="bg-darkColor flex items-center lg:relative">
            <div className="py-4 lg:py-6 px-4 lg:px-20 lg:max-w-2xl 2xl:max-w-3xl">
              <h2 className="text-2xl text-center md:text-start  lg:text-4xl font-bold text-lightColor mb-6 lg:mb-10">
                Investimento
              </h2>
              <div className="flex items-center mb-6">
                <img src="./assets/svg/side-arrow-white.svg" className="mr-2" />
                <span className="text-base text-lightColor">
                  Valores estão incluem despesas de hospedagem, transporte e
                  alimentação dos professores.
                </span>
              </div>
              <div className="flex items-center mb-6">
                <img src="./assets/svg/side-arrow-white.svg" className="mr-2" />
                <span className="text-base text-lightColor">
                  Pagamento à vista tem 10% de desconto e pode ser parcelado em
                  até 3x.
                </span>
              </div>
              <div className="flex items-center mb-6">
                <img src="./assets/svg/side-arrow-white.svg" className="mr-2" />
                <span className="text-base text-lightColor">
                  Pagamento entre 4 a 24 meses incidem juros de 0,65% ao mês*
                </span>
              </div>
              <div className="flex items-center mb-6">
                <img src="./assets/svg/side-arrow-white.svg" className="mr-2" />
                <span className="text-base text-lightColor">
                  Descontos para grupos e/ou empresas PAEX (FDC) – Consultar
                  condições. 
                </span>
              </div>
              <div className="flex items-center mb-6">
                <img src="./assets/svg/side-arrow-white.svg" className="mr-2" />
                <span className="text-base text-lightColor">
                  Caso tenha alguma dúvida sobre o programa, entre em contato
                  com o INAED, Associado da Fundação Dom Cabral no Maranhão e
                  Piauí.
                </span>
              </div>
              <div className="flex items-center mb-6">
                <img src="./assets/svg/side-arrow-white.svg" className="mr-2" />
                <span className="text-base font-bold text-lightColor">
                  Temos política de benefícios para grupos!!!
                </span>
              </div>
              <Glass className="md:max-w-xl">
                <Timer endDate="2023-04-14T23:59:59" />
              </Glass>
              <Glass
                background="rgba(15, 56, 67, 0.7)"
                className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:absolute lg:-top-10 lg:right-10"
              >
                <img src="./assets/logos/logo.svg" className="mb-8 mt-20" />
                <h2 className="text-2xl 2xl:text-3xl text-primaryGreen font-bold mb-10">
                  OFERTA EXCLUSIVA
                </h2>
                <span className="text-2xl mb-4">
                  3x de{" "}
                  <span className="text-2xl 2xl:text-3xl font-bold ">R$ 12.593,70</span>
                </span>
                <span className="text-base mb-10">OU R$ 37.781,10 À VISTA</span>
                  <Button href="https://www.fdc.org.br/programas/programa-executivo-em-gestao-de-empresas/" text="QUERO ME INSCREVER AGORA" />
                  <Button href="google.com" text="FALE CONOSCO VIA WHATSAPP" />
                <span className="text-2xl text-primaryBlue font-bold my-4">
                  Garanta logo a sua vaga
                </span>
                <span className="text-base text-lightColor font-bold mb-8">
                  As aulas já começam no dia 14/04/2023!
                </span>
              </Glass>
            </div>
          </div>
          <Glass className="flex flex-col items-center lg:hidden ">
            <h2 className="text-2xl font-bold text-center text-lightColor mt-8">
              OFERTA EXCLUSIVA
            </h2>
            <span className="text-2xl font-bold mt-4">3x de R$ 12.593,70</span>
            <span className="text-base mt-2 mb-8">OU R$ 37.781,10 À VISTA</span>
              <div className="flex justify-around">
              <Button href="https://www.fdc.org.br/programas/programa-executivo-em-gestao-de-empresas/" text="QUERO ME INSCREVER AGORA"/>
              <Button href="https://google.com" text="FALE CONOSCO VIA WHATSAPP" />
              </div>
            <span className="text-2xl text-lightColor font-bold mb-2">
              Garanta logo a sua vaga
            </span>
            <span className="text-base text-lightColor font-bold mb-8">
              As aulas já começam no dia 14/04/2023!
            </span>
          </Glass>
        </Section>
        <Footer />
      </main>
    </>
  );
}
