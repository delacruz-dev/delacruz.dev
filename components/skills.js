import css from "styled-jsx/css";
import Box from "./box";
import Section from "./section";
import colors from "./colors";
import spacing from "./spacing";

function Skills() {
  return (
    <>
      <Section>
        <h1 className='title'>Mis habilidades</h1>
        <h2 className='subtitle'>Las cosas que se me dan mejor</h2>
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
            <span>MongoDB</span>
          </p>
          <h3>⟲ Agile mindset</h3>
          <p>
            <span>XP</span>
            <span>Scrum</span>
            <span>Kanban</span>
            <span>Lean</span>
            <span>TDD</span>
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
        </Box >
      </Section >
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
span {
  background: ${colors.backgroundMentoring};
  border-radius: 4px;
  margin: ${spacing.unit}px;
  padding: ${spacing.unit}px ${2 * spacing.unit}px;
  font-size: .8rem;
}`;

export default Skills;
