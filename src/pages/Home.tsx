const pageContainerStyle = {
  backgroundColor: "#232d25",
  color: "#fefaf4",
  display: "flex",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
}

const textContainerStyle = {
  maxWidth: "550px", fontSize: "20px", padding: "32px 16px",
}

const textEmphasisStyle = {
  fontStyle: "italic",
  fontWeight: "bold",
}

const linksContainerStyle = {
  display: "flex",
  gap: "24px",
  fontSize: "18px",
}

function Home() {
  window.innerWidth < 768 && (textContainerStyle.fontSize = "16px") && (linksContainerStyle.fontSize = "12px") && (linksContainerStyle.gap = "12px")

  return (
    <div style={pageContainerStyle}>
      <div style={textContainerStyle}>
        <p>Bonjour-Hi! I'm Ryan, a software developer interested in all matters infrastructure.</p>
        <br />
        <p>I just finished an internship at <a href="https://rbc.com/" target="_blank">RBC</a> in the Online Banking and Payments team, developing the services so that 20+ million people and businesses can bank with confidence.</p>
        <br />
        <p>Other previous internships at <a href="https://www.decipad.com/" target="_blank">Decipad</a> (pipelines and interpreters) and Digitera Interactive (native Android).</p>
        <br />
        <p>Currently studying Computer Science at Carleton University in Ottawa, Canada. <span style={textEmphasisStyle}>Open for internships starting September 2024.</span></p>
        <br />
        <div style={linksContainerStyle}>
          <a href="https://www.linkedin.com/in/ryanckc/" target="_blank">LinkedIn</a> ✦
          <a href="https://github.com/ryangchung" target="_blank">GitHub</a> ✦
          <a href="https://ryanc.read.cv" target="_blank">CV</a> ✦
          <a href="mailto://ryan.chung.cs@gmail.com" target="_blank">Email</a>
        </div>
      </div>
    </div >
  )
}

export default Home
