import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" style={{ padding: '5rem 0', backgroundColor: '#f4f6f8' }}>
        <div className="row">
          <div className="twelve columns">
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#111', fontSize: '2.5rem', fontWeight: 'bold' }}>
              AI Projects & Repositories
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.25rem', color: '#555', maxWidth: '700px', margin: '0 auto 4rem' }}>
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

                {/* Sub-layout for image and explanation */}
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

                {/* Sub-layout for images and explanation */}
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

                {/* 3-column architecture layout */}
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
