import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, ShieldCheck, CheckCircle2, Mail } from 'lucide-react'
import Modal from '../ui/Modal.jsx'
import Button from '../ui/Button.jsx'

const generateOrderCode = () => `GC-${Math.random().toString(36).slice(2, 7).toUpperCase()}`

export default function PurchaseModal({ option, onClose }) {
  const [purchased, setPurchased] = useState(false)
  const [orderCode, setOrderCode] = useState('')

  useEffect(() => {
    if (option) setPurchased(false)
  }, [option])

  const handlePurchase = () => {
    setOrderCode(generateOrderCode())
    setPurchased(true)
  }

  if (purchased) {
    return (
      <Modal open={!!option} onClose={onClose} className="max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-5 p-8 text-center sm:p-10"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600 dark:bg-gold-400/15 dark:text-gold-300">
            <CheckCircle2 size={26} />
          </span>
          <div>
            <h3 className="heading-md text-charcoal dark:text-cream-100">Gavekort kjøpt</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">
              {option?.custom ? 'Det tilpassede gavekortet ditt' : `Gavekortet ditt på ${option?.amount} kr`} er på vei.
            </p>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl bg-stone-100 px-4 py-3 text-sm dark:bg-white/5">
            <span className="text-charcoal-500 dark:text-cream-100/60">Ordrenummer</span>
            <span className="font-medium text-charcoal dark:text-cream-100">{orderCode}</span>
          </div>
          <div className="flex items-start gap-2 text-left text-xs text-charcoal-500 dark:text-cream-100/50">
            <Mail size={14} className="mt-0.5 shrink-0 text-gold-500" />
            <span>En bekreftelse og leveringsdetaljer er sendt til e-posten din.</span>
          </div>
          <Button onClick={onClose} className="w-full">
            Ferdig
          </Button>
        </motion.div>
      </Modal>
    )
  }

  return (
    <Modal open={!!option} onClose={onClose} className="max-w-md">
      <div className="flex flex-col items-center gap-5 p-8 text-center sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600 dark:bg-gold-400/15 dark:text-gold-300">
          <Gift size={24} />
        </span>
        <div>
          <h3 className="heading-md text-charcoal dark:text-cream-100">
            {option?.custom ? 'Tilpasset gavekort' : `Gavekort på ${option?.amount} kr`}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">
            {option?.description}
          </p>
        </div>
        <div className="flex items-start gap-2 rounded-xl bg-stone-100 p-4 text-left text-xs text-charcoal-500 dark:bg-white/5 dark:text-cream-100/60">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-gold-500" />
          <p>Gavekortopplysningene dine er beskyttet med sikker, kryptert betaling.</p>
        </div>
        <Button onClick={handlePurchase} className="w-full">
          Fullfør kjøp
        </Button>
      </div>
    </Modal>
  )
}
