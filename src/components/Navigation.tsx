import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [dropdownPosition, setDropdownPosition] = useState<{[key: string]: {left: number, width: number}}>({});
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (itemName: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    );
  };

  const calculateDropdownPosition = (itemName: string, buttonElement: HTMLElement) => {
    if (!navRef.current) return { left: 0, width: 1100 };
    
    const buttonRect = buttonElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Base dropdown width
    const dropdownWidth = Math.min(1100, viewportWidth - 48);
    
    // Calculate optimal position - center the dropdown under the button
    const buttonCenter = buttonRect.left + (buttonRect.width / 2);
    const idealLeft = buttonCenter - (dropdownWidth / 2);
    
    // Ensure dropdown stays within viewport with padding
    const minLeft = 24; // 24px padding from left edge
    const maxLeft = viewportWidth - dropdownWidth - 24; // 24px padding from right edge
    
    const finalLeft = Math.max(minLeft, Math.min(idealLeft, maxLeft));
    
    return {
      left: finalLeft, // Absolute position relative to viewport
      width: dropdownWidth
    };
  };

  const handleMouseEnter = (itemName: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveDropdown(itemName);
    setHoveredSection(null);
    
    const position = calculateDropdownPosition(itemName, event.currentTarget);
    setDropdownPosition(prev => ({
      ...prev,
      [itemName]: position
    }));
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeDropdown]);

  const navItems = [
    {
      name: "PLATFORM",
      hasDropdown: true,
      sections: [
        {
          title: "PLATFORM",
          items: [
            { name: "The ThinkByte Platform", href: "/platform" },
            { name: "Why ThinkByte", href: "/why-thinkbyte" },
            { name: "Enterprise-Grade Security", href: "/security" },
            { name: "Pricing", href: "/pricing" }
          ]
        },
        {
          title: "ENTERPRISE ORCHESTRATION",
          items: [
            { name: "API Management", href: "/api-management" },
            { name: "Data Orchestration", href: "/data-orchestration" },
            { name: "Data Hub / MDM", href: "/data-hub" },
            { name: "B2B/EDI", href: "/b2b-edi" },
            { name: "AI Workflows", href: "/ai-workflows" },
            { name: "AI Copilots", href: "/ai-copilots" },
            { name: "Workflow Bots", href: "/workflow-bots" },
            { name: "Low Code Apps", href: "/low-code-apps" },
            { name: "Insights", href: "/insights" }
          ]
        },
        {
          title: "AGENTIC",
          items: [
            { name: "Enterprise Search", href: "/enterprise-search" },
            { name: "Build Custom Agents", href: "/custom-agents" },
            { name: "ThinkByte MCP", href: "/thinkbyte-mcp" }
          ]
        }
      ]
    },
    {
      name: "SERVICES",
      hasDropdown: true,
      sections: [
        {
          title: "Generative AI",
          items: [
            { name: "Gen AI POC Development", href: "/gen-ai-poc" },
            { name: "Generative AI Development", href: "/gen-ai-development" },
            { name: "Generative AI Integration", href: "/gen-ai-integration" },
            { name: "Generative AI Consulting", href: "/gen-ai-consulting" },
            { name: "AI Agent Development", href: "/ai-agent-development" },
            { name: "Enterprise Generative AI", href: "/enterprise-gen-ai" },
            { name: "LLM Development", href: "/llm-development" }
          ]
        },
        {
          title: "AI Development",
          items: [
            { name: "AI POC Development", href: "/ai-poc" },
            { name: "AI Development Services", href: "/ai-development" },
            { name: "AI Software Development Lifecycle", href: "/ai-sdlc" },
            { name: "AI Automation Services", href: "/ai-automation" },
            { name: "AI Consulting Services", href: "/ai-consulting" },
            { name: "Conversational AI Development", href: "/conversational-ai" },
            { name: "Enterprise AI Chatbot", href: "/enterprise-chatbot" },
            { name: "AI Chatbot Development", href: "/chatbot-development" },
            { name: "Enterprise AI Development", href: "/enterprise-ai" }
          ]
        },
        {
          title: "Data Engineering",
          items: [
            { name: "Data Engineering Services", href: "/data-engineering" },
            { name: "MLOps Consulting Services", href: "/mlops-consulting" },
            { name: "ML Model Engineering", href: "/ml-model-engineering" },
            { name: "Cloud Services", href: "/cloud-services" },
            { name: "ML Development", href: "/ml-development" }
          ]
        }
      ]
    },
    {
      name: "INDUSTRY",
      hasDropdown: true,
      sections: [
        {
          title: "Healthcare",
          items: [
            { name: "Accelerated Drug Discovery", href: "/healthcare/drug-discovery" },
            { name: "Clinical Decision Support", href: "/healthcare/clinical-decision" },
            { name: "Custom Healthcare Solutions", href: "/healthcare/custom-solutions" },
            { name: "Documentation Intelligence", href: "/healthcare/documentation" },
            { name: "Healthcare Fraud Detection", href: "/healthcare/fraud-detection" },
            { name: "Healthcare AI Agent", href: "/healthcare/ai-agent" },
            { name: "Medical Claims Processing", href: "/healthcare/claims-processing" },
            { name: "Medical Imaging Intelligence", href: "/healthcare/medical-imaging" },
            { name: "Medical Research Support", href: "/healthcare/research-support" },
            { name: "Patient Data Analytics", href: "/healthcare/patient-analytics" },
            { name: "Personalized Medicine Platforms", href: "/healthcare/personalized-medicine" },
            { name: "Personalized Treatment", href: "/healthcare/personalized-treatment" },
            { name: "Predictive Diagnosis/Forecasting", href: "/healthcare/predictive-diagnosis" },
            { name: "Remote Patient Monitoring", href: "/healthcare/remote-monitoring" },
            { name: "Virtual Health Assistants", href: "/healthcare/virtual-assistants" },
            { name: "Workforce Optimization", href: "/healthcare/workforce-optimization" }
          ]
        },
        {
          title: "Retail",
          items: [
            { name: "Augmented Analytics", href: "/retail/augmented-analytics" },
            { name: "Cashier‑Less Technology", href: "/retail/cashierless-tech" },
            { name: "Customer Segmentation", href: "/retail/customer-segmentation" },
            { name: "Customer Sentiment Analysis", href: "/retail/sentiment-analysis" },
            { name: "Dynamic Pricing Solutions", href: "/retail/dynamic-pricing" },
            { name: "Enhanced Product Discovery", href: "/retail/product-discovery" },
            { name: "Inventory Management", href: "/retail/inventory-management" },
            { name: "Personalized Engagement", href: "/retail/personalized-engagement" },
            { name: "Predictive Maintenance", href: "/retail/predictive-maintenance" },
            { name: "Retail AI Agents", href: "/retail/ai-agents" },
            { name: "Retail Supply Chain Optimization", href: "/retail/supply-chain" },
            { name: "Virtual Try‑On Technology", href: "/retail/virtual-tryon" },
            { name: "Voice Ordering Systems", href: "/retail/voice-ordering" }
          ]
        },
        {
          title: "Fintech",
          items: [
            { name: "AI‑Powered Financial CRM", href: "/fintech/financial-crm" },
            { name: "Credit Risk Management", href: "/fintech/credit-risk" },
            { name: "Financial AI Agents", href: "/fintech/ai-agents" },
            { name: "Financial Analysis & Forecasting", href: "/fintech/analysis-forecasting" },
            { name: "Financial Document Automation", href: "/fintech/document-automation" },
            { name: "Financial Operations & Reporting", href: "/fintech/operations-reporting" },
            { name: "Integrated Trading Solutions", href: "/fintech/trading-solutions" },
            { name: "Intelligent Customer Support", href: "/fintech/customer-support" },
            { name: "Market Insight Platforms", href: "/fintech/market-insights" },
            { name: "Personalized Financial Engines", href: "/fintech/financial-engines" },
            { name: "Portfolio Management Solutions", href: "/fintech/portfolio-management" },
            { name: "Regulatory Code Change", href: "/fintech/regulatory-change" },
            { name: "Risk Assessment & Management", href: "/fintech/risk-assessment" },
            { name: "Underwriting & Pricing", href: "/fintech/underwriting-pricing" }
          ]
        },
        {
          title: "SaaS",
          items: [
            { name: "AI Chatbots for ERP Systems", href: "/saas/erp-chatbots" },
            { name: "AI Customer Service Chatbots", href: "/saas/customer-service-chatbots" },
            { name: "AI‑Enhanced Product Development", href: "/saas/product-development" },
            { name: "AI‑Powered API Integration", href: "/saas/api-integration" },
            { name: "Automated Software Training", href: "/saas/software-training" },
            { name: "Automated Testing", href: "/saas/automated-testing" },
            { name: "Code Generation/Debugging", href: "/saas/code-generation" },
            { name: "Customer Data Analysis Tools", href: "/saas/data-analysis" },
            { name: "Customer Engagement/Retention", href: "/saas/customer-engagement" },
            { name: "Cybersecurity Threat Detection", href: "/saas/cybersecurity" },
            { name: "Documentation Intelligence", href: "/saas/documentation" },
            { name: "Innovation Management", href: "/saas/innovation-management" },
            { name: "Predictive Analytics Platforms", href: "/saas/predictive-analytics" },
            { name: "Process Automation Solutions", href: "/saas/process-automation" },
            { name: "Sentiment Analysis Platforms", href: "/saas/sentiment-analysis" },
            { name: "Intelligent SaaS Agent", href: "/saas/intelligent-agent" },
            { name: "UI Design Generation", href: "/saas/ui-design" }
          ]
        },
        {
          title: "Travel",
          items: [
            { name: "AI‑Enhanced Customer Service", href: "/travel/customer-service" },
            { name: "Data Analytics", href: "/travel/data-analytics" },
            { name: "Dynamic Pricing Solutions", href: "/travel/dynamic-pricing" },
            { name: "Dynamic Scheduling/Allocation", href: "/travel/scheduling-allocation" },
            { name: "Fraud Detection & Cybersecurity", href: "/travel/fraud-detection" },
            { name: "Flight Forecasting", href: "/travel/flight-forecasting" },
            { name: "Language Translation Solutions", href: "/travel/translation" },
            { name: "Occupancy Prediction", href: "/travel/occupancy-prediction" },
            { name: "Predictive Maintenance", href: "/travel/predictive-maintenance" },
            { name: "Sentiment Analysis", href: "/travel/sentiment-analysis" },
            { name: "Security & Check‑In", href: "/travel/security-checkin" },
            { name: "Travel AI Agents", href: "/travel/ai-agents" }
          ]
        },
        {
          title: "Food",
          items: [
            { name: "AI Phone Answering", href: "/food/phone-answering" },
            { name: "Automated Inspection & QC", href: "/food/inspection-qc" },
            { name: "Compliance Analysis", href: "/food/compliance-analysis" },
            { name: "Customer Experience Enhancement", href: "/food/customer-experience" },
            { name: "Food Processing", href: "/food/food-processing" },
            { name: "Food Safety & Risk Assessment", href: "/food/safety-risk" },
            { name: "Integrated Inventory & Purchasing", href: "/food/inventory-purchasing" },
            { name: "Personalized Nutrition Plans", href: "/food/nutrition-plans" },
            { name: "Price Forecasts", href: "/food/price-forecasts" },
            { name: "Product Development & Innovation", href: "/food/product-development" },
            { name: "Smart Labeling", href: "/food/smart-labeling" },
            { name: "Smarter Staffing & Scheduling", href: "/food/staffing-scheduling" },
            { name: "Supply Chain Management", href: "/food/supply-chain" }
          ]
        },
        {
          title: "Manufacturing",
          items: [
            { name: "AI‑Powered 3D Printing", href: "/manufacturing/3d-printing" },
            { name: "AI‑Powered Digital Twin", href: "/manufacturing/digital-twin" },
            { name: "Automated Quotation", href: "/manufacturing/automated-quotation" },
            { name: "Customer Service Automation", href: "/manufacturing/customer-service" },
            { name: "Document Search & Synthesis", href: "/manufacturing/document-search" },
            { name: "Inventory Management", href: "/manufacturing/inventory-management" },
            { name: "Machine Data Monitoring", href: "/manufacturing/machine-monitoring" },
            { name: "Manufacturing AI Agents", href: "/manufacturing/ai-agents" },
            { name: "Predictive Maintenance", href: "/manufacturing/predictive-maintenance" },
            { name: "Product Catalog Discovery", href: "/manufacturing/catalog-discovery" },
            { name: "Product Design & Simulation", href: "/manufacturing/design-simulation" },
            { name: "Product Development & QA", href: "/manufacturing/development-qa" },
            { name: "Quality Control & Inspection", href: "/manufacturing/quality-control" },
            { name: "Supply Chain Optimization", href: "/manufacturing/supply-chain" },
            { name: "Visual Inspection Solutions", href: "/manufacturing/visual-inspection" }
          ]
        },
        {
          title: "Construction",
          items: [
            { name: "3D Construction Modeling", href: "/construction/3d-modeling" },
            { name: "Automated Quality Control", href: "/construction/quality-control" },
            { name: "Construction Estimations & Bidding", href: "/construction/estimations-bidding" },
            { name: "Construction Site Safety Monitoring", href: "/construction/safety-monitoring" },
            { name: "Construction Drawings Analysis", href: "/construction/drawings-analysis" },
            { name: "Document & Plan Digitization Analysis", href: "/construction/digitization-analysis" },
            { name: "Compliance Monitoring", href: "/construction/compliance-monitoring" },
            { name: "Supply Chain Management", href: "/construction/supply-chain" },
            { name: "Scheduling & Resource Allocation", href: "/construction/scheduling-resources" },
            { name: "Material & Equipment Recognition", href: "/construction/material-recognition" },
            { name: "Generative Design", href: "/construction/generative-design" },
            { name: "Predictive Machinery Maintenance", href: "/construction/machinery-maintenance" }
          ]
        },
        {
          title: "Insurance",
          items: [
            { name: "Automated Claims Processing", href: "/insurance/claims-processing" },
            { name: "Customer Service Chatbots", href: "/insurance/customer-chatbots" },
            { name: "Claims Damage Assessment", href: "/insurance/damage-assessment" },
            { name: "Customer Upsell & Cross‑Sell", href: "/insurance/upsell-crosssell" },
            { name: "Enhanced Routine Operations", href: "/insurance/routine-operations" },
            { name: "Fraud Detection & Prevention", href: "/insurance/fraud-detection" },
            { name: "Insurance AI Agents", href: "/insurance/ai-agents" },
            { name: "Policy Document Generation", href: "/insurance/policy-generation" },
            { name: "Personalized Insurance Planning", href: "/insurance/personalized-planning" },
            { name: "Predictive Analytics", href: "/insurance/predictive-analytics" },
            { name: "Risk Assessment & Underwriting", href: "/insurance/risk-assessment" },
            { name: "Property Assessments", href: "/insurance/property-assessments" },
            { name: "Vehicle Damage Estimation", href: "/insurance/vehicle-damage" }
          ]
        }
      ]
    },
    { name: "WORK", href: "/work" },
    { name: "ABOUT US", href: "#about" },
    { name: "BLOG", href: "#blog" }
  ];

  const getActiveSection = (dropdown: string) => {
    const item = navItems.find(nav => nav.name === dropdown);
    if (!item?.sections) return null;
    
    if (hoveredSection) {
      return item.sections.find(section => section.title === hoveredSection);
    }
    return item.sections[0];
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-10">
            <img
              src="https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/ifalgo-1.png?fit=799%2C107&ssl=1"
              alt="Thinkbyte AI"
              className="h-8 w-auto object-contain filter brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center" ref={navRef}>
            {/* Main Nav Items */}
            <div className="flex items-center space-x-10 mr-10">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.href ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-white/80 hover:text-white font-normal text-[15px] transition-colors duration-200 tracking-wide"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <button
                      onMouseEnter={(e) => handleMouseEnter(item.name, e)}
                      className="flex items-center gap-1.5 text-white/80 hover:text-white font-normal text-[15px] transition-colors duration-200 tracking-wide group"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      className="fixed z-50 opacity-0 animate-fadeIn"
                      style={{
                        left: `${dropdownPosition[item.name]?.left || 0}px`,
                        top: '84px', // Fixed position from top
                        width: `${dropdownPosition[item.name]?.width || 1100}px`
                      }}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => {
                        setActiveDropdown(null);
                        setHoveredSection(null);
                      }}
                    >
                      <div className="relative">
                        {/* Content */}
                        <div className="bg-[#1A1A24] rounded-2xl shadow-2xl border border-white/10 overflow-hidden w-full">
                          <div className="flex">
                            {/* Sidebar */}
                            <div className="w-[280px] min-w-[280px] bg-[#0F0F18] p-6 border-r border-white/5">
                              <div className="space-y-2">
                                {item.sections?.map((section) => (
                                  <button
                                    key={section.title}
                                    onMouseEnter={() => setHoveredSection(section.title)}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ease-out ${
                                      hoveredSection === section.title || (!hoveredSection && section === item.sections?.[0])
                                        ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/30 shadow-lg transform scale-[1.02]' 
                                        : 'text-white/60 hover:text-white/80 hover:bg-white/5 hover:transform hover:scale-[1.01]'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium tracking-wide transition-colors duration-300">{section.title}</span>
                                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ease-out ${
                                        hoveredSection === section.title || (!hoveredSection && section === item.sections?.[0])
                                          ? 'opacity-100 translate-x-0 text-purple-300 transform scale-110' 
                                          : 'opacity-0 -translate-x-2 text-white/40 transform scale-100'
                                      }`} />
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Links Grid */}
                            <div className="flex-1 p-6">
                              {(() => {
                                const activeSection = getActiveSection(item.name);
                                if (!activeSection) return null;
                                
                                return (
                                  <div className="space-y-4 transition-all duration-300 ease-out">
                                    <div className="border-b border-white/10 pb-3">
                                      <h3 className="text-lg font-semibold text-white tracking-wide transition-all duration-300 ease-out">
                                        {activeSection.title}
                                      </h3>
                                      <p className="text-xs text-white/50 mt-1 transition-all duration-300 ease-out">
                                        {activeSection.items.length} solutions available
                                      </p>
                                    </div>
                                    <div className={`grid gap-1 ${
                                      item.name === 'INDUSTRY' 
                                        ? 'grid-cols-2 xl:grid-cols-3' 
                                        : 'grid-cols-1 lg:grid-cols-2'
                                    }`}>
                                      {activeSection.items.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          to={subItem.href}
                                          onClick={() => {
                                            setActiveDropdown(null);
                                            setHoveredSection(null);
                                          }}
                                          className="group flex items-start justify-between px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-white/5 hover:to-purple-500/5 transition-all duration-300 ease-out border border-transparent hover:border-purple-500/20"
                                        >
                                          <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300 ease-out text-left leading-relaxed">
                                            {subItem.name}
                                          </span>
                                          <ArrowRight className="w-3 h-3 text-purple-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out flex-shrink-0 mt-0.5" />
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => handleNavClick("/contact")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-7 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 group"
            >
              Contact us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-white/80 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#0A0A0F] border-t border-white/10 backdrop-blur-md">
          <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => item.href ? handleNavClick(item.href) : toggleMobileDropdown(item.name)}
                    className="flex-1 text-left py-3 text-white/80 hover:text-white font-medium text-base tracking-wide transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="p-2 text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {expandedMobileItems.includes(item.name) ? 
                        <Minus className="w-4 h-4" /> : 
                        <Plus className="w-4 h-4" />
                      }
                    </button>
                  )}
                </div>
                
                {item.hasDropdown && expandedMobileItems.includes(item.name) && (
                  <div className="mt-3 ml-4 space-y-4 animate-fadeIn">
                    {item.sections?.map((section) => (
                      <div key={section.title}>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider py-2">
                            {section.title}
                          </h4>
                          <button
                            onClick={() => toggleMobileDropdown(`${item.name}-${section.title}`)}
                            className="p-1 text-purple-400/60 hover:text-purple-400 transition-colors duration-200"
                          >
                            {expandedMobileItems.includes(`${item.name}-${section.title}`) ? 
                              <Minus className="w-3 h-3" /> : 
                              <Plus className="w-3 h-3" />
                            }
                          </button>
                        </div>
                        
                        {expandedMobileItems.includes(`${item.name}-${section.title}`) && (
                          <div className="space-y-1 animate-fadeIn">
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 pl-4 text-sm text-white/60 hover:text-white transition-colors duration-200 leading-relaxed"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-white/10 mt-6">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium w-full rounded-full transition-all duration-300" 
                onClick={() => handleNavClick("/contact")}
              >
                Contact us →
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;