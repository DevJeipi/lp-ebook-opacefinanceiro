import { GridContainer } from "@/components/ui/GridContainer";
import Image from "next/image";
import Link from "next/link";
import fotoLogo from "../../../public/logomark-pacefinanceiro-removebg.webp";
import { SquareArrowOutUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-black">
      <GridContainer className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <Image
            src={fotoLogo}
            width={40}
            height={21}
            alt="Logo do Pace Financeiro"
            loading="lazy"
          />
          <p className="font-body text-primary-white mt-1 text-center md:text-left">
            © Copyright 2025 O Pace Financeiro. Todos os direitos reservados
          </p>
        </div>

        <div className="bg-blue-low-op h-px w-full md:h-12 md:w-px"></div>

        <Link
          href={"https://www.instagram.com/opacefinanceiro/"}
          className="hover:border-primary-white flex items-center gap-2 hover:border-b"
        >
          <SquareArrowOutUpRight size={16} color="var(--color-primary-white)" />
          <p className="font-body text-primary-white">Instagram</p>
        </Link>
      </GridContainer>
    </footer>
  );
}
