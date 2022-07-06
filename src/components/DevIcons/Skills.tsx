import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaGitSquare,
  FaGithubSquare,
  FaGitlab,
  FaQuestion,
  FaReact,
  FaDocker,
  FaPython,
} from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiCypress,
  SiJest,
  SiTypescript,
  SiRedux,
  SiDebian,
  SiDeno,
  SiAdobe,
  SiGnubash,
  SiPhp,
  SiUbuntu,
} from 'react-icons/si';
import { TbBrandNextjs, TbCSharp } from 'react-icons/tb';

import { IDevIconList } from './types';

export const SKILLS_PROFICIENT = [
  ['HTML5', FaHtml5],
  ['CSS3', FaCss3Alt],
  ['SCSS', FaSass, 'https://sass-lang.com/'],
  ['Javascript', SiJavascript, 'https://www.javascript.com/'],
  ['React.js', SiReact, 'https://reactjs.org/'],
  ['NodeJS', FaNodeJs, 'https://nodejs.org'],
  ['GIT', FaGitSquare, 'https://git-scm.com/'],
  ['GitHub', FaGithubSquare, 'https://github.com/timbryandev'],
  ['GitLab', FaGitlab, 'https://gitlab.com'],
] as IDevIconList;

export const SKILLS_COMFORTABLE = [
  ['NextJS', TbBrandNextjs, 'https://nextjs.org/'],
  ['Typescript', SiTypescript, 'https://www.typescriptlang.org/'],
  ['Cypress', SiCypress, 'https://www.cypress.io/'],
  ['Jest', SiJest, 'https://jestjs.io/'],
  ['Redux', SiRedux, 'https://redux.js.org/'],
  ['React Native', FaReact, 'https://reactnative.dev/'],
  ['DenoJS', SiDeno, 'https://deno.land/'],
  ['Docker', FaDocker, 'https://www.docker.com/'],
  ['Debian', SiDebian, 'https://www.debian.org/'],
  ['Ubuntu', SiUbuntu, 'https://ubuntu.com/'],
] as IDevIconList;

export const SKILLS_WORKING_KNOWLEDGE = [
  ['SCORM', FaQuestion, 'https://scorm.com/'],
  ['Moodle LMS', FaHtml5, 'https://moodle.org/'],
  ['XML/XSL/XSLT', FaQuestion, 'https://en.wikipedia.org/wiki/XML'],
  ['PHP', SiPhp, 'https://www.php.net/'],
  ['Python', FaPython, 'https://www.python.org/'],
  ['C#', TbCSharp, 'https://www.w3schools.com/cs/index.php'],
  ['VBScript', FaQuestion, 'https://en.wikipedia.org/wiki/VBScript'],
  ['Bash/Batch', SiGnubash, 'https://www.gnu.org/software/bash/'],
  ['Adobe CC', SiAdobe, 'https://www.adobe.com/uk/creativecloud.html'],
] as IDevIconList;

export const SKILLS = {
  proficient: SKILLS_PROFICIENT,
  comfortable: SKILLS_COMFORTABLE,
  'working-knowledge': SKILLS_WORKING_KNOWLEDGE,
};
