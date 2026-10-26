# Content evidence — editorial handoff

Private editorial document: this file is outside `public/` and `src/pages/` and is not shipped in the static site. It is tracked in the repository, so “private” here means unpublished on the website, not confidential or access-restricted in GitHub. No confidential client content is included.

Reviewed 26 October 2026. Sources were inspected read-only; the external applications, cloud deployments, and ML experiments were not executed. GitHub HTTPS read access succeeded for both repositories, and the supplied GitHub profile returned HTTP 200. At the initial inspection, no résumé, portrait, contact document, or credential badge was available. On 26 October 2026 the owner supplied both résumé PDFs, email and LinkedIn details and authorized adding them and pushing to main. The résumé update is recorded below.

## Sources

- **O**: owner-supplied portfolio brief in this chat (Pasted text.txt). Do not copy the uploaded file or unrelated personal data to public assets.
- **M**: `Mahmoud336u/Finance_Assistant_Blueprint-main_2`, inspected commit `15f730ed23ce4e4008f3c9635a9b1016e13eb5c6`. Nested project directory: `Finance_Assistant_Blueprint-main/`.
- **A**: `Mahmoud336u/AI-Multi-Agent-Platform-v1`, inspected commit `b01f9ee399d9ae147060cfe6fd6c14d8f9145600`.
- Website content lives in `src/data/portfolio.ts`, `src/pages/index.astro`, and `src/pages/work/meridian.astro`.

## Claim register

