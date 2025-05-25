"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Search, User, Mail, Phone, MapPin, GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"

export default function StudentPortalPage() {
    const [cnic, setCnic] = useState("")
    const [studentData, setStudentData] = useState(null as any)
    const [loading, setLoading] = useState(false)

    // Mock student data
    const mockStudents = {
        "12345-6789012-3": {
            fullName: "Ahmed Ali Khan",
            cnic: "12345-6789012-3",
            email: "ahmed.ali@example.com",
            phone: "+92-300-1234567",
            address: "House No. 123, Block A, Gulshan-e-Iqbal, Karachi",
            course: "Web Development",
            registrationDate: "2024-01-15",
            status: "Active",
            progress: "75%",
            image: "/placeholder.svg?height=150&width=150",
        },
        "98765-4321098-7": {
            fullName: "Fatima Sheikh",
            cnic: "98765-4321098-7",
            email: "fatima.sheikh@example.com",
            phone: "+92-301-9876543",
            address: "Flat 45, Tower B, Clifton, Karachi",
            course: "Digital Marketing",
            registrationDate: "2024-02-20",
            status: "Completed",
            progress: "100%",
            image: "/placeholder.svg?height=150&width=150",
        },
        "11111-2222233-4": {
            fullName: "Muhammad Hassan",
            cnic: "11111-2222233-4",
            email: "hassan.m@example.com",
            phone: "+92-302-1111222",
            address: "Street 10, F-8/2, Islamabad",
            course: "Mobile App Development",
            registrationDate: "2024-03-10",
            status: "Active",
            progress: "45%",
            image: "/placeholder.svg?height=150&width=150",
        },
    }

    const handleSearch = () => {
        if (!cnic.trim()) {
            toast.error("Error")
            return
        }

        setLoading(true)

        // Simulate API call
        setTimeout(() => {
            const student = mockStudents[cnic as keyof typeof mockStudents]
            if (student) {
                setStudentData(student)
                toast.success(
                    "Student Found",
                )
            } else {
                setStudentData(null)
                toast.error(
                    "Not Found",
                )
            }
            setLoading(false)
        }, 1000)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-800"
            case "Completed":
                return "bg-blue-100 text-blue-800"
            case "Pending":
                return "bg-yellow-100 text-yellow-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Student Portal</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Enter your CNIC number to view your student record and course progress
                    </p>
                </div>

                {/* Search Section */}
                <Card className="max-w-md mx-auto mb-8">
                    <CardHeader>
                        <CardTitle className="text-center text-green-600">Find Your Record</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="cnic">CNIC Number</Label>
                            <Input
                                id="cnic"
                                value={cnic}
                                onChange={(e: any) => setCnic(e.target.value)}
                                placeholder="12345-6789012-3"
                                className="text-center"
                            />
                        </div>
                        <Button onClick={handleSearch} className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                            <Search className="mr-2 h-4 w-4" />
                            {loading ? "Searching..." : "Search Record"}
                        </Button>
                    </CardContent>
                </Card>

                {/* Demo CNIC Numbers */}
                <Card className="max-w-md mx-auto mb-8">
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-600 text-center mb-2">Demo CNIC Numbers:</p>
                        <div className="space-y-1 text-xs text-gray-500 text-center">
                            <p>12345-6789012-3 (Ahmed Ali Khan)</p>
                            <p>98765-4321098-7 (Fatima Sheikh)</p>
                            <p>11111-2222233-4 (Muhammad Hassan)</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Student Card */}
                {studentData && (
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle className="text-center text-green-600">Student Record</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Photo Section */}
                                <div className="text-center">
                                    <Image
                                        src={studentData.image || "/placeholder.svg"}
                                        alt={studentData.fullName}
                                        width={150}
                                        height={150}
                                        className="rounded-full mx-auto mb-4 border-4 border-green-100"
                                    />
                                    <Badge className={getStatusColor(studentData.status)}>{studentData.status}</Badge>
                                </div>

                                {/* Details Section */}
                                <div className="md:col-span-2 space-y-4">
                                    <div className="grid gap-4">
                                        <div className="flex items-center gap-3">
                                            <User className="h-5 w-5 text-green-600" />
                                            <div>
                                                <p className="font-semibold">{studentData.fullName}</p>
                                                <p className="text-sm text-gray-600">CNIC: {studentData.cnic}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-green-600" />
                                            <div>
                                                <p className="font-semibold">Email</p>
                                                <p className="text-sm text-gray-600">{studentData.email}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-green-600" />
                                            <div>
                                                <p className="font-semibold">Phone</p>
                                                <p className="text-sm text-gray-600">{studentData.phone}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-5 w-5 text-green-600" />
                                            <div>
                                                <p className="font-semibold">Address</p>
                                                <p className="text-sm text-gray-600">{studentData.address}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <GraduationCap className="h-5 w-5 text-green-600" />
                                            <div>
                                                <p className="font-semibold">Course</p>
                                                <p className="text-sm text-gray-600">{studentData.course}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Calendar className="h-5 w-5 text-green-600" />
                                            <div>
                                                <p className="font-semibold">Registration Date</p>
                                                <p className="text-sm text-gray-600">
                                                    {new Date(studentData.registrationDate).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Section */}
                                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold">Course Progress</span>
                                            <span className="text-green-600 font-bold">{studentData.progress}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                                style={{ width: studentData.progress }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}
