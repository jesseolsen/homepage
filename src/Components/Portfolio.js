import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    const aiProjects = [
      {
        title: "LangGraph - Multi-Agent AI Systems",
        description: "Building resilient agentic AI systems with LangGraph for complex workflows, state management, and multi-agent orchestration.",
        url: "https://github.com/jesseolsen/langgraph",
        tech: "Python, LangGraph, LangChain"
      },
      {
        title: "Resume RAG MCP Server",
        description: "Model Context Protocol server implementing RAG (Retrieval-Augmented Generation) for intelligent resume parsing and job matching.",
        url: "https://github.com/jesseolsen/resume-rag-mcp",
        tech: "Python, MCP, RAG, Vector DB"
      },
      {
        title: "Job Search AI Agent",
        description: "AI-powered job search automation using LLMs for application tailoring, cover letter generation, and interview preparation.",
        url: "https://github.com/jesseolsen/job-search-ai",
        tech: "Python, OpenAI/Claude API, Automation"
      }
    ];

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns">
            <h1>AI Projects & Repositories</h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem' }}>
              Explore my work in agentic AI, LLM applications, and AI developer tools
            </p>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {aiProjects.map((project, index) => (
                <div key={index} style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  padding: '2rem',
                  marginBottom: '2rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}>
                  <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{project.title}</h3>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>{project.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>{project.tech}</span>
                    <a href={project.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       style={{
                         backgroundColor: '#11ABB0',
                         color: 'white',
                         padding: '0.5rem 1.5rem',
                         borderRadius: '4px',
                         textDecoration: 'none',
                         transition: 'background-color 0.2s'
                       }}
                       onMouseEnter={(e) => e.target.style.backgroundColor = '#0F9095'}
                       onMouseLeave={(e) => e.target.style.backgroundColor = '#11ABB0'}>
                      View on GitHub →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#333' }}>More AI Work</h3>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                <strong>AWS Bedrock LLM Pipelines</strong> • <strong>MCP Server Development</strong> •
                <strong> AI Developer Experience Tools</strong> • <strong>LLM Evaluation Frameworks</strong> •
                <strong> Agentic AI Orchestration</strong>
              </p>
              <p style={{ marginTop: '2rem' }}>
                <a href="https://github.com/jesseolsen"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     fontSize: '1.2rem',
                     color: '#11ABB0',
                     textDecoration: 'none',
                     borderBottom: '2px solid #11ABB0',
                     paddingBottom: '2px',
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
