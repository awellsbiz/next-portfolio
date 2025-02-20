import Image from 'next/image';
import styles from '../styles/Contact.module.css';
import {
  AiOutlineFileText,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
export default function Contact() {
  return (
    <div id="contact" class="outline outline-pink-400 flex justify-center">
      <div>
        <div class="flex space-x-5 p-4">
          <div class="flex flex-col items-center rounded-md bg-slate-300 p-2 w-16 h-12">
            <a href="https://www.linkedin.com/in/awells91/">
              <AiOutlineInstagram size={30} />
            </a>
          </div>
          <div class="flex flex-col items-center rounded-md bg-slate-300 p-2 w-16 h-12">
            <a href="https://www.linkedin.com/in/awells91/">
              <AiOutlineLinkedin size={30} />
            </a>
          </div>
          <div class="flex flex-col items-center rounded-md bg-slate-300 p-2 w-16 h-12">
            <a href="https://twitter.com/_a_wells">
              <AiOutlineTwitter size={30} />
            </a>
          </div>
          <div class="flex flex-col items-center rounded-md bg-slate-300 p-2 w-16 h-12">
            <a href="https://github.com/awellsbiz">
              <AiOutlineGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
