import { useState } from 'react';
import { 
  Cpu, 
  Atom, 
  Aperture, 
  Microscope, 
  Smile, 
  LineChart, 
  Telescope, 
  Network 
} from 'lucide-react';
import ResearchCard from "./ResearchCard";
// import galaxyImage from "@/assets/astro_sim/galaxy-research.jpg";
import jwstImage from "@/assets/oct24.png";
import particleImage from "@/assets/particle-physics.jpg";
import disccofanImage from "@/assets/disccofan.png";
const CATEGORIES = {
  "ML & Deep Learning": { color: "#D97757", label: "ML & Deep Learning" }, 
  "LLMs": { color: "#7270ee", label: "LLMs" }, 
  "HPC & Algorithms": { color: "#8A9A5B", label: "HPC & Algorithms" },     
  "Data Science & Stats": { color: "#c078c2", label: "Data Science & Stats" } 
};

type Project = {
  id: string;
  title: string;
  tags: string;
  icon: React.ReactNode;
  category: { color: string; label: string };
  size: number;
  position: { left: string; top: string };
  shortDescription: string;
  details: React.ReactNode;
  image?: string;
  gallery?: string[];
  videos?: string[];
  publications?: { label: string; url: string }[];
  repos?: { label: string; url: string }[];
};

// Reusable component for the modal sections
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div style={{ marginBottom: '24px' }}>
    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '8px' }}>
      {title}
    </h4>
    <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '14px' }}>
      {children}
    </div>
  </div>
);

