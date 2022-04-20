import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "10vh",
        width: "100%",
    }
    return (
        <div className='bg-dark text-dark py-3' style={footerStyle}>
            <footer className="center">
                <a
                    className="flex flex-col"
                    href="https://github.com/b2jena"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        Copyright &copy; 2022 Bikash Jena
                    </button>
                </a>
            </footer>
        </div>
    )
}