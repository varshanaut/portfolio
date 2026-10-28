export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Machine Learning' | 'Deep Learning & GenAI' | 'Data & Full-Stack' | 'Recommender Systems';
  technologies: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  highlights: string[];
  architecture: string[];
  datasetInfo?: string;
  imageUrl?: string;
  interactiveDemoType?: 'predictive-maintenance' | 'edulynk-rec' | 'expense-forecast' | 'luna-prompt' | 'email-generator';
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: { name: string; focus: string; level?: 'Core' | 'Advanced' | 'Applied' }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'VARSHA M V',
    role: 'DATA SCIENCE AND AI INTERN',
    status: 'Actively Seeking Roles',
    location: 'Bangalore, India',
    email: 'varshapraveenmv@gmail.com',
    linkedin: 'https://www.linkedin.com/in/varshamv---',
    linkedinHandle: 'varshamv---',
    github: 'https://github.com/varshanaut',
    githubHandle: 'varshanaut',
    shortBio: 'Computer Science graduate actively building expertise across the full data science stack.',
    leadBio: 'Computer Science graduate and Data Science & AI Intern at RP2 INDIA PVT LTD with hands-on mastery spanning classical machine learning pipelines, deep learning, and agentic Generative AI systems.',
    photoUrl: '/assets/aistudio/Polished_Professional_LinkedIn_Headshot_20defaa9.png',
  },

  stats: [
    { value: '5+', label: 'Production-Grade ML & AI Systems', detail: 'End-to-end pipelines from raw data to deployed inference' },
    { value: '~99%', label: 'Predictive Model Accuracy', detail: 'AI4I 2020 maintenance pipeline (ROC-AUC ≈ 0.97, F1 ≈ 0.84)' },
    { value: '40%', label: 'Hallucination Rate Reduction', detail: 'In multi-turn GenAI assistant via structured prompt systems' },
    { value: '30%', label: 'Upskilling Time Reduction', detail: 'Delivered in student career-gap guidance validation' },
  ],

  about: {
    headline: 'Bridging algorithmic depth with practical software engineering.',
    paragraphs: [
      'As a Computer Science graduate and Data Science & AI enthusiast currently working as a Data Science and AI Intern at RP2 INDIA PVT LTD, I design and deploy data-driven systems that solve tangible operational and decision-making problems. My work spans the complete lifecycle: exploratory data analysis, feature engineering, imbalance correction (SMOTE), cross-validation, and model serving via Flask APIs.',
      'Beyond classical ML algorithms, I actively build Generative AI and Agentic AI workflows — architecting multi-turn conversational systems, structured prompt pipelines with role-constraint enforcement, and context-aware tools that cut execution times by over 90%.',
      'I value clean code, reproducible experiments, quantitative evaluation (precision, recall, ROC-AUC, F1), and low-latency deployment over superficial vanity metrics.',
    ],
    pillars: [
      {
        title: 'End-to-End Pipeline Engineering',
        desc: 'From raw data ingestion and outlier detection to SMOTE resampling, feature selection, and pickled model serialization.',
      },
      {
        title: 'Rigorous Quantitative Validation',
        desc: 'Stratified K-fold cross-validation, precision-recall trade-offs, and metric-grounded benchmarking beyond naive accuracy.',
      },
      {
        title: 'Generative & Agentic AI',
        desc: 'Designing structured few-shot prompt workflows, multi-turn dialogue state tracking, and LLM orchestration.',
      },
      {
        title: 'Production API & Deployment',
        desc: 'Exposing models through clean Flask REST APIs supporting single-record and batch inference with responsive UI layers.',
      },
    ],
  },

  skillCategories: [
    {
      id: 'languages-core',
      name: 'Languages & Core',
      description: 'Foundational programming, data manipulation, and database query layers.',
      skills: [
        { name: 'Python', focus: 'Pandas, NumPy, Scikit-learn, Scipy', level: 'Advanced' },
        { name: 'SQL', focus: 'Complex Joins, Window Functions, Aggregations', level: 'Core' },
        { name: 'JavaScript', focus: 'DOM, Async/Await, Interactive UIs', level: 'Applied' },
        { name: 'Flask & Flask API', focus: 'RESTful endpoints, model serving, serialization', level: 'Core' },
      ],
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      description: 'Supervised and unsupervised statistical learning algorithms and validation protocols.',
      skills: [
        { name: 'Random Forest & Ensembles', focus: 'Hyperparameter tuning, feature importance', level: 'Advanced' },
        { name: 'Linear & Logistic Regression', focus: 'Regularization (L1/L2), probability calibration', level: 'Core' },
        { name: 'Support Vector Machines (SVM)', focus: 'Kernel tricks, margin optimization', level: 'Applied' },
        { name: 'K-Nearest Neighbors (KNN)', focus: 'Distance metrics, curse of dimensionality', level: 'Applied' },
        { name: 'Naïve Bayes', focus: 'Probabilistic classification, text scoring', level: 'Core' },
        { name: 'K-Means Clustering', focus: 'Elbow method, silhouette analysis', level: 'Core' },
        { name: 'Feature Selection & SMOTE', focus: 'Variance threshold, mutual info, oversampling', level: 'Advanced' },
        { name: 'K-Fold CV & Outlier Detection', focus: 'Stratified cross-validation, IQR, Z-score', level: 'Advanced' },
      ],
    },
    {
      id: 'deep-learning-genai',
      name: 'Deep Learning & GenAI',
      description: 'Neural architectures, Natural Language Processing, and LLM prompt engineering.',
      skills: [
        { name: 'ANN & CNN', focus: 'Feedforward networks, conv filters, image feature extraction', level: 'Core' },
        { name: 'RNN & LSTM', focus: 'Sequential data modeling, time-series, memory gates', level: 'Core' },
        { name: 'TensorFlow & Keras', focus: 'Layer composition, backprop, early stopping', level: 'Core' },
        { name: 'Natural Language Processing (NLP)', focus: 'Tokenization, TF-IDF, embeddings, sentiment', level: 'Advanced' },
        { name: 'Prompt Engineering', focus: 'Few-shot, chain-of-thought, constraints, role templates', level: 'Advanced' },
        { name: 'Generative AI & Agentic Workflows', focus: 'Multi-agent orchestration, function calling, state tracking', level: 'Advanced' },
      ],
    },
    {
      id: 'data-viz',
      name: 'Data & Visualization',
      description: 'Exploratory data analysis, diagnostic visualization, and automated preprocessing.',
      skills: [
        { name: 'Exploratory Data Analysis (EDA)', focus: 'Distribution profiling, correlation matrices', level: 'Advanced' },
        { name: 'Matplotlib & Seaborn', focus: 'Multi-panel diagnostic plots, statistical distributions', level: 'Core' },
        { name: 'Data Preprocessing Pipelines', focus: 'StandardScaler, OneHotEncoder, imputation pipelines', level: 'Advanced' },
      ],
    },
    {
      id: 'web-deployment',
      name: 'Web & Deployment Basics',
      description: 'Model deployment, web frameworks, and clean client interfaces.',
      skills: [
        { name: 'Flask REST APIs', focus: 'Inference routes, request validation, error handling', level: 'Core' },
        { name: 'HTML5 & CSS3', focus: 'Semantic markup, layout architecture, responsive grid', level: 'Core' },
        { name: 'Bootstrap & Tailwind', focus: 'Responsive UI components, dashboard styling', level: 'Core' },
      ],
    },
    {
      id: 'tools-version-control',
      name: 'Tools & Environments',
      description: 'Engineering workflows, version control, and development environments.',
      skills: [
        { name: 'Git & GitHub', focus: 'Branching, code review, release management', level: 'Core' },
        { name: 'Jupyter Notebook', focus: 'Iterative prototyping, scientific computing', level: 'Advanced' },
        { name: 'PyCharm & VS Code', focus: 'Debugging, virtual environments, linting', level: 'Core' },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'predictive-maintenance-system',
      title: 'Predictive Maintenance System',
      subtitle: 'Industrial Failure Prediction with Tuned Random Forest & Flask REST API',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Flask', 'Bootstrap', 'Pickle', 'NumPy', 'Pandas'],
      imageUrl: '/src/assets/images/project_predictive_maintenance_1793195812770.jpg',
      featured: true,
      metrics: [
        { label: 'Test Accuracy', value: '~99%' },
        { label: 'ROC-AUC', value: '0.97' },
        { label: 'F1 Score', value: '0.84' },
        { label: 'Records Modeled', value: '10,000' },
      ],
      overview:
        'Built an end-to-end industrial predictive maintenance pipeline trained on the AI4I 2020 predictive maintenance dataset of 10,000 records. Addressed extreme class imbalance (~3.4% failure rate) and engineered key physical features that allow early diagnosis of machine breakdown.',
      highlights: [
        'Engineered critical domain features including Temp_diff (Air Temp vs Process Temp), Power (Torque × Rotational Speed), and Wear_rate (Tool Wear accumulation rate).',
        'Tackled severe 3.4% failure class imbalance through stratified sampling and algorithmic class-weight tuning.',
        'Trained and hyperparameter-tuned a Random Forest classifier achieving ~0.99 test accuracy, F1 ≈ 0.84, and ROC-AUC ≈ 0.97 on a held-out stratified test set.',
        'Architected and deployed a Flask web application with single-record interactive form input and batch CSV inference with automated risk categorization (Low / Medium / High).',
        'Serialized model and preprocessing transformers using pickle for sub-50ms production inference.',
      ],
      architecture: [
        'Raw AI4I 2020 Data Ingestion (10,000 records, 6 failure modes)',
        'Feature Engineering: Temp_diff, Power calculation, Wear_rate',
        'Preprocessing & Scaling: Imbalance management & StandardScaler',
        'Random Forest Classifier with grid search optimization',
        'Flask API Backend with single & batch CSV inference endpoints',
        'Responsive Bootstrap UI displaying risk categorizations & probability gauges',
      ],
      datasetInfo: 'AI4I 2020 Predictive Maintenance Dataset (10,000 synthetic industrial records with machine failure ground truth).',
      interactiveDemoType: 'predictive-maintenance',
      githubUrl: 'https://github.com/varshanaut',
    },
    {
      id: 'edulynk-career-guidance',
      title: 'EduLynk – Intelligent Career Guidance Platform',
      subtitle: 'Multi-Stage Personalized Path Recommendation & Skill-Gap Optimization',
      category: 'Recommender Systems',
      technologies: ['Python', 'Recommendation Systems', 'Random Forest', 'Feature Engineering', 'Cross-Validation'],
      imageUrl: '/src/assets/images/project_edulynk_career_1793195813076.jpg',
      featured: true,
      metrics: [
        { label: 'Precision', value: '> 0.82' },
        { label: 'Upskill Time Reduction', value: '~30%' },
        { label: 'Validation Protocol', value: 'Stratified CV' },
      ],
      overview:
        'Delivered personalized career-path recommendations for engineering students with measurable skill-gap closure via a multi-stage machine learning and rule-based hybrid recommendation system.',
      highlights: [
        'Constructed a multi-stage recommendation pipeline: domain-specific feature engineering on academic transcripts and self-reported interests → supervised Random Forest path ranker → rule-based learning path generator.',
        'Engineered an intelligent skill-gap module that compares target role requirements against student proficiency profiles to generate optimized sequence milestones.',
        'Achieved recommendation precision above 0.82 on held-out validation sets through disciplined feature selection and cross-validation.',
        'Reduced average recommended student upskilling time by ~30% in simulated user testing by pruning redundant prerequisites.',
      ],
      architecture: [
        'Student Profile & Academic Data Ingestion',
        'Skill Taxonomy Graph & Target Role Mapping',
        'Supervised Random Forest Path Ranking Engine',
        'Rule-Based Curricular Milestone Generator',
        'Skill-Gap Delta Analysis & Priority Scheduler',
      ],
      datasetInfo: 'Structured engineering student competency profiles, course performance, and tech job role skill matrices.',
      interactiveDemoType: 'edulynk-rec',
      githubUrl: 'https://github.com/varshanaut',
    },
    {
      id: 'smart-expense-tracker',
      title: 'Smart Expense Tracker',
      subtitle: 'Multi-Modal Intelligent Expense System with OCR & Time-Series Forecasting',
      category: 'Data & Full-Stack',
      technologies: ['Python', 'OCR / Tesseract', 'Speech-to-Text', 'Time-Series Forecasting', 'Predictive Analytics'],
      imageUrl: '/src/assets/images/project_smart_expense_1793195813165.jpg',
      featured: true,
      metrics: [
        { label: 'OCR Accuracy', value: '> 90%' },
        { label: 'Forecast Error Drop', value: '-25%' },
        { label: 'Early Risk Flagging', value: '7–10 Days' },
      ],
      overview:
        'Delivered an end-to-end expense management application supporting 3 distinct input modalities (manual entry, voice transcription, and receipt OCR image parsing) integrated with time-series forecasting to flag budget overruns in advance.',
      highlights: [
        'Integrated multi-modal data ingestion: voice transcription, structured manual entry, and Tesseract OCR achieving >90% text extraction accuracy on receipts.',
        'Built preprocessing pipelines for noisy receipt images (thresholding, noise removal, bounding-box text alignment) and a balanced debt-tracking ledger.',
        'Engineered time-series forecasting models using moving-average and regression baselines that reduced month-ahead spending prediction error by ~25% compared to naive last-month baselines.',
        'Implemented proactive financial risk indicators that alert users to overspending risks 7–10 days before month-end.',
      ],
      architecture: [
        'Multi-Modal Ingestion: Manual forms, Audio Speech-to-Text, Receipt Image OCR',
        'OCR Preprocessing: Grayscale thresholding, boundary detection, text tokenization',
        'Ledger Database: Categorized transactions, debt balances, and recurrent commitments',
        'Forecasting Engine: Moving-average & autoregressive trend projection',
        'Early Warning Alert Subsystem: Automated anomaly & budget thresholds',
      ],
      datasetInfo: 'Historical transactional expense datasets, simulated multi-merchant receipts, and voice audio snippets.',
      interactiveDemoType: 'expense-forecast',
      githubUrl: 'https://github.com/varshanaut',
    },
    {
      id: 'luna-genai-assistant',
      title: 'Luna – Conversational AI Assistant',
      subtitle: 'Context-Aware Chatbot with Multi-Turn State Tracking & Prompt Architecture',
      category: 'Deep Learning & GenAI',
      technologies: ['Python', 'Prompt Engineering', 'LLM APIs', 'State Tracking', 'Evaluation Benchmarks'],
      imageUrl: '/src/assets/images/project_luna_assistant_1793195815292.jpg',
      featured: true,
      metrics: [
        { label: 'Hallucination Drop', value: '-40%' },
        { label: 'Engagement Score', value: '4.2 / 5.0' },
        { label: 'Multi-Turn Depth', value: '5+ Turns' },
      ],
      overview:
        'Designed and iterated a context-aware conversational assistant featuring structured multi-turn workflows, strict constraint adherence, and systematic prompt versioning that cut hallucinations by ~40%.',
      highlights: [
        'Constructed structured multi-turn workflows using modular system prompts combining role definition, hard negative constraints, and few-shot exemplary dialogues.',
        'Maintained conversational context and state memory reliably across 5-turn dialogs without context drift.',
        'Reduced hallucinated and off-topic replies by ~40% through rigorous prompt versioning and qualitative benchmark evaluation across 50+ test scenarios.',
        'Elevated average user engagement score from 3.1/5.0 to 4.2/5.0 in controlled user evaluation tests.',
      ],
      architecture: [
        'Dialogue Session Manager & Context Window Buffer',
        'Modular Prompt Engine (Role + Negative Constraints + Few-Shot Patterns)',
        'LLM API Integration with temperature calibration & stop tokens',
        'Evaluation Framework testing adherence across 50+ conversation scenarios',
      ],
      interactiveDemoType: 'luna-prompt',
      githubUrl: 'https://github.com/varshanaut',
    },
    {
      id: 'genai-email-generator',
      title: 'Generative AI Portfolio Email Generator',
      subtitle: 'Automated Personalized Outreach Generation via Scraped Signals & Embeddings',
      category: 'Deep Learning & GenAI',
      technologies: ['Python', 'Web Scraping', 'Prompt Engineering', 'Embeddings', 'Automation'],
      imageUrl: '/src/assets/images/project_email_generator_1793195814382.jpg',
      featured: true,
      metrics: [
        { label: 'Draft Time', value: '< 60 sec' },
        { label: 'Time Reduction', value: '> 90%' },
        { label: 'Baseline Time', value: '15–20 min' },
      ],
      overview:
        'Automated the generation of highly personalized outreach emails for internship and job applications, synthesizing portfolio embeddings with live scraped company signals to produce high-converting drafts in seconds.',
      highlights: [
        'Engineered an automated scraping pipeline to harvest target company mission statements, tech stack keywords, and recent product launches.',
        'Synthesized candidate portfolio project highlights with scraped organization signals using vector similarity embeddings to match the best project to the prospective employer.',
        'Cut average email drafting time from 15–20 minutes down to under 60 seconds while preserving authentic personal voice and contextual relevance.',
        'Demonstrated higher open and response rates during pilot outreach campaigns compared to generic template baselines.',
      ],
      architecture: [
        'Target Company URL Scraper & Entity Extractor',
        'Candidate Portfolio Embedding Store',
        'Semantic Matchmaker: Aligning job requirements with candidate projects',
        'Dynamic Prompt Synthesizer generating cold outreach drafts',
        'User Editing & Export Interface for rapid sending',
      ],
      interactiveDemoType: 'email-generator',
      githubUrl: 'https://github.com/varshanaut',
    },
  ] as Project[],

  experience: [
    {
      role: 'Data Science and AI Intern',
      company: 'RP2 INDIA PVT LTD',
      period: 'Present',
      description: 'Data Science and AI Intern at RP2 INDIA PVT LTD.',
      achievements: [],
    },
  ],
};
