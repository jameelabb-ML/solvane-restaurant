import { Gift, ShieldCheck } from 'lucide-react'
import Modal from '../ui/Modal.jsx'
import Button from '../ui/Button.jsx'

export default function PurchaseModal({ option, onClose }) {
  return (
    <Modal open={!!option} onClose={onClose} className="max-w-md">
      <div className="flex flex-col items-center gap-5 p-8 text-center sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600 dark:bg-gold-400/15 dark:text-gold-300">
          <Gift size={24} />
        </span>
        <div>
          <h3 className="heading-md text-charcoal dark:text-cream-100">
            {option?.custom ? 'Custom Gift Card' : `$${option?.amount} Gift Card`}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">
            {option?.description}
          </p>
        </div>
        <div className="flex items-start gap-2 rounded-xl bg-stone-100 p-4 text-left text-xs text-charcoal-500 dark:bg-white/5 dark:text-cream-100/60">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-gold-500" />
          <p>
            This is a portfolio demo. In production, this would continue to a secure checkout page — no payment is
            processed here.
          </p>
        </div>
        <Button onClick={onClose} className="w-full">
          Close Preview
        </Button>
      </div>
    </Modal>
  )
}
