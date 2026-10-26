// Portfolio content.
// Every field added in this revision is OPTIONAL and additive, so existing components keep
// compiling. The page only changes where a component actually reads a new field.

export interface ProjectHighlight {
  value: string;
  label: string;
}

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
  /** Plain-language status for the card, e.g. "In progress". */
  status?: string;
  /** One or two headline results for the card. */
  highlights?: ProjectHighlight[];
  /** Short qualifier shown under the highlights. */
  highlightsNote?: string;
}

// The hook is the hero headline. It is also kept in `introduction` below so the current hero
// still reads well until the Hero component is switched over to `headline` / `subhead`.
const hook = {
  lead: 'Most AI projects die between',
  accent: 'the notebook and production.',
};
const subhead =
  'I build the layer that keeps them alive: pipelines, experiment tracking, and infrastructure as code. Data engineering and AI engineering, in one person.';

export const profile = {
  name: 'Mahmoud Heshmat',
  title: 'AI & Data Engineer',
  github: 'https://github.com/Mahmoud336u',
  location: 'Egypt',
  availability: 'Open to remote roles and European relocation',

  // New hero fields: H1 in two parts (sans lead, serif accent), one short subhead, proof strip.
  headline: hook,
  subhead,
  proof: [
    { value: '~100 GB', label: 'processed per daily pipeline run' },
    { value: '4.5 h → 1.5 h', label: 'core batch runtime' },
    { value: '0.94', label: 'macro-F1 · sandbox data' },
    { value: 'AWS', label: 'Certified ML Engineer – Associate' },
  ],

  // Legacy hero copy (trimmed from four paragraphs to two).
  introduction: [`${hook.lead} ${hook.accent}`, subhead],

  about:
    'I’m Mahmoud, an AI and data engineer in Cairo. I build the whole path from raw data to a running system: the pipeline, the model, and the cloud deployment.',
  approach:
    'Freelance delivery taught me what decides whether a system gets used: validation, documentation, and a handover the client’s team can actually operate. My independent projects are where I test those decisions end to end.',
};

// Add only verified, current documents and contact details. Empty arrays render no dead actions.
export interface Resume { label: 'AI Engineer Résumé' | 'Data Engineer Résumé'; href: string }
export const resumes: Resume[] = [
  { label: 'AI Engineer Résumé', href: '/resumes/Mahmoud_Heshmat_AI_Engineer_Resume.pdf' },
  { label: 'Data Engineer Résumé', href: '/resumes/Mahmoud_Heshmat_Data_Engineer_Resume.pdf' },
];

export const contact: { email?: string; linkedin?: string; message?: string } = {
  email: 'mheshmat566@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mahmoud-heshmat-2455022b5/',
  message:
    'I’m looking for AI Engineer and Data Engineer roles, remote or in Europe. Email me about a role or connect on LinkedIn.',
};

export const projects: Project[] = [
  {
    id: 'meridian', title: 'Meridian', subtitle: 'Personal finance, made understandable.',
    description: 'An AI personal finance assistant that categorizes transactions, forecasts spending, and uses each user’s transaction history to ground budgeting recommendations.',
    contribution: 'Built the classification and RAG workflows, orchestrated Plaid ingestion, and managed the Python services and MLOps delivery on AWS.',
    scope: 'Plaid Sandbox ingestion, transaction classification, monthly forecasts, and retrieval-grounded budgeting recommendations, with Python services on Lambda and ECS.',
    technologies: ['AWS', 'Python', 'TensorFlow', 'RAG', 'Prophet', 'Terraform', 'GitHub Actions', 'Docker'],
    repository: 'https://github.com/Mahmoud336u/Finance_Assistant_Blueprint-main_2',
    caseStudy: '/work/meridian/',
    status: 'MVP built · full version in progress',
    highlights: [
      { value: '0.94', label: 'macro-F1 · sandbox data' },
      { value: '88%', label: 'RAGAS factual consistency' },
    ],
    highlightsNote: 'Self-reported results. Method and caveats are on the case study.',
  },
  {
    id: 'multi-agent', title: 'AI Multi-Agent Platform', subtitle: 'Coordinating specialized AI agents.',
    description: 'A supervisor agent routes customer-support requests to specialist agents and combines their responses into a single answer.',
    contribution: 'Building a separate orchestration project around a LangGraph supervisor and specialist agents, backed by Amazon Bedrock language models.',
    scope: 'The repository includes supervisor, order-management, recommendation, troubleshooting, and personalization services. Runtime behavior has not been independently validated.',
    technologies: ['Python', 'LangGraph', 'Amazon Bedrock', 'pgvector', 'RAGAS'],
    repository: 'https://github.com/Mahmoud336u/AI-Multi-Agent-Platform-v1',
    status: 'In progress',
    // TODO(owner): add one verified result here (for example a RAGAS score or routing accuracy)
    // as `highlights` once you have a number you can stand behind.
  },
];

