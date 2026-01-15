"use client";

import Image from "next/image";
import { Container } from "./Container";
import { motion } from "framer-motion";

import PhoneIcon from "@/src/assets/icon-phone.svg";
import SolutionsIcon from "@/src/assets/icon-solutions.svg";
import OptionsIcon from "@/src/assets/icon-options.svg";
import CardIcon from "@/src/assets/icon-card.svg";

import ImagePhone from "@/src/assets/phone.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function SectionServices() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          
          {/* TEXTO */}
          <motion.div
            className="max-w-[594px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
              Serviços exclusivos
            </span>

            <h2 className="text-primary-gray text-4xl md:text-[56px] font-bold leading-tight">
              Gerencie suas finanças sem sair de casa
            </h2>

            <p className="text-lg max-w-[554px] mb-16 text-second-gray">
              Veja como você pode cuidar das suas finanças pelo app Itaú de
              forma segura, rápida e melhor, no conforto de casa.
            </p>

            {/* LISTA */}
            <motion.ul
              className="flex flex-col items-start gap-9"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
            >
              {[
                {
                  icon: PhoneIcon,
                  text: "Acompanhar sua conta, fazer transferências e pagamentos onde estiver",
                },
                {
                  icon: SolutionsIcon,
                  text: "Soluções de empréstimos e renegociação para organizar suas finanças",
                },
                {
                  icon: OptionsIcon,
                  text: "Diversas opções de investimento, de acordo com seu perfil de investidor",
                },
                {
                  icon: CardIcon,
                  text: "Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`flex items-center gap-9 pb-9 ${
                    index !== 3 && "border-b border-gray-300"
                  }`}
                >
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                    <Image src={item.icon} alt="" />
                  </div>
                  <p className="text-txt-gray">{item.text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* FUNDO CINZA */}
          <div
            className="
              hidden lg:block
              absolute top-0 right-0
              h-full w-[30vw]
              bg-gray-phone
              z-0
            "
          />

          {/* CELULAR */}
          <motion.div
            className="relative w-full flex justify-center lg:justify-end lg:pr-24 lg:min-h-[680px]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={ImagePhone}
              alt="Aplicativo no celular"
              priority
              className="
                relative z-10
                w-auto
                max-w-[240px] md:max-w-[320px] lg:max-w-[460px]
                max-h-[480px] lg:max-h-[680px]
                object-contain
              "
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
