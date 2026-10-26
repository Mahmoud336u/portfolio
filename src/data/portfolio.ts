export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  contribution: string;
  scope: string;
  technologies: string[];
  repository: string;
  caseStudy?: string;
}

export const profile = {
  name: 'Mahmoud Heshmat',
  title: 'AI & Data Engineer',
  github: 'https://github.com/Mahmoud336u',
  location: 'Egypt',
  introduction: [
    'Most AI projects die between the notebook and production.',
    'Not because the model is bad. Because the data pipeline breaks, the results can’t be reproduced, and deploying takes half a day.',
    'I’m the engineer who builds that missing layer: pipelines, experiment tracking, and infrastructure as code, from raw data to a running system. Data engineering and AI engineering, in one person.',
    'AWS Certified ML Engineer. See it in action ↓'
  ],
  about: 'I’m Mahmoud, an engineer based in Egypt with a focus on AI, machine learning, and data engineering. I’m interested in the whole path from raw data to a useful application: the backend, the pipeline, the model, and its deployment in the cloud.',
  approach: 'Independent projects give me room to explore engineering decisions. Freelance delivery has taught me to think about what happens after handover: validation, documentation, and systems a client can operate.',
};

// Add only verified, current documents and contact details. Empty arrays render no dead actions.
export interface Resume { label: 'AI Engineer Résumé' | 'Data Engineer Résumé'; href: string }
export const resumes: Resume[] = [
  { label: 'AI Engineer Résumé', href: '/resumes/Mahmoud_Heshmat_AI_Engineer_Resume.pdf' },
  { label: 'Data Engineer Résumé', href: '/resumes/Mahmoud_Heshmat_Data_Engineer_Resume.pdf' },
];
export const contact: { email?: string; linkedin?: string } = {
  email: 'mheshmat566@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mahmoud-heshmat-2455022b5/',
};

export const projects: Project[] = [
  {
    id: 'meridian', title: 'Meridian', subtitle: 'Personal finance, made understandable.',
    description: 'An AI personal finance assistant that categorizes transactions, forecasts spending, and uses each user’s transaction history to ground budgeting recommendations.',
    contribution: 'Built the classification and RAG workflows, orchestrated Plaid ingestion, and managed the Python services and MLOps delivery on AWS.',
    scope: 'Plaid Sandbox ingestion, transaction classification, monthly forecasts, and retrieval-grounded budgeting recommendations, with Python services on Lambda and ECS.',
    technologies: ['AWS', 'Python', 'RAG', 'XGBoost', 'TF-IDF', 'Terraform', 'Prophet', 'GitHub Actions', 'Docker'],
    repository: 'https://github.com/Mahmoud336u/Finance_Assistant_Blueprint-main_2',
    caseStudy: '/work/meridian/',
  },
  {
    id: 'multi-agent', title: 'AI Multi-Agent Platform', subtitle: 'Coordinating specialized AI agents.',
    description: 'An exploration of customer-support workflows: a supervisor routes requests to specialized agents and brings their responses together.',
    contribution: 'Developing a separate orchestration project around specialized agents and AWS-backed language models.',
    scope: 'Repository contains supervisor, order management, recommendation, troubleshooting, and personalization services. Runtime behavior has not been independently validated.',
    technologies: ['Python', 'LangGraph', 'Amazon Bedrock', 'pgvector', 'RAGAS'],
    repository: 'https://github.com/Mahmoud336u/AI-Multi-Agent-Platform-v1',
  },
];

export const expertise = [
  { number: '01', title: 'AI & machine learning', description: 'Classification, forecasting, and retrieval-grounded applications, with model evaluation and experiment tracking.', tools: ['Python', 'TensorFlow', 'PyTorch', 'XGBoost', 'TF-IDF', 'Prophet', 'RAG', 'LangGraph', 'RAGAS', 'MLflow'] },
  { number: '02', title: 'Data engineering', description: 'Batch and streaming ingestion, dimensional modeling, SQL transformations, orchestration, and data quality.', tools: ['SQL', 'Spark / PySpark', 'Apache Airflow', 'Kafka / MSK', 'Apache Beam', 'PostgreSQL', 'pgvector', 'MongoDB', 'Great Expectations', 'Tableau'] },
  { number: '03', title: 'Backend & cloud', description: 'Python APIs, containerized workloads, and repeatable AWS delivery through infrastructure and automated checks.', tools: ['FastAPI', 'AWS Lambda', 'ECS Fargate', 'Amazon Bedrock', 'S3 / RDS / ECR', 'Docker', 'Terraform', 'GitHub Actions', 'pytest', 'Prometheus'] },
];

