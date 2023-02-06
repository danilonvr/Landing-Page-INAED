import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react";
import { DropdownContainer } from './style';
const Dropdown = () => {
  return (
    <>
    <DropdownContainer>
     <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'green.300', color: 'white', borderRadius: "md" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Módulo I
                  </Box>
                  <div>
                    <img src="./assets/svg/health-decrease.svg" alt="ícone-saúde-baixo" />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Box>
              1. Abertura e Integração da Turma-Ofi cina Mindset Global
                </Box>
              <Box my={2}>
              Carga Horária: 15 Horas
              </Box>
              </AccordionPanel>   
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'green.300', color: 'white', borderRadius: "md" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Módulo II
                  </Box>
                  <div>
                    <img src="./assets/svg/health-decrease.svg" alt="ícone-saúde-baixo" />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Box>
              1. Abertura e Integração da Turma-Ofi cina Mindset Global
                </Box>
              <Box my={2}>
              Carga Horária: 15 Horas
              </Box>
              </AccordionPanel>   
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'green.300', color: 'white', borderRadius: "md" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Módulo III
                  </Box>
                  <div>
                    <img src="./assets/svg/health-decrease.svg" alt="ícone-saúde-baixo" />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Box>
              1. Abertura e Integração da Turma-Ofi cina Mindset Global
                </Box>
              <Box my={2}>
              Carga Horária: 15 Horas
              </Box>
              </AccordionPanel>   
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'green.300', color: 'white', borderRadius: "md" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Módulo IV
                  </Box>
                  <div>
                    <img src="./assets/svg/health-decrease.svg" alt="ícone-saúde-baixo" />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Box>
              1. Abertura e Integração da Turma-Ofi cina Mindset Global
                </Box>
              <Box my={2}>
              Carga Horária: 15 Horas
              </Box>
              </AccordionPanel>   
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'green.300', color: 'white', borderRadius: "md" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Módulo V
                  </Box>
                  <div>
                    <img src="./assets/svg/health-decrease.svg" alt="ícone-saúde-baixo" />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Box>
              1. Abertura e Integração da Turma-Ofi cina Mindset Global
                </Box>
              <Box my={2}>
              Carga Horária: 15 Horas
              </Box>
              </AccordionPanel>   
            </AccordionItem>
          </Accordion>
          </DropdownContainer>
    </>
  )
}

export default Dropdown