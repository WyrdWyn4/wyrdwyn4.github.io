export type NodeType = 'serial' | 'top' | 'bottom';

export interface NodeData {
    id: string;
    stage: number;
    type: NodeType;
    label: string;
    title: string;
    date: string;
    status: 'success' | 'processing' | 'pending';
    link?: string;
    logs: string[];
}

export const NODES: NodeData[] = [
    {
        id: "iswep", stage: 0, type: "serial",
        label: "Scripting", title: "ISWEP Research Assistant", date: "Jun 2022 - Sep 2022",
        status: "success",
        link: "/work/memorial-university-of-newfoundland/iswep-research-assistant",
        logs: [
            "[INFO] Initializing graduate_office_automation.py...",
            "> TASK: Programmed Python script for Excel parsing",
            "> TASK: Selective Internet Search automation",
            "> VISUALIZATION: Generated linear models & bell curves",
            "[SUCCESS] Survey analysis format standardized."
        ]
    },
    {
        id: "robotics", stage: 1, type: "serial",
        label: "Embedded", title: "Robotics Research Intern", date: "Jan 2023 - May 2023",
        status: "success",
        link: "/work/memorial-university-of-newfoundland/robotics-research-intern",
        logs: [
            "[RUN] Booting ZumoBot_Swarm_v1...",
            "> HARDWARE: Integrated DekaBot & Adafruit Color Sensors",
            "> CPP: Developed custom I2C communication protocol",
            "> ALGO: Implemented PID Control loop mechanisms",
            "[SUCCESS] Swarm implementation successful."
        ]
    },
    {
        id: "diag", stage: 2, type: "serial",
        label: "Data QA", title: "Data Quality Assurance Analyst", date: "May 2023 - Sep 2023",
        status: "success",
        link: "/work/memorial-university-of-newfoundland/data-quality-assurance-analyst",
        logs: [
            "[IMG] Loading DICOM assets...",
            "> ROLE: Data Quality Assurance Analyst (DIAG Lab)",
            "> TASK: Analyzed medical images for data accuracy",
            "> COLLAB: Partnered with FAISAL Labs for patient care metrics",
            "[SUCCESS] Image metrics validated."
        ]
    },
    {
        id: "sdp", stage: 3, type: "serial",
        label: "Analytics", title: "Data Analytics Intern (SDP-GP)", date: "Sep 2023 - Dec 2023",
        status: "success",
        link: "/work/sdp-gp/data-analytics-and-project-control-intern",
        logs: [
            "[INFO] Connecting to SNC-Lavalin Database...",
            "> STACK: Python, C++, Pandas, NumPy, Matplotlib",
            "> AUTOMATION: Web parsing via Selenium & Requests-HTML",
            "> ML: Automated file-sorting using Tesseract & TensorFlow",
            "[SUCCESS] Critical Path Visualization deployed."
        ]
    },
    {
        id: "nasdaq_1", stage: 4, type: "top",
        label: "Datalake I", title: "Nasdaq Datalake Intern (Term 1)", date: "May 2024 - Aug 2024",
        status: "success",
        link: "/work/nasdaq-verafin/datalake-developer-intern",
        logs: [
            "[AWS] Initializing EMR Cluster...",
            "> STACK: Java, Scala, Spark, Serverless Computing",
            "> DATA: Implemented database splitting logic in Scala",
            "> QUALITY: Comprehensive validations via Jupyter",
            "[SUCCESS] Data storage pipeline optimized."
        ]
    },
    {
        id: "siftmed", stage: 4, type: "bottom",
        label: "SiftMed QA", title: "SiftMed Data Quality Specialist", date: "May 2024 - Aug 2024",
        status: "success",
        link: "/work/siftmed/data-quality-specialist",
        logs: [
            "[QA] Scanning medical_documents...",
            "> TASK: Automated document processing workflows",
            "> SCRIPT: Python automation for duplicate resolution",
            "> AUDIT: Ensuring metadata accuracy for client delivery",
            "[SUCCESS] System output verified."
        ]
    },
    {
        id: "valiant", stage: 5, type: "top",
        label: "Team Lead", title: "Valiant Aerotech Lead", date: "Sep 2024 - Present",
        status: "processing",
        link: "/work/valiant-aerotech/software-team-lead",
        logs: [
            "[DRONE] Calibrating flight_controller...",
            "> ROLE: Leading 5-engineer software team",
            "> DEPLOY: Autonomous flight prototyping & Sensor Fusion",
            "> EVENT: AEAC Annual Competition (Alberta)",
            "[WAIT] Gearing up for AEAC Annual Competition (Ottawa)."
        ]
    },
    {
        id: "sci_comp", stage: 5, type: "bottom",
        label: "Sci Comp", title: "Scientific Computing RA", date: "Sep 2024 - Feb 2025",
        status: "success",
        link: "/work/memorial-university-of-newfoundland/scientific-computing-research-assistant",
        logs: [
            "[CHEM] Loading CREM Framework...",
            "> TASK: Specialized implementation for bonded molecular generation",
            "> VIZ: Developed Jupyter Notebooks for analytics",
            "[SUCCESS] Molecular generation complete."
        ]
    },
    {
        id: "nasdaq_2", stage: 6, type: "serial",
        label: "Datalake II", title: "Nasdaq Datalake Intern (Term 2)", date: "Jan 2025 - Aug 2025",
        status: "success",
        link: "/work/nasdaq-verafin/datalake-developer-intern",
        logs: [
            "[AWS] Triggering Step Functions...",
            "> ROLE: Datalake Developer Intern",
            "> TASK: Enhancing pipeline efficiency with AWS Services",
            "> COLLAB: Developing analytics solutions with data analysts",
            "[SUCCESS] Pipeline efficiency improved."
        ]
    },
    {
        id: "nasdaq_ai", stage: 7, type: "serial",
        label: "AI Automation", title: "AI & Automation Developer", date: "Sep 2025 - Present",
        status: "processing",
        link: "/work/nasdaq-verafin/ai-and-automation-developer-intern",
        logs: [
            "[PROD] Deploying Mixture-of-Experts Service...",
            "> ARCH: End-to-end architecture for LLM agents",
            "> INTEGRATION: Generating feedback within GitHub workflows",
            "> METRICS: Enabling SPACE & DORA dashboards in Grafana",
            "[WAIT] Awaiting graduation trigger..."
        ]
    },
    {
        id: "grad", stage: 8, type: "serial",
        label: "Graduation", title: "Class of 2026", date: "May 25, 2026",
        status: "pending",
        logs: [
            "[PENDING] Awaiting date: 2026-05-25",
            "> DEGREE: Bachelor of Engineering (Computer)",
            "> STATUS: Locked until completion."
        ]
    }
];