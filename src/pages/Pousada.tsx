import { useState } from "react"
import { MapPin, Clock, Star, Bed, Wifi, Car, Coffee, Phone, AirVent, Tv, Users } from "lucide-react"
import { Button } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/Navbar"
import { DateRangePicker } from "@/components/DateRangePicker"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { DateRange } from "react-day-picker"
import quartoCasal from "@/assets/quarto-casal.jpg"
import quartoSolteiro from "@/assets/quarto-solteiro.jpg"
import quartoFamilia from "@/assets/quarto-familia.jpg"

const Pousada = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>()

  const quartos = [
    {
      nome: "Quarto Casal",
      descricao: "Aconchegante quarto para casal com cama de casal confortável",
      imagem: quartoCasal,
      capacidade: "2 pessoas",
      comodidades: ["Cama de casal", "Banheiro privativo", "Wi-Fi", "Ar condicionado", "TV"]
    },
    {
      nome: "Quarto Solteiro",
      descricao: "Quarto prático e confortável com duas camas de solteiro",
      imagem: quartoSolteiro,
      capacidade: "2 pessoas",
      comodidades: ["2 camas de solteiro", "Banheiro privativo", "Wi-Fi", "Ventilador", "TV"]
    },
    {
      nome: "Suíte Família",
      descricao: "Espaçosa suíte familiar ideal para grupos e famílias",
      imagem: quartoFamilia,
      capacidade: "4-6 pessoas",
      comodidades: ["Cama de casal", "Sofá-cama", "Banheiro privativo", "Wi-Fi", "Ar condicionado", "TV", "Frigobar"]
    }
  ]

  const comodidadesGerais = [
    { nome: "Wi-Fi Gratuito", icone: Wifi },
    { nome: "Estacionamento", icone: Car },
    { nome: "Café da Manhã", icone: Coffee },
    { nome: "Recepção 24h", icone: Clock },
    { nome: "Ar Condicionado", icone: AirVent },
    { nome: "TV a Cabo", icone: Tv }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${quartoCasal})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Pousada Fundo de Quintal
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Hospedagem aconchegante em Pontal do Paraná
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto">
            Quartos confortáveis e acolhedores para você desfrutar de momentos únicos 
            na costa paranaense.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#quartos">Ver Quartos</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <a href="#reserva">Fazer Reserva</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Pousada */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossa Pousada
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um refúgio aconchegante onde você pode relaxar e aproveitar o melhor que 
              Pontal do Paraná tem a oferecer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Conforto e Hospitalidade</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nossa pousada oferece quartos confortáveis e um ambiente familiar, 
                perfeito para quem busca tranquilidade e uma experiência autêntica 
                na costa paranaense.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Localizada estrategicamente em Pontal do Paraná, você terá fácil acesso 
                às belas praias da região e poderá desfrutar do melhor da gastronomia 
                local em nosso restaurante.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-earth">
                  Ambiente Familiar
                </Badge>
                <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-earth">
                  Localização Privilegiada
                </Badge>
                <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-earth">
                  Conforto
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <MapPin className="h-6 w-6 text-restaurant-warm mr-3" />
                  <div>
                    <CardTitle className="text-lg text-primary">Localização</CardTitle>
                    <CardDescription>Próximo às praias de Pontal do Paraná</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <Star className="h-6 w-6 text-restaurant-warm mr-3" />
                  <div>
                    <CardTitle className="text-lg text-primary">Avaliação</CardTitle>
                    <CardDescription>⭐⭐⭐⭐⭐ Avaliação pelos hóspedes</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <Bed className="h-6 w-6 text-restaurant-warm mr-3" />
                  <div>
                    <CardTitle className="text-lg text-primary">Acomodações</CardTitle>
                    <CardDescription>Quartos para casais, solteiros e famílias</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comodidades */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Comodidades
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo o que você precisa para uma estadia confortável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comodidadesGerais.map((item, index) => {
              const IconComponent = item.icone
              return (
                <Card key={index} className="bg-card/90 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-restaurant-warm mx-auto mb-4" />
                    <CardTitle className="text-xl text-primary">{item.nome}</CardTitle>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quartos */}
      <section id="quartos" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossos Quartos
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha a acomodação perfeita para sua estadia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {quartos.map((quarto, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={quarto.imagem} 
                    alt={quarto.nome}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      <Users className="h-3 w-3 mr-1" />
                      {quarto.capacidade}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{quarto.nome}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {quarto.descricao}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-2">Comodidades:</h4>
                    <div className="flex flex-wrap gap-1">
                      {quarto.comodidades.map((comodidade, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {comodidade}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Reserva */}
      <section id="reserva" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Faça sua Reserva
            </h2>
            <p className="text-xl text-muted-foreground">
              Selecione as datas da sua estadia e entre em contato conosco
            </p>
          </div>

          <Card className="bg-card/90 backdrop-blur-sm shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Selecione suas Datas</CardTitle>
              <CardDescription>
                Escolha o período da sua hospedagem e enviaremos uma mensagem personalizada
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <DateRangePicker onDateChange={setSelectedDateRange} />
              
              <div className="pt-4">
                <WhatsAppButton 
                  dateRange={selectedDateRange}
                  phoneNumber="5541999933288"
                />
              </div>
              
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Ou entre em contato diretamente:
                </p>
                <Button variant="outline" asChild>
                  <a href="https://wa.me/5541999933288" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    (41) 99993-3288
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Venha nos Visitar
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Desfrute de uma experiência completa: hospedagem confortável e gastronomia excepcional 
            em um só lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-white/90" asChild>
              <a href="/">
                Conheça Nosso Restaurante
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-white/90" asChild>
              <a href="https://wa.me/5541999933288" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Entre em Contato
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pousada