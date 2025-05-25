import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold text-green-600">
                        Saylani Welfare
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-green-600">
                            Home
                        </Link>
                        <Link href="/courses" className="text-gray-700 hover:text-green-600">
                            Courses
                        </Link>
                        <Link href="/student-portal" className="text-gray-700 hover:text-green-600">
                            Student Portal
                        </Link>
                        <Link href="/faq" className="text-gray-700 hover:text-green-600">
                            FAQ
                        </Link>
                        <Link href="/donate" className="text-gray-700 hover:text-green-600">
                            Donate
                        </Link>
                        <Link href="/admin" className="text-gray-700 hover:text-green-600">
                            Admin
                        </Link>
                    </div>

                    <Button asChild className="bg-green-600 hover:bg-green-700">
                        <Link href="/donate">Donate Now</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}
