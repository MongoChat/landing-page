import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DatabaseIcon,
  ShieldIcon,
  BarChartIcon,
  LinkIcon,
  CpuIcon,
  ClockIcon,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Natural Language Queries",
      description:
        "Ask questions in plain English and get your MongoDB data instantly. No more complex query syntax.",
      icon: <CpuIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Real-time Results",
      description:
        "Get instant responses to your queries with real-time data processing and dynamic results.",
      icon: <ClockIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Secure Access",
      description:
        "Enterprise-grade security with role-based access control and encrypted data transmission.",
      icon: <ShieldIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Smart Schema Detection",
      description:
        "Automatically understands your database schema and optimizes queries accordingly.",
      icon: <DatabaseIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Advanced Analytics",
      description:
        "Get insights and visualizations from your data with built-in analytics capabilities.",
      icon: <BarChartIcon className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Seamless Integration",
      description:
        "Easy integration with existing MongoDB databases and applications.",
      icon: <LinkIcon className="w-10 h-10 text-green-600" />,
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xl text-center py-5 text-green-600">Features</p>
        <h2 className="text-center text-4xl font-bold mb-4">
          Natural Language Meets MongoDB Power
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Transform how you interact with your database through intuitive
          conversations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center p-6 rounded-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