const projects: Project[] = [
  // --- ML & Deep Learning ---
  {
  id: "hoursec",
  title: "Edge AI & FPGA",
  tags: "Hoursec · Nov 2025 – present",
  icon: <Cpu size={20} strokeWidth={1.5} />,
  category: CATEGORIES["ML & Deep Learning"],
  size: 45,
  position: { left: "15%", top: "20%" },
  shortDescription: "Building the full software-to-hardware stack for on-chip AI inference — from Python neural networks to C++ RTL implementation on FPGAs.",
  image: "/edge/chip.jpg",
  repos: [{ label: "hoursec.tech", url: "https://hoursec.tech" }],
  details: (
    <>
  <Section title="The context">
  <p>Hoursec is a Delft-based startup building Single Chip Inference and Training (SCIT) — a novel architecture that runs AI inference and training simultaneously on a single FPGA, targeting a ~3000× speedup over conventional solutions. The use cases are demanding: gravitational wave detection for the Einstein Telescope, particle track reconstruction at CERN (200 GB/s), and high-frequency trading. The core constraint is always the same — maximum accuracy, minimum latency, minimum energy, on local hardware with no GPU in sight.</p>
  </Section>
      <Section title="My work">
         <p>I own the full pipeline from trained model to hardware-ready implementation. Concretely, that means taking a neural network defined in Python/PyTorch, compressing it aggressively enough to fit on an FPGA, and producing C++ that can be synthesized to RTL — without losing the accuracy the model was trained for.</p>
       </Section>
       <Section title="Technical stack">
         <ul style={{ paddingLeft: '20px', margin: 0 }}>
         <li><strong>Layer-wise quantization:</strong> reducing weight and activation precision (INT8, INT4, binary) using custom schemes, calibrated per layer to preserve model quality</li>
          <li><strong>Structured pruning:</strong> removing redundant filters and neurons to reduce parameter count before quantization, with fine-tuning to recover accuracy</li>
           <li><strong>Latency vs. resource trade-offs:</strong> profiling inference pipelines to find the optimal balance between throughput and FPGA resource utilization (LUTs, DSPs, BRAMs)</li>
           <li><strong>Benchmarking:</strong> measuring latency, energy consumption, and throughput against GPU baselines to quantify efficiency gains</li>
           <li><strong>C++ / HLS export:</strong> converting optimized models to high-level synthesis-ready C++ for RTL implementation on target FPGAs</li>
         </ul>
       </Section>
       <Section title="Tools">
         <p>Python · PyTorch · (Q)Keras · C++ · FPGA toolchains</p>
       </Section> 
  </>
  )
  },
  {
  id: "feelgood",
  title: "FeelGoodNews",
  tags: "Android App · 2025",
  icon: <Smile size={18} strokeWidth={1.5} />,
  category: CATEGORIES["LLMs"],
  size: 45,
  position: { left: "20%", top: "85%" },
  shortDescription: "An Android app delivering a daily feed of positive news — AI-curated, AI-illustrated, no ads.",
  image: "/fgn/logoGP.png",
  gallery: ["/fgn/FGN_news.jpg", "/fgn/FGN_entry.jpg", "/fgn/FGN_black.jpg"],
  repos: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.simongazagnes.feelgoodnews" }],
  details: (
    <>
      <Section title="The idea">
        <p>Most news apps are optimized for engagement, which in practice means anxiety. FeelGoodNews does the opposite: it scrapes global news daily, filters for genuinely positive stories across science, health, technology, space, and human progress, and presents them cleanly — no ads, no tracking, no doom. Built and published on my own, available on the Play Store.</p>
      </Section>
      <Section title="How it works">
        <p>Each day, the app fetches fresh articles and runs them through GPT-3 for sentiment filtering and summarization — keeping only stories that are genuinely uplifting, and rewriting them into short, readable digests. Each story is paired with a generated illustration produced via Cloudflare's image generation worker running Flux-1-Schnell (<code>@cf/black-forest-labs/flux-1-schnell</code>), so every article gets a unique visual without storing or licensing stock images.</p>
      </Section>
      <Section title="Technical stack">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Frontend:</strong> React Native (TypeScript), mobile-first UI</li>          <li><strong>LLM:</strong> GPT-3 for sentiment classification and article summarization</li>
          <li><strong>Image generation:</strong> Cloudflare Workers AI — Flux-1-Schnell for per-story illustrations</li>
          <li><strong>Backend:</strong> Lightweight news scraping pipeline with daily refresh</li>
          <li><strong>Privacy:</strong> No data collected, no data shared with third parties</li>
        </ul>
      </Section>
    </>
  )
},
  {
  id: "melanoma",
  title: "Melanoma Detection",
  tags: "Freelance · 2025 – ongoing",
  icon: <Microscope size={18} strokeWidth={1.5} />,
  category: CATEGORIES["ML & Deep Learning"],
  size: 45,
  position: { left: "45%", top: "55%" },
  shortDescription: "A privacy-friendly AI app to screen skin moles for melanoma risk — trained on 45,000 dermoscopic images, deployed on Hugging Face.",
  image: "/melanoma/melanoma.png",
  gallery: ["/melanoma/melanoma.png"],
  videos: ["/melanoma/Mole_demo.mp4"],
  repos: [
    { label: "GitHub", url: "https://github.com/sgazagnes/melanoma-detection" },
    { label: "Hugging Face Space", url: "https://huggingface.co/spaces/sgazagnes/melanoma-detection" },
  ],
  details: (
    <>
      <Section title="The problem">
        <p>Melanoma is deadly when caught late and very treatable when caught early. The goal is a lightweight, privacy-friendly app that lets anyone photograph a mole and get an immediate AI risk score — not a diagnosis, but a nudge to see a doctor when it matters.</p>
      </Section>
      <Section title="Dataset & preprocessing">
        <p>Trained on ~45,000 dermoscopic images merged from three sources: a Kaggle dataset, ISIC 2016 (900 images), and ISIC 2020 (33,000+ images). The preprocessing pipeline handles the messiness of real dermatology data: duplicate removal via perceptual hashing, vignette border detection and cropping, optional hair artifact removal, and class-balanced augmentation (flipping, rotation, contrast/brightness/saliency variations).</p>
      </Section>
      <Section title="Model & results">
        <p>MobileNetV3-Small fine-tuned on the merged dataset for binary classification (benign / malignant). On a held-out test set of ~6,000 images:</p>
        <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
          <li><strong>95% overall accuracy</strong></li>
          <li><strong>97% recall on malignant cases</strong> — only 27 cancers missed out of 783</li>
          <li>74% precision on malignant — some false alarms, intentionally, since missing a cancer is far worse than a false positive</li>
        </ul>
      </Section>
      <Section title="What's next">
        <p>The Gradio demo is live on Hugging Face. Next steps include real-time camera input for mobile, ONNX/TFLite conversion for edge/embedded deployment, saliency maps for model interpretability, and continued dataset and training improvements.</p>
      </Section>
      <Section title="Tech stack">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Model:</strong> PyTorch · MobileNetV3-Small · BCEWithLogitsLoss · Adam</li>
          <li><strong>Data:</strong> ISIC 2016/2020 · Kaggle · perceptual hashing · custom preprocessing pipeline</li>
          <li><strong>Deployment:</strong> Gradio · Hugging Face Spaces</li>
          <li><strong>Planned:</strong> ONNX · TFLite · real-time mobile vision</li>
        </ul>
      </Section>
    </>
  )
},

  // --- HPC & Algorithms ---
  {
  id: "lotf",
  title: "Particle Tracking (LOTF)",
  tags: "PANDA · Eur. Phys. Journal A · 2023",
  icon: <Atom size={24} strokeWidth={1.5} />,
  category: CATEGORIES["HPC & Algorithms"],
  size: 45,
  position: { left: "60%", top: "18%" },
  shortDescription: "A real-time track reconstruction algorithm for the PANDA detector — 85% efficiency, 8.7× better z-resolution, and fast enough for online data selection.",
  image: "/lotf/lotf.jpg",
  gallery: ["/lotf/STTGridVirt_XYPlane.png", "/lotf/STTGrid_ZYPlane.png", "/lotf/ntrackpsimAll.png", "/lotf/PandaQA3GevV2.png", "/lotf/PandaQAEvtMixV2.png", "/lotf/AllTime.png"],
  publications: [
    { label: "Eur. Phys. Journal A (2023)", url: "https://link.springer.com/article/10.1140/epja/s10050-023-01005-8" },
  ],
  repos: [
    { label: "GitHub", url: "https://github.com/sgazagnes/lotf" },
  ],
  details: (
    <>
      <Section title="The experiment">
        <p>PANDA (antiProton ANnihilation at DArmstadt) is a future high-luminosity nuclear physics experiment at the FAIR facility in Germany. At its core is the Straw Tube Tracker (STT), a central detector that records the ionization trails left by charged particles produced in antiproton-proton annihilations. The challenge: events arrive at millions per second, and reconstructing particle trajectories must happen in real time — there's no buffer large enough to store everything for offline processing.</p>
      </Section>
      <Section title="The algorithm">
        <p>LOTF (LOcal Track Finder) reconstructs 3D particle trajectories by exploiting the geometric neighborhood relations between individual straw tubes. Rather than global pattern search — which doesn't scale to the required rates — it builds track candidates locally, propagating hits along neighboring tubes. It includes a local fitting step to handle overlapping tracks and a virtual node system to recover z-position information, which straw tubes alone can't provide.</p>
      </Section>
      <Section title="Results">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>85% average track finding efficiency</strong> on 30,000 simulated events</li>
          <li><strong>Highest number of fully pure tracks</strong> and lowest incorrect reconstructions vs. two competing methods</li>
          <li><strong>8.7× improvement in median z-error</strong> compared to the reference algorithm</li>
          <li><strong>~68,000 hits/second (630x faster than previous implementation)</strong> raw reconstruction rate</li>
          <li>Validated on mixed-event datasets (4 overlapping events), confirming robustness in high-occupancy conditions</li>
        </ul>
      </Section>
      <Section title="Tech stack">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Language:</strong> C++ · ROOT framework (CERN)</li>
          <li><strong>Simulation:</strong> PandaRoot · Monte Carlo event generation</li>
          <li><strong>Reconstruction:</strong> graph traversal · local least-squares circle fitting · virtual-node linear z-regression</li>
          <li><strong>Evaluation:</strong> 30,000 events + 3,750 mixed-event datasets</li>
        </ul>
      </Section>
    </>
  )
},
  {
  id: "disccofan",
  title: "DISCCOFAN",
  tags: "Computer Vision · Mathematical Morphology · 2019–2022",
  icon: <Aperture size={26} strokeWidth={1.5} />,
  category: CATEGORIES["HPC & Algorithms"],
  size: 45,
  position: { left: "88%", top: "12%" },
  shortDescription: "A distributed image processing package for computing morphological component trees on tera-scale 2D and 3D datasets across HPC clusters.",
  image: "/disccofan/disccofan.png",
  gallery: ["/disccofan/tree.jpg","/disccofan/8bit_hybrid.png","/disccofan/floating_hybrid.png","/disccofan/floating_mpi.png","/disccofan/lofar.png","/disccofan/parallel_attribute.jpg"],
  publications: [
    { label: "IEEE TIP (2021) — main paper", url: "https://ieeexplore.ieee.org/document/9376636" },
    { label: "ICIP Conference (2022) — parallel attributes", url: "https://ieeexplore.ieee.org/document/9897660" },
    { label: "IJPRAI (2019) — 2D foundations", url: "https://www.worldscientific.com/doi/10.1142/S0218001419400123" },
  ],
  repos: [
    { label: "GitHub", url: "https://github.com/sgazagnes/disccofan" },
    { label: "Documentation", url: "https://disccofan.readthedocs.io/en/latest/" },
  ],
  details: (
    <>
      <Section title="The problem">
        <p>Modern scientific imaging — astronomical surveys, medical scans, materials science microscopy — produces datasets too large to fit in the memory of a single machine. Morphological connected filters are among the most powerful tools for analyzing structures in these images: they operate on connected components, preserve edges, and allow multi-scale shape analysis. But scaling them to terabytes of 3D data across distributed systems had no good solution. DISCCOFAN is the answer to that.</p>
      </Section>
      <Section title="The method">
        <p>DISCCOFAN (DIStributed Connected COmponent Filtering and ANalysis) builds and processes <strong>component trees</strong> — hierarchical data structures that represent the inclusion relationships of connected regions at every intensity threshold of an image. The key innovation is a distributed memory formulation: the image is partitioned across MPI processes, each builds a local component forest, and a merge procedure reconstructs the global tree without ever centralizing the data.</p>
        <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
          <li><strong>Shared + distributed memory:</strong> MPI for inter-node communication, OpenMP for intra-node parallelism — hybrid parallelism that saturates both memory buses and network bandwidth</li>
          <li><strong>Component tree construction:</strong> max-tree and min-tree variants supporting attribute-based filtering (area, volume, shape, elongation) at any scale</li>
          <li><strong>Multi-scale analysis:</strong> pattern spectra computed directly on the distributed tree — no need to reconstruct the full image</li>
          <li><strong>3D extension:</strong> the 2019 paper established the 2D foundations; the 2021 IEEE TIP paper extended the method to full 3D volumes and higher dynamic range floating-point data</li>
          <li><strong>Parallel attribute computation</strong> (IEEE TPAMI 2022): generalized the framework to user-defined per-component attributes computed in parallel during tree construction</li>
        </ul>
      </Section>
      <Section title="Performance">
        <p>On the Peregrine HPC Cluster of the University of Groningen, DISCCOFAN processes 150 GB+ image volumes in ~2.5 hours — down from 28 hours with the previous serial approach, an <strong>11× speedup</strong>. It is the only distributed method that achieves a speedup greater than 1 on realistic astronomical floating-point datasets, where competing methods stall due to load imbalance and communication overhead.</p>
      </Section>
      <Section title="Applications">
        <p>Used in radio astronomy (SKA telescope mock observations, epoch of reionization morphology), galaxy survey analysis, medical image segmentation, and materials science. Cited by other groups for its role in large-scale morphological pattern spectrum computation.</p>
      </Section>
      <Section title="Tech stack">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Language:</strong> C (core library) · OpenMP · MPI</li>
          <li><strong>Compute:</strong> HPC clusters </li>
          <li><strong>Data structures:</strong> distributed component forests · max/min-trees · pattern spectra</li>
          <li><strong>Published in:</strong> IEEE Transactions on Image Processing · IEEE TPAMI · IJPRAI</li>
        </ul>
      </Section>
    </>
  )
},
  {
  id: "astro1",
  title: "Reionization & Lyman Continuum Escape",
  tags: "Astronomy \& Data Science · A&A · MNRAS · 2018–2025",
  icon: <Telescope size={22} strokeWidth={1.5} />,
  category: CATEGORIES["HPC & Algorithms"],
  size: 45,
  position: { left: "82%", top: "65%" },
  shortDescription: "Seven years of spectroscopic research on how the first galaxies reionized the universe — from absorption line fitting to 21cm morphology.",
  image: "/astro1/oct24.png",
  gallery: [
      "/astro1/30_sim.png",
      "/astro1/200_hii_ps.png",
      "/astro1/allliness.png",
      "/astro1/fesc_M1500.png",
      "/astro1/fesclycebvlog.png",
      "/astro1/fit_example.png",
      "/astro1/Lya_example.png",
      "/astro1/MGII_complow_8034.png",
      "/astro1/Nion1.png",
      "/astro1/sketch.png",
      "/astro1/target12_rgb_PSFmatched.png"
    ],
  publications: [
    { label: "A&A 2018 — neutral gas & LyC covering fractions", url: "https://www.aanda.org/articles/aa/pdf/2018/08/aa32759-18.pdf" },
    { label: "A&A 2020 — Lyα & LyC escape mechanisms", url: "https://www.aanda.org/articles/aa/pdf/2020/07/aa38096-20.pdf" },
    { label: "MNRAS 2021 — 21cm reionization morphology", url: "https://academic.oup.com/mnras/article/502/2/1816/6102530?login=false" },
    { label: "MNRAS 2025 — LyC leakers spectroscopy", url: "https://watermark02.silverchair.com/staf768.pdf" },
  ],
  repos: [
    { label: "AbsorpFit — UV absorption line fitting", url: "https://github.com/sgazagnes/AbsorpFit" },
    { label: "21cm tomography", url: "https://github.com/sgazagnes/21cm-tomography" },
    { label: "LyC/Lyα escape analysis", url: "https://github.com/sgazagnes/lya-lyc-escape" },
  ],
  details: (
    <>
      <Section title="The big question">
        <p>The Epoch of Reionization — roughly 400 million to 1 billion years after the Big Bang — is when the first galaxies flooded the universe with ultraviolet radiation and ionized the neutral hydrogen that had filled intergalactic space since the Big Bang. We know it happened. We don't fully understand how. Specifically: how did ionizing photons actually escape young galaxies, given that those same galaxies were surrounded by dense neutral gas that should have absorbed them?</p>
      </Section>
      <Section title="Thread 1 — Absorption line spectroscopy (2018–2025)">
        <p>My main contribution was developing and applying a spectral fitting framework (AbsorpFit) to constrain the neutral hydrogen covering fraction and column density of star-forming galaxies using UV absorption lines — Si II, C II, and the Lyman series. The core insight: LyC photons don't escape through thin gas uniformly, they leak through holes in a patchy, clumpy ISM (the "picket-fence" model). Galaxies with covering fractions below unity are the leakers.</p>
        <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
          <li><strong>2018 (A&A):</strong> First systematic measurement of H I covering fractions for 18 star-forming galaxies including 9 confirmed LyC emitters. Showed Si II lines can serve as a proxy for H I coverage, providing a practical estimator for high-z galaxies where direct LyC measurement is impossible.</li>
          <li><strong>2020 (A&A):</strong> Extended to 22 galaxies (13 LCEs). Established observational links between low H I covering fractions, Lyman-α escape fraction, peak velocity, and LyC escape — building a coherent physical picture of ISM porosity as the driver of reionization.</li>
          <li><strong>2025 (MNRAS):</strong> Further constraints on LyC leakers combining spectroscopic analysis with JWST observations and updated ISM modelling.</li>
        </ul>
      </Section>
      <Section title="Thread 2 — 21cm reionization morphology (2021)">
        <p>Separately, I worked on inferring the properties of reionization sources — ionizing efficiency, escape fractions — not from individual galaxy spectra but from the large-scale morphology of the ionized regions in 21cm emission maps. Using DISCCOFAN to compute morphological pattern spectra of simulated ionized bubbles observed with the SKA1-Low telescope configuration, we showed that bubble shape statistics encode information about the sources driving reionization. Published in MNRAS (2021).</p>
      </Section>
      <Section title="Tech stack">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Spectral fitting:</strong> Python (NumPy, SciPy, Astropy) · custom MCMC & χ² continuum + absorption line fitting (AbsorpFit)</li>
          <li><strong>Data:</strong> HST/COS UV spectra · JWST spectra · low-z LyC emitter samples · SKA1-Low mock observations</li>
          <li><strong>Statistical analysis:</strong> Pearson & Spearman correlation coefficients · p-value significance testing · MCMC posterior sampling and corner plot analysis · χ² minimization · bootstrap uncertainty estimation · linear regression on multi-parameter ISM diagnostics</li>
        </ul>
      </Section>
    </>
  )
},
  // --- Data Science & Stats ---
  {
  id: "quant",
  title: "Scuperta Finance",
  tags: "Personal project · 2025 – ongoing",
  icon: <LineChart size={18} strokeWidth={1.5} />,
  category: CATEGORIES["LLMs"],
  size: 45,
  position: { left: "55%", top: "40%" },
  shortDescription: "A full-stack equity research platform — systematic screening, AI-generated reports, and macro regime detection across 6,000+ global equities.",
  image: "/scuperta/logo_finance.PNG",
  repos: [
    { label: "Open Platform ↗", url: "https://scuperta-finance.streamlit.app" },
    { label: "Platform page", url: "/scuperta/scuperta-finance.html" },
  ],
    details: (
    <>
      <Section title="What it is">
        <p>Built for my own investing, Scuperta Finance is a quantitative research platform covering 6,000+ equities across US and European markets. The goal: replace noisy financial media with systematic, reproducible analysis. Free to use during beta — no account required.</p>
      </Section>
      <Section title="Six modules">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Systematic Screener:</strong> 40+ technical and fundamental filters across 8 preset strategies. Parquet-backed for sub-second screening — no live API calls during scan.</li>
          <li><strong>AI Research Agent (Claude Sonnet):</strong> structured equity reports with live web search, SEC EDGAR filing retrieval, insider transaction analysis, and graded output across 8 dimensions with bear/base/bull 10-year scenarios.</li>
          <li><strong>Technical Analysis:</strong> full indicator suite (SMA/EMA, RSI, Bollinger, ADX, MACD) and a rule-based market state engine classifying trend, breakout, consolidation, and reversal.</li>
          <li><strong>Sector Rotation:</strong> quadrant map tracking Leading / Improving / Weakening / Lagging sectors, plus cross-year seasonality correlation.</li>
          <li><strong>Institutional Flow:</strong> relative volume anomaly detection, risk-on/risk-off regime barometer, SPY volume thresholding.</li>
          <li><strong>Recession Watch:</strong> composite score from 8 precursors — yield curve inversion, credit spreads, copper/gold ratio, semiconductor indicator, small-cap divergence, Dow Theory.</li>
        </ul>
      </Section>
      <Section title="Tech stack">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Backend:</strong> Python · SQLite + Parquet · vectorized pandas · yfinance / SEC EDGAR API</li>
          <li><strong>AI layer:</strong> Claude via Anthropic API · structured prompting · tool use (web search, document retrieval)</li>
          <li><strong>Frontend:</strong> Streamlit · custom HTML/CSS charting components</li>
          <li><strong>Data:</strong> 28 financial metrics per ticker · 4+ years of fundamental history · 6,000+ equitiesa across US and European Markets</li>
        </ul>
      </Section>
    </>
  )
},
  {
    id: "astro2",
    title: "Matching Real & Virtual Galaxies",
    tags: "Astronomical DS · 2023 & 2024",
    icon: <Network size={24} strokeWidth={1.5} />,
    category: CATEGORIES["Data Science & Stats"],
    size: 45,
    position: { left: "75%", top: "30%" },
    shortDescription: "Using 22,500 mock spectra from a simulated galaxy to interpret real UV observations and predict ionizing photon escape.",
    image: "/astro_sim/galaxy-research.jpg",
    gallery: [
      "/astro_sim/paper1.jpg",
      "/astro_sim/paper2.jpg",
      "/astro_sim/GlobalProp_dep.png", 
      "/astro_sim/3d_vis.gif", 
      "/astro_sim/EWProp.png", 
      "/astro_sim/j0127-0619depletionVR1.png",
      "/astro_sim/Stacks_V2.png", 
      "/astro_sim/SFR_histogram_sketch.png"
    ],
    publications: [
      { label: "Paper I — CLASSY (2023)", url: "https://iopscience.iop.org/article/10.3847/1538-4357/acda2c/pdf" },
      { label: "Paper II — VANDELS (2024)", url: "https://iopscience.iop.org/article/10.3847/1538-4357/ad47a4/pdf" },
    ],
    repos: [
      { label: "GitHub Paper I", url: "https://github.com/sgazagnes/CLASSY-RHD-Spectra" },
      { label: "GitHub Paper II", url: "https://github.com/sgazagnes/VANDELS-RHD-Spectra" }
    ],
    details: (
      <>
        <Section title="The problem">
          <p>UV absorption lines from metals like Si II and C II are some of our best tools for understanding what's happening inside distant galaxies — gas flows, metal content, and whether ionizing photons can escape into the intergalactic medium. But interpreting these spectral features from real observations is notoriously difficult: the line profiles encode velocity, column density, and covering fraction all at once, and disentangling them requires assumptions that are hard to validate.</p>
        </Section>
        <Section title="The approach">
          <p>I used a high-resolution radiation-hydrodynamics simulation of a single virtual galaxy to generate 22,500 synthetic UV spectra — varying the viewing angle and the galaxy's evolutionary stage. These mock spectra act as a controlled laboratory: we know the exact gas properties behind each line profile, which lets us test how well real-world fitting methods actually recover the truth.</p>
        </Section>
        <Section title="Paper I — CLASSY (2023)">
          <p>Compared the mock spectra against 45 nearby star-forming galaxies from the COS Legacy Spectroscopic SurveY (CLASSY). The simulation accurately reproduced 38 of 45 observed spectra across a wide range of stellar masses (10⁶ to 10⁹ M☉) and metallicities. Showed that aperture losses explain the weakness of fluorescent emission in several CLASSY galaxies — a systematic effect that must be accounted for when comparing simulations to observations.</p>
        </Section>
        <Section title="Paper II — VANDELS (2024)">
          <p>Extended the method to 131 galaxies at redshift z~3 from the VANDELS survey. The simulation matched 83% of the observed spectra. The best-matching mock spectra came from periods of intense star formation where the galaxy was 4× more luminous. Additionally, I predicted the Lyman Continuum escape fraction for each galaxy using the simulation environment, finding an average of ~1% — consistent with independent estimates and tightly correlated with Lyman-α escape fractions.</p>
        </Section>
        <Section title="Tech stack">
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li><strong>Simulation:</strong> RAMSES radiation-hydrodynamics code, post-processed with RASCAS radiative transfer</li>
            <li><strong>Data processing:</strong> Python (NumPy, SciPy, Astropy), custom spectral fitting pipelines</li>
            <li><strong>Statistical methods:</strong> χ² spectral matching, Monte Carlo sampling, Bayesian parameter estimation</li>
            <li><strong>Compute:</strong> HPC clusters (TACC Frontera), managing thousands of node-hours for spectral generation</li>
            <li><strong>Visualization:</strong> Matplotlib, custom plotting for publication-quality figures</li>
          </ul>
        </Section>
      </>
    )
  },
  {
  id: "agentic",
  title: "Agentic AI & Web",
  tags: "LLM Agents · Automation · Freelance",
  icon: <Cpu size={18} strokeWidth={1.5} />,
  category: CATEGORIES["LLMs"],
  size: 45,
  position: { left: "35%", top: "75%" },
  shortDescription: "Freelance work building AI agents, automation pipelines, and client websites — practical tools scoped to real needs.",
  image: "/freelance/logo.jpg",
  repos: [
    { label: "Job Agent — GitHub", url: "https://github.com/sgazagnes/job-agent" },
    { label: "Asteria Education", url: "https://asteria-education.com/" },
  ],
  details: (
    <>
      <Section title="What this covers">
        <p>A mix of freelance and personal projects building things with LLMs, automation, and web tech. The common thread: scoped tightly to a real problem, no unnecessary complexity.</p>
      </Section>
      <Section title="Projects">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Job Agent:</strong> an agentic pipeline that automates job search workflows — scraping listings, filtering by relevance, drafting tailored applications, and tracking status. Built with Python and LLM tool use.</li>
          <li><strong>Email classifier:</strong> automated email triage using an LLM classifier to route, label, and prioritize incoming messages — reducing manual inbox processing for a client.</li>
          <li><strong>Asteria Education:</strong> full website for an education company offering one-on-one expert instruction — built from scratch with modern web stack.</li>
          <li><strong>Other client work:</strong> internal tooling, content automation pipelines, and full-stack web applications — not all public.</li>
        </ul>
      </Section>
      <Section title="Tech stack">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Agents & AI:</strong> Python · LLM tool use (CrewAI, LangChain, n8n) · prompt engineering · structured output parsing</li>
          <li><strong>Web:</strong> React · TypeScript · Next.js · Tailwind</li>
          <li><strong>Backend & infra:</strong> Python APIs · Docker · cloud deployment</li>
        </ul>
      </Section>
    </>
  )
},
];

