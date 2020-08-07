import css from "styled-jsx/css";
import { theme } from "../styles/theme";
import Box from "./box";
import spacing from "./spacing";

function Skills() {
  return (
    <>
      <aside>
        <h1 className="is-medium">Mis habilidades</h1>
        <Box>
          <h3>⚛️ Front end development</h3>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>Typescript</span>
            <span>ReactJS</span>
            <span>React Native</span>
          </p>
          <h3>💻 Back end development</h3>
          <p>
            <span>REST</span>
            <span>NodeJS</span>
            <span>NestJS</span>
            <span>SQL</span>
            <span>Google Cloud Platform (GCP)</span>
          </p>
          <h3>⟲ Agile mindset</h3>
          <p>
            <span>XP</span>
            <span>Scrum</span>
            <span>Kanban</span>
            <span>Lean Software Development</span>
            <span>Test-Driven Development (TDD)</span>
          </p>
          <h3>🤖 Testing Automation</h3>
          <p>
            <span>Mocha</span>
            <span>Jest</span>
            <span>Puppeteer</span>
            <span>CI</span>
            <span>CD</span>
          </p>
          <h3>💬 Behavioural skills</h3>
          <p>
            <span>Feedback</span>
            <span>Emotional Intelligence</span>
            <span>Public Speaking</span>
            <span>Coaching</span>
          </p>
        </Box>
      </aside>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  aside {
    min-width: 25vw;
  }

  span {
    background: ${theme.colors.skillsBg};
    border-radius: 4px;
    display: inline-block;
    margin: ${spacing.unit}px;
    padding: ${spacing.unit}px ${2 * spacing.unit}px;
    font-size: 0.8rem;
    white-space: nowrap;
  }
`;

export default Skills;
