import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How secure is my database connection",
      answer:
        "We use industry-standard encryption and security protocols. Your database credentials are encrypted, and we never store any of your actual data. All queries are executed in real-time through secure channels.",
    },
    {
      question: "What types of queris can I ask?",
      answer:
        "You can ask virtually anything you'd normally query from MongoDB, but in plain English. This includes aggregation, filters, sorts, and complex joins - all through natural language",
    },
    {
      question: "Do you support multiple collections and databses?",
      answer:
        "Yes! You can connect multiple collections and databases. Our AI Understands relationships between collections and can perform cross-collection queries seamlessly.",
    },
    {
      question: "What's the pricing model?",
      answer:
        "We offer tiered pricing model based on query volume and database connections. Start with our free trial to test the service, then choose a plan that fits your needs. Custom enterprise plans are available for large-scale deployments.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16" id="faq">
      <p className="text-xl text-center py-5 text-green-600">
        Frequently Asked Questions
      </p>
      <h2 className="text-center text-4xl font-bold mb-12">
        Everything you need to know about MongoChat
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
