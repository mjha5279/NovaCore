import React from 'react'

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <> 
      <div className="wave-container wave">
        <p>
          © {year}, Developed & Designed with ❤️ by{" "}
          <a 
            className="footer_author" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://github.com/mjha5279"
          >
            Mayank Jha
          </a>
        </p>
      </div>
    </>
  )
}

export default Footer
