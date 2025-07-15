import { MapPin, Clock, Star, Utensils, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/Navbar"
import restauranteHero from "@/assets/restaurante-hero.jpg"

const Index = () => {
  const especialidades = [
    { nome: "Buffet Livre", descricao: "Variedade completa de pratos quentes e frios, à vontade" },
    { nome: "Buffet por Kg", descricao: "Monte seu prato do jeito que preferir, pagando apenas pelo peso" },
    { nome: "Marmitas", descricao: "Refeições completas para levar, perfeitas para o dia a dia" },
    { nome: "Porções", descricao: "Deliciosas porções para compartilhar com amigos e família" }
  ]

  const horarios = [
    { dia: "Segunda a Quinta", horario: "11:00 - 15:00" },
    { dia: "Sexta a Domingo", horario: "11:00 - 16:00" },
    { dia: "Feriados", horario: "11:00 - 16:00" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${restauranteHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Fundo de Quintal
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Sabores autênticos em Pontal do Paraná
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto">
            Experimente nossa culinária caseira em um ambiente acolhedor, 
            onde cada prato é preparado com ingredientes frescos e muito carinho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sunset" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#cardapio">Ver Nossos Serviços</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <a href="/pousada">Conheça Nossa Pousada</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre o Restaurante */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nosso Restaurante
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Localizado no coração de Pontal do Paraná, oferecemos uma experiência gastronômica 
              única com pratos tradicionais e um ambiente familiar acolhedor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Uma Tradição de Sabor</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Há anos servindo os melhores pratos da culinária regional, nosso restaurante 
                é conhecido pela qualidade dos ingredientes frescos e pelo preparo artesanal 
                de cada refeição.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nosso ambiente rústico e aconchegante proporciona momentos únicos para 
                almoçar em família ou com amigos, sempre acompanhado do melhor da gastronomia local.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-burgundy">
                  Buffet Livre
                </Badge>
                <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-burgundy">
                  Buffet por Kg
                </Badge>
                <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-burgundy">
                  Marmitas
                </Badge>
                <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-burgundy">
                  Porções
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <MapPin className="h-6 w-6 text-restaurant-orange mr-3" />
                  <div>
                    <CardTitle className="text-lg text-primary">Localização</CardTitle>
                    <CardDescription>PR-412, 2705 - Santa Terezinha, Pontal do Paraná - PR</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <Star className="h-6 w-6 text-restaurant-orange mr-3" />
                  <div>
                    <CardTitle className="text-lg text-primary">Localização</CardTitle>
                    <CardDescription>Próximo ao centro de Santa Terezinha</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <Utensils className="h-6 w-6 text-restaurant-orange mr-3" />
                  <div>
                    <CardTitle className="text-lg text-primary">Serviços</CardTitle>
                    <CardDescription>Buffet Livre • Buffet Kg • Marmitas • Porções</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="cardapio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos diferentes opções para atender todos os gostos e necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {especialidades.map((item, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{item.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {item.descricao}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Horários de Funcionamento
            </h2>
            <p className="text-xl text-muted-foreground">
              Venha nos visitar e saboreie o melhor da culinária regional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {horarios.map((item, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary transition-colors">
                <CardHeader className="text-center">
                  <Clock className="h-8 w-8 text-restaurant-orange mx-auto mb-4" />
                  <CardTitle className="text-lg text-primary">{item.dia}</CardTitle>
                  <CardDescription className="text-xl font-semibold text-foreground">
                    {item.horario}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Faça sua Reserva
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Entre em contato conosco para garantir sua mesa e desfrutar de uma experiência gastronômica inesquecível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-white/90" asChild>
              <a href="https://wa.me/5541999933288" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                (41) 99993-3288
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-white/90" asChild>
              <a href="/pousada">
                Conheça Nossa Pousada
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