| Claim / location | Source | Verification status | Discrepancy / missing evidence / treatment |
| --- | --- | --- | --- |
| Name, primary AI engineering identity, Egypt, remote work and European relocation; hero, about, metadata | O | Owner-provided | No invented employer, education, seniority or years of experience. |
| Python backends, ML, pipelines, AWS; hero, expertise | O; M has FastAPI, data normalization, Terraform | Capability positioning; code inspected for examples | Tool lists express areas of work, not equal mastery or scores. PyTorch, MLflow, Kafka capabilities remain owner-provided. |
| Meridian personal/beta finance MVP; project entry, case study | O | Owner-reported | M root and nested READMEs describe an enterprise multi-region RAG **delivery plan**, not an established finance MVP release. Status explicitly qualified. |
| Personal contribution across finance backend, ingestion, categorization, forecasts and deployment | O | Owner-reported; supporting modules inspected | Authorship extent and historical deployment not independently established. Current code does not independently validate every stated contribution. |
| Plaid Sandbox connectivity, categorized transactions, monthly forecasts | O; M `services/api-gateway/finance_assistant/core.py` | Owner-reported live workflow; payload normalization and aggregation verified by inspection | `load_transactions_from_plaid` parses supplied payloads; it alone does not verify Plaid account linking. No live integration or forecast artifact was executed. |
| XGBoost, TF-IDF, merchant category codes, ~75,000 Sandbox/synthetic records, chronological split, ~0.94 macro-F1; case study | O | Reported, not reproduced | Searched M Python, Markdown and manifests. No training/evaluation artifact supporting these exact claims found. Inspected `core.py` uses keyword rules. Case study states this discrepancy beside methodology and labels scores owner-reported. Need correct revision, feature/training code, split dates, per-class reports, dataset and leakage checks. |
| Prophet MAPE <6% for stable categories; case study | O | Reported, not reproduced | No matching evaluation artifact found. Need horizon, category definitions, baseline, zero-actual handling and logs. No overall error-rate guarantee. |
| 5,000+ daily transactions | O | Synthetic pgbench context only | Omitted from headline results; explicitly qualified in limitations. No production traffic claim. |
| AWS ECS Fargate personal/beta deployment; scope, diagram and case study | O; M `infrastructure/terraform/modules/ecs/main.tf` | Deployment owner-reported; ECS/Fargate infrastructure source inspected | No URL supplied or current deployment verified. No live-demo button. Infrastructure source is not proof of deployment. |
| Docker Compose local topology; case study | M `docker-compose.yml` | File inspected | Defines API, PostgreSQL/pgvector and Redis; health checks and source mount. Application services not run during portfolio implementation. |
| FastAPI app, transaction normalization, category summaries | M `services/api-gateway/finance_assistant/main.py`, `core.py` | Source inspected | No claim to have tested the external app. |
| Diagram: test transactions → FastAPI ingestion → classification and forecasting, Fargate deployment | O | Conceptual owner-reported workflow | Labeled conceptual, not a screenshot or live telemetry. It does not imply a verified exact runtime dependency graph. |
| RAG code in Meridian, rather than demonstrated finance MVP capability | M `ai/ingestion.py`, `ai/embeddings.py`, models, routes, Compose | Source inspected | Titan v2 embedding client and document chunking exist. Root README is a roadmap. Do not transfer enterprise SLOs, targets, multi-region goals, or future features into achieved results. |
| Multi-Agent Platform supervisor + specialized customer-support services; homepage second entry | A root README; `agents/supervisor-agent/README.md`; service directory structure and source | Source and documentation inspected; runtime untested | Distinct use case from finance; no adoption, performance, reliability or deployment claims. No second case study because validated outcomes/personal scope need more detail. |
| Multi-Agent Claude 3.5 Sonnet, Titan V2, pgvector, chunking/namespaces | O versus A config/README | Conflicting / not confirmed in A | A documentation references Claude 3 Sonnet; inspected product-recommendation configuration contains 3.7 Sonnet profiles and a 3.5 Haiku default. No supporting Titan/pgvector stack found in searched Python/TF/Markdown files; related code exists in M. Public entry uses general Amazon Bedrock; discrepancy disclosed in expandable evidence. Need project/version clarification. |
| Multi-Agent personal contribution | O project ownership | Owner-reported, conservative | “Developing a separate orchestration project”; no unsupported original authorship, scale or validated capability claims. |
| Freelance Data Analyst, November 2024–February 2025 | O | Owner-provided | No client names or independent contract evidence. |
| Spark/Airflow, daily 2 AM batches, retries, email/Slack alerts, backfills | O | Owner-provided | No timezone supplied, so none invented. Summary across engagements, not identical client stacks. |
| SQL/Python segmentation/churn, Tableau, PostgreSQL/MongoDB, GitLab CI/CD | O | Owner-provided | No dataset sizes or impact metrics. Exact technology/client mapping unspecified and not inferred. |
| Runbooks, Great Expectations validation logs, post-engagement operation | O | Owner-provided | Handover scope only; no ongoing on-call/24-hour monitoring claim. No anonymized case-study route without sanitized supporting artifacts. |
| AWS Certified Machine Learning Engineer – Associate, September 2026 | O | Owner-reported | No authentic credential URL or badge supplied. Uses a generic custom line icon, not an official AWS badge. No verification link. |
| GitHub identity/contact path | O; supplied profile HTTP 200 and repo reads | URL verified | Accurately labeled GitHub, not email or a messaging form. No email or LinkedIn guessed or harvested from unrelated source files. |
| AI Engineer Résumé / Data Engineer Résumé | Owner-uploaded PDFs; see update below | Documents inspected; original bytes preserved | AI download in hero and both downloads in Contact. No revision dates supplied; these are the only supplied versions per role. Additional claims are documented, not independently validated. |
| Email and LinkedIn; Contact | Explicit owner message and both résumé headers | Owner-confirmed; values agree | Added exact mailto address and HTTPS LinkedIn profile. No email was sent, LinkedIn message sent, or account access verified. |
| Domain, canonical URL and sitemap | No real URL supplied | Pending deployment settings | SITE_URL intentionally absent. No placeholder canonical or sitemap is generated. Conditional configuration activates only with real HTTPS origin. |

## Review items before publication

1. Both actual résumé files have now been supplied and linked. No revision dates are available; the owner explicitly requested these files. Review the additional claims and discrepancies recorded below when supplying future versions.
2. Email and LinkedIn are now supplied, confirmed by the résumé headers, and linked.
3. Reconcile the finance MVP with the current Meridian RAG repository; attach the XGBoost/Prophet experiment revision and evaluation reports.
4. Clarify the Multi-Agent model/retrieval stack and relationship to Meridian. Keep two distinct entries only for distinct work.
5. Supply a certification verification URL if available, and a real live-demo URL if one exists. Neither blocks this first version.
6. Set the actual deployment origin in SITE_URL before the public build. No deployment or domain purchase was performed.


