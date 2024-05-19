const pageContainerStyle = {
  backgroundColor: "#232d25",
  color: "#fefaf4",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const textContainerStyle = {
  maxWidth: "550px", fontSize: "20px", margin: "32px",
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
  return (
    <div style={pageContainerStyle}>
      <div style={textContainerStyle}>
        <p>Hello (bonjour)! I'm Ryan, a software developer interested in all matters infrastructure.</p>
        <br />
        <p>I'm currently interning at <a href="https://rbc.com/" target="_blank">RBC</a> in the Online Banking and Payments team, developing the services so that 20+ million people and businesses can bank with confidence.</p>
        <br />
        <p>Previous internships at Decipad (pipelines and interpreters) and Digitera Interactive (native Android).</p>
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
