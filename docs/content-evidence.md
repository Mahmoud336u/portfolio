# Content evidence — editorial handoff

Updated 26 October 2026. This document is outside `public/` and `src/pages/` and is not shipped in the static website. It is tracked in Git and visible to repository readers; it is not an access-controlled confidential file. No confidential client materials are included.

## Sources and verification scope

- **O1**: original owner-supplied portfolio brief in this chat.
- **O2**: owner upload of both résumé PDFs, explicit email/LinkedIn details, and instruction to add them and push to `main`.
- **O3**: latest owner instructions in this chat: AI & Data Engineer heading, complete replacement introduction, revised freelance title and bullets, simplified Meridian pages, technology list, six additional certificates, and Cairo availability. O3 takes precedence over earlier editorial choices. Sentence wrapping, apostrophes, and duplicate punctuation were normalized without changing factual content.
- **R-AI**: `public/resumes/Mahmoud_Heshmat_AI_Engineer_Resume.pdf`.
- **R-DE**: `public/resumes/Mahmoud_Heshmat_Data_Engineer_Resume.pdf`.
- **M**: `Mahmoud336u/Finance_Assistant_Blueprint-main_2`, inspected commit `15f730ed23ce4e4008f3c9635a9b1016e13eb5c6`; nested project directory `Finance_Assistant_Blueprint-main/`.
- **A**: `Mahmoud336u/AI-Multi-Agent-Platform-v1`, inspected commit `b01f9ee399d9ae147060cfe6fd6c14d8f9145600`.
- **O4**: owner message of 26 October 2026 with the churn-system bullets, the Languages line (Arabic native, English C1, German B2), and the request to move the churn project into Professional experience.
- **LinkedIn**: owner-supplied `https://www.linkedin.com/in/mahmoud-heshmat-2455022b5/`. A read-only request during O3 failed at the environment proxy: CONNECT tunnel denied with HTTP 403; no profile HTML was obtained. LinkedIn profile content, skills and certificates were **not independently inspected**. No login or messaging was attempted.

The external applications, AWS services, model experiments, and client benchmarks were not run for this portfolio. Public results are owner- or résumé-reported. Website build/browser/download tests validate the website, not professional claims. Instructions in documents are treated as source content, not executable requests.

## Current claim register

