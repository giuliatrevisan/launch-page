"use client";

import { Container } from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";

import ImgAppleStore from "@/src/assets/btn-apple-store.svg";
import ImgGooglePlay from "@/src/assets/btn-google-play.svg";
import Arrow from "@/src/assets/arrow-explorer.svg";
import WomanImagem from "@/src/assets/woman.png";

/* VARIANTS */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export function SectionHero() {
  return (
    <section
      className="
        w-full
        min-h-[640px] lg:min-h-[704px]
        bg-center bg-cover bg-no-repeat
        flex items-center
      "
      style={{ backgroundImage: "var(--bg-hero)" }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* TEXTO */}
          <motion.div
            className="flex-1 max-w-[520px] text-center lg:text-left"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Tenha seu banco na palma da mão.
            </h1>

            <p className="text-white text-base sm:text-lg lg:text-xl max-w-[408px] mx-auto lg:mx-0 mb-10">
              Todas as operações que você precisa em um só lugar. Simples,
              completa e feita pra você.
            </p>

            {/* BOTÕES */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4 mb-16 flex-wrap"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <button>
                <Image src={ImgAppleStore} alt="Apple Store" />
              </button>
              <button>
                <Image src={ImgGooglePlay} alt="Google Play" />
              </button>
            </motion.div>

            {/* CTA */}
            <motion.button
              className="flex items-center justify-center lg:justify-start gap-3 mx-auto lg:mx-0"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Image src={Arrow} alt="Arrow" />
              <span className="text-white text-sm font-bold">
                Continue explorando
              </span>
            </motion.button>
          </motion.div>

          {/* IMAGEM */}
          <motion.div
            className="hidden md:block"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={WomanImagem}
              alt="Woman Imagem"
              className="max-w-[420px] lg:max-w-none"
              priority
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
