"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FlaskConical, Target, Users } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Materi Lengkap",
    description: "Pelajari konsep asam-basa dari dasar hingga mahir dengan penjelasan yang mudah dipahami.",
    badge: "Teori",
    color: "bg-blue-500",
  },
  {
    icon: FlaskConical,
    title: "Uji Indikator",
    description: "Praktikkan penggunaan indikator alami untuk mengidentifikasi sifat asam-basa larutan.",
    badge: "Praktik",
    color: "bg-green-500",
  },
  {
    icon: Target,
    title: "Quiz Interaktif",
    description: "Uji pemahaman dengan quiz yang menarik dan dapatkan feedback langsung.",
    badge: "Evaluasi",
    color: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Belajar Bersama",
    description: "Bergabung dengan komunitas pelajar dan diskusikan materi bersama.",
    badge: "Komunitas",
    color: "bg-purple-500",
  },
]

export function FeaturesSection() {
  return (
    <motion.section
      id="materi"
      className="py-20 bg-muted/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Fitur Unggulan
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Belajar Kimia dengan Cara yang Berbeda</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Platform pembelajaran yang dirancang khusus untuk memahami konsep asam-basa dengan pendekatan yang
            interaktif dan menyenangkan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline" className="w-fit mx-auto mb-2">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-pretty">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
  </motion.section>
  )
}
