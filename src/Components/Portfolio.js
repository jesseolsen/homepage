import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isTyping: false,
      servers: [
        { id: 'web-server-01', name: 'Web Server 01', type: 'Application Node', os: 'Ubuntu 20.04 LTS', firmware: 'v1.4.2', status: 'Online' },
        { id: 'db-server-02', name: 'Database Server 02', type: 'PostgreSQL Cluster', os: 'RHEL 8.4', firmware: 'v2.1.0', status: 'Online' },
        { id: 'cache-server-03', name: 'Cache Cluster 03', type: 'Redis Cache Node', os: 'Ubuntu 22.04 LTS', firmware: 'v1.1.1', status: 'Online' }
      ],
      chatHistory: [
        {
          sender: 'bot',
          text: '🤖 **Server Admin Agent**: Hello! I am connected to your local server fleet. Try clicking a quick command below or type your own instructions.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    };
  }

  scrollToBottom = () => {
    const chatContainer = document.getElementById('chat-history-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const cleanText = text.toLowerCase().trim();
    
    // Set immediate status changes
    let updatedServers = [...this.state.servers];
    if (cleanText.includes('update os') || cleanText.includes('upgrade os') || cleanText.includes('web-server-01') || cleanText.includes('web server 01')) {
      updatedServers = updatedServers.map(s => s.id === 'web-server-01' ? { ...s, status: 'Updating OS...' } : s);
    } else if (cleanText.includes('update firmware') || cleanText.includes('upgrade firmware') || cleanText.includes('db-server-02') || cleanText.includes('database server 02')) {
      updatedServers = updatedServers.map(s => s.id === 'db-server-02' ? { ...s, status: 'Updating FW...' } : s);
    }

    this.setState({
      chatHistory: [...this.state.chatHistory, userMsg],
      inputValue: '',
      isTyping: true,
      servers: updatedServers
    }, () => {
      this.scrollToBottom();
      setTimeout(() => {
        this.processBotResponse(text);
      }, 1500); // Realistic network/thinking delay
    });
  }

  processBotResponse = (text) => {
    const cleanText = text.toLowerCase().trim();
    let responseText = '';
    let customComponent = null;
    let updatedServers = [...this.state.servers];

    if (cleanText.includes('list') || cleanText.includes('servers') || cleanText.includes('status')) {
      responseText = 'Here is the current status of your active server fleet:';
      customComponent = (
        <div style={{ marginTop: '0.75rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '6px' }}>
            <thead>
              <tr style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #334155' }}>
                <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 'bold', color: '#94a3b8' }}>ID</th>
                <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 'bold', color: '#94a3b8' }}>Name</th>
                <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 'bold', color: '#94a3b8' }}>OS Version</th>
                <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 'bold', color: '#94a3b8' }}>Firmware</th>
                <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 'bold', color: '#94a3b8' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.servers.map(s => (
                <tr key={s.id} style={{ borderBottom: '1px solid #334155' }}>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', color: '#38bdf8' }}>{s.id}</td>
                  <td style={{ padding: '0.5rem', fontWeight: '600', color: '#f8fafc' }}>{s.name}</td>
                  <td style={{ padding: '0.5rem', color: '#cbd5e1' }}>{s.os}</td>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', color: '#94a3b8' }}>{s.firmware}</td>
                  <td style={{ padding: '0.5rem' }}>
                    <span style={{
                      backgroundColor: s.status.startsWith('Updating') ? '#fef3c7' : '#dcfce7',
                      color: s.status.startsWith('Updating') ? '#78350f' : '#15803d',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (cleanText.includes('update os') || cleanText.includes('upgrade os') || cleanText.includes('web-server-01') || cleanText.includes('web server 01')) {
      responseText = 'Initiating OS update sequence for **web-server-01**...\n\n• [1/4] Creating pre-update system snapshot... Done.\n• [2/4] Pulling Ubuntu security repositories... Done.\n• [3/4] Upgrading kernel & base packages... Done.\n• [4/4] Rebooting server and verifying services... Done.\n\n✅ **Success:** Web Server 01 is now running **Ubuntu 22.04 LTS** and all systems are Online.';
      
      updatedServers = updatedServers.map(s => s.id === 'web-server-01' ? { ...s, os: 'Ubuntu 22.04 LTS', status: 'Online' } : s);
    } else if (cleanText.includes('update firmware') || cleanText.includes('upgrade firmware') || cleanText.includes('db-server-02') || cleanText.includes('database server 02')) {
      responseText = 'Initiating firmware upgrade sequence for **db-server-02**...\n\n• [1/3] Downloading signed firmware image v2.2.0... Done.\n• [2/3] Flashing BIOS partition (verifying checksum)... Done.\n• [3/3] Re-initializing cluster nodes... Done.\n\n✅ **Success:** Database Server 02 has been updated to firmware version **v2.2.0** and returned to rotation.';

      updatedServers = updatedServers.map(s => s.id === 'db-server-02' ? { ...s, firmware: 'v2.2.0', status: 'Online' } : s);
    } else {
      responseText = "🤖 **Agent**: I didn't recognize that request. You can ask me to:\n- **List my servers**\n- **Update OS on web-server-01**\n- **Update firmware on db-server-02**";
    }

    const botMsg = {
      sender: 'bot',
      text: responseText,
      component: customComponent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.setState({
      chatHistory: [...this.state.chatHistory, botMsg],
      isTyping: false,
      servers: updatedServers
    }, () => {
      this.scrollToBottom();
    });
  }

  renderFormattedText = (text) => {
    return text.split('\n').map((line, i) => {
      let parts = line.split('**');
      let renderedLine = parts.map((part, j) => {
        if (j % 2 === 1) return <strong key={j}>{part}</strong>;
        return part;
      });
      return <div key={i} style={{ marginBottom: '0.35rem' }}>{renderedLine}</div>;
    });
  }

  render() {
    return (
      <section id="portfolio" style={{ padding: '5rem 0', backgroundColor: '#f4f6f8' }}>
        <style>{`
          @keyframes pulse-opacity {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          .pulse-status {
            animation: pulse-opacity 1.5s infinite ease-in-out;
          }
        `}</style>
        
        <div className="row">
          <div className="twelve columns">
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#111', fontSize: '2.5rem', fontWeight: 'bold' }}>
              AI Projects & Repositories
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.25rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
              Production-grade implementations of agentic AI, LLM application architecture, and developer automation.
            </p>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
              
              {/* Project 1: LangGraph */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2.5rem',
                marginBottom: '3rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                border: '1px solid #eef2f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#111', fontSize: '1.75rem' }}>LangGraph - Multi-Agent AI Systems</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {['Python', 'LangGraph', 'LangChain', 'Multi-Agent Orchestration'].map(t => (
                        <span key={t} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '500' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href="https://github.com/jesseolsen/langgraph"
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{
                       backgroundColor: '#11ABB0',
                       color: 'white',
                       padding: '0.6rem 1.5rem',
                       borderRadius: '6px',
                       textDecoration: 'none',
                       fontWeight: '500',
                       transition: 'background-color 0.2s',
                       marginTop: '0.5rem'
                     }}
                     onMouseEnter={(e) => e.target.style.backgroundColor = '#0F9095'}
                     onMouseLeave={(e) => e.target.style.backgroundColor = '#11ABB0'}>
                    View on GitHub →
                  </a>
                </div>
                
                <p style={{ color: '#4a5568', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                  Building resilient agentic AI systems with LangGraph for complex workflows, state management, and multi-agent orchestration.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', padding: '0.5rem', boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)' }}>
                      <img src="images/portfolio/langgraph.png" alt="LangGraph Multi-Agent Workflow" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    <p style={{ color: '#718096', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.5rem', fontStyle: 'italic' }}>
                      Visual representation of the multi-agent routing & synthesis graph.
                    </p>
                  </div>
                  
                  <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748', fontSize: '1.1rem', fontWeight: 'bold', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                      Graph Architecture & Flow
                    </h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Supervisor Routing:</strong> A central <code>classify</code> router node evaluates the user's intent.
                      </li>
                      <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Sub-Agent Dispatch:</strong> Dispatches queries to specialized subgraphs (<code>billing</code>, <code>general</code>, <code>technology</code>) or escapes directly to <code>human</code>/<code>nonbanking</code> handlers.
                      </li>
                      <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Stateful Execution Loops:</strong> Sub-agents execute self-correction loops utilizing code execution, DB queries, and web-search tools.
                      </li>
                      <li>
                        <strong>Response Synthesis:</strong> The <code>synthesize</code> node aggregates execution logs from all child nodes to generate a comprehensive, unified final response.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project 2: Resume RAG */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2.5rem',
                marginBottom: '3rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                border: '1px solid #eef2f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#111', fontSize: '1.75rem' }}>Resume RAG & MCP Server</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {['Python', 'FastAPI', 'Chrome Extensions', 'MCP Server', 'Vector DB', 'RAG'].map(t => (
                        <span key={t} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '500' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href="https://github.com/jesseolsen/resume-rag-mcp"
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{
                       backgroundColor: '#11ABB0',
                       color: 'white',
                       padding: '0.6rem 1.5rem',
                       borderRadius: '6px',
                       textDecoration: 'none',
                       fontWeight: '500',
                       transition: 'background-color 0.2s',
                       marginTop: '0.5rem'
                     }}
                     onMouseEnter={(e) => e.target.style.backgroundColor = '#0F9095'}
                     onMouseLeave={(e) => e.target.style.backgroundColor = '#11ABB0'}>
                    View on GitHub →
                  </a>
                </div>

                <p style={{ color: '#4a5568', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                  Model Context Protocol server implementing RAG (Retrieval-Augmented Generation) for intelligent resume parsing, job application tracking, and automated form-filling.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', padding: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                      <img src="images/portfolio/resume_rag_extension.png" alt="Resume RAG Chrome Extension" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', padding: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                      <img src="images/portfolio/resume_rag_claude.png" alt="Claude Desktop MCP Tools Integration" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748', fontSize: '1.1rem', fontWeight: 'bold', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                      Features & Integration
                    </h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Chrome Extension UI:</strong> Select resume profiles, trigger auto-filling on top job portals (Workday, Greenhouse, etc.), and capture submitted form answers.
                      </li>
                      <li style={{ marginBottom: '0.75rem' }}>
                        <strong>MCP Toolset:</strong> Exposes 11 specialized tools to LLM clients (like Claude Desktop) for parsing resumes, querying vector stores, updating status trackers, and generating cover letters.
                      </li>
                      <li style={{ marginBottom: '0.75rem' }}>
                        <strong>RAG backend:</strong> Searches vector DB using embeddings to match custom essay questions in application forms with precise parts of the applicant's experience.
                      </li>
                      <li>
                        <strong>Automated Job Tracking:</strong> Syncs application details, company Glassdoor ratings, application timelines, and recruiter emails to a local database.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project 3: Job Search AI */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2.5rem',
                marginBottom: '3rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                border: '1px solid #eef2f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#111', fontSize: '1.75rem' }}>Job Search AI Agent</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {['PyTorch', 'Anthropic API', 'Pydantic', 'Prompt Caching', 'LLM Streaming'].map(t => (
                        <span key={t} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '500' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href="https://github.com/jesseolsen/job-search-ai"
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{
                       backgroundColor: '#11ABB0',
                       color: 'white',
                       padding: '0.6rem 1.5rem',
                       borderRadius: '6px',
                       textDecoration: 'none',
                       fontWeight: '500',
                       transition: 'background-color 0.2s',
                       marginTop: '0.5rem'
                     }}
                     onMouseEnter={(e) => e.target.style.backgroundColor = '#0F9095'}
                     onMouseLeave={(e) => e.target.style.backgroundColor = '#11ABB0'}>
                    View on GitHub →
                  </a>
                </div>

                <p style={{ color: '#4a5568', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                  An advanced career suite for automated job posting analysis and resume enhancement, demonstrating specialized deep learning and pipeline orchestration.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                  
                  <div style={{ backgroundColor: '#faf5ff', border: '1px solid #f3e8ff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#e9d5ff', color: '#6b21a8', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                      01-PARSER
                    </div>
                    <h5 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: '#111', fontWeight: 'bold' }}>Claude API Parser</h5>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                      Extracts skills, seniority level, salary, and red flags from raw job descriptions. Built using Anthropic tool use, Pydantic validation, prompt caching (for massive speed and cost savings), and real-time streaming.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#bbf7d0', color: '#166534', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                      02-AGENT
                    </div>
                    <h5 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: '#111', fontWeight: 'bold' }}>LangGraph Matcher</h5>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                      StateGraph workflow that aligns a candidate's resume with parsed job descriptions. Creates cover letter talking points, interview questions, and prep checklists with persistent checkpoint state tracking.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#eff6ff', border: '1px solid #dbeafe', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#bfdbfe', color: '#1e40af', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                      03-CLASSIFIER
                    </div>
                    <h5 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: '#111', fontWeight: 'bold' }}>PyTorch Segmenter</h5>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                      Custom neural network classifier built from scratch using PyTorch. Tokenizes resume text, processes embeddings, and runs custom training loops to segment resumes into structured blocks like Experience, Education, and Skills.
                    </p>
                  </div>

                </div>
              </div>

              {/* Sample AI Chat Simulation Section */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2.5rem',
                marginBottom: '3rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                border: '1px solid #eef2f6'
              }}>
                <h3 style={{ margin: '0 0 0.25rem 0', color: '#111', fontSize: '1.75rem', fontWeight: 'bold' }}>
                  Live Demo: Infrastructure Admin Agent
                </h3>
                <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '2.5rem' }}>
                  Experience an interactive simulation of an agentic fleet administration chatbot. Try sending commands using the quick-action buttons below or by typing custom inputs.
                </p>

                {/* Dashboard + Chat Container */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', minHeight: '450px' }}>
                  
                  {/* Fleet status panel */}
                  <div style={{
                    flex: '1 1 350px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}>
                    <h4 style={{ margin: '0 0 1.25rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                      Fleet Dashboard (Live State)
                    </h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {this.state.servers.map(server => {
                        const isUpdating = server.status.startsWith('Updating');
                        return (
                          <div key={server.id} style={{
                            backgroundColor: '#fff',
                            border: '1px solid #edf2f7',
                            borderRadius: '6px',
                            padding: '1rem',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                            transition: 'border-color 0.2s'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                              <div>
                                <span style={{ fontWeight: 'bold', color: '#2d3748', fontSize: '0.95rem' }}>{server.name}</span>
                                <span style={{ color: '#718096', fontSize: '0.75rem', marginLeft: '0.5rem', display: 'inline-block', border: '1px solid #e2e8f0', padding: '0 0.35rem', borderRadius: '4px' }}>
                                  {server.type}
                                </span>
                              </div>
                              <span className={isUpdating ? 'pulse-status' : ''} style={{
                                backgroundColor: isUpdating ? '#fef3c7' : '#dcfce7',
                                color: isUpdating ? '#78350f' : '#15803d',
                                border: `1px solid ${isUpdating ? '#fde68a' : '#bbf7d0'}`,
                                padding: '0.15rem 0.5rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold'
                              }}>
                                {server.status}
                              </span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem', color: '#4a5568', borderTop: '1px solid #f7fafc', paddingTop: '0.5rem' }}>
                              <div>
                                <span style={{ color: '#a0aec0', marginRight: '0.25rem' }}>OS:</span>
                                <span style={{ fontFamily: 'monospace' }}>{server.os}</span>
                              </div>
                              <div style={{ textAlign: 'right' }}>
                                <span style={{ color: '#a0aec0', marginRight: '0.25rem' }}>Firmware:</span>
                                <span style={{ fontFamily: 'monospace' }}>{server.firmware}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chat Console Panel */}
                  <div style={{
                    flex: '1 1 500px',
                    backgroundColor: '#1e293b',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}>
                    {/* Console Header */}
                    <div style={{
                      backgroundColor: '#0f172a',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #334155'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                        <span style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#eab308' }}></span>
                        <span style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
                        <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontFamily: 'monospace', marginLeft: '0.5rem' }}>agent_admin_console.sh</span>
                      </div>
                      <span style={{ color: '#22c55e', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 'bold' }}>CONNECTED</span>
                    </div>

                    {/* Chat History Messages */}
                    <div id="chat-history-container" style={{
                      flex: '1 1 300px',
                      padding: '1.5rem',
                      overflowY: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      maxHeight: '350px'
                    }}>
                      {this.state.chatHistory.map((msg, i) => {
                        const isBot = msg.sender === 'bot';
                        return (
                          <div key={i} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: isBot ? 'flex-start' : 'flex-end',
                            maxWidth: '85%',
                            alignSelf: isBot ? 'flex-start' : 'flex-end'
                          }}>
                            <div style={{
                              backgroundColor: isBot ? '#334155' : '#0284c7',
                              color: '#fff',
                              borderRadius: '8px',
                              padding: '0.8rem 1.2rem',
                              fontSize: '0.9rem',
                              lineHeight: '1.5',
                              border: isBot ? '1px solid #475569' : 'none',
                              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                            }}>
                              {this.renderFormattedText(msg.text)}
                              {msg.component}
                            </div>
                            <span style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.25rem', fontFamily: 'monospace' }}>
                              {msg.timestamp}
                            </span>
                          </div>
                        );
                      })}

                      {this.state.isTyping && (
                        <div style={{ alignSelf: 'flex-start', backgroundColor: '#334155', borderRadius: '8px', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontStyle: 'italic' }}>Agent is executing command...</span>
                        </div>
                      )}
                    </div>

                    {/* Quick Command Suggestion Pills */}
                    <div style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#0f172a',
                      borderTop: '1px solid #334155',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      <button
                        onClick={() => this.handleSendMessage('List my servers')}
                        disabled={this.state.isTyping}
                        style={{
                          backgroundColor: '#1e293b',
                          color: '#38bdf8',
                          border: '1px solid #38bdf8',
                          borderRadius: '4px',
                          padding: '0.3rem 0.75rem',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          fontFamily: 'monospace',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0f172a'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#1e293b'}>
                        $ list_servers
                      </button>
                      <button
                        onClick={() => this.handleSendMessage('Update OS on web-server-01')}
                        disabled={this.state.isTyping}
                        style={{
                          backgroundColor: '#1e293b',
                          color: '#f59e0b',
                          border: '1px solid #f59e0b',
                          borderRadius: '4px',
                          padding: '0.3rem 0.75rem',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          fontFamily: 'monospace',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0f172a'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#1e293b'}>
                        $ update_os web-server-01
                      </button>
                      <button
                        onClick={() => this.handleSendMessage('Update firmware on db-server-02')}
                        disabled={this.state.isTyping}
                        style={{
                          backgroundColor: '#1e293b',
                          color: '#ec4899',
                          border: '1px solid #ec4899',
                          borderRadius: '4px',
                          padding: '0.3rem 0.75rem',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          fontFamily: 'monospace',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0f172a'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#1e293b'}>
                        $ upgrade_fw db-server-02
                      </button>
                    </div>

                    {/* Chat Input Area */}
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      this.handleSendMessage(this.state.inputValue);
                    }} style={{
                      display: 'flex',
                      borderTop: '1px solid #334155',
                      backgroundColor: '#0f172a'
                    }}>
                      <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={(e) => this.setState({ inputValue: e.target.value })}
                        disabled={this.state.isTyping}
                        placeholder={this.state.isTyping ? 'Executing command...' : 'Type "list servers", "update os web-server-01" etc...'}
                        style={{
                          flexGrow: 1,
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#fff',
                          padding: '1rem',
                          fontSize: '0.9rem',
                          outline: 'none',
                          fontFamily: 'monospace'
                        }}
                      />
                      <button
                        type="submit"
                        disabled={this.state.isTyping || !this.state.inputValue.trim()}
                        style={{
                          backgroundColor: '#11ABB0',
                          color: '#fff',
                          border: 'none',
                          padding: '0 1.5rem',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0F9095'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#11ABB0'}>
                        EXECUTE
                      </button>
                    </form>

                  </div>

                </div>
              </div>

            </div>

            {/* More AI Work Footer */}
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#333', fontSize: '1.5rem' }}>More AI Work</h3>
              <p style={{ lineHeight: '2', fontSize: '1.1rem', color: '#555', maxWidth: '800px', margin: '0 auto 2rem' }}>
                <strong>AWS Bedrock LLM Pipelines</strong> • <strong>MCP Server Development</strong> •
                <strong> AI Developer Experience Tools</strong> • <strong>LLM Evaluation Frameworks</strong> •
                <strong> Agentic AI Orchestration</strong>
              </p>
              <p>
                <a href="https://github.com/jesseolsen"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     fontSize: '1.2rem',
                     color: '#11ABB0',
                     textDecoration: 'none',
                     borderBottom: '2px solid #11ABB0',
                     paddingBottom: '2px',
                     fontWeight: '500',
                     transition: 'color 0.2s, border-color 0.2s'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.color = '#0F9095';
                     e.target.style.borderColor = '#0F9095';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.color = '#11ABB0';
                     e.target.style.borderColor = '#11ABB0';
                   }}>
                  View All Repositories on GitHub →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
