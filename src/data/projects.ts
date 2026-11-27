export const projects = [
  {
    title: "ThreatLens", label: "Defensive security · 2026",
    description: "A defensive security investigation workspace combining searchable evidence, rule-based detection, CICIDS2017 network-flow scoring, and evidence-grounded incident summaries.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "LangGraph"],
    href: "https://github.com/ahmed7077/ThreatLens", tone: "night",
  },
  {
    title: "PulseBridge", label: "Health AI research · 2026",
    description: "A software-only remote-patient-monitoring research prototype with synthetic physiological monitoring and a separately trained ICU mortality research model.",
    tech: ["React", "FastAPI", "PostgreSQL", "Random Forest"],
    href: "https://github.com/ahmed7077/ai-remote-patient-monitoring", tone: "signal",
  },
  {
    title: "Astronomical Event Detection", label: "Edge vision · 2025",
    description: "A low-power vision system for Raspberry Pi Zero 2 W that captures and preprocesses sky imagery to identify meteor streaks, satellite tracks, star clusters, aurora presence, and planetary alignment.",
    tech: ["Python", "OpenCV", "Raspberry Pi", "Flask"],
    href: "https://github.com/ahmed7077/astro-event-detector-pi0w", tone: "vision",
  },
  {
    title: "IoT Server Room Monitoring", label: "Connected systems · 2024",
    description: "An Arduino monitoring system tracking temperature, humidity, air quality, simulated server load, and fan speed with real-time ThingSpeak visualization.",
    tech: ["Arduino", "C++", "DHT11", "MQ2", "ThingSpeak"],
    href: "https://github.com/ahmed7077/IoT-Server-Monitoring-System", tone: "roots",
  },
  {
    title: "Face Emotion Recognition", label: "Deep learning · 2025",
    description: "A FER2013 facial expression classifier using TensorFlow and EfficientNetB0 to predict seven emotion classes from visual input.",
    tech: ["Python", "TensorFlow", "EfficientNetB0", "OpenCV"],
    href: "https://github.com/ahmed7077/face-emotion-recognition", tone: "night",
  },
  {
    title: "Efficient LLM Adaptation", label: "Language intelligence · 2025",
    description: "Parameter-efficient adaptation of Llama 3.2-3B-Instruct with LoRA, paired with a deterministic retrieval-first inference layer.",
    tech: ["PyTorch", "Hugging Face", "LoRA", "PEFT", "TRL"],
    href: "https://github.com/ahmed7077/efficient-llm-adaptation", tone: "signal",
  },
] as const;
