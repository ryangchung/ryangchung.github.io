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
        <p>Bonjour-Hi! I'm Ryan, a software developer interested in all matters infrastructure and communities, ammassing over 2.5 years of internship and contract experience.</p>
        <br />
        <p>Returning to <a href="https://rbc.com/" target="_blank">RBC</a> for the Winter 2025 term in the International Money Transfers team, so that 20+ million people and businesses can bank with confidence.</p>
        <br />
        <p>I've also been fortunate to work with unique teams at <a href="https://rbc.com/" target="_blank">RBC</a> (online banking and payments), <a href="https://www.decipad.com/" target="_blank">Decipad</a> (pipelines and interpreters) and Digitera Interactive (android).</p>
        <br />
        <p>Currently studying Computer Science at Carleton University in Ottawa and serving as an executive in the 3,000-member <a href="https://ccss.carleton.ca/">Carleton Computer Science Society</a>, where I manage funding and open-source initiatives.</p>
        <br />
        <p style={textEmphasisStyle}>Open for internships starting May 2024.</p>
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
