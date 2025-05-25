"use client"
/* eslint-disable */

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, CreditCard, Banknote, Smartphone } from "lucide-react"
import { toast } from "sonner"

export default function DonatePage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        amount: "",
        donationType: "",
        paymentMethod: "",
        message: "",
    })

    const donationTypes = [
        { value: "education", label: "Education Programs" },
        { value: "healthcare", label: "Healthcare Services" },
        { value: "food", label: "Food Distribution" },
        { value: "housing", label: "Housing Support" },
        { value: "general", label: "General Welfare" },
        { value: "emergency", label: "Emergency Relief" },
    ]

    const suggestedAmounts = [500, 1000, 2500, 5000, 10000, 25000]

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleAmountSelect = (amount: number) => {
        setFormData((prev) => ({ ...prev, amount: amount.toString() }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.amount || !formData.donationType || !formData.paymentMethod) {
            toast("Error")
            return
        }

        // Simulate donation processing
        toast("Thank You for Your Donation!")

        // Reset form
        setFormData({
            name: "",
            email: "",
            amount: "",
            donationType: "",
            paymentMethod: "",
            message: "",
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Make a Donation</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your generous contribution helps us continue our mission of serving humanity and making a positive impact in
                        communities
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Impact Cards */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-green-600 text-center">Your Impact</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <p className="text-2xl font-bold text-green-600">PKR 500</p>
                                    <p className="text-sm text-gray-600">Can provide meals for 5 families</p>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <p className="text-2xl font-bold text-blue-600">PKR 2,500</p>
                                    <p className="text-sm text-gray-600">Can sponsor a student for 1 month</p>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <p className="text-2xl font-bold text-purple-600">PKR 10,000</p>
                                    <p className="text-sm text-gray-600">Can provide medical treatment for 10 patients</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="text-center">
                                    <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">100% Transparent</h3>
                                    <p className="text-sm text-gray-600">
                                        Every donation is used transparently for welfare activities. We provide regular updates on how your
                                        contribution is making a difference.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Donation Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl text-center text-green-600">Donation Form</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Donation Amount (PKR) *</Label>
                                        <div className="grid grid-cols-3 gap-2 mb-3">
                                            {suggestedAmounts.map((amount) => (
                                                <Button
                                                    key={amount}
                                                    type="button"
                                                    variant={formData.amount === amount.toString() ? "default" : "outline"}
                                                    className={formData.amount === amount.toString() ? "bg-green-600 hover:bg-green-700" : ""}
                                                    onClick={() => handleAmountSelect(amount)}
                                                >
                                                    PKR {amount.toLocaleString()}
                                                </Button>
                                            ))}
                                        </div>
                                        <Input
                                            value={formData.amount}
                                            onChange={(e) => handleInputChange("amount", e.target.value)}
                                            placeholder="Enter custom amount"
                                            type="number"
                                            min="1"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Donation Type *</Label>
                                        <Select
                                            value={formData.donationType}
                                            onValueChange={(value: string) => handleInputChange("donationType", value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select donation type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {donationTypes.map((type) => (
                                                    <SelectItem key={type.value} value={type.value}>
                                                        {type.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Payment Method *</Label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            <Button
                                                type="button"
                                                variant={formData.paymentMethod === "card" ? "default" : "outline"}
                                                className={`flex items-center gap-2 ${formData.paymentMethod === "card" ? "bg-green-600 hover:bg-green-700" : ""}`}
                                                onClick={() => handleInputChange("paymentMethod", "card")}
                                            >
                                                <CreditCard className="h-4 w-4" />
                                                Card
                                            </Button>
                                            <Button
                                                type="button"
                                                variant={formData.paymentMethod === "bank" ? "default" : "outline"}
                                                className={`flex items-center gap-2 ${formData.paymentMethod === "bank" ? "bg-green-600 hover:bg-green-700" : ""}`}
                                                onClick={() => handleInputChange("paymentMethod", "bank")}
                                            >
                                                <Banknote className="h-4 w-4" />
                                                Bank
                                            </Button>
                                            <Button
                                                type="button"
                                                variant={formData.paymentMethod === "jazzcash" ? "default" : "outline"}
                                                className={`flex items-center gap-2 ${formData.paymentMethod === "jazzcash" ? "bg-green-600 hover:bg-green-700" : ""}`}
                                                onClick={() => handleInputChange("paymentMethod", "jazzcash")}
                                            >
                                                <Smartphone className="h-4 w-4" />
                                                JazzCash
                                            </Button>
                                            <Button
                                                type="button"
                                                variant={formData.paymentMethod === "easypaisa" ? "default" : "outline"}
                                                className={`flex items-center gap-2 ${formData.paymentMethod === "easypaisa" ? "bg-green-600 hover:bg-green-700" : ""}`}
                                                onClick={() => handleInputChange("paymentMethod", "easypaisa")}
                                            >
                                                <Smartphone className="h-4 w-4" />
                                                Easypaisa
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message (Optional)</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e: any) => handleInputChange("message", e.target.value)}
                                            placeholder="Leave a message or dedication..."
                                            rows={3}
                                        />
                                    </div>

                                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                                        <Heart className="mr-2 h-5 w-5" />
                                        Donate PKR {formData.amount || "0"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
