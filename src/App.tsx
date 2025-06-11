import React, { useState } from 'react';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Briefcase, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Globe,
  Shield,
  Server,
  GitBranch,
  Monitor,
  Cloud,
  Zap,
  GraduationCap,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const modules = [
  { name: 'Git', icon: GitBranch, description: 'Version control and collaborative development workflows' },
  { name: 'Jenkins CI', icon: Zap, description: 'Continuous integration and automated deployment pipelines' },
  { name: 'ArgoCD', icon: Globe, description: 'GitOps continuous delivery for Kubernetes applications' },
  { name: 'Docker', icon: Server, description: 'Containerization and application packaging' },
  { name: 'Kubernetes', icon: Cloud, description: 'Container orchestration and cluster management' },
  { name: 'Security', icon: Shield, description: 'DevSecOps practices and security automation' },
  { name: 'Monitoring', icon: Monitor, description: 'Application and infrastructure monitoring solutions' },
  { name: 'SDLC', icon: TrendingUp, description: 'Software development lifecycle optimization' },
  { name: 'Build Tools', icon: Zap, description: 'Automated build systems and dependency management' },
  { name: 'Multi-Cloud', icon: Cloud, description: 'AWS, Azure, and GCP deployment strategies' },
  { name: 'Networking', icon: Globe, description: 'Cloud networking and infrastructure design' },
  { name: 'Reliability', icon: CheckCircle, description: 'Site reliability engineering and best practices' }
];

const stats = [
  { value: '95%', label: 'Job Placement Rate', icon: Briefcase },
  { value: '150+', label: 'Industry Partners', icon: Building },
  { value: '5000+', label: 'Successful Graduates', icon: GraduationCap },
  { value: '$85K', label: 'Average Starting Salary', icon: TrendingUp }
];

function App() {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Career Coach</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#program" className="text-gray-600 hover:text-gray-900 transition-colors">Program</a>
              <a href="#colleges" className="text-gray-600 hover:text-gray-900 transition-colors">For Colleges</a>
              <a href="#employers" className="text-gray-600 hover:text-gray-900 transition-colors">For Employers</a>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">CAREER</span>
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                COACH
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
              DevOps Engineer Complete Training
            </p>
            <p className="text-xl text-gray-300 mb-8">
              & Career Roadmap
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Training Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the complete DevOps ecosystem with hands-on training in industry-leading tools and practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                    <module.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{module.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Tabs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Designed For Success</h2>
            <p className="text-xl text-gray-600">Tailored programs for different career stages and goals</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('students')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'students'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <GraduationCap className="w-5 h-5 inline mr-2" />
                Students & Graduates
              </button>
              <button
                onClick={() => setActiveTab('professionals')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'professionals'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="w-5 h-5 inline mr-2" />
                Working Professionals
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {activeTab === 'students' ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Launch Your Tech Career</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="text-left space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Zero to Hero Program</h4>
                        <p className="text-gray-600">Start with no experience and graduate job-ready</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Industry Mentorship</h4>
                        <p className="text-gray-600">Learn from active DevOps professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Career Placement</h4>
                        <p className="text-gray-600">95% job placement rate with our partners</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Hands-on Projects</h4>
                        <p className="text-gray-600">Build real-world portfolio projects</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Flexible Learning</h4>
                        <p className="text-gray-600">Evening and weekend classes available</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Certification Ready</h4>
                        <p className="text-gray-600">Prepare for AWS, Azure, and Google Cloud certs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Advance Your Career</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="text-left space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Skills Upgrade</h4>
                        <p className="text-gray-600">Transform from traditional IT to DevOps</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Salary Boost</h4>
                        <p className="text-gray-600">Average 40-60% salary increase post-training</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Weekend Classes</h4>
                        <p className="text-gray-600">Learn while you work - no career breaks</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Leadership Track</h4>
                        <p className="text-gray-600">Develop team leadership and management skills</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Enterprise Focus</h4>
                        <p className="text-gray-600">Large-scale deployment strategies</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Network Access</h4>
                        <p className="text-gray-600">Connect with senior professionals and employers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* For Colleges Section */}
      <section id="colleges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner With Leading Educational Institutions</h2>
              <p className="text-xl text-gray-600 mb-8">
                Enhance your curriculum with industry-relevant DevOps training that prepares students for high-demand careers.
              </p>
              
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Curriculum Integration</h3>
                    <p className="text-gray-600">Seamlessly integrate our DevOps modules into your existing computer science and engineering programs.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Faculty Training</h3>
                    <p className="text-gray-600">Train your faculty on the latest DevOps practices and tools to deliver cutting-edge education.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Certification</h3>
                    <p className="text-gray-600">Offer students valuable industry certifications that boost their employability and your placement rates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partnership Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Increased student placement rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Higher starting salaries for graduates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Industry recognition and accreditation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Access to our hiring network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Ongoing curriculum updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Marketing and promotional support</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Schedule Partnership Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section id="employers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hire Job-Ready DevOps Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a pool of highly skilled, industry-trained DevOps engineers ready to make an immediate impact on your organization.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Screened Talent</h3>
              <p className="text-gray-600">All candidates undergo rigorous technical assessments and real-world project evaluations.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Faster Onboarding</h3>
              <p className="text-gray-600">Our graduates hit the ground running with practical experience in modern DevOps workflows.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600">Our alumni network provides ongoing professional development and skill updates.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Graduates?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hands-on Experience</h4>
                      <p className="text-gray-600">Completed multiple real-world projects using enterprise-grade tools</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry Best Practices</h4>
                      <p className="text-gray-600">Trained in security, monitoring, and reliability engineering</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Multi-Cloud Expertise</h4>
                      <p className="text-gray-600">Proficient in AWS, Azure, and Google Cloud platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Collaboration Skills</h4>
                      <p className="text-gray-600">Experienced in agile methodologies and cross-functional teamwork</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Hiring Partnership Options</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg">
                    <h5 className="font-semibold text-gray-900">Direct Placement</h5>
                    <p className="text-sm text-gray-600">Access our talent pool for immediate hiring</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <h5 className="font-semibold text-gray-900">Campus Recruitment</h5>
                    <p className="text-sm text-gray-600">Participate in our job fairs and placement drives</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <h5 className="font-semibold text-gray-900">Custom Training</h5>
                    <p className="text-sm text-gray-600">Tailored programs for your specific tech stack</p>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Careers?</h2>
            <p className="text-xl text-gray-300">Get in touch to learn more about our programs and partnerships</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info@careercoach.com</p>
              <p className="text-gray-300">partnerships@careercoach.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Tech Hub Avenue</p>
              <p className="text-gray-300">Silicon Valley, CA 94025</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Career Coach</span>
            </div>
            <p className="mb-4">Transforming careers through world-class DevOps education</p>
            <p className="text-sm text-gray-400">© 2025 Career Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;