/* eslint-disable */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQPage() {
    const faqs = [
        {
            question: "What is Saylani Welfare International Trust?",
            answer:
                "Saylani Welfare International Trust is a non-profit organization dedicated to providing free services to humanity regardless of race, religion, or social status. We offer education, healthcare, housing, and community development programs.",
        },
        {
            question: "How can I apply for courses?",
            answer:
                "You can apply for our courses by visiting our Courses page and filling out the registration form. You'll need to provide your personal details, CNIC, and select your preferred course. All courses are completely free of charge.",
        },
        {
            question: "What documents do I need for course registration?",
            answer:
                "For course registration, you need a valid CNIC, recent photograph, and proof of address. All documents should be clear and legible. Original documents will be verified during the admission process.",
        },
        {
            question: "Are the courses really free?",
            answer:
                "Yes, all our courses are completely free of charge. This includes course materials, certificates, and any additional resources needed for learning. Our mission is to provide quality education without any financial barriers.",
        },
        {
            question: "How long are the courses?",
            answer:
                "Course duration varies depending on the program. Most technical courses range from 3-6 months, while professional development courses may take 6-12 months. Detailed duration information is available on each course description.",
        },
        {
            question: "Do you provide job placement assistance?",
            answer:
                "Yes, we have a dedicated placement cell that helps our graduates find suitable employment opportunities. We maintain partnerships with various companies and organizations to facilitate job placements for our students.",
        },
        {
            question: "Can I donate to Saylani Welfare?",
            answer:
                "Your donations help us continue our mission of serving humanity. You can donate through our website, bank transfer, or visit our offices. All donations are used transparently for welfare activities.",
        },
        {
            question: "How can I volunteer with Saylani Welfare?",
            answer:
                "We welcome volunteers who want to contribute to our cause. You can register as a volunteer through our website or visit our offices. We have opportunities in education, healthcare, community service, and administrative support.",
        },
        {
            question: "What healthcare services do you provide?",
            answer:
                "We provide free medical consultations, diagnostic tests, medicines, and treatment for various conditions. Our healthcare centers are equipped with modern facilities and staffed by qualified medical professionals.",
        },
        {
            question: "How can I check my course application status?",
            answer:
                "You can check your application status by visiting our Student Portal and entering your CNIC number. This will show your registration details, course status, and any updates regarding your application.",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about our services, courses, and programs
                    </p>
                </div>

                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-green-600">Common Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>

                <div className="text-center mt-12">
                    <Card className="max-w-2xl mx-auto">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
                            <p className="text-gray-600 mb-6">
                                If you couldn't find the answer you're looking for, please don't hesitate to contact us.
                            </p>
                            <div className="space-y-2 text-sm text-gray-500">
                                <p>📞 Phone: +92-21-111-729-526</p>
                                <p>📧 Email: info@saylaniwelfare.com</p>
                                <p>📍 Address: Karachi, Pakistan</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