export const expertise = [
  {
    number: '01', title: 'AI & machine learning',
    description: 'Classification, forecasting, and retrieval-grounded applications, with model evaluation and experiment tracking.',
    tools: ['Python', 'TensorFlow', 'PyTorch', 'XGBoost', 'TF-IDF', 'Prophet', 'RAG', 'LangGraph', 'RAGAS', 'MLflow'],
    // `featured` = tools backed by a project or role elsewhere on this page. Emphasize these.
    featured: ['Python', 'TensorFlow', 'Prophet', 'RAG', 'LangGraph', 'RAGAS', 'MLflow'],
  },
  {
    number: '02', title: 'Data engineering',
    description: 'Batch and streaming ingestion, dimensional modeling, SQL transformations, orchestration, and data quality.',
    tools: ['SQL', 'Spark / PySpark', 'Apache Airflow', 'Kafka / MSK', 'Apache Beam', 'PostgreSQL', 'pgvector', 'MongoDB', 'Great Expectations', 'Tableau'],
    featured: ['SQL', 'Spark / PySpark', 'Apache Airflow', 'Kafka / MSK', 'Apache Beam', 'PostgreSQL', 'pgvector', 'Great Expectations', 'Tableau'],
  },
  {
    number: '03', title: 'Backend & cloud',
    description: 'Python APIs, containerized workloads, and repeatable AWS delivery through infrastructure and automated checks.',
    tools: ['FastAPI', 'AWS Lambda', 'ECS Fargate', 'Amazon Bedrock', 'S3 / RDS / ECR', 'Docker', 'Terraform', 'GitHub Actions', 'pytest', 'Prometheus'],
    featured: ['AWS Lambda', 'ECS Fargate', 'Amazon Bedrock', 'S3 / RDS / ECR', 'Docker', 'Terraform', 'GitHub Actions'],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  /** Verification / badge link (Credly or the issuer's page). */
  url?: string;
  /** Featured certifications render prominently; the rest can collapse under "More". */
  featured?: boolean;
}

// Sorted newest first.
export const certifications: Certification[] = [
  // TODO(owner): add `url` (Credly or AWS verification link) so the AWS card is verifiable.
  { title: 'AWS Certified Machine Learning Engineer – Associate', issuer: 'Amazon Web Services', issued: 'September 2026', featured: true },
  { title: 'Data Engineering Professional Certification', issuer: 'DeepLearning.AI', issued: 'December 2025', featured: true },
  { title: 'MLOps | Machine Learning Operations Professional Certification', issuer: 'Duke University', issued: 'December 2025', featured: true },
  { title: 'Kubernetes: Microservices', issuer: 'LinkedIn', issued: 'September 2025' },
  { title: 'Deep Learning Professional Certification', issuer: 'DeepLearning.AI', issued: 'March 2025' },
  { title: 'IBM AI Engineering Professional Certification', issuer: 'IBM', issued: 'February 2025' },
  { title: 'Google Data Analytics Professional Certification', issuer: 'Google', issued: 'December 2024' },
];

export interface Language { language: string; level: string; note?: string }
export const languages: Language[] = [
  { language: 'Arabic', level: 'Native' },
  { language: 'English', level: 'C1' },
  // Add `note: 'Goethe-Zertifikat B2'` here once you hold the certificate; DACH employers ask.
  { language: 'German', level: 'B2' },
];

export interface ExperienceEntry {
  title: string;
  /** Small label above the title, e.g. "Freelance" or "Independent project". */
  employment: string;
  period?: string;
  context: string;
  summary: string;
  /** Small muted line under the context in the left column. */
  note?: string;
  /** Small muted line under the bullets. */
  scopeNote?: string;
  bullets: string[];
  /** Substrings to bold inside the bullets (not rendered yet). */
  emphasis?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Data Engineer',
    employment: 'Freelance',
    period: 'Nov 2024 – Feb 2025',
    context: 'E-commerce and telecom clients',
    summary: 'Data pipelines and analytics',
    note: 'Separate client engagements',
    scopeNote: 'Contributions are summarized across separate e-commerce and telecom engagements; this does not imply a shared system or identical stacks.',
    // Strongest result first.
    bullets: [
      'Reduced a core 100 GB batch runtime from 4.5 to 1.5 hours on comparable workloads, shortening daily data-processing time by approximately 67%.',
      'Built three Spark ETL pipelines and repaired a fourth, integrating four CRM/ERP sources and processing approximately 100 GB per daily run using AWS S3, Kafka/MSK, and Airflow.',
      'Orchestrated daily Airflow runs with retries, failure alerts, and backfills; applied Great Expectations validation to support dependable pipeline operation.',
      'Designed a PostgreSQL star schema, incremental UPSERTs, and SQL window-function transformations to prepare data for downstream analytics.',
      'Delivered Tableau dashboards and Python/SQL customer segmentation and churn analysis; handed over DAGs, runbooks, and validation logs to client IT/Data Ops teams.',
    ],
    emphasis: ['4.5 to 1.5 hours', '67%', '100 GB', 'three Spark ETL pipelines'],
  },
  {
    // Labeled as an independent project on purpose: the data is a replayed public dataset, not client data.
    // If this was done for a client, change `employment` to 'Freelance' and add a `period`.
    title: 'Churn prediction system',
    employment: 'Independent project',
    context: 'Public dataset · simulated live traffic',
    summary: 'Streaming data and applied ML',
    scopeNote: 'Results are self-reported. Traffic is replayed from a public dataset to simulate live use; it is not production data.',
    bullets: [
      'Built a churn prediction model on the DeepSeek API that raised ROC-AUC by 18% relative (from a 0.72 random forest baseline to 0.85) on 150,000 customer profiles, using the LLM for zero-shot sentiment extraction from support logs.',
      'Streamed more than 2.5 million replayed interaction events per day from a public dataset through Apache Kafka and Apache Beam pipelines to simulate live traffic.',
      'Validated upstream data with 45+ Great Expectations checks on schema and quality, preventing pipeline failures from corrupted inputs.',
      'Containerized the application with Docker, deployed it on AWS ECS, and scheduled automated model retraining in Apache Airflow, triggered when Population Stability Index (PSI) drift alerts exceeded a 0.2 threshold.',
    ],
    emphasis: ['0.72', '0.85', '2.5 million', '45+', '0.2 threshold'],
  },
];

