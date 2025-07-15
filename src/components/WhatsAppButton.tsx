import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/custom-button"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { DateRange } from "react-day-picker"

interface WhatsAppButtonProps {
  dateRange: DateRange | undefined
  phoneNumber: string
  message?: string
}

export function WhatsAppButton({ dateRange, phoneNumber, message }: WhatsAppButtonProps) {
  const generateWhatsAppUrl = () => {
    let defaultMessage = "Olá, tudo bem? Gostaria de me hospedar"
    
    if (dateRange?.from && dateRange?.to) {
      const checkin = format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })
      const checkout = format(dateRange.to, "dd/MM/yyyy", { locale: ptBR })
      defaultMessage = `Olá, tudo bem? Gostaria de me hospedar nos dias ${checkin} até ${checkout}.`
    }
    
    const finalMessage = message || defaultMessage
    const encodedMessage = encodeURIComponent(finalMessage)
    
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  const handleClick = () => {
    window.open(generateWhatsAppUrl(), '_blank')
  }

  return (
    <Button
      onClick={handleClick}
      variant="restaurant"
      size="lg"
      className="w-full text-lg font-semibold"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Reservar via WhatsApp
    </Button>
  )
}