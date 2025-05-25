"use client"
/* eslint-disable */
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, DollarSign, GraduationCap, TrendingUp, Download, Eye } from "lucide-react"

export default function AdminDashboard() {
    const [searchTerm, setSearchTerm] = useState("")

    // Mock data for users
    const mockUsers = [
        {
            id: 1,
            fullName: "Ahmed Ali Khan",
            cnic: "12345-6789012-3",
            email: "ahmed.ali@example.com",
            phone: "+92-300-1234567",
            course: "Web Development",
            registrationDate: "2024-01-15",
            status: "Active",
        },
        {
            id: 2,
            fullName: "Fatima Sheikh",
            cnic: "98765-4321098-7",
            email: "fatima.sheikh@example.com",
            phone: "+92-301-9876543",
            course: "Digital Marketing",
            registrationDate: "2024-02-20",
            status: "Completed",
        },
        {
            id: 3,
            fullName: "Muhammad Hassan",
            cnic: "11111-2222233-4",
            email: "hassan.m@example.com",
            phone: "+92-302-1111222",
            course: "Mobile App Development",
            registrationDate: "2024-03-10",
            status: "Active",
        },
        {
            id: 4,
            fullName: "Aisha Malik",
            cnic: "55555-6666677-8",
            email: "aisha.malik@example.com",
            phone: "+92-303-5555666",
            course: "Graphic Design",
            registrationDate: "2024-03-25",
            status: "Pending",
        },
        {
            id: 5,
            fullName: "Omar Farooq",
            cnic: "99999-8888877-6",
            email: "omar.farooq@example.com",
            phone: "+92-304-9999888",
            course: "Data Science",
            registrationDate: "2024-04-05",
            status: "Active",
        },
    ]

    // Mock data for donations
    const mockDonations = [
        {
            id: 1,
            name: "Ali Ahmad",
            email: "ali.ahmad@example.com",
            amount: 5000,
            donationType: "Education Programs",
            paymentMethod: "Card",
            date: "2024-01-20",
            status: "Completed",
        },
        {
            id: 2,
            name: "Sara Khan",
            email: "sara.khan@example.com",
            amount: 2500,
            donationType: "Healthcare Services",
            paymentMethod: "JazzCash",
            date: "2024-02-15",
            status: "Completed",
        },
        {
            id: 3,
            name: "Hassan Ali",
            email: "hassan.ali@example.com",
            amount: 10000,
            donationType: "General Welfare",
            paymentMethod: "Bank",
            date: "2024-03-01",
            status: "Completed",
        },
        {
            id: 4,
            name: "Zainab Sheikh",
            email: "zainab.sheikh@example.com",
            amount: 1500,
            donationType: "Food Distribution",
            paymentMethod: "Easypaisa",
            date: "2024-03-15",
            status: "Pending",
        },
        {
            id: 5,
            name: "Usman Malik",
            email: "usman.malik@example.com",
            amount: 7500,
            donationType: "Emergency Relief",
            paymentMethod: "Card",
            date: "2024-04-10",
            status: "Completed",
        },
    ]

    const filteredUsers = mockUsers.filter(
        (user) =>
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.cnic.includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.course.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const filteredDonations = mockDonations.filter(
        (donation) =>
            donation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            donation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            donation.donationType.toLowerCase().includes(searchTerm.toLowerCase()),
    )

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

    const totalUsers = mockUsers.length
    const totalDonations = mockDonations.reduce((sum, donation) => sum + donation.amount, 0)
    const activeCourses = [...new Set(mockUsers.map((user) => user.course))].length
    const completedDonations = mockDonations.filter((d) => d.status === "Completed").length

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
                    <p className="text-gray-600">Manage users, donations, and monitor system performance</p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                                    <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
                                </div>
                                <Users className="h-8 w-8 text-blue-600" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Total Donations</p>
                                    <p className="text-2xl font-bold text-gray-900">PKR {totalDonations.toLocaleString()}</p>
                                </div>
                                <DollarSign className="h-8 w-8 text-green-600" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Active Courses</p>
                                    <p className="text-2xl font-bold text-gray-900">{activeCourses}</p>
                                </div>
                                <GraduationCap className="h-8 w-8 text-purple-600" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Completed Donations</p>
                                    <p className="text-2xl font-bold text-gray-900">{completedDonations}</p>
                                </div>
                                <TrendingUp className="h-8 w-8 text-orange-600" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Search Bar */}
                <Card className="mb-6">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    placeholder="Search users, donations, CNIC, email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Button variant="outline">
                                <Download className="h-4 w-4 mr-2" />
                                Export
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Tabs for Users and Donations */}
                <Tabs defaultValue="users" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="users">Users Management</TabsTrigger>
                        <TabsTrigger value="donations">Donations Management</TabsTrigger>
                    </TabsList>

                    <TabsContent value="users">
                        <Card>
                            <CardHeader>
                                <CardTitle>Registered Users ({filteredUsers.length})</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>CNIC</TableHead>
                                                <TableHead>Email</TableHead>
                                                <TableHead>Phone</TableHead>
                                                <TableHead>Course</TableHead>
                                                <TableHead>Registration Date</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredUsers.map((user) => (
                                                <TableRow key={user.id}>
                                                    <TableCell className="font-medium">{user.fullName}</TableCell>
                                                    <TableCell>{user.cnic}</TableCell>
                                                    <TableCell>{user.email}</TableCell>
                                                    <TableCell>{user.phone}</TableCell>
                                                    <TableCell>{user.course}</TableCell>
                                                    <TableCell>{new Date(user.registrationDate).toLocaleDateString()}</TableCell>
                                                    <TableCell>
                                                        <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant="outline" size="sm">
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="donations">
                        <Card>
                            <CardHeader>
                                <CardTitle>Donation Records ({filteredDonations.length})</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Donor Name</TableHead>
                                                <TableHead>Email</TableHead>
                                                <TableHead>Amount (PKR)</TableHead>
                                                <TableHead>Donation Type</TableHead>
                                                <TableHead>Payment Method</TableHead>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredDonations.map((donation) => (
                                                <TableRow key={donation.id}>
                                                    <TableCell className="font-medium">{donation.name}</TableCell>
                                                    <TableCell>{donation.email}</TableCell>
                                                    <TableCell className="font-semibold">PKR {donation.amount.toLocaleString()}</TableCell>
                                                    <TableCell>{donation.donationType}</TableCell>
                                                    <TableCell>{donation.paymentMethod}</TableCell>
                                                    <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
                                                    <TableCell>
                                                        <Badge className={getStatusColor(donation.status)}>{donation.status}</Badge>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant="outline" size="sm">
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