export const meridianStudy = {
  // First-screen summary of the outcome, shown before any architecture detail.
  outcome: 'A TensorFlow classifier that beats a logistic-regression baseline (0.94 vs 0.82 macro-F1), a RAG workflow scoring 88% factual consistency on RAGAS, and a deployment pipeline that runs in under 5 minutes.',
  outcomeNote: 'Self-reported results on sandbox data.',
  problem: 'Personal spending data arrives as individual transactions. Meridian turns that history into categorized spending, monthly forecasts, and budgeting recommendations grounded in each user’s own transactions. Development and classification evaluation use sandbox data.',
  contribution: 'I built the finance assistant’s classification and RAG workflows and manage delivery across Python services on Lambda and ECS. Apache Airflow orchestrates Plaid ingestion, MLflow tracks experiments, and Docker, Terraform, and GitHub Actions support deployment.',
  decisions: [
    {
      title: 'Build a transaction-labeling workflow',
      text: 'The current classification workflow trains a TensorFlow model on approximately 75,000 sandbox transactions. Labels come from Llama 3 zero-shot classification mapped to 18 spending classes.',
    },
    {
      title: 'Compare against a simpler baseline',
      text: 'The TensorFlow classifier reaches 0.94 macro-F1 against 0.82 for logistic regression, evaluated on a chronological holdout of the approximately 75,000 sandbox records. These figures are self-reported; the split dates and evaluation artifacts are not documented here yet.',
    },
    {
      title: 'Ground recommendations in personal history',
      text: 'The RAG workflow retrieves context from each user’s transaction history to produce budgeting recommendations. RAGAS scores its factual consistency at 88% (self-reported; the evaluation set and evaluator configuration are not documented here yet).',
    },
    {
      title: 'Own the delivery workflow',
      text: 'Python services run on Lambda and ECS, with Airflow for Plaid ingestion and MLflow for experiment tracking. Docker, Terraform, and GitHub Actions cut deployment time from more than 35 minutes to under 5 (self-reported). This measures delivery time, not model inference latency.',
    },
  ],
  evaluations: [
    { value: '0.94', label: 'Macro-F1 · classification', context: 'Self-reported TensorFlow result against a 0.82 logistic-regression baseline on approximately 75,000 sandbox transactions, evaluated on a chronological holdout. Llama 3 zero-shot labels are mapped to 18 spending classes.' },
    { value: '88%', label: 'Factual consistency · RAGAS', context: 'Self-reported RAGAS score for budgeting recommendations grounded in each user’s transaction history. Evaluation set and evaluator configuration are not documented here yet.' },
    { value: '<5 min', label: 'Deployment time', context: 'Self-reported reduction from more than 35 minutes using Docker, Terraform, and GitHub Actions. Timing logs and the measured deployment stages are not documented here yet.' },
    { value: '<6%', label: 'MAPE · spending forecasts', context: 'Self-reported Prophet MAPE below 6% on stable categories such as utilities and groceries. High-variance discretionary spending is excluded from the forecast. Forecast horizon and category-level reports are not documented here yet.' },
  ],
};