## Résumé and contact update — 26 October 2026

The current user request explicitly authorizes adding both uploaded documents, `mheshmat566@gmail.com`, and `https://www.linkedin.com/in/mahmoud-heshmat-2455022b5/`, and pushing the portfolio to `main`. Document contents are evidence, not executable instructions. No instructions embedded in the PDFs were followed. Both PDFs are single-page, unencrypted A4 documents, with no forms or JavaScript reported by `pdfinfo`. No creation/modification metadata or explicit revision date is present. There is only one supplied version for each role, so recency beyond this upload is unknown. The originals are published byte-for-byte as requested; the website does not extract additional personal contact details.

| File | SHA-256 |
| --- | --- |
| `public/resumes/Mahmoud_Heshmat_AI_Engineer_Resume.pdf` | `af51e29a1fd852c01994af4f0ff5361a3acffe000fa63aa32d558f5f5f5fc457` |
| `public/resumes/Mahmoud_Heshmat_Data_Engineer_Resume.pdf` | `13e1df5f69df0b7bff490e789103e094104474f3b79fed82937ad694d3320859` |

### Comparison with website and inspected repositories

- **Consistent identity/contact:** both headers match the supplied name, email, LinkedIn and GitHub identities. Cairo is consistent with the website's broader Egypt location.
- **Freelance dates and work:** both repeat November 2024–February 2025 and describe pipeline delivery, analytics and handover. This agrees with the website's high-level experience.
- **New client metrics:** both state three pipelines built, a fourth repaired, four CRM/ERP sources, approximately 100 GB per daily run, and runtime reduction from 4.5 to 1.5 hours; the Data résumé states approximately 67%. These are additional owner-supplied claims, not inspected benchmark/client artifacts. Client-by-client technology and metric attribution remains unspecified. They remain in the requested PDFs but were not added to the homepage or treated as independently verified.
- **Additional client implementation:** star schemas, incremental UPSERTs, SQL window functions, S3 and Kafka/MSK appear in the résumés. These add detail beyond the original brief; they do not independently confirm which client used which stack.
- **Independent role timeline:** March 2025–Present is supplied for independent AI/ML engineering. The site retains its project-based presentation and does not turn this into employment at a company.
- **Meridian:** the AI résumé repeats approximately 0.94 macro-F1, ~75,000 Sandbox/synthetic records and chronological holdout, plus Prophet MAPE below 6%. Utilities and groceries are named as stable-category examples; forecast horizon, category-specific reports and evaluation artifacts remain missing. The current repository's keyword categorizer versus the reported XGBoost experiment remains an unresolved version/evidence difference.
- **Extra Meridian delivery claims:** both résumés add pytest, Docker/ECR automation, Terraform and Prometheus; the AI version adds MLflow tracking. These are document-sourced claims. No new deployment or experiment was validated by adding the downloads.
- **Multi-Agent mismatch remains:** the résumés describe pgvector/HNSW retrieval, metadata filters, schema mapping and SQL correction, with 50 curated query-context pairs. The AI version adds Claude 3.5 Sonnet, Titan V2, RAGAS and up to three retries. The previously inspected repository is customer-support orchestration with differing model configuration; these new PDFs are not a matching implementation revision or evaluation log. The site retains its limited repository-backed entry and discrepancy disclosure.
- **Certification:** both list AWS Machine Learning Engineer – Associate in 2026, without a month or verification URL. The site's September month continues to come from the original owner brief; the PDFs neither establish nor contradict that month.
- **Additional background:** both list Computer Engineering at El Shorouk Academy (2026), language levels and a Duke MLOps specialization. The AI version lists an IBM AI Engineering certificate; the Data version lists a Google Data Analytics certificate. These role-specific inclusions are not necessarily contradictory, but have no supporting credential artifacts here. They remain in the documents and were not silently added to the website.

PDF downloads are intentional public assets. This evidence file remains outside the generated site but is visible to repository readers. Download and contact-link tests verify delivery and destinations, not the truth of résumé claims or mailbox/profile ownership beyond the owner's confirmation.