// ── Helper: is this path a video? ────────────────────────────────────────────
const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

const WorkGraph = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);
  const isMobile = window.innerWidth <= 640;

  // Combine images + videos into one gallery array for the project
  const getGalleryItems = (project: Project): string[] => [
    ...(project.gallery ?? []),
    ...(project.videos ?? []),
  ];

  return (
    <div className="section" id="work">
      <style>{`
  @keyframes modalIn {
    from { opacity: 0; transform: translateY(12px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes slideUp {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}

  @media (max-width: 640px) {
    .modal-overlay {
      display: 'flex', justifyContent: 'center', alignItems: isMobile ? 'flex-end' : 'center',
padding: isMobile ? '0' : '20px',
    }
    .modal-content {
      maxWidth: isMobile ? '100%' : '720px',
width: '100%',
maxHeight: isMobile ? '92vh' : '85vh',
borderRadius: isMobile ? '20px 20px 0 0' : 'var(--radius-lg)',
animation: isMobile ? 'slideUp 0.3s cubic-bezier(0.32,0.72,0,1) forwards' : 'modalIn 0.25s ease forwards',
    }
    .modal-content::before {
      content: '';
      display: block;
      width: 36px;
      height: 4px;
      background: var(--color-border);
      border-radius: 2px;
      margin: 10px auto 0;
      flex-shrink: 0;
    }
    .modal-header {
      padding: isMobile ? '14px 16px' : '24px 32px',
      gap: 12px !important;
    }
    .modal-icon-box {
      width: isMobile ? '44px' : '88px',
height: isMobile ? '44px' : '88px',
borderRadius: isMobile ? '10px' : '14px',
    }
    .modal-title-box {
      padding-right: 28px !important;
    }
    .modal-title-box h3 {
      font-size: 17px !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
    .modal-title-box p {
      display: none !important;
    }
    .modal-content .modal-header + .modal-desc {
      display: block !important;
    }
    .modal-gallery {
      padding: 10px 16px !important;
    }
    .modal-gallery img, .modal-gallery .gallery-video-thumb {
      height: 52px !important;
      width: 76px !important;
    }
    .modal-body {
      padding: isMobile ? '16px' : '28px 32px',
      overflow-x: hidden !important;
    }
    .modal-body a[href] {
      display: flex !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }
    .modal-body div[style*="flex-wrap: wrap"] {
      flex-direction: column !important;
    }
  }
`}</style>
      <div className="sec-label" style={{ marginBottom: '24px' }}>WORK — click to explore</div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {Object.values(CATEGORIES).map((cat) => (
          <div key={cat.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: cat.color }}></div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 500 }}>
              {cat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Graph */}
      <div 
        className="graph-container"
        style={{
          backgroundColor: 'var(--color-bg-graph)',
          backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)',
          backgroundSize: '24px 24px', 
          backgroundPosition: '0 0'
        }}
      >
        <span className="axis-label" style={{ left: '16px', top: '16px', backgroundColor: 'var(--color-bg-graph)', padding: '2px 6px', borderRadius: '4px', zIndex: 10 }}>
          data volume ↑
        </span>
        <span className="axis-label" style={{ right: '0', bottom: '-28px' }}>
          application scale →
        </span>

        {projects.map((project) => (
          <div 
            key={project.id} 
            className="node" 
            style={{ left: project.position.left, top: project.position.top }}
            onClick={() => setSelectedProject(project)}
          >
            <div
            className="dot"
            style={{
              color: project.category.color,
              width: project.size,
              height: project.size,
              border: `2.5px solid ${project.category.color}`,
              backgroundImage: project.image ? `url(${project.image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: `0 0 0 3px ${project.category.color}25`,
            }}
          >
            {!project.image && project.icon}
          </div>
          <div className="node-label">
            <span style={{ fontSize: '13px', fontWeight: 600 }}>{project.title}</span><br />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-mono)' }}>
              {project.tags}
            </span>
          </div>
        </div>
        ))}
      </div>

      {/* ═══ MODAL ═══ */}
      {selectedProject && (
        <div 
          className="modal-overlay"
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: 'rgba(35, 54, 36, 0.3)',
            backdropFilter: 'blur(8px)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 100, padding: '20px',
          }}
          onClick={() => { setSelectedProject(null); setLightboxImg(null); setLightboxVideo(null); }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: 'var(--color-bg-main)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '720px', width: '100%', maxHeight: '85vh',
              display: 'flex', flexDirection: 'column',
              boxShadow: '0 24px 48px rgba(35,54,36,0.12), 0 0 0 1px rgba(0,0,0,0.03)',
              overflow: 'hidden',
              animation: 'modalIn 0.25s ease forwards',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div 
              className="modal-header"
              style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: isMobile ? '12px 14px' : '24px 32px',
                borderBottom: '1px solid var(--color-border)',
                flexShrink: 0,
                background: `linear-gradient(135deg, ${selectedProject.category.color}10, ${selectedProject.category.color}03)`,
                position: 'relative',
              }}>
              <button
                onClick={() => { setSelectedProject(null); setLightboxImg(null); setLightboxVideo(null); }}
                style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: 'rgba(255,255,255,0.9)', border: '1px solid var(--color-border)',
                  borderRadius: '50%', width: '32px', height: '32px',
                  fontSize: '18px', lineHeight: '1', color: 'var(--color-text-muted)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >×</button>

              <div className="modal-icon-box" style={{
                width: isMobile ? '44px' : '88px', height: isMobile ? '44px' : '88px', flexShrink: 0,
                borderRadius: isMobile ? '10px' : '14px',
                border: `1.5px solid ${selectedProject.category.color}30`,
                overflow: 'hidden',
                backgroundColor: selectedProject.image ? '#ffffff' : `${selectedProject.category.color}14`,
                backgroundImage: selectedProject.image ? `url(${selectedProject.image})` : 'none',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: selectedProject.category.color, fontSize: '28px',
              }}>
                {!selectedProject.image && selectedProject.icon}
              </div>
 
              <div className="modal-title-box" style={{ flex: 1, minWidth: 0, paddingRight: '32px' }}>
                <div className="modal-title-text" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500,
                    color: selectedProject.category.color,
                    backgroundColor: `${selectedProject.category.color}14`,
                    border: `1px solid ${selectedProject.category.color}25`,
                    padding: '3px 10px', borderRadius: '100px',
                  }}>
                    {selectedProject.category.label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-mono)' }}>
                    {selectedProject.tags}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600,
                  margin: '0 0 6px', color: 'var(--color-text-main)', lineHeight: 1.2,
                }}>
                  {selectedProject.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {selectedProject.shortDescription}
                </p>
              </div>
            </div>
 
            {/* ── Gallery row: images + video thumbnails ── */}
            {getGalleryItems(selectedProject).length > 0 && (
              <div className="modal-gallery" style={{
                display: 'flex', gap: '8px', padding: '12px 32px',
                borderBottom: '1px solid var(--color-border)',
                overflowX: 'auto', flexShrink: 0,
              }}>
                {getGalleryItems(selectedProject).map((src, i) =>
                  isVideo(src) ? (
                    // ── Video thumbnail ──
                    <div
                      key={i}
                      className="gallery-video-thumb"
                      onClick={(e) => { e.stopPropagation(); setLightboxVideo(src); }}
                      style={{
                        position: 'relative',
                        height: '64px', width: '96px', flexShrink: 0,
                        borderRadius: '8px', border: '1px solid var(--color-border)',
                        cursor: 'pointer', overflow: 'hidden',
                        backgroundColor: '#000',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'border-color 0.15s, transform 0.15s',
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.borderColor = selectedProject.category.color; e.currentTarget.style.transform = 'scale(1.05)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'scale(1)'; }}
                    >
                      {/* Silent preview on hover */}
                      <video
                        src={src}
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                        onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
                        onMouseOut={(e) => { (e.currentTarget as HTMLVideoElement).pause(); (e.currentTarget as HTMLVideoElement).currentTime = 0; }}
                      />
                      {/* Play icon overlay */}
                      <div style={{
                        position: 'absolute',
                        width: '24px', height: '24px', borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '12px', pointerEvents: 'none',
                      }}>▶</div>
                    </div>
                  ) : (
                    // ── Image thumbnail ──
                    <img
                      key={i} src={src} alt={`${selectedProject.title} screenshot ${i + 1}`}
                      onClick={(e) => { e.stopPropagation(); setLightboxImg(src); }}
                      style={{
                        height: '64px', width: '96px', objectFit: 'cover',
                        borderRadius: '8px', border: '1px solid var(--color-border)',
                        cursor: 'zoom-in', flexShrink: 0,
                        transition: 'border-color 0.15s, transform 0.15s',
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.borderColor = selectedProject.category.color; e.currentTarget.style.transform = 'scale(1.05)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                  )
                )}
              </div>
            )}
 
            {/* Scrollable content */}
            <div className="modal-body" style={{ padding: '28px 32px', overflowY: 'auto', flex: 1 }}>
              {selectedProject.details}
 
              {((selectedProject.publications && selectedProject.publications.length > 0) ||
                (selectedProject.repos && selectedProject.repos.length > 0)) && (
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                  {selectedProject.publications && selectedProject.publications.length > 0 && (
                    <div style={{ marginBottom: '12px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-mono)', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>PUBLICATIONS</span>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {selectedProject.publications.map((pub, i) => (
                          <a key={`pub-${i}`} href={pub.url} target="_blank" rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: '6px',
                              padding: '8px 16px',
                              backgroundColor: i === 0 ? selectedProject.category.color : 'transparent',
                              color: i === 0 ? '#fff' : selectedProject.category.color,
                              border: i === 0 ? 'none' : `1.5px solid ${selectedProject.category.color}40`,
                              textDecoration: 'none', borderRadius: 'var(--radius-sm)',
                              fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500,
                              transition: 'opacity 0.15s',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                          >📄 {pub.label}</a>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedProject.repos && selectedProject.repos.length > 0 && (
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-mono)', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>CODE & DEMOS</span>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {selectedProject.repos.map((repo, i) => (
                          <a key={`repo-${i}`} href={repo.url} target="_blank" rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: '6px',
                              padding: '8px 16px', backgroundColor: 'transparent',
                              color: 'var(--color-text-main)', border: '1.5px solid var(--color-border)',
                              textDecoration: 'none', borderRadius: 'var(--radius-sm)',
                              fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500,
                              transition: 'opacity 0.15s',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                          >⌘ {repo.label}</a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
 
            {/* ── Image lightbox ── */}
            {lightboxImg && (() => {
              const gallery = getGalleryItems(selectedProject).filter(s => !isVideo(s));
              const currentIndex = gallery.indexOf(lightboxImg);
              const prev = gallery[currentIndex - 1];
              const next = gallery[currentIndex + 1];
              return (
                <div
                  style={{
                    position: 'fixed', inset: 0, zIndex: 200,
                    backgroundColor: 'rgba(253, 253, 253, 0.99)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '24px',
                  }}
                  onClick={() => setLightboxImg(null)}
                >
                  <button onClick={() => setLightboxImg(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', fontSize: '20px', color: '#000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
                  {prev && <button onClick={(e) => { e.stopPropagation(); setLightboxImg(prev); }} style={{ position: 'absolute', left: '16px', background: 'rgba(0,0,0,0.15)', border: 'none', borderRadius: '50%', width: '38px', height: '38px', fontSize: '22px', color: '#000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>}
                  <img src={lightboxImg} alt="Gallery image" style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: '12px', boxShadow: '0 32px 64px rgba(0,0,0,0.4)', animation: 'modalIn 0.2s ease forwards' }} onClick={(e) => e.stopPropagation()} />
                  {next && <button onClick={(e) => { e.stopPropagation(); setLightboxImg(next); }} style={{ position: 'absolute', right: '16px', background: 'rgba(0,0,0,0.15)', border: 'none', borderRadius: '50%', width: '38px', height: '38px', fontSize: '22px', color: '#000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>}
                  <div style={{ position: 'absolute', bottom: '16px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(0,0,0,0.4)' }}>{currentIndex + 1} / {gallery.length}</div>
                </div>
              );
            })()}

            {/* ── Video lightbox ── */}
            {lightboxVideo && (
              <div
                style={{
                  position: 'fixed', inset: 0, zIndex: 200,
                  backgroundColor: 'rgba(10,10,10,0.96)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '24px',
                }}
                onClick={() => setLightboxVideo(null)}
              >
                <button
                  onClick={() => setLightboxVideo(null)}
                  style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', fontSize: '20px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}
                >×</button>
                <video
                  src={lightboxVideo}
                  controls
                  autoPlay
                  style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: '12px', boxShadow: '0 32px 64px rgba(0,0,0,0.6)', animation: 'modalIn 0.2s ease forwards' }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
 
          </div>
        </div>
      )}
    </div>
  );
};
 
export default WorkGraph;