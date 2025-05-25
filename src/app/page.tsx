"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Users,
  GraduationCap,
  Stethoscope,
  Home,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react"
import { useEffect } from "react"

export default function SaylaniWelfareLanding() {

  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "3d46b2568c06c125a1c32d746d748bea",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = d.getElementsByTagName("head")[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Saylani Welfare Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-green-600">Saylani Welfare</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                About Us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Services
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Programs
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Donate
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </Link>
            </nav>

            <Button className="bg-green-600 hover:bg-green-700 text-white">Donate Now</Button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white px-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Serving Humanity with
                <span className="text-green-200"> Compassion</span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                Saylani Welfare International Trust is dedicated to providing free services to humanity regardless of
                race, religion, or social status. Join us in making a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 cursor-pointer">
                  <Heart className="mr-2 h-5 w-5" />
                  Make a Donation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-green-600 hover:bg-green-50 cursor-pointer"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img1.jpeg"
                alt="Saylani Welfare Services"
                width={800}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive welfare services to support communities and individuals in need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="text-gray-600">Free education and skill development programs for all ages</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
                <p className="text-gray-600">Free medical services and healthcare facilities</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Housing</h3>
                <p className="text-gray-600">Shelter and housing assistance for the homeless</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">Community development and social welfare programs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-green-100">Making a difference in communities worldwide</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-green-200">Students Educated</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-green-200">Patients Treated</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25K+</div>
              <div className="text-green-200">Families Helped</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-green-200">Programs Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to address various social needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/img2.jpg"
                alt="Education Program"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Free Education Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Providing quality education to underprivileged children and adults through our comprehensive learning
                  programs.
                </p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/img3.jpg"
                alt="Healthcare Program"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Healthcare Services</h3>
                <p className="text-gray-600 mb-4">
                  Free medical consultations, treatments, and healthcare facilities for those who cannot afford medical
                  care.
                </p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/img4.jpg"
                alt="Food Program"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Food Distribution</h3>
                <p className="text-gray-600 mb-4">
                  Daily meal programs and food distribution to ensure no one goes hungry in our communities.
                </p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your support can help us continue our mission of serving humanity. Every contribution, no matter how small,
            makes a significant impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 cursor-pointer">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 cursor-pointer">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">Saylani Welfare</span>
              </div>
              <p className="text-gray-400 mb-4">
                Serving humanity with compassion and dedication since our establishment.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    News & Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Housing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Food Distribution
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+92-21-111-729-526</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@saylaniwelfare.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Saylani Welfare International Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
