import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

function Footer() {
  return (
    <footer>
      <div className="p-5 container-fluid text-center">
        <h1 className="text-white">Stay in the know</h1>
        <p className="mt-4 text-light">Follow us on social media</p>

        {/* Social Media Links */}
        <div className="my-4 container text-white">
          <a
            href="https://twitter.com/"
            target="blank"
            className="link-light me-3"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://youtube.com/"
            target="blank"
            className="link-light me-3"
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://linkedin.com/in/mvlprem/"
            target="blank"
            className="link-light me-3"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Mvlprem"
            target="blank"
            className="link-light me-3"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://facebook.com/"
            target="blank"
            className="link-light me-0"
          >
            <FacebookIcon />
          </a>
        </div>

        {/* Copyright */}
        <small className="text-secondary">© 2023, Prem.Munagapati</small>
      </div>
    </footer>
  )
}

export default Footer