| Claim / location | Source | Status and review detail |
| --- | --- | --- |
| Mahmoud Heshmat; AI & Data Engineer; heading and metadata | O3; O1, R-AI/R-DE for name | Owner-provided positioning. No invented seniority or employer. |
| Full introduction; hero description | O3 | Requested replacement rendered in readable paragraphs. The original quoted text was in the hero, so it was replaced there; the separate About section retains the concise personal background. |
| TensorFlow classifier: 0.94 macro-F1 vs 0.82 logistic regression; ~75,000 sandbox transactions; Llama 3 zero-shot labels mapped to 18 classes | O3; hero and Meridian decisions/results | New owner-reported account. R-AI instead attributes ~0.94 to XGBoost with TF-IDF and merchant category codes on Sandbox/synthetic data; M core uses keyword rules. Do not merge these into one independently verified experiment. A chronological holdout is documented in R-AI, but no split dates/artifacts for the updated TensorFlow comparison were supplied. |
| RAG uses each user's transaction history for budgeting; 88% factual consistency in RAGAS | O3; hero and Meridian | Owner-reported. No evaluation set, evaluator configuration, rubric, or results file supplied. Do not substitute this for a different standard RAGAS metric without clarification. |
| Python services on Lambda/ECS; Airflow Plaid ingestion; MLflow tracking | O3; R-AI/R-DE for related backend/cloud tools | Owner-reported operational scope. M has FastAPI, document ingestion and ECS infrastructure source, but no live service or current deployment was checked. |
| Deployment reduced from >35 minutes to <5 through Docker, Terraform, GitHub Actions | O3; hero and Meridian evaluation | Owner-reported delivery timing, not inference latency. Stage definitions and timing logs are missing. |
| Churn prediction system (DeepSeek zero-shot sentiment features, ROC-AUC 0.72 → 0.85 on 150,000 profiles, 2.5M+ replayed events/day through Kafka/Beam, 45+ Great Expectations checks, ECS, Airflow PSI-triggered retraining) | O4 (owner résumé bullets, 26 Oct 2026); Professional experience | Owner-reported; no implementation artifact or repository inspected. Shown as its own "Independent project" entry in Professional experience, separate from the freelance client engagements, because the bullets state the events are replayed from a public dataset to simulate live traffic. It replaces the earlier "weekly retraining" wording (retraining is now drift-triggered at PSI > 0.2). Do not merge it into the freelance role without confirming it was client work. |
| Prophet MAPE below 6% for stable categories including utilities and groceries | O1, R-AI; Meridian evaluation | Owner-reported. Horizon and category-specific evaluation artifacts missing. Not a production guarantee or overall error rate. |
| Meridian contribution and implemented scope | O3, O1, R-AI/R-DE | Owner-reported. Source inspection corroborates some backend/data-processing pieces but not the entire updated runtime/model story. |
| Meridian technologies: AWS, Python, RAG, XGBoost, TF-IDF, Terraform, Prophet, GitHub Actions, Docker | O3 exact requested list; R-AI/R-DE | Blank duplicate commas removed. XGBoost remains in this requested technology list and résumé history while the latest headline classifier is TensorFlow. Historical project use is not proof both classifiers belong to the same experiment. |
| Data Engineer, Freelance, Nov 2024–Feb 2025; first homepage section after hero | O3 | Owner explicitly changed title from Data Analyst (still present in both PDFs). Dates agree. Original PDFs are unchanged; note this role-title discrepancy when next revising them. |
| Three Spark pipelines built, fourth repaired, four CRM/ERP sources, ~100 GB daily, AWS S3/Kafka-MSK/Airflow | O3, R-AI/R-DE; experience | Explicitly requested résumé-sourced claims. Not independently verified. E-commerce and telecom are separate client contexts; exact metric/stack attribution per client is unspecified. |
| PostgreSQL star schema, incremental UPSERTs, window functions | O3, R-DE | Owner/resumé-provided implementation details. |
| Core 100 GB batch: 4.5h → 1.5h, ~67% reduction | O3, R-AI/R-DE | Arithmetic consistent: (4.5−1.5)/4.5 ≈ 66.7%. Comparable workload claim is owner-provided; no benchmark logs or client artifacts inspected. |
| Airflow retries/alerts/backfills, Great Expectations; Tableau, Python/SQL segmentation/churn; DAG/runbook/log handover | O3, both résumés | Owner-provided. Scope is delivery and handover, not ongoing 24/7 operation or on-call duty. No client names, revenue claims, or testimonials added. |
| Multi-Agent customer-support supervisor and specialist services | A README, supervisor README, service source | Source/documentation inspected, runtime not executed. Distinct use case from the finance assistant. |
| Multi-Agent retrieval with Titan/pgvector/HNSW, 50-pair RAGAS evaluation, LangGraph SQL corrections | R-AI/R-DE, O1; expanded evidence disclosure and tool list | Résumé claims do not resolve repository mismatch. A documents customer-support orchestration and model configs contain 3.7 Sonnet/3.5 Haiku versus supplied 3.5 Sonnet. Related retrieval files exist in M. No new case-study route or invented verified outcome. |
| AI expertise: TensorFlow, PyTorch, XGBoost, TF-IDF, Prophet, RAG, LangGraph, RAGAS, MLflow | R-AI; O3 for TensorFlow experiment | Capability list, no proficiency scores or equal-depth implication. |
| Data expertise: Spark/PySpark, Airflow, Kafka/MSK, SQL, PostgreSQL, pgvector, MongoDB, Great Expectations, Tableau | R-AI/R-DE; O3 for Beam | Document-sourced capabilities, not independent validation of tool mastery. |
| Backend/cloud: FastAPI, Lambda, ECS, Bedrock, S3/RDS/ECR, Docker, Terraform, GitHub Actions, pytest, Prometheus | R-AI/R-DE; O3 for Lambda | Owner/document-sourced. No new credential or production-scale claim. |
| Egypt, Cairo roles, remote work and European relocation | O1/O3; both résumé headers for Cairo | Cairo added explicitly to hero availability, About location line, and social asset. |
| GitHub, email, LinkedIn contact | O1/O2; both résumé headers | Values agree with owner-provided details. GitHub profile returned HTTP 200 and repo reads succeeded during initial inspection. No message sent; LinkedIn access limitation above. |
| Résumé download links | O2 | Both actual PDFs inspected and unchanged; HTTP response and actual browser download bytes are tested. Only one version per role supplied; no embedded revision or creation/modification date. |
| Canonical URLs and sitemap | No site URL supplied | SITE_URL remains unset, with no placeholder public domain. No site deployment or domain purchase performed. |

## Certification register

All names, issuers, issue dates and IDs are owner-provided. IDs are displayed as text. No verification URLs or official badges were invented. A generic visual treatment does not imply verification. Missing dates/IDs are omitted.

| Displayed certification | Issuer / date / ID | Evidence |
| --- | --- | --- |
| AWS Certified Machine Learning Engineer – Associate | Amazon Web Services; September 2026 | O1/O3. Both résumés show 2026 without month. No verification asset. |
| Data Engineering Professional Certification | DeepLearning.AI; December 2025; 93EL5KSKBY67 | O3; LinkedIn unavailable. |
| MLOps \| Machine Learning Operations Professional Certification | Duke University; December 2025; 6YFKT4A3UGPQ | O3; both résumés call it MLOps Specialization without date/ID. Display title follows explicit owner request; official designation not checked. |
| Kubernetes: Microservices | LinkedIn; September 2025 | O3; no credential ID supplied. Course/provider record not inspected. |
| Deep Learning Professional Certification | DeepLearning.AI; March 2025; 2DI1UG3GES1R | O3; LinkedIn unavailable. |
| Google Data Analytics Professional Certification | Google; December 2024 | O3 and R-DE (Professional Certificate, no date). No ID supplied. |
| IBM AI Engineering Professional Certification | IBM; 5GZWCQHK7VSB | O3 and R-AI (Professional Certificate). No issue date supplied, so none added. |

