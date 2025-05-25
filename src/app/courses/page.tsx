"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Clock, Users, Award } from "lucide-react"
import { toast } from "sonner"

export default function CoursesPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        cnic: "",
        email: "",
        phone: "",
        address: "",
        course: "",
        image: null as File | null,
    })

    const courses = [
        {
            title: "Web Development",
            duration: "6 months",
            students: "500+",
            description: "Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack developer.",
            features: ["Frontend Development", "Backend Development", "Database Management", "Project Portfolio"],
        },
        {
            title: "Mobile App Development",
            duration: "5 months",
            students: "300+",
            description: "Master React Native and Flutter to build cross-platform mobile applications.",
            features: ["React Native", "Flutter", "API Integration", "App Store Deployment"],
        },
        {
            title: "Digital Marketing",
            duration: "4 months",
            students: "400+",
            description: "Learn SEO, social media marketing, Google Ads, and content marketing strategies.",
            features: ["SEO Optimization", "Social Media Marketing", "Google Ads", "Analytics"],
        },
        {
            title: "Graphic Design",
            duration: "4 months",
            students: "350+",
            description: "Master Adobe Creative Suite and design principles for print and digital media.",
            features: ["Adobe Photoshop", "Illustrator", "InDesign", "Brand Identity"],
        },
        {
            title: "Data Science",
            duration: "8 months",
            students: "200+",
            description: "Learn Python, machine learning, data analysis, and visualization techniques.",
            features: ["Python Programming", "Machine Learning", "Data Visualization", "Statistical Analysis"],
        },
        {
            title: "Cybersecurity",
            duration: "6 months",
            students: "150+",
            description: "Understand network security, ethical hacking, and cybersecurity best practices.",
            features: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Protocols"],
        },
    ]

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, image: e.target.files![0] }))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validate required fields
        if (
            !formData.fullName ||
            !formData.cnic ||
            !formData.email ||
            !formData.phone ||
            !formData.address ||
            !formData.course
        ) {
            toast("Error")
            return
        }

        // Simulate form submission
        toast("Registration Successful!")

        // Reset form
        setFormData({
            fullName: "",
            cnic: "",
            email: "",
            phone: "",
            address: "",
            course: "",
            image: null,
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Free Courses</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Enhance your skills with our comprehensive free courses designed to prepare you for the modern workforce
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {courses.map((course, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-green-600">{course.title}</CardTitle>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="h-4 w-4" />
                                        {course.students}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm">What you'll learn:</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {course.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <Award className="h-3 w-3 text-green-600" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Registration Form */}
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-green-600">Course Registration</CardTitle>
                        <p className="text-center text-gray-600">Fill out the form below to register for any course</p>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name *</Label>
                                    <Input
                                        id="fullName"
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cnic">CNIC Number *</Label>
                                    <Input
                                        id="cnic"
                                        value={formData.cnic}
                                        onChange={(e) => handleInputChange("cnic", e.target.value)}
                                        placeholder="12345-6789012-3"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
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
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number *</Label>
                                    <Input
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        placeholder="+92-300-1234567"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Address *</Label>
                                <Textarea
                                    id="address"
                                    value={formData.address}
                                    onChange={(e) => handleInputChange("address", e.target.value)}
                                    placeholder="Enter your complete address"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="course">Select Course *</Label>
                                <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose a course" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {courses.map((course, index) => (
                                            <SelectItem key={index} value={course.title}>
                                                {course.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">Upload Photo</Label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                    <Input id="image" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                    <Label htmlFor="image" className="cursor-pointer">
                                        <span className="text-sm text-gray-600">
                                            {formData.image ? formData.image.name : "Click to upload your photo"}
                                        </span>
                                    </Label>
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                                Register for Course
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
