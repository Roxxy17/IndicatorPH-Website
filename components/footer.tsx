"use client"

import { motion } from "framer-motion"
import { Beaker, Github, Mail, Users } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      className="bg-muted/50 border-t"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Beaker className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">ChemLearn</h3>
                <p className="text-sm text-muted-foreground">Kelompok 3 XII A1</p>
              </div>
            </div>
            <p className="text-muted-foreground text-pretty mb-4 max-w-md">
              Platform pembelajaran kimia yang dirancang khusus untuk memahami konsep asam-basa dengan pendekatan yang
              interaktif dan menyenangkan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Materi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Konsep Asam-Basa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Indikator Alami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  pH dan pOH
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Titrasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cara Penggunaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ChemLearn - Kelompok 3 XII A1. Dibuat dengan ❤️ untuk pembelajaran kimia yang lebih baik.</p>
        </div>
      </div>
  </motion.footer>
  )
}