## Original résumé integrity

Both PDFs are single-page, unencrypted A4 documents, without forms or JavaScript reported by `pdfinfo`. Original bytes are published as requested; additional personal details are not extracted into the website.

| File | SHA-256 |
| --- | --- |
| `Mahmoud_Heshmat_AI_Engineer_Resume.pdf` | `af51e29a1fd852c01994af4f0ff5361a3acffe000fa63aa32d558f5f5f5fc457` |
| `Mahmoud_Heshmat_Data_Engineer_Resume.pdf` | `13e1df5f69df0b7bff490e789103e094104474f3b79fed82937ad694d3320859` |

Education details in the PDFs have not been expanded into the website. Languages (Arabic native, English C1, German B2) are owner-stated (O4) and shown in About without certificates; add a certificate note for German if one is held. These remain résumé-sourced, not independently verified.

## Editorial decisions and outstanding evidence

- Professional Experience now precedes Selected Work. Meridian's featured/beta labels and the homepage diagram are removed. Its detail route contains only Context, Engineering decisions, and Evaluation, numbered 01–03 (normalizing the duplicated 03 in the request). The architecture and limitations sections were removed as requested; their unresolved evidence remains in this document and concise metric context.
- The earlier “5,000+ daily transactions” claim referred to synthetic PostgreSQL pgbench work, not production traffic. It is not published as a performance result.
- The inspected Meridian README describes a RAG delivery roadmap, while `core.py` uses keyword categorization. The updated TensorFlow/LLM-labeling experiment, new RAGAS result, deployment timing, and churn retraining need matching implementation/evaluation artifacts for independent verification. No roadmap SLO is represented as achieved.
- Future résumé revisions should reconcile Data Analyst vs Data Engineer and XGBoost vs TensorFlow. The current instruction authorizes publishing the new wording; it does not authorize editing the PDFs.
- Authentic credential URLs, a real deployment origin, and any live-demo URL remain optional missing inputs. No placeholder links were created.

## Supplied-file application and source discrepancies — 27 October 2026

The owner explicitly approved applying `update.patch` or copying the four supplied files. The patch did not apply to the checked-out `src/data/portfolio.ts` because its expected base content differed. The three application files were copied from the supplied files without editorial rewrites; this document retains the supplied text above and adds only this reconciliation record. No résumé PDF was changed.

Source differences are recorded here without replacing the original statements or inventing a resolution:

- The earlier Meridian technology row above lists XGBoost and TF-IDF on the card. The supplied `portfolio.ts` and current owner request instead list TensorFlow and remove XGBoost/TF-IDF from those card tags. The application uses the explicitly supplied card list; the historical row remains intact. XGBoost/TF-IDF remain in the separately supplied expertise list, and no new model-history explanation was added.
- The earlier IBM register says no issue date was supplied. The supplied `portfolio.ts` and current owner request specify February 2025. The new date is owner-provided, not independently verified. The other credential IDs remain in the supplied evidence register but are absent from the new certification entries; no IDs or verification links were restored or invented.
- The supplied register refers to the previous full introduction and model claims in the hero. The supplied application now renders exactly two introductory paragraphs; the detailed Meridian evaluation qualifiers remain in its case-study content. The current chronological-holdout statement and exclusion of high-variance discretionary spending are explicitly supplied owner claims, not independently reproduced findings.
- The supplied language paragraph calls the levels both owner-stated and résumé-sourced. The current request directly supplies Arabic Native, English C1, and German B2; no new credential evidence was supplied or checked. The language labels are rendered as requested, without adding a German certificate note or resolving the source-attribution difference.
- The supplied source record dates O4 to 26 October 2026. That source wording is retained; this application record is dated 27 October 2026 in the client’s Africa/Cairo timezone.

The churn entry remains **Independent project**, with **Public dataset · simulated live traffic**, four supplied bullets, and the supplied self-reported/replayed-data scope note. It is separate from the freelance role and is not in the selected-project array. The numeric claims are copied from the owner-approved file, not independently verified or expanded.

The fields explicitly reserved for future rendering remain unused by templates: `profile.headline/subhead/proof/availability`, `contact.message`, project `status/highlights/highlightsNote`, expertise `featured`, certification `featured/url`, experience `emphasis`, and `meridianStudy.outcome/outcomeNote`. In particular, the new contact message and Meridian status are data only. No optional field was wired into the public UI.
