"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const indicators = {
  "kubis-ungu": {
    name: "Kubis Ungu",
    colors: {
      1: { color: "#FF69B4", label: "Pink", type: "Asam" },
      2: { color: "#FF69B4", label: "Pink", type: "Asam" },
      3: { color: "#191970", label: "Biru Tua", type: "Asam" },
      4: { color: "#8A2BE2", label: "Ungu", type: "Asam" },
      5: { color: "#DA70D6", label: "Pink ke Ungu", type: "Asam" },
      8: { color: "#8A2BE2", label: "Ungu", type: "Basa" },
      9: { color: "#4B0082", label: "Ungu Tua", type: "Basa" },
      10: { color: "#87CEEB", label: "Biru Muda", type: "Basa" },
      13: { color: "#ADFF2F", label: "Kuning ke Hijau", type: "Basa Kuat" },
    },
  },
  "buah-naga": {
    name: "Buah Naga",
    colors: {
      1: { color: "#FF69B4", label: "Pink", type: "Asam" },
      2: { color: "#FF69B4", label: "Pink", type: "Asam" },
      3: { color: "#DA70D6", label: "Pink ke Ungu", type: "Asam" },
      4: { color: "#FF69B4", label: "Pink", type: "Asam" },
      5: { color: "#FF69B4", label: "Pink", type: "Asam" },
      8: { color: "#FF69B4", label: "Pink", type: "Basa Lemah" },
      9: { color: "#FF69B4", label: "Pink", type: "Basa Lemah" },
      10: { color: "#8A2BE2", label: "Ungu", type: "Basa" },
      13: { color: "#FFFF00", label: "Kuning", type: "Basa Kuat" },
    },
  },
  "bunga-telang": {
    name: "Bunga Telang",
    colors: {
      1: { color: "#FF69B4", label: "Pink", type: "Asam Kuat" },
      2: { color: "#DDA0DD", label: "Ungu Muda", type: "Asam Kuat" },
      3: { color: "#87CEEB", label: "Biru Muda", type: "Asam" },
      4: { color: "#4169E1", label: "Biru ke Ungu", type: "Asam" },
      5: { color: "#191970", label: "Biru Tua", type: "Asam" },
      8: { color: "#191970", label: "Biru Tua", type: "Netral" },
      9: { color: "#87CEEB", label: "Biru Muda", type: "Netral" },
      10: { color: "#87CEEB", label: "Biru Muda", type: "Netral" },
      13: { color: "#40E0D0", label: "Biru ke Hijau", type: "Basa Kuat" },
    },
  },
}

export function IndicatorTest() {
  const [selectedIndicator, setSelectedIndicator] = useState<keyof typeof indicators>("kubis-ungu")
  const [phValue, setPhValue] = useState([7])

  const getCurrentColor = () => {
    const indicator = indicators[selectedIndicator]
    const ph = phValue[0]

    // Find the closest pH value in our data
    const availablePh = Object.keys(indicator.colors)
      .map(Number)
      .sort((a, b) => a - b)
    let closestPh = availablePh[0]

    for (const phLevel of availablePh) {
      if (ph >= phLevel) {
        closestPh = phLevel
      }
    }

    return indicator.colors[closestPh as keyof typeof indicator.colors]
  }

  const currentColor = getCurrentColor()

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-cyan-50 to-orange-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Uji Indikator Alami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eksplorasi perubahan warna indikator alami pada berbagai tingkat pH
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Pilih Indikator Alami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {Object.entries(indicators).map(([key, indicator]) => (
                  <Button
                    key={key}
                    variant={selectedIndicator === key ? "default" : "outline"}
                    onClick={() => setSelectedIndicator(key as keyof typeof indicators)}
                    className="h-16 text-lg"
                  >
                    {indicator.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Atur Tingkat pH</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <span className="text-3xl font-bold text-gray-900">pH {phValue[0]}</span>
                </div>
                <Slider value={phValue} onValueChange={setPhValue} max={14} min={0} step={0.5} className="w-full" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0 (Asam Kuat)</span>
                  <span>7 (Netral)</span>
                  <span>14 (Basa Kuat)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Hasil Uji Indikator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div
                  className="mx-auto w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center transition-all duration-500 ease-in-out shadow-lg"
                  style={{ backgroundColor: currentColor.color }}
                >
                  <span className="text-white font-bold text-lg drop-shadow-lg">
                    {indicators[selectedIndicator].name}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Warna: <span className="text-cyan-600">{currentColor.label}</span>
                  </p>
                  <p className="text-lg text-gray-700">
                    Sifat: <span className="font-medium">{currentColor.type}</span>
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Informasi pH:</h4>
                  <p className="text-gray-700">
                    {phValue[0] < 7
                      ? "Larutan bersifat asam"
                      : phValue[0] === 7
                        ? "Larutan bersifat netral"
                        : "Larutan bersifat basa"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  </motion.section>
  )
}
