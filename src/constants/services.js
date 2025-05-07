import MedicalBillingIcon from '../assets/svgs/medicalBillingIcon';
import CredentialingIcon from '../assets/svgs/credentialingIcon';
import CheckIcon from '../assets/svgs/checkIcon';
import ChartAuditingIcon from '../assets/svgs/chartAuditingIcon';
import SystemExpertiseIcon from '../assets/svgs/systemExpertiseIcon';
import TrainingIcon from '../assets/svgs/trainingIcon';
import FollowUpIcon from '../assets/svgs/followUpIcon'; 
import PatientBillingIcon from '../assets/svgs/patientBillingIcon';
import VerificationIcon from '../assets/svgs/verificationIcon';

const cardData = [
  {
    id: 1,
    Icon: MedicalBillingIcon ,
    title: "Medical Billing & Coding",
    desc: "CPT/ICD-10/HCPCS coding accuracy Claim scrubbing, submission, follow-ups Denial management & appeals"
  },
  {
    id: 2,
    Icon: CredentialingIcon,
    title: "Credentialing & Enrollment",
    desc: "Medicare, Medicaid, Commercial plans Delegated group enrollments Ongoing maintenance and re-attestations"
  },
  {
    id: 3,
    Icon: CheckIcon,
    title: "Revenue Cycle Optimization",
    desc: "A/R audits and clean-up Workflow refinement KPI reporting for executives"
  },
  {
    id: 4,
    Icon: ChartAuditingIcon,
    title: "Chart Auditing & Compliance",
    desc: "Risk Adjustment (HCC), MIPS/MACRA Coding audits (CPT/ICD/DRG) Compliance gap analysis"
  },
  {
    id: 5,
    Icon: SystemExpertiseIcon,
    title: "System Expertise",
    desc: "eClinicalWorks, AdvancedMD, Kareo, Charm, Office Ally, Athena, etc. Template customization & EHR optimization"
  },
  {
    id: 6,
    Icon: TrainingIcon,
    title: "Training & Consulting",
    desc: "Staff onboarding CDI education One-on-one strategy calls"
  },
  {
    id: 7,
    Icon: FollowUpIcon,
    title: "A/R Follow-Up (30–120+ Days)",
    desc: "Proactive follow-up to clean aging A/R and speed up collections."
  },
  {
    id: 8,
    Icon: PatientBillingIcon,
    title: "Patient Billing & Collections",
    desc: "Clear, friendly billing communication and collection handling."
  },
  {
    id: 9,
    Icon: VerificationIcon,
    title: "Insurance Verification & Pre-Authorization",
    desc: "Verify eligibility and secure pre-auths before service delivery."
  }
];

export default cardData;