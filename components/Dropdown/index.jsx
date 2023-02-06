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
        <Accordion defaultIndex={[0]} allowMultiple m={0}>
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
                  Módulo I
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
                  Módulo II
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
                  Módulo III
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
              <Box my={2}>Carga Horária: 15 Horas</Box>
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
                  Módulo IV
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
              <Box my={2}>Carga Horária: 15 Horas</Box>
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
                  Módulo V
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
              
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
