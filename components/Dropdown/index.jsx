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
                  Módulo I - Visão Sistêmica da Organização no Novo Cenário da Saúde
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
                1. Abertura e Integração da Turma-Ofi cina Mindset Global
              </Box>
              <Box>
               2. Análise Ambiental e Visão Estratégica em Saúde
              </Box>
              <Box>
                3. Visão Integrada da Cadeia de Valor em Saúde
              </Box>
              <Box>
                4. Transformação Digital na Saúde
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
                <Box as="span" flex="1" textAlign="left"  fontWeight="bold">
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
                1. Legislação Aplicada à Saúde
              </Box>
              <Box>
               2. Governança Corporativa e Compliance na Saúde
              </Box>
              <Box>
                3. Auditoria e Controles Internos nas Organizações e Saúde
              </Box>
              <Box>
                4. Inteligência Competitiva em Saúde
              </Box>
              <Box>
                5. Estratégias Comerciais e de Marketing no Setor de Saúde
              </Box>
              <Box>
                6. Comunicação Corporativa
              </Box>
              <Box>
                7. Performance Organizacional - Aula Remota ao vivo
              </Box>
              <Box>
                8. Imagem e Reputação Corporativa - Aula Remota ao vivo
              </Box>
              <Box>
                9. Finanças e Análise de Investimentos
              </Box>
              <Box>
                10. Gestão Estratégica de Custos Hospitalares
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
                <Box as="span" flex="1" textAlign="left"  fontWeight="bold">
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
                1. Gestão de Projetos
              </Box>
              <Box>
               2. Gestão de Mudanças
              </Box>
              <Box>
                3. Apresentação da Metodologia dos Projetos Aplicativos - Aula Remota ao vivo
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
                <Box as="span" flex="1" textAlign="left"  fontWeight="bold">
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
                1. Governança Clínica
              </Box>
              <Box>
               2. Gestão de Riscos Assistenciais e Segurança do Paciente
              </Box>
              <Box>
                3. Oficina de Praticagem I - Aula Remota ao vivo
              </Box>
              <Box>
                4. Desenvolvimento de Lideranças e Equipes de Alta Performance
              </Box>
              <Box>
               5. Implementação de Processos Lean e Metodologias Ágeis
              </Box>
              <Box>
                6. Oficina de Praticagem II - Aula Remota ao vivo
              </Box>
              <Box>
               7. Análise de Performance e Tomada de Decisão
              </Box>
              <Box>
                8. Experiência do Paciente e do Profissional de Saúde 
              </Box>
              <Box>
               9. Educação Permanente e Melhoria Contínua em Saúde
              </Box>
              <Box>
                10. Oficina de Praticagem III - Aula Remota ao vivo
              </Box>
              <Box>
                11. Modelos de Sustentabilidade na Saúde
              </Box>
              <Box>
                12. Hotelaria para Experiências Customizadas do Paciente - Aula Remota ao vivo
              </Box>
              <Box>
                13. Farmácia e Suprimentos para Apoio Integrado a Assistência - Aula Remota ao vivo

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
                <Box as="span" flex="1" textAlign="left"  fontWeight="bold">
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
            Apresentação dos Projetos Aplicativos - Encerramento
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
