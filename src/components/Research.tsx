import ResearchCard from "./ResearchCard";
import galaxyImage from "@/assets/galaxy-research.jpg";
import jwstImage from "@/assets/oct24.png";
import particleImage from "@/assets/particle-physics.jpg";
import disccofanImage from "@/assets/disccofan.png";

const Research = () => {
  const researchProjects = [
    {
      title: "Observing Two Luminous Galaxies into the Epoch of Reionization with JWST",
      description: "Advances in numerical simulations have enabled tremendous progress when simulating highly complex astrophysical processes. In two recent papers, I dive into how the comparison of observations and astrophysical simulations to improve our understanding of how galaxy evolves.",
      date: "May 25",
      field: "Astrophysics",
      image: jwstImage,
      link: "  https://watermark.silverchair.com/staf768.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAA1QwggNQBgkqhkiG9w0BBwagggNBMIIDPQIBADCCAzYGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMydq_lVyXF_u942_rAgEQgIIDB2q7IHUT_XfXUU41cLvRNUTaZ6j-AqhnvtM9cjvsvbE7N6Yxs70y8ELjQtWB2iNL25hSS8lDRUxyBI8C0Kx0J-USYl-ouklJXr9bYP-BsRSMQfbQaJaMNfOwFuizc4Q7djYEmbL5IM2QSGxa0bLZm9JwjUv5ZLyiuuYze-EKX_iN0eKDSZnhlZ9qBxNV30Hu__CKQlwaoGiaAGCudFbSoXbTghF7tTq701uh19XYkJODSBr3JxV64E5F1LHsaW4K5IrAJWXIH6UbdvoCCST9kjbKPLEU5dRjVn661h_e1jeMlDpAg6nHCfajw0g7NkhnRrww7qkWAvMtPirXwE1qhw-l9fvtm9Zge6aU279CxIpSNnKsPAFdRYDwchjPfH7RjevAmCW_0k8t0A3Ziys4Bec3zrYewSO8v4vo7PiKIY0Oq-ObfMvJv8TjJ2ixPJNJgB8O90UfSLiiLT5b2MHLXNegBJYJAkxFRs2aZX6BwUO3Qriiwfo_eqtUtgaj9gpQ_HaKmJkvHHbFfnFX_l81pO84d7IwmCTUsrmffnlwqJGUF4ZXm78lkiEf-iG6AyxPowqgZV1piom0AXwshckXxtMb7uQIaUr5b8rpzyVA4oqmlm8WhufG_dXwJlZUhmPtjEB7ONNcsqsvo9Wzkw0LS-50GcTxquutHPUDyQzElOFZCdeFhskvzpBr4IbdxfGNXQihye8LgvkC6ND8y6YJEKmFFcB0BVxvTNuVH-AM9Euwx1oQiNuCyz02Bz4bsXTn2RFC3vWpGshgg7tObNc8lx5vkR0DLVym9BEiKIK6sfczxlZTiBCXuR-Rem8BHwcKer2OFqqVEX7NMc3JgE_4g2VXBK1QS6nd9VK4SmfCGI8eV3_AJgUoCeNekc5Xrbo9RU-wISPMkmtU4ndqpn014MHzhIh4RxhdHvKFtQhf4e1Uv8GIaRXKnoM_khJcTT9CEI_IMrSzP2e845TarXNDzw2j7yFLtvDKJEg24gl63sJkjloKtu31LYKD0BFc2YJ04MPt8gF1LWU",
    },
    {
      title: "Matching Real and Virtual Galaxies",
      description: "Advances in numerical simulations have enabled tremendous progress when simulating highly complex astrophysical processes. In two recent papers, I dive into how the comparison of observations and astrophysical simulations to improve our understanding of how galaxy evolves.",
      date: "May 23 & Jun 24",
      field: "Astrophysics",
      image: galaxyImage,
      link: "https://iopscience.iop.org/article/10.3847/1538-4357/ad47a4/pdf",
      link2: "https://iopscience.iop.org/article/10.3847/1538-4357/acda2c/pdf"
    },
    {
      title: "Reconstructing Charged-Particle Trajectories",
      description: "For future nuclear physics experiments involving particle collisions at extreme rates, one need to reconstruct the particle trajectories in real time. In this paper, we designed a pattern recognition method that approaches the theoretical requirements.",
      date: "May 23",
      field: "Particle Physics",
      image: particleImage,
      link: "https://link.springer.com/article/10.1140/epja/s10050-023-01005-8",
    },
    {
      title: "Distribution Connected Component Filtering and Analysis",
      description: "A novel approach to deal with tree representations of tera-scale images and their connected components.",
      date: "March 21",
      field: "Computer Science",
      image: disccofanImage,
      link: "https://ieeexplore.ieee.org/document/9376636",
    },

  ];


  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-primary mb-6">
            Research Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring the frontiers of astrophysics, particle physics, biology, and medical imaging through innovative research and computational methods.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {researchProjects.map((project, index) => (
            <ResearchCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            For a complete list of my research contributions,{" "}
             {/* <a 
              href="/research" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-accent hover:text-teal-light transition-colors duration-300 font-medium"
            >
              visit my Research Page{" "}
            </a>
            or {" "} */}
            <a 
              href="https://scholar.google.com/citations?user=simongazagnes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-accent hover:text-teal-light transition-colors duration-300 font-medium"
            >
              visit my Google Scholar profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;