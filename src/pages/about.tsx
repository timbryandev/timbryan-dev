import DevIcons from '../components/DevIcons';
import { Content } from '../layout/Content';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';

const About = () => (
  <Main meta={<Meta title="About" description="Find out more about Tim" />}>
    <Content>
      <p>
        I&apos;m a perpetual learner with a genuine passion for technology,
        science and learning. I also enjoy puzzle-based games, playing the bass
        guitar, DIY projects and general tinkering.
      </p>
      <p>
        I have been experimenting with computer tech since the days of Windows
        98 and have been writing code professionally since 2014. In this time, I
        have been developing web-based products and services utilising front-end
        technologies while seeking opportunities to work with back-end
        technologies. I&apos;ve worked on tools for process automation, document
        conversions and helper/assistant tools using a range of desktop
        technologies. I&apos;ve also had the chance to work with mobile apps
        from the development and DevOps/distribution.
      </p>
      <p>Proficient in:</p>
      <DevIcons list="proficient" />
      <p>Comfortable with:</p>
      <DevIcons list="comfortable" />
      <p>Have a working knowledge of:</p>
      <DevIcons list="working-knowledge" />
      <p>
        I have experience in management and leadership where in addition to my
        existing software development duties, I have line managed a team of
        developers at an operational level.
        <br />I also enjoyed mentoring our junior and apprenticeship roles.
        Mentoring is something I am still very passionate about and achieved
        great satisfaction from.
      </p>
      <p>
        Some of the work I am most proud of during my time as a developer would
        include;
      </p>
      <ul className="list">
        <li className="list__item list__item--star">
          Scientific calculator for use within digital assessments.
        </li>
        <li className="list__item list__item--star">
          Producing the &quot;Spreadsheet&quot;, &quot;Slides&quot;, and
          &quot;Word Processor&quot; question types, where attempt data can be
          stored and retrieved from Moodle/LMS.
        </li>
        <li className="list__item list__item--star">
          Developing an assessment authoring platform with online and offline
          delivery, reporting and attempt management, and import/export/backup
          facilities.
        </li>
        <li className="list__item list__item--star">
          Basic CMS-powered mobile apps via react-native, including deployments
          to Google and Apple app stores.
        </li>
        <li className="list__item list__item--star">
          React/NextJS/React-Native integrations into Drupal for clients such as
          Jaguar Land Rover
        </li>
      </ul>
      <p>
        For more info on Tim, you can find me and more info on my{' '}
        <a className="link" href="https://www.linkedin.com/in/timbryandev/">
          LinkedIn
        </a>{' '}
        profile.
      </p>
    </Content>
  </Main>
);

export default About;
