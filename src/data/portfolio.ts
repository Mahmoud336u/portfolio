export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  contribution: string;
  scope: string;
  technologies: string[];
  repository: string;
  caseStudy?: string;
}

export const profile = {
  name: 'Mahmoud Heshmat',
  title: 'AI Engineer | Machine Learning & Data Engineering',
  github: 'https://github.com/Mahmoud336u',
  location: 'Egypt',
  intro: 'I build Python backends, machine learning workflows, and data pipelines — connecting useful models to the systems that put them to work.',
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
    status: 'Personal / beta project',
    description: 'Turning test banking transactions into categorized spending and monthly forecasts, with a Python API connecting the pieces.',
    contribution: 'Built the finance assistant workflow across transaction ingestion, categorization, forecasting, and backend delivery.',
    scope: 'Owner-reported MVP: Plaid Sandbox accounts, categorized transactions, monthly forecasts, and personal/beta deployment on AWS ECS Fargate.',
    technologies: ['Python', 'FastAPI', 'XGBoost', 'Prophet', 'AWS ECS'],
    repository: 'https://github.com/Mahmoud336u/Finance_Assistant_Blueprint-main_2',
    caseStudy: '/work/meridian/',
  },
  {
    id: 'multi-agent', title: 'AI Multi-Agent Platform', subtitle: 'Coordinating specialized AI agents.',
    status: 'Independent project · in development',
    description: 'An exploration of customer-support workflows: a supervisor routes requests to specialized agents and brings their responses together.',
    contribution: 'Developing a separate orchestration project around specialized agents and AWS-backed language models.',
    scope: 'Repository contains supervisor, order management, recommendation, troubleshooting, and personalization services. Runtime behavior has not been independently validated.',
    technologies: ['Python', 'LangGraph', 'FastAPI', 'Amazon Bedrock'],
    repository: 'https://github.com/Mahmoud336u/AI-Multi-Agent-Platform-v1',
  },
];

export const expertise = [
  { number: '01', title: 'AI & machine learning', description: 'From feature construction and model evaluation to retrieval workflows that connect language models with useful context.', tools: ['Python', 'PyTorch', 'XGBoost', 'MLflow', 'Retrieval-augmented generation'] },
  { number: '02', title: 'Data engineering', description: 'Ingestion, transformation, and validation — with scheduling, recovery, and downstream reporting in mind.', tools: ['SQL', 'PostgreSQL', 'Apache Airflow', 'Spark', 'Kafka'] },
  { number: '03', title: 'Backend & cloud', description: 'APIs and containerized services, supported by repeatable infrastructure and deployment workflows.', tools: ['FastAPI', 'Docker', 'AWS', 'Terraform', 'GitHub Actions'] },
];

export const experience = {
  title: 'Freelance Data Analyst',
  period: 'November 2024 — February 2025',
  context: 'E-commerce & telecom · separate client engagements',
  summary: 'Delivered analytical workflows and reporting for e-commerce and telecom clients, with an emphasis on daily operation and a practical handover.',
  bullets: [
    { title: 'Data, ready each morning.', text: 'Built daily batch pipelines using Apache Spark and Apache Airflow, scheduled for 2:00 AM. Reliability measures included retries, email/Slack alerts, and backfill support.' },
    { title: 'Analysis with a delivery path.', text: 'Used SQL and Python for customer segmentation and churn analysis, and developed Tableau dashboards for business reporting. Worked with PostgreSQL and MongoDB across the engagements, with GitLab CI/CD supporting delivery.' },
    { title: 'Designed for the handover.', text: 'Prepared runbooks and Great Expectations validation logs so clients could operate the pipelines after the engagement. This was a delivery and handover scope, without ongoing on-call responsibility.' },
  ],
};

export const meridianStudy = {
  problem: 'Personal spending data arrives as individual transactions. The aim of Meridian is to turn those records into a readable view of where money goes and an estimate of the coming month’s spending. The intended setting is personal exploration and beta testing with test banking accounts.',
  contribution: 'My owner-reported scope covers the FastAPI backend, transaction ingestion, the classification and forecasting workflow, and deployment for personal/beta use. The repository also contains financial data models, CSV and Plaid-payload normalization, category summaries, Docker Compose configuration, and a separate retrieval implementation.',
  decisions: [
    { title: 'Construct features from transaction context', text: 'The reported classification experiment combines TF-IDF features from transaction descriptions with merchant category codes, using XGBoost. This describes the experiment supplied for this portfolio; the inspected core.py instead contains keyword-based categorization. The trained model and feature pipeline still need to be linked to a reproducible artifact.' },
    { title: 'Evaluate in chronological order', text: 'The reported experiment uses a chronological train/test split. This tests on later transactions rather than mixing all dates randomly. The split dates, per-class results, and leakage checks were not supplied, so the reported score is bounded by that missing context.' },
    { title: 'Keep local dependencies explicit', text: 'The repository’s Docker Compose file defines the API, PostgreSQL with pgvector, and Redis, with dependency health checks and a source mount for development. This makes the intended local topology inspectable; it does not demonstrate a successful cloud rollout.' },
    { title: 'Separate the finance MVP from the RAG roadmap', text: 'The current README describes an enterprise RAG delivery plan, and source files include document chunking and Bedrock embeddings. Those are separate from the finance MVP described here. Multi-region resilience, availability targets, and roadmap milestones are not presented as achieved results.' },
  ],
  evaluations: [
    { value: '≈0.94', label: 'Macro-F1 · classification', context: 'Owner-reported XGBoost result on approximately 75,000 Plaid Sandbox and synthetic records, using TF-IDF, merchant category codes, and a chronological train/test split.' },
    { value: '<6%', label: 'MAPE · stable categories', context: 'Owner-reported Prophet forecasting result for stable spending categories. Forecast horizon, category definitions, and evaluation logs were not supplied; this is not an overall or guaranteed error rate.' },
  ],
  limitations: [
    'Sandbox and synthetic data do not establish performance on real customer transactions. No adoption or production traffic is claimed.',
    'The earlier “5,000+ daily transactions” figure refers to a synthetic PostgreSQL pgbench benchmark, not customer usage; it is not used as a headline result.',
    'AWS ECS Fargate deployment is owner-reported historical personal/beta use. No current live endpoint was supplied or verified.',
    'The reported ML experiment differs from the current keyword-based core. The next documentation step is to reconcile versions and attach training code, split dates, and evaluation artifacts.',
  ],
};
