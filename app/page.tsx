import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Commissioner } from 'next/font/google'
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Diamond,
  GraduationCap,
  Coins,
  Trophy,
  Star,
  ArrowRight,
  Target,
  Gift,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"

const commissioner = Commissioner({ weight: '600', subsets: ['latin'] })

export default function NotYourJewelsLanding() {
  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white overflow-x-hidden">
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 min-w-fit">
        <div className="flex items-center justify-between gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00AEEF] to-[#FF8FB1] rounded-lg flex items-center justify-center">
              <Diamond className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg whitespace-nowrap">Not Your Jewels</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="#inicio" className="text-sm hover:text-[#00AEEF] transition-colors whitespace-nowrap">
              Inicio
            </Link>
            <Link href="#como-funciona" className="text-sm hover:text-[#00AEEF] transition-colors whitespace-nowrap">
              Cómo Funciona
            </Link>
            <Link href="#beneficios" className="text-sm hover:text-[#00AEEF] transition-colors whitespace-nowrap">
              Beneficios
            </Link>
            <Link href="#gamificacion" className="text-sm hover:text-[#00AEEF] transition-colors whitespace-nowrap">
              Gamificación
            </Link>
            <Link href="#contacto" className="text-sm hover:text-[#00AEEF] transition-colors whitespace-nowrap">
              Contacto
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] hover:opacity-90 transition-opacity rounded-full px-6 py-2 whitespace-nowrap">
            Comenzar ahora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/20 to-[#0A0A1A] z-0" />

        {/* Floating Pixel Art Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-6 h-6 bg-[#FF8FB1] rounded-sm opacity-60 animate-pulse" />
          <div className="absolute top-40 right-20 w-4 h-4 bg-[#00C49A] rounded-sm opacity-40 animate-bounce" />
          <div className="absolute bottom-40 left-20 w-5 h-5 bg-[#00AEEF] rounded-sm opacity-50" />
          <div className="absolute top-60 left-1/3 w-3 h-3 bg-[#FF8FB1] rounded-sm opacity-30" />
        </div>

        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-4xl mx-auto">
            <h1 className={`${commissioner.className} text-5xl md:text-7xl font-bold mb-6 leading-tight`}>
              Porque la educación no debería ser un{" "}
              <span className="bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] bg-clip-text text-transparent">
                privilegio
              </span>
              , es un{" "}
              <span className="bg-gradient-to-r from-[#00C49A] to-[#00AEEF] bg-clip-text text-transparent">
                derecho
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Microcréditos estudiantiles basados en Stellar, con gamificación e incentivos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00AEEF] to-[#00C49A] hover:opacity-90 transition-opacity rounded-full px-8 py-4 text-lg"
              >
                Solicita tu crédito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg bg-transparent"
              >
                Conoce más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A1A] to-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#FF8FB1]/20 text-[#FF8FB1] border-[#FF8FB1]/30 mb-4">
                Un problema que no podemos ignorar
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                En Latinoamérica, el abandono universitario por razones financieras alcanza hasta el{" "}
                <span className="text-[#FF8FB1]">57%</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg">Guatemala</span>
                  <span className="text-[#FF8FB1] font-bold">57%</span>
                </div>
                <Progress value={57} className="h-2 bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="text-lg">Honduras</span>
                  <span className="text-[#FF8FB1] font-bold">53%</span>
                </div>
                <Progress value={53} className="h-2 bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="text-lg">Bolivia</span>
                  <span className="text-[#00C49A] font-bold">16%</span>
                </div>
                <Progress value={16} className="h-2 bg-white/10" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#003366]/30 to-[#FF8FB1]/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#FF8FB1] to-[#00AEEF] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">Estudiante empeñando sus joyas para continuar sus estudios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-[#00C49A]/20 to-[#00AEEF]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Con Not Your Jewels ningún estudiante debería{" "}
              <span className="bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] bg-clip-text text-transparent">
                perder sus joyas
              </span>{" "}
              para no perder su futuro
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00AEEF] to-[#00C49A] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Financiamiento rápido y flexible</h3>
                <p className="text-gray-300">Accede a microcréditos adaptados a tus necesidades académicas</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF8FB1] to-[#00AEEF] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pagos pequeños o tras graduarte</h3>
                <p className="text-gray-300">Flexibilidad de pago que se adapta a tu situación</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C49A] to-[#FF8FB1] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Incentivos y becas vía Stellar</h3>
                <p className="text-gray-300">Recompensas por tu rendimiento académico</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section id="gamificacion" className="py-20 bg-gradient-to-br from-[#003366]/30 to-[#0A0A1A]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#00AEEF]/20 text-[#00AEEF] border-[#00AEEF]/30 mb-4">Gamificación</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mejora tu rendimiento,{" "}
                <span className="bg-gradient-to-r from-[#00C49A] to-[#00AEEF] bg-clip-text text-transparent">
                  gana becas
                </span>{" "}
                y recompensas
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Convierte tu educación en una experiencia gamificada donde cada logro cuenta
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#00C49A] rounded-lg flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <span>Logros por calificaciones</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF8FB1] rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span>Recompensas por asistencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#00AEEF] rounded-lg flex items-center justify-center">
                    <Gift className="w-4 h-4 text-white" />
                  </div>
                  <span>Becas por rendimiento</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-[#003366]/50 to-[#00AEEF]/20 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Mis Logros</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Progreso Semestral</span>
                      <span className="text-[#00C49A]">85%</span>
                    </div>
                    <Progress value={85} className="h-3 bg-white/10" />

                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#00C49A] rounded-xl mx-auto mb-2 flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm">Excelencia</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#FF8FB1] rounded-xl mx-auto mb-2 flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm">Constancia</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#00AEEF] rounded-xl mx-auto mb-2 flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm">Meta</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Cómo funciona nuestra plataforma</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proceso simple y transparente para acceder a tu financiamiento educativo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00AEEF] to-[#00C49A] rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold mb-6">Solicita tu microcrédito</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Completa una solicitud rápida y sencilla con tus datos académicos
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF8FB1] to-[#00AEEF] rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold mb-6">Mejora tu rendimiento académico</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Utiliza nuestra plataforma gamificada para maximizar tu aprendizaje
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00C49A] to-[#FF8FB1] rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold mb-6">Recibe incentivos y paga fácilmente</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Gana recompensas por tu rendimiento y paga de forma flexible
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00AEEF] to-[#00C49A] hover:opacity-90 transition-opacity rounded-full px-10 py-4 text-lg"
            >
              Comenzar proceso
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A1A] to-[#003366]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Historias de éxito</h2>
            <p className="text-xl text-gray-300">Estudiantes que transformaron su futuro</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF8FB1] to-[#00AEEF] rounded-full flex items-center justify-center">
                    <span className="font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Tati</h4>
                    <p className="text-sm text-gray-400">Estudiante de Medicina</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00C49A] text-[#00C49A]" />
                  ))}
                </div>
                <p className="text-gray-300">
                  "Gracias a Not Your Jewels pude continuar mis estudios sin tener que vender las joyas de mi abuela. El
                  sistema de gamificación me motivó a mejorar mis calificaciones."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00C49A] to-[#00AEEF] rounded-full flex items-center justify-center">
                    <span className="font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Miguel</h4>
                    <p className="text-sm text-gray-400">Estudiante de Ingeniería</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00C49A] text-[#00C49A]" />
                  ))}
                </div>
                <p className="text-gray-300">
                  "La flexibilidad de pago me permitió enfocarme en mis estudios. Ahora estoy en mi último semestre y ya
                  tengo trabajo asegurado."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00AEEF] to-[#FF8FB1] rounded-full flex items-center justify-center">
                    <span className="font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Ana</h4>
                    <p className="text-sm text-gray-400">Estudiante de Derecho</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00C49A] text-[#00C49A]" />
                  ))}
                </div>
                <p className="text-gray-300">
                  "Las recompensas por rendimiento académico me ayudaron a reducir significativamente mi deuda. ¡Es
                  increíble cómo funciona!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF8FB1]/20 to-[#00AEEF]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Empieza hoy. Financia tu futuro{" "}
            <span className="bg-gradient-to-r from-[#00C49A] to-[#00AEEF] bg-clip-text text-transparent">
              sin perder tus joyas
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Únete a miles de estudiantes que ya están construyendo su futuro con Not Your Jewels
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] hover:opacity-90 transition-opacity rounded-full px-12 py-6 text-xl"
          >
            Quiero comenzar
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00C49A] mb-2">500+</div>
              <p className="text-gray-300">Estudiantes financiados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FF8FB1] mb-2">95%</div>
              <p className="text-gray-300">Tasa de graduación</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00AEEF] mb-2">$2M+</div>
              <p className="text-gray-300">En microcréditos otorgados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#0A0A1A] border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00AEEF] to-[#FF8FB1] rounded-lg flex items-center justify-center">
                  <Diamond className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">Not Your Jewels</span>
              </div>
              <p className="text-gray-400 mb-4">Financiamiento educativo inteligente para el futuro de Latinoamérica</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Cómo Funciona
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Beneficios
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Gamificación
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Testimonios
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Soporte</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Centro de Ayuda
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Aviso Legal
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Not Your Jewels. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
