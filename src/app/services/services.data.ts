import { i } from "framer-motion/client";
import {
  Building2,
  Layers3,
  Calculator,
  Map,
  Briefcase,
  Printer,
} from "lucide-react";

export const services = [
  {
    slug: "approval-drawing",
    title: "Approval Drawing",
    tamil: "கட்டட அனுமதி வரைபடம்",
    shortDescription:
      "Professional approval drawings prepared according to local authority regulations.",
    longDescription: `
We prepare detailed approval drawings that comply with local government
and urban development authority regulations. Our drawings ensure smooth
approval processes and avoid unnecessary delays.

This service includes:
• Floor plans
• Elevation drawings
• Section drawings
• Submission-ready formats
    `,
    icon: Building2,
  },
  {
    slug: "3d-design",
    title: "3D Design",
    tamil: "முப்பரிமாண வடிவமைப்பு",
    shortDescription:
      "High-quality 3D exterior and interior designs.",
    longDescription: `
We create realistic 3D exterior and interior designs to help you visualize
your building before construction begins.

This service includes:
• Exterior 3D views
• Interior 3D views
• Material & lighting visualization
• Client revisions
    `,
    icon: Layers3,
  },
  {
    slug: "building-estimate",
    title: "Building Estimate (BOQ)",
    tamil: "கட்டட மதிப்பீடு",
    shortDescription:
      "Accurate cost estimation and BOQ preparation.",
    longDescription: `
We provide precise building cost estimates and BOQ documents to help you
plan your construction budget efficiently.

This service includes:
• Material quantity calculation
• Labor cost estimation
• BOQ documentation
• Budget consultation
    `,
    icon: Calculator,
  },
  {
    slug: "survey-plan",
    title: "Survey Plan",
    tamil: "நில அளவையியல் வரைபடம்",
    shortDescription:
      "Detailed land survey plans.",
    longDescription: `
We prepare accurate land survey plans required for approvals and
construction planning.

This service includes:
• Boundary marking
• Land measurement
• Survey reports
• Authority-compliant plans
    `,
    icon: Map,
  },
  {
    slug: "building-consultancy",
    title: "Building Consultancy",
    tamil: "கட்டட ஆலோசனை",
    shortDescription:
      "Expert consultancy for construction projects.",
    longDescription: `
Our consultancy services guide you through every stage of construction,
from planning to execution.

This service includes:
• Design consultation
• Budget planning
• Technical guidance
• Site coordination
    `,
    icon: Briefcase,
  },
  {
    slug: "a1-a2-print",
    title: "A1 & A2 Print",
    tamil: "A1 & A2 அச்சிடல்",
    shortDescription:
      "Large-format printing services.",
    longDescription: `
We provide high-quality A1 and A2 printing services for drawings,
approval plans, and presentations.

This service includes:
• Plan printing
• High-resolution output
• Quick turnaround
• Affordable pricing
    `,
    icon: Printer,
  },
];
