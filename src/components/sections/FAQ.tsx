import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Question } from '@phosphor-icons/react'

const faqs = [
  {
    question: 'Who should attend this event?',
    answer: 'This event is perfect for developers, DevOps engineers, engineering managers, and IT decision-makers interested in migrating from Azure DevOps to GitHub, adopting a hybrid approach, or exploring GitHub Copilot and modern development practices.'
  },
  {
    question: 'Is this event free?',
    answer: 'Yes, this is a free event hosted by Microsoft, GitHub, and Eficode. Registration is required as seats are limited.'
  },
  {
    question: 'What should I bring to the event?',
    answer: 'Bring your laptop if you\'d like to follow along with the demos and hands-on sessions. We recommend bringing business cards for networking and a notepad for taking notes during the presentations.'
  },
  {
    question: 'Will food and beverages be provided?',
    answer: 'Yes, coffee and light refreshments will be provided during the welcome session and breaks. Networking session will include snacks and beverages.'
  },
  {
    question: 'Will the presentations be recorded?',
    answer: 'Selected sessions will be recorded and made available to registered attendees after the event. Please note that Q&A and networking sessions will not be recorded.'
  },
  {
    question: 'What if I need to cancel my registration?',
    answer: 'You can cancel your registration at any time by contacting us through the registration form confirmation email. We appreciate early notice so we can offer your seat to someone on the waitlist.'
  },
  {
    question: 'Is there parking available at the venue?',
    answer: 'The Microsoft Köln office is located in the city center with limited parking. We recommend using public transportation. The venue is well-connected by U-Bahn (Appellhofplatz station) and multiple bus lines.'
  },
  {
    question: 'Can I bring a colleague?',
    answer: 'Absolutely! Each person must register individually through the registration form to ensure we have accurate headcount for catering and seating.'
  },
  {
    question: 'Will there be opportunities for hands-on learning?',
    answer: 'Yes, the event includes live demos and interactive sessions where you can see migration tools, GitHub Copilot, and CI/CD workflows in action. Experts will be available during breaks and networking for questions.'
  },
  {
    question: 'What topics will be covered?',
    answer: 'The event covers GitHub platform benefits, migration strategies from Azure DevOps, GitHub Copilot AI features, CI/CD automation, security and compliance, hybrid integration approaches, and best practices for modern development workflows.'
  }
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Question size={20} weight="bold" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Got Questions?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about the event. Can't find what you're looking for? Feel free to reach out to us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:event-support@example.com" 
            className="text-accent hover:text-accent/80 font-semibold transition-colors underline underline-offset-4"
          >
            Contact us directly
          </a>
        </motion.div>
      </div>
    </section>
  )
}
