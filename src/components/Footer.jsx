function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <p>&copy; {date.getFullYear()} Ernie & Berenice. All rights reserved.</p>
    </footer>
  )
}

export default Footer