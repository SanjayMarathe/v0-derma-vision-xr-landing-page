export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          {/* Navigation */}
          <nav className="flex items-center justify-between mb-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold">DermaVisionXR</span>
            </div>
            <button className="px-6 py-2.5 bg-card hover:bg-secondary rounded-lg text-sm font-medium transition-colors border border-border">
              Request Access
            </button>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Powered by Apple Vision Pro
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
                AI-Powered Skin Analysis in Spatial Computing
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                DermaVisionXR brings advanced dermatological screening to spatial computing. Instant camera-based
                analysis with AI-driven insights from 10,000+ verified medical cases.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors text-lg">
                  Experience the Future
                </button>
                <button className="px-8 py-4 bg-card hover:bg-secondary text-foreground rounded-lg font-medium transition-colors border border-border text-lg">
                  Watch Demo
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>HAM10000 Dataset</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>10,015 Medical Cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Real-time Analysis</span>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-card">
                <img
                  src="/apple-vision-pro-headset-showing-medical-skin-anal.jpg"
                  alt="Apple Vision Pro with DermaVisionXR interface"
                  className="w-full h-full object-cover"
                />
                {/* Floating stat cards */}
                <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-primary">97.8%</div>
                  <div className="text-xs text-muted-foreground">Match Accuracy</div>
                </div>
                <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-primary">{"<"}2s</div>
                  <div className="text-xs text-muted-foreground">Analysis Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-balance">The Critical Need for Early Detection</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Skin cancer is one of the most common cancers worldwide, yet early detection remains the key to successful
              treatment. Traditional barriers prevent timely screening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-2">1 in 5</div>
              <p className="text-sm text-muted-foreground">Americans will develop skin cancer by age 70</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-2">4-8 weeks</div>
              <p className="text-sm text-muted-foreground">Average wait time for dermatology appointments</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <p className="text-sm text-muted-foreground">Survival rate with early melanoma detection</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-2">Limited</div>
              <p className="text-sm text-muted-foreground">Access to dermatological care in rural areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-balance">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Three simple steps to instant skin health insights using the power of spatial computing and AI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Capture</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Use Apple Vision Pro's advanced cameras to capture high-resolution images of concerning skin lesions
                  in your natural environment
                </p>
                <div className="aspect-video rounded-lg overflow-hidden bg-secondary border border-border">
                  <img
                    src="/person-using-apple-vision-pro-to-capture-skin-lesi.jpg"
                    alt="Capture step"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Connector line */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Analyze</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our CLIP vision transformer instantly generates embeddings and searches 10,000+ verified cases using
                  advanced vector similarity matching
                </p>
                <div className="aspect-video rounded-lg overflow-hidden bg-secondary border border-border">
                  <img
                    src="/ai-analyzing-skin-lesion-with-neural-network-visua.jpg"
                    alt="Analyze step"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Connector line */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Diagnose</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Receive instant diagnostic insights with confidence scores, similar cases, and detailed
                  recommendations for medical follow-up when needed
                </p>
                <div className="aspect-video rounded-lg overflow-hidden bg-secondary border border-border">
                  <img
                    src="/medical-diagnosis-results-screen-showing-confidenc.jpg"
                    alt="Diagnose step"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-balance">Key Features</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Enterprise-grade AI technology meets intuitive spatial computing for professional-quality skin analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Uses CLIP vision transformer models for accurate image embeddings and diagnostic insights
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Vector Search</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Pinecone database with 1024-dimensional vectors for precise case matching and similarity detection
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">7 Diagnosis Categories</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Melanoma, Basal Cell Carcinoma, Actinic Keratosis, Melanocytic Nevus, Benign Keratosis, Dermatofibroma,
                Vascular Lesions
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Spatial Computing</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Native Apple Vision Pro experience with immersive UI designed for natural interaction
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Similar Cases</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Shows top 5 similar medical cases with comprehensive metadata including age, sex, and location
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Results</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Real-time processing with confidence scoring and immediate diagnostic suggestions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-balance">Built on Advanced Technology</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              DermaVisionXR leverages cutting-edge AI, vector databases, and spatial computing to deliver medical-grade
              analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm font-semibold text-primary mb-4">Frontend</div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  React
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  TypeScript
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  WebSpatial SDK
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm font-semibold text-primary mb-4">Backend</div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Node.js
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Express
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm font-semibold text-primary mb-4">AI/ML</div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Xenova/Transformers
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  CLIP Model
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm font-semibold text-primary mb-4">Database</div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Pinecone Vector DB
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm font-semibold text-primary mb-4">Dataset</div>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  HAM10000
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  10,015 Images
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-card border border-border rounded-xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">HAM10000 Medical Dataset</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our AI is trained on the comprehensive HAM10000 dataset, containing 10,015 dermatoscopic images of
                  pigmented lesions. This diverse collection represents seven different diagnostic categories and
                  provides the foundation for accurate, reliable analysis.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-foreground">Verified Cases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-foreground">Diverse Demographics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-foreground">Clinical Quality</span>
                  </div>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary border border-border">
                <img
                  src="/medical-dataset-visualization-with-dermatoscopic-i.jpg"
                  alt="HAM10000 Dataset"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-balance">Immersive Spatial Interface</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Experience dermatological screening in a completely new dimension with our intuitive Apple Vision Pro
              interface
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="aspect-video rounded-lg overflow-hidden bg-secondary mb-4">
                <img
                  src="/apple-vision-pro-camera-interface-capturing-skin-l.jpg"
                  alt="Camera Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Camera Capture Interface</h3>
              <p className="text-sm text-muted-foreground">
                Intuitive camera controls with real-time guidance for optimal image capture
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-4">
              <div className="aspect-video rounded-lg overflow-hidden bg-secondary mb-4">
                <img
                  src="/medical-diagnosis-results-screen-showing-ai-analys.jpg"
                  alt="Diagnosis Results"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnosis Results</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive results with similar cases, confidence scores, and recommendations
              </p>
            </div>

            <div className="lg:col-span-2 bg-card border border-border rounded-xl p-4">
              <div className="aspect-[21/9] rounded-lg overflow-hidden bg-secondary mb-4">
                <img
                  src="/apple-vision-pro-immersive-3d-medical-interface-wi.jpg"
                  alt="Immersive 3D Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">3D Spatial Experience</h3>
              <p className="text-sm text-muted-foreground">
                Fully immersive interface that takes advantage of spatial computing for natural interaction and data
                visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-warning/10 border-2 border-warning/30 rounded-xl p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-warning">Important Medical Disclaimer</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">
                      DermaVisionXR is not a medical device and is not intended to replace professional medical advice,
                      diagnosis, or treatment.
                    </strong>
                  </p>
                  <p>
                    This application is designed as a preliminary screening tool to help users identify potentially
                    concerning skin lesions that may warrant professional medical evaluation. All diagnostic insights
                    provided by DermaVisionXR are suggestions based on image similarity analysis and should not be
                    considered definitive medical diagnoses.
                  </p>
                  <p>
                    <strong className="text-foreground">
                      Always seek the advice of a qualified healthcare provider with any questions you may have
                      regarding a medical condition.
                    </strong>{" "}
                    Never disregard professional medical advice or delay in seeking it because of information provided
                    by this application.
                  </p>
                  <p>
                    If you have a medical emergency, call your doctor or emergency services immediately. DermaVisionXR
                    does not provide emergency medical services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors text-lg">
              Experience the Future of Dermatology
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              Request early access to DermaVisionXR for Apple Vision Pro
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold">DermaVisionXR</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered skin lesion analysis for Apple Vision Pro. The future of dermatological screening in spatial
                computing.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Request Access
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    HAM10000 Dataset
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Express", "Xenova", "CLIP", "Pinecone", "HAM10000"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 DermaVisionXR. All rights reserved.</p>
              <p className="text-xs">This is not a medical device. Always consult with healthcare professionals.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
