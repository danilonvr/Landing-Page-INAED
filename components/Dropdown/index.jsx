import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { DropdownContainer } from "./style";
import { Glass } from "components/GlassDiv";
const Dropdown = () => {
  return (
    <>
      <DropdownContainer>
        <Accordion allowMultiple m={0}>
          <AccordionItem className="mb-4 md:mb-6 lg:mb-0">
            <h2>
              <AccordionButton
                _expanded={{
                  bg: "green.300",
                  color: "white",
                  borderRadius: "md",
                }}
              >
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  Módulo I - Visão Sistêmica da Organização no Novo Cenário da
                  Saúde
                </Box>
                <div>
                  <img
                    src="./assets/svg/health-decrease.svg"
                    alt="ícone-saúde-baixo"
                  />
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    1. Abertura e Integração da Turma-Oficina Mindset Global
                  </span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex justify-between">
                  <span>2. Análise Ambiental e Visão Estratégica em Saúde</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex justify-between">
                  <span>3. Visão Integrada da Cadeia de Valor em Saúde</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex justify-between">
                  <span>4. Transformação Digital na Saúde</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box my={2}>Carga horária total: 60 Horas</Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  bg: "green.300",
                  color: "white",
                  borderRadius: "md",
                }}
              >
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  Módulo II - Estratégia Corporativa em Saúde
                </Box>
                <div>
                  <img
                    src="./assets/svg/health-decrease.svg"
                    alt="ícone-saúde-baixo"
                  />
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>1. Legislação Aplicada à Saúde</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>2. Governança Corporativa e Compliance na Saúde</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    3. Auditoria e Controles Internos nas Organizações e Saúde
                  </span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>4. Inteligência Competitiva em Saúde</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    5. Estratégias Comerciais e de Marketing no Setor de Saúde
                  </span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>6. Comunicação Corporativa</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    7. Performance Organizacional - Aula Remota ao vivo
                  </span>
                  <span className="font-bold">8 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    8. Imagem e Reputação Corporativa - Aula Remota ao vivo
                  </span>
                  <span className="font-bold">8 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>9. Finanças e Análise de Investimentos</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>10. Gestão Estratégica de Custos Hospitalares</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box my={2}>Carga horária total: 128 Horas</Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  bg: "green.300",
                  color: "white",
                  borderRadius: "md",
                }}
              >
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  Módulo III - Desenvolvimento de Projetos
                </Box>
                <div>
                  <img
                    src="./assets/svg/health-decrease.svg"
                    alt="ícone-saúde-baixo"
                  />
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>1. Gestão de Projetos</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>2. Gestão de Mudanças</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    3. Apresentação da Metodologia dos Projetos Aplicativos -
                    Aula Remota ao vivo
                  </span>
                  <span className="font-bold">4 Horas</span>
                </div>
              </Box>
              <Box my={2}>Carga horária total: 34 Horas</Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  bg: "green.300",
                  color: "white",
                  borderRadius: "md",
                }}
              >
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  Módulo IV - Estratégia Assistencial
                </Box>
                <div>
                  <img
                    src="./assets/svg/health-decrease.svg"
                    alt="ícone-saúde-baixo"
                  />
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>1. Governança Clínica</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    2. Gestão de Riscos Assistenciais e Segurança do Paciente
                  </span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>3. Oficina de Praticagem I - Aula Remota ao vivo</span>
                  <span className="font-bold">2 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    4. Desenvolvimento de Lideranças e Equipes de Alta
                    Performance
                  </span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    5. Implementação de Processos Lean e Metodologias Ágeis
                  </span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>6. Oficina de Praticagem II - Aula Remota ao vivo</span>
                  <span className="font-bold">2 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>7. Análise de Performance e Tomada de Decisão</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    8. Experiência do Paciente e do Profissional de Saúde
                  </span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    9. Educação Permanente e Melhoria Contínua em Saúde
                  </span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    10. Oficina de Praticagem III - Aula Remota ao vivo
                  </span>
                  <span className="font-bold">2 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>11. Modelos de Sustentabilidade na Saúde</span>
                  <span className="font-bold">15 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    12. Hotelaria para Experiências Customizadas do Paciente -
                    Aula Remota ao vivo
                  </span>
                  <span className="font-bold">8 Horas</span>
                </div>
              </Box>
              <Box>
                <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    13. Farmácia e Suprimentos para Apoio Integrado a
                    Assistência - Aula Remota ao vivo
                  </span>
                  <span className="font-bold">8 Horas</span>
                </div>
              </Box>
              <Box my={2}>Carga horária total: 142 Horas</Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  bg: "green.300",
                  color: "white",
                  borderRadius: "md",
                }}
              >
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  Módulo V - Aplicação da Aprendizagem
                </Box>
                <div>
                  <img
                    src="./assets/svg/health-decrease.svg"
                    alt="ícone-saúde-baixo"
                  />
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
              <div className="flex md:flex-col lg:flex-row md:justify-between">
                  <span>
                    1. Apresentação dos Projetos Aplicativos - Encerramento
                  </span>
                  <span className="font-bold">6 Horas</span>
                </div>
                </Box>
              <Box my={2}>Carga horária total: 6 Horas</Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