export interface Certification {
  title: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
}
export const certifications: Certification[] = [
  { title: 'AWS Certified Machine Learning Engineer – Associate', issuer: 'Amazon Web Services', issued: 'September 2026' },
  { title: 'Data Engineering Professional Certification', issuer: 'DeepLearning.AI', issued: 'December 2025', credentialId: '93EL5KSKBY67' },
  { title: 'MLOps | Machine Learning Operations Professional Certification', issuer: 'Duke University', issued: 'December 2025', credentialId: '6YFKT4A3UGPQ' },
  { title: 'Kubernetes: Microservices', issuer: 'LinkedIn', issued: 'September 2025' },
  { title: 'Deep Learning Professional Certification', issuer: 'DeepLearning.AI', issued: 'March 2025', credentialId: '2DI1UG3GES1R' },
  { title: 'Google Data Analytics Professional Certification', issuer: 'Google', issued: 'December 2024' },
  { title: 'IBM AI Engineering Professional Certification', issuer: 'IBM', credentialId: '5GZWCQHK7VSB' },
];

export const experience = {
  title: 'Data Engineer',
  employment: 'Freelance',
  period: 'Nov 2024 – Feb 2025',
  context: 'E-commerce and telecom clients',
  summary: 'Data pipelines and analytics',
  bullets: [
    'Built three Spark ETL pipelines and repaired a fourth, integrating four CRM/ERP sources and processing approximately 100 GB per daily run using AWS S3, Kafka/MSK, and Airflow.',
    'Designed a PostgreSQL star schema, incremental UPSERTs, and SQL window-function transformations to prepare data for downstream analytics.',
    'Reduced a core 100 GB batch runtime from 4.5 to 1.5 hours on comparable workloads, shortening daily data-processing time by approximately 67%.',
    'Orchestrated daily Airflow runs with retries, failure alerts, and backfills; applied Great Expectations validation to support dependable pipeline operation.',
    'Delivered Tableau dashboards and Python/SQL customer segmentation and churn analysis; handed over DAGs, runbooks, and validation logs to client IT/Data Ops teams.',
  ],
};

export const meridianStudy = {
  problem: 'Personal spending data arrives as individual transactions. Meridian turns that history into categorized spending, monthly forecasts, and budgeting recommendations grounded in each user’s own transactions. Development and classification evaluation use sandbox data.',
  contribution: 'I built the finance assistant’s classification and RAG workflows and manage delivery across Python services on Lambda and ECS. Apache Airflow orchestrates Plaid ingestion, MLflow tracks experiments, and Docker, Terraform, and GitHub Actions support deployment.',
  decisions: [
    { title: 'Build a transaction-labeling workflow', text: 'The current classification workflow uses TensorFlow on approximately 75,000 sandbox transactions. Labels come from Llama 3 zero-shot classification mapped to 18 spending classes. Earlier résumé material describes XGBoost with TF-IDF transaction descriptions and merchant category codes; these are recorded as different accounts of the experiment, not a single verified model configuration.' },
    { title: 'Compare against a simpler baseline', text: 'The reported TensorFlow classifier reaches 0.94 macro-F1 against 0.82 for logistic regression. Earlier résumé material records a chronological holdout. Split dates and evaluation artifacts for the updated comparison have not been supplied, so the baseline comparison remains owner-reported.' },
    { title: 'Ground recommendations in personal history', text: 'The RAG workflow retrieves context from each user’s transaction history to produce budgeting recommendations. The reported RAGAS evaluation scores factual consistency at 88%. The exact evaluator configuration and evaluation set are not supplied.' },
    { title: 'Own the delivery workflow', text: 'Python services run on Lambda and ECS, with Airflow for Plaid ingestion and MLflow for experiment tracking. The reported deployment workflow uses Docker, Terraform, and GitHub Actions to reduce deployment time from more than 35 minutes to under 5. This describes delivery timing, not model inference latency.' },
  ],
  evaluations: [
    { value: '0.94', label: 'Macro-F1 · classification', context: 'Owner-reported TensorFlow result against a 0.82 logistic-regression baseline on approximately 75,000 sandbox transactions. Llama 3 zero-shot labels are mapped to 18 spending classes.' },
    { value: '88%', label: 'Factual consistency · RAGAS', context: 'Owner-reported evaluation of budgeting recommendations grounded in each user’s transaction history. Evaluation-set composition and evaluator configuration were not supplied.' },
    { value: '<5 min', label: 'Deployment time', context: 'Owner-reported reduction from more than 35 minutes using Docker, Terraform, and GitHub Actions. Timing logs and the exact measured deployment stages were not supplied.' },
    { value: '<6%', label: 'MAPE · spending forecasts', context: 'The supplied AI résumé reports Prophet MAPE below 6% for stable categories including utilities and groceries. Forecast horizon and category-specific evaluation reports were not supplied.' },
  ],
};
