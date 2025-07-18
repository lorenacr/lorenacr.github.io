import EmailLink from './components/EmailLink';
import githubLogo from '/github.svg'
import './App.css'

function App() {

    return (
        <>
            <div className="header">
                <a href="https://github.com/lorenacr/" target="_blank">
                    <img src={githubLogo} className="logo" alt="Github Logo" />
                </a>
                <h1>Lorena Rangel</h1>
                <div className="links">
                    <a href="https://www.linkedin.com/in/lorena-rangel-uff/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <span> | </span>
                    <EmailLink />
                </div>
            </div>

            <section className="section">
                <h2>Professional Experience</h2>
                <ul>
                    <li>Senior Software Engineer at Stone Pagamentos</li>
                    <li>Leading backend systems design and development, ensuring high performance and maintainability.</li>
                    <li>Specialized in migrating and modernizing critical architectures to enhance scalability, resilience, and fault tolerance.</li>
                    <li>Hands-on experience with high-availability systems and mission-critical databases.</li>
                    <li>Implementing event-driven architectures using RabbitMQ, Kubernetes, and Event Hub.</li>
                    <li>Focused on optimizing systems for simplicity, maintainability, and operational excellence.</li>
                    <li>Experienced in designing monitoring and observability strategies for critical platforms.</li>
                </ul>
            </section>

            <section className="section">
                <h2>Technologies</h2>
                <ul>
                    <li><strong>Programming Languages / Frameworks</strong>
                        <ul>
                            <li>.NET (C#)</li>
                            <li>C</li>
                            <li>Python</li>
                            <li>REST APIs</li>
                            <li>Microservices</li>
                        </ul>
                    </li>
                    <li><strong>Databases</strong>
                        <ul>
                            <li>SQL Server</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </li>
                    <li><strong>Message Brokers / Streaming</strong>
                        <ul>
                            <li>RabbitMQ</li>
                            <li>Event Hub</li>
                        </ul>
                    </li>
                    <li><strong>Containerization / Orchestration</strong>
                        <ul>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                        </ul>
                    </li>
                    <li><strong>ORM / Data Access</strong>
                        <ul>
                            <li>Entity Framework</li>
                            <li>Dapper</li>
                        </ul>
                    </li>
                    <li><strong>Architectural Patterns</strong>
                        <ul>
                            <li>Saga Pattern</li>
                            <li>CQRS</li>
                            <li>Event-driven Architecture</li>
                        </ul>
                    </li>
                    <li><strong>Monitoring / Observability</strong>
                        <ul>
                            <li>New Relic</li>
                            <li>Datadog</li>
                            <li>Splunk</li>
                            <li>Grafana</li>
                            <li>SolarWinds DPA (Database Performance Analyzer)</li>
                        </ul>
                    </li>
                    <li><strong>CI/CD</strong>
                        <ul>
                            <li>Azure DevOps</li>
                            <li>ArgoCD</li>
                        </ul>
                    </li>
                    <li><strong>Cloud Platforms</strong>
                        <ul>
                            <li>Amazon Web Services (AWS)</li>
                            <li>Microsoft Azure</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </>
    )
}



export default App
